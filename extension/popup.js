document
  .querySelector('#recordButton')
  .addEventListener('click', async function () {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const recordButton = document.createElement('button');
        recordButton.id = 'record';
        recordButton.className =
          'flex items-center justify-center rounded-full p-2 h-10 w-10 cursor-pointer bg-white';
        const recordImg = document.createElement('img');
        recordImg.src =
          'https://res.cloudinary.com/abiolafasanya/image/upload/v1696059301/pause_kn1q0u.svg';
        recordImg.alt = 'pause';
        recordImg.className = 'w-[16px] h-[16px]';
        recordButton.appendChild(recordImg);

        const stopButton = document.createElement('button');
        stopButton.id = 'stop';
        stopButton.className =
          'flex items-center justify-center rounded-full p-2 h-10 w-10 cursor-pointer bg-white';
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
          'w-[400px] flex gap-4 py-4 px-5 justify-center items-center bottom-10  rounded-full bg-[#141414] mx-20 p-3';

        // Append the buttons to the container
        controlButtonsContainer.appendChild(recordButton);
        controlButtonsContainer.appendChild(stopButton);
        controlButtonsContainer.appendChild(videoButton);
        controlButtonsContainer.appendChild(audioButton);
        controlButtonsContainer.appendChild(deleteButton);

        // Append the container to the desired location in the document
        let offsetX,
          offsetY,
          isDragging = false;
        controlButtonsContainer.classList.add('draggable');
        controlButtonsContainer.draggable = true;

        document.addEventListener('mouseup', () => {
          isDragging = false;
          controlButtonsContainer.style.cursor = 'grab';
        });

        const body = document.body.appendChild(controlButtonsContainer);

        const constraints = {
          audio: false,
          video: {
            mediaSource: 'screen', // Capture the entire screen
          },
        };
        const apiEndpoint = 'https://tabitha-njoki.onrender.com/upload';

        body.style.margin = '5rem';
        body.style.position = 'fixed';
        body.style.zIndex = 100;
        body.style.top = '450px';
        body.style.height = '64px';

        let recorder;
        let recordedChunks = [];

        function startRecording() {
          navigator.mediaDevices
            .getDisplayMedia(constraints)
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

        function stopRecording() {
          alert("stoped")
          if (recorder && recorder.state !== 'inactive') {
            recorder.stop();
            recorder.onstop = () => {
              const blob = new Blob(recordedChunks, { type: 'video/webm' });
              recordedChunks = [];
              console.log(blob, "blob  here")

              const formData = new FormData();
              formData.append('upload', blob);
              formData.append("filename ", `untitled_video_${new Date().getTime()}.webm`, blob);

              fetch(apiEndpoint, {
                method: 'POST',
                body: formData,
              })
                .then((response) => {
                  if (response.ok) {
                    console.log(
                      'Screen recording sent to the API successfully.'
                    );
                  } else {
                    console.error('Error sending screen recording to the API.');
                  }
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
          e.currentTarget.disabled = true; // Disable the button
          startRecording();
        });

        stopButton.addEventListener('click', (e) => {
          e.currentTarget.disabled = true; // Disable the button
          setTimeout(() => {
            stopRecording();
          }, 3000); // Stop recording after 3 seconds (adjust as needed)
        });
      },
    });
  });
