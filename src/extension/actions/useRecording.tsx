import RecordRTC, { RecordRTCPromisesHandler, invokeSaveAsDialog } from 'recordrtc';

async function startRecording() {
  let mediaDevices = navigator.mediaDevices;
  const stream: MediaStream = await mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });
  const recorder = new RecordRTCPromisesHandler(stream, {
    type: 'video',
  });
  await recorder.startRecording();
}

function stopRecording() {
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    }).then(async function(stream) {
        let recorder = new RecordRTC(stream, {
            type: 'video'
        });
        recorder.startRecording();
    
        const sleep = (time: number) => new Promise(r => setTimeout(r, time));
        await sleep(3000);
    
        recorder.stopRecording(function() {
            let blob = recorder.getBlob();
            invokeSaveAsDialog(blob);
        });
    });
}

export {
    startRecording, stopRecording
}