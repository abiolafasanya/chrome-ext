document
  .querySelector('#recordButton')
  .addEventListener('click', async function () {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        let isRecording = null;
        let isStopped = null;

        const timer = document.createElement('div');
        timer.id = 'timer';
        timer.className = `flex items-center text-md justify-center p-2 cursor-pointer w-28 text-white px-5`;
        timer.innerHTML = `<p class="flex gap-2 items-center"><span>00:00:00</span>  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="10" height="10" rx="5" fill="#C00404"/>
        </svg> <span class="border-l border-white">&nbsp;</span>
        </p>`;

        const recordButton = document.createElement('button');
        recordButton.id = 'record';
        recordButton.className = `flex items-center justify-center rounded-full p-2 h-10 w-10 cursor-pointer bg-white`;
        const recordImg = document.createElement('img');
        recordImg.src =
          'https://res.cloudinary.com/abiolafasanya/image/upload/v1696059301/pause_kn1q0u.svg';
        recordImg.alt = 'pause';
        recordImg.className = 'w-[16px] h-[16px]';
        recordButton.appendChild(recordImg);

        const stopButton = document.createElement('button');
        stopButton.id = 'stop';
        stopButton.className = `flex items-center justify-center rounded-full p-2 h-10 w-10 cursor-pointer ${
          isRecording ? 'bg-[#141414]' : 'bg-white'
        }`;
        const stopImg = document.createElement('img');
        stopImg.src =
          'https://res.cloudinary.com/abiolafasanya/image/upload/v1696059300/stop_eiqvni.svg';
        stopImg.alt = '';
        stopImg.className = 'w-[20px] h-[20px]';
        stopButton.appendChild(stopImg);

        const videoButton = document.createElement('button');
        videoButton.id = 'video';
        videoButton.className =
          'flex items-center justify-center rounded-full p-2 h-10 w-10 cursor-pointer bg-white';
        const videoImg = document.createElement('img');
        videoImg.src =
          'https://res.cloudinary.com/abiolafasanya/image/upload/v1696059299/video_bgajdt.svg';
        videoImg.alt = '';
        videoImg.className = 'w-[18px] h-[18px]';
        videoButton.appendChild(videoImg);

        const audioButton = document.createElement('button');
        audioButton.id = 'audio';
        audioButton.className =
          'flex items-center justify-center rounded-full p-2 h-10 w-10 cursor-pointer bg-white';
        const audioImg = document.createElement('img');
        audioImg.src =
          'https://res.cloudinary.com/abiolafasanya/image/upload/v1696059302/audio_fmh6js.svg';
        audioImg.alt = '';
        audioImg.className = 'w-[18px] h-[18px]';
        audioButton.appendChild(audioImg);

        const deleteButton = document.createElement('button');
        deleteButton.id = 'delete';
        deleteButton.className =
          'flex items-center justify-center rounded-full p-2 h-10 w-10 cursor-pointer bg-white/30';
        const deleteImg = document.createElement('img');
        deleteImg.src =
          'https://res.cloudinary.com/abiolafasanya/image/upload/v1696059301/delete_nnglbr.svg';
        deleteImg.alt = '';
        deleteImg.className = 'w-[18px] h-[18px]';
        deleteButton.appendChild(deleteImg);

        // Create a container div for the buttons
        const controlButtonsContainer = document.createElement('div');
        controlButtonsContainer.className =
          ' flex gap-4 py-4 px-5 justify-center items-center bottom-10  rounded-full bg-[#141414] mx-20 p-3';

        // Append the buttons to the container
        controlButtonsContainer.appendChild(timer);
        controlButtonsContainer.appendChild(recordButton);
        controlButtonsContainer.appendChild(stopButton);
        controlButtonsContainer.appendChild(videoButton);
        controlButtonsContainer.appendChild(audioButton);
        controlButtonsContainer.appendChild(deleteButton);

        controlButtonsContainer.classList.add('draggable');
        controlButtonsContainer.draggable = true;

        document.addEventListener('mouseup', () => {
          isDragging = false;
          controlButtonsContainer.style.cursor = 'grab';
        });

        const body = document.body.appendChild(controlButtonsContainer);

        const constraints = {
          audio: true,
          video: true,
        };
        const newPoint = 'https://druth-video-api.onrender.com/upload_video'
        const apiEndpoint =  'https://tabitha-njoki.onrender.com/upload'; //'https://tabitha-njoki.onrender.com/upload';

        body.style.margin = '5rem';
        body.style.position = 'fixed';
        body.style.zIndex = 100;
        body.style.top = '450px';
        body.style.height = '64px';

        let recorder;
        let recordedChunks = [];
        let stream = null;
        console.log({ isRecording, isStopped }, 'checking ');

        function startRecording() {
          isRecording = true;
          isStopped = false;
          console.log({ isRecording, isStopped }, 'checking ');
          if (recorder && recorder.state === 'recording') {
            recorder.pause();
            console.log('recording paused');
          } else {
            stream = navigator.mediaDevices.getDisplayMedia(constraints);
            console.log('recording started');

            stream
              .then((mediaStream) => {
                recorder = new MediaRecorder(mediaStream);

                recorder.ondataavailable = (event) => {
                  if (event.data.size > 0) {
                    recordedChunks.push(event.data);
                  }
                };

                recorder.start();
              })
              .catch((error) => {
                console.error('Error accessing media devices:', error);
              });
          }
        }

        async function fetchVideo(filename) {
          const res = await fetch(`https://druth-video-api.onrender.com/get_video/${filename}`)
          // const data = res.json();
          return res.json()
        }
        async function stopRecording() {
          isStopped = true;
          isRecording = false;
          console.log({ isRecording, isStopped }, 'checking ');
          alert('capturing has ended');
          if (recorder && recorder.state !== 'inactive') {
            recorder.stop();
            recorder.onstop = () => {
              const blob = new Blob(recordedChunks, { type: recordedChunks[0].type || 'video/webm' });
              console.log()
              recordedChunks = [];

              if (stream) {
                stream.then((stream) => {
                  const tracks = stream.getTracks();
                  tracks.forEach((track) => track.stop());
                });
                stream = null;
              }

              console.log(blob, 'blob  here');

              const formData = new FormData();
              formData.append(
                'video',
                blob,
                `untitled_video_${new Date().getTime()}.webm`
              );

              fetch(apiEndpoint, {
                method: 'POST',
                body: formData,
              })
                .then((response) => {
                  if (response.ok) {
                    console.log(
                      'Screen recording sent to the API successfully.'
                    );
                    const res =  response.json()
                    return res
                  } else {
                    console.error('Error sending screen recording to the API.');
                  }
                }).then(async (data) => {
                  console.log(data)
                  // const result = await fetchVideo(stream.filename)
                  // console.log("recieved", result)
                  // window.location.href=`http://localhost:3000?filename=${filename}`
                //  return window.location.href = "http://localhost:3000";
                if(data){
                  window.open(`http://localhost:3000?recording=${data.url}&transcript=${data.transcribe_url}&filename=${data.video_name}`); 
                } else throw new Error("An error occured")

                })
                .catch((error) => {
                  console.error(
                    'Error sending screen recording to the API:',
                    error
                  );
                });
            };
          }
        }

        recordButton.addEventListener('click', (e) => {
          // e.currentTarget.disabled = isRecording; // Disable the button
          if (isRecording) {
            recordButton.className = `flex items-center justify-center rounded-full p-2 h-10 w-10 cursor-pointer bg-[#141414]`;
            recordButton.classList.add('disabled:bg-[#141414]');
          } else {
            recordButton.className = `flex items-center justify-center rounded-full p-2 h-10 w-10 cursor-pointer bg-white`;
          }
          startRecording();
        });

        stopButton.addEventListener('click', (e) => {
          e.currentTarget.disabled = isStopped;
          if (isStopped) {
            stopButton.className = `flex items-center justify-center rounded-full p-2 h-10 w-10 cursor-pointer bg-[#141414]`;
          } else {
            stopButton.className = `flex items-center justify-center rounded-full p-2 h-10 w-10 cursor-pointer bg-white`;
          }
          setTimeout(() => {
            stopRecording();
          }, 3000); // Stop recording after 3 seconds (adjust as needed)
        });
      },
    });
  });
