import { useState } from 'react';
// import RecordRTC, {
//   RecordRTCPromisesHandler,
//   Recorder,
//   invokeSaveAsDialog,
// } from 'recordrtc';

export type RecordType = 'video' | 'screen';
export type StreamType = 'screen' | 'window';

const useRecording = () => {
  const [isRecording, setIsRecording] = useState(false);

  const [enableAudio, setEnableAudio] = useState(false);
  const [enableVideo, setEnableVideo] = useState(false);
  const [error, setError] = useState('');

  function toggleAudioSwitch() {
    setEnableAudio((audio) => !audio);
  }

  function toggleVideoSwitch() {
    setEnableVideo((video) => !video);
  }

  const startRecord = async () => {
    setError('');
    setIsRecording(false);
    // startRecording();

    await chrome.tabs
      .query({
        active: true,
        currentWindow: true,
      })
      .then(async (tab) => {
        const [currentTab] = tab; 
        if (currentTab.id) {
          console.log(currentTab);
          await chrome.runtime.sendMessage({command: "trigger", tab: currentTab})
        }
      });
  };

  return {
    startRecord,
    enableAudio,
    enableVideo,
    toggleAudioSwitch,
    toggleVideoSwitch,
    error,
    isRecording,
  };
};

export default useRecording;
