chrome.runtime.onMessage.addListener(async function (
  message,
  sender,
  response
) {
  console.log(message, sender, response);

  if (message.command === 'show') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab) {
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          function: (message) => {
            // Here, you can handle the message in the content script
            console.log(message);
            var init = () => {
              const recordButton = document.createElement('div');
              recordButton.id = 'record';
              recordButton.className =
                'flex items-center justify-center rounded-full p-2 h-10 w-10 cursor-pointer bg-white';
              const recordImg = document.createElement('img');
              recordImg.src =
                'https://res.cloudinary.com/abiolafasanya/image/upload/v1696059301/pause_kn1q0u.svg';
              recordImg.alt = 'pause';
              recordImg.className = 'w-[16px] h-[16px]';
              recordButton.appendChild(recordImg);

              const stopButton = document.createElement('div');
              stopButton.id = 'stop';
              stopButton.className =
                'flex items-center justify-center rounded-full p-2 h-10 w-10 cursor-pointer bg-white';
              const stopImg = document.createElement('img');
              stopImg.src =
                'https://res.cloudinary.com/abiolafasanya/image/upload/v1696059300/stop_eiqvni.svg';
              stopImg.alt = '';
              stopImg.className = 'w-[20px] h-[20px]';
              stopButton.appendChild(stopImg);

              const videoButton = document.createElement('div');
              videoButton.id = 'video';
              videoButton.className =
                'flex items-center justify-center rounded-full p-2 h-10 w-10 cursor-pointer bg-white';
              const videoImg = document.createElement('img');
              videoImg.src =
                'https://res.cloudinary.com/abiolafasanya/image/upload/v1696059299/video_bgajdt.svg';
              videoImg.alt = '';
              videoImg.className = 'w-[18px] h-[18px]';
              videoButton.appendChild(videoImg);

              const audioButton = document.createElement('div');
              audioButton.id = 'audio';
              audioButton.className =
                'flex items-center justify-center rounded-full p-2 h-10 w-10 cursor-pointer bg-white';
              const audioImg = document.createElement('img');
              audioImg.src =
                'https://res.cloudinary.com/abiolafasanya/image/upload/v1696059302/audio_fmh6js.svg';
              audioImg.alt = '';
              audioImg.className = 'w-[18px] h-[18px]';
              audioButton.appendChild(audioImg);

              const deleteButton = document.createElement('div');
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
              const body = document.body.appendChild(controlButtonsContainer);
              const constraints = {
                audio: false,
                video: true,
              };

              body.style.margin = '5rem';
              body.style.position = 'fixed';
              body.style.zIndex = 100;
              body.style.top = '450px';
              body.style.height = '64px';

              recordButton.addEventListener('click', () => {
                // Define your API endpoint where you want to send the screen capture
                const apiEndpoint = 'https://tabitha-njoki.onrender.com/upload';
                console.log(apiEndpoint);
                chrome.desktopCapture.chooseDesktopMedia(
                  ['screen', 'window'],
                  async function (id) {
                    console.log(id);

                    // Capture the screen as a media stream
                    let mediaStream =
                      await navigator.mediaDevices.getDisplayMedia({
                        video: { mediaSource: id },
                      });

                    // Create a Blob from the stream
                    const recorder = new MediaRecorder(mediaStream);
                    let recordedChunks = [];

                    recorder.ondataavailable = (event) => {
                      if (event.data.size > 0) {
                        recordedChunks.push(event.data);
                      }
                    };

                    recorder.onstop = () => {
                      // Convert the recorded chunks into a Blob
                      const blob = new Blob(recordedChunks, {
                        type: 'video/webm',
                      });

                      // Send the Blob to your API using the fetch API
                      fetch(apiEndpoint, {
                        method: 'POST',
                        body: { upload: blob },
                      })
                        .then((response) => {
                          if (response.ok) {
                            console.log(
                              'Screen recording sent to the API successfully.'
                            );
                          } else {
                            console.error(
                              'Error sending screen recording to the API.'
                            );
                          }
                        })
                        .catch((error) => {
                          console.error(
                            'Error sending screen recording to the API:',
                            error
                          );
                        });
                    };

                    // Start recording
                    recorder.start();

                    // Stop recording after some time (you can customize this duration)
                    setTimeout(() => {
                      recorder.stop();
                      mediaStream.getTracks().forEach((track) => track.stop());
                    }, 3000); // Stop recording after 10 seconds (adjust as needed)
                  }
                );
              });
            };
          },
          args: [request.message], // Pass the message to the content script
        });
      }
    });
    // await chrome.scripting.executeScript({
    //   files: ['contentScript.js'],
    //   target: { tabId: message.tabId },

    // });
    response('recieved message');
  }
});
