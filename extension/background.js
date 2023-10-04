console.log("background is watching!")

 // start recording button
//  async function startRecording() {
//   try {
//     let videoInput;
//     console.log({ defaultScreen });
//     if (defaultScreen === "current_tab") {
//       // Capture current tab
//       const streamId = JSON.parse(localStorage.getItem("@hmo_tab_stream_id"));
//       videoInput = await navigator.mediaDevices.getUserMedia({
//         audio: {
//           mandatory: {
//             chromeMediaSource: "tab",
//             chromeMediaSourceId: streamId,
//           },
//         },
//         video: {
//           mandatory: {
//             chromeMediaSource: "tab",
//             chromeMediaSourceId: streamId,
//           },
//         },
//       });
//     } else {
//       // capture entire screen
//       videoInput = await navigator.mediaDevices.getDisplayMedia({
//         video: { mediaSource: "screen" },
//         audio: audioState,
//       });
//     }

//     let audioInput = await navigator.mediaDevices.getUserMedia({
//       audio: true,
//       video: false,
//     });

//     // combine both media video/audio
//     let combineMedia = new MediaStream([
//       ...videoInput.getTracks(),
//       ...audioInput.getTracks(),
//     ]);
//     console.log(mediaRecorder);
//     if (mediaRecorder === null) {
//       mediaRecorder = new MediaRecorder(combineMedia, {
//         mimeType: mime,
//       });

//       mediaRecorder.addEventListener("dataavailable", async function (e) {
//         recordedChunks.push(e.data);

//         // stream to backend
//         const chunk = [e.data];
//         await streamChunksToServer(chunk);
//       });

//       mediaRecorder.addEventListener("stop", async function () {
//         let blob = new Blob(recordedChunks, {
//           type: recordedChunks[0].type,
//         });
//         recordedBlobUrl = URL.createObjectURL(blob);
//         videoInput.getTracks()[0].stop();
//         audioInput.getTracks().forEach((track) => {
//           track.stop();
//         });

//         // update recording ui component
//         await resetUIOnRecordStop();

//         // end stream
//         if (!streamRequestEnded) {
//           await endStream(hmo_streamVideoId);
//           streamRequestEnded = true;
//           window.open(`${CLIENT_URL}/file/${hmo_streamVideoId}`);
//         }
//       });

//       mediaRecorder.start(1000);

//       stream = audioInput;
//       return true;
//     }
//   } catch (e) {
//     // window.alert(e);
//     Toast().error(e);
//     console.log(e);
//     console.log(`error starting recorder`);
//     return false;
//   }
// }