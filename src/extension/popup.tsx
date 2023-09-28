import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Fragment } from 'react';
import RecorderBar from './recording-bar';

const Popup = () => {
  return (
    <Fragment>
      <div className='w-[400px] p-5 flex items-center justify-center'>
        <Card className='w-[320px] shadow-sm'>
          <CardHeader>
            <div className='flex justify-between'>
              <div className='flex gap-2'>
                <img src='/logo.png' alt='logo' className='w-[28px] h-[28px]' />
                <h3 className='text-lg text-main-500'>HelpMeOut</h3>
              </div>
              <div className='flex gap-2'>
                <img src='/setting.svg' alt='' />
                <img src='/close.svg' alt='' />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className='text-sm text-main-500 text-left font-light'>
              This extension helps you record and share help videos with ease.
            </p>

            <CardDescription className='flex itesm-center justify-center gap-14 my-6'>
              <div className='flex flex-col items-center spac-y-2'>
                <img
                  src='/desktop.svg'
                  alt='desktop view'
                  className='w-[32px] h-[32px]'
                />
                <span>Desktop</span>
              </div>
              <div className='flex flex-col items-center spac-y-2'>
                <img src='/copy.svg' alt='' className='w-[32px] h-[32px]' />
                <span className='text-main-500'>Current Tab</span>
              </div>
            </CardDescription>

            <CardDescription className='flex flex-col gap-4 mb-5'>
              <div className='rounded-2xl border-2 border-main-500 py-3 px-5 w-full'>
                <div className='flex justify-between items-center'>
                  <div className='flex gap-2 items-center'>
                    <img
                      src='/video.svg'
                      alt='video icon'
                      className='w-[24px] h-[24px]'
                    />
                    <span className='text-main-500'>Camera</span>
                  </div>
                  <Switch className='data-[state=checked]:bg-main-500' />
                </div>
              </div>
              <div className='rounded-2xl border-2 border-main-500 py-3 px-5 w-full'>
                <div className='flex justify-between items-center'>
                  <div className='flex gap-2 items-center'>
                    <img
                      src='/audio.svg'
                      alt='audio icon'
                      className='w-[24px] h-[24px]'
                    />
                    <span className='text-main-500'>Audio</span>
                  </div>
                  <Switch className='data-[state=checked]:bg-main-500' />
                </div>
              </div>
            </CardDescription>

            <CardDescription className='w-full'>
              <Button className='flex w-full bg-main-500 h-[48px] hover:bg-main-600'>
                Start Recording
              </Button>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      <RecorderBar />
    </Fragment>
  );
};

export default Popup;
