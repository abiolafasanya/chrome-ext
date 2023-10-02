'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { transcript } from '../(home)/data/transcript';
import { useSearchParams } from 'next/navigation';

const VideoSection = () => {
  const searchParams = useSearchParams().get("recording")
  const [videoSrc, setVideoSrc] = useState<string>(() => searchParams ? searchParams : "")
  useEffect(() => {
    if(searchParams) {
      setVideoSrc(searchParams)
    }
  }, [])
  const videoRef = useRef<HTMLVideoElement>(null);
  const [startTime, setStartTime] = useState(0);
  const [timerDisplay, setTimerDisplay] = useState('');

  function togglePlayPause() {
    const video = videoRef.current;

    if (video) {
      if (video.paused || video.ended) {
        // Play the video if it's paused or ended
        video.play();
      } else {
        // Pause the video if it's playing
        video.pause();
      }
    }
  }

  function updateTimer() {
    if (startTime) {
      const currentTime = Date.now() - startTime;
      const minutes = Math.floor(currentTime / 60000);
      const seconds = Math.floor((currentTime % 60000) / 1000);
      const timer = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      setTimerDisplay(timer);
      setTimeout(updateTimer, 1000);
    } else {
      setTimerDisplay('0:00');
    }
  }

  return (
    <article className='w-full lg:w-1/2'>
      <div className='border border-main-500 rounded-lg overflow-hidden'>
        <video
          className='w-full h-auto max-w-full'
          controls
          controlsList=''
          ref={videoRef}
          src={videoSrc}
        >
          <source src='/docs/videos/flowbite.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div className='flex justify-between p-5'>
          <div>3:00 - 3:30</div>
          <div className='flex gap-2'>
            <div className='flex flex-col gap-1 items-center'>
              <Image
                src='/video/play.svg'
                onClick={togglePlayPause}
                alt='play button'
                width={24}
                height={24}
              />
              <span className='text-xs'>Play</span>
            </div>
            <div className='flex flex-col gap-1 items-center'>
              <Image
                src='/video/volume.svg'
                alt='volume button'
                width={24}
                height={24}
              />
              <span className='text-xs'>Volume</span>
            </div>
            <div className='flex flex-col gap-1 items-center'>
              <Image
                src='/video/setting.svg'
                alt='setting button'
                width={24}
                height={24}
              />
              <span className='text-xs'>Setting</span>
            </div>
          </div>
        </div>
      </div>
      <div className='py-5 mt-5 space-y-4'>
        <h3 className='text-xl font-semibold'>Transcript</h3>
        <article className='max-h-[300px] h-full overflow-y-auto'>
          {transcript.map((script, i) => (
            <div key={i} className='flex gap-5 bg-white text-black p-1'>
              <span>{script.time}</span>
              <span>{script.text}</span>
            </div>
          ))}
        </article>
      </div>
    </article>
  );
};

export default VideoSection;
