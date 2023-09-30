import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Fragment } from 'react';
// import RecorderBar from './recording-bar';
import useRecording from './actions/useRecording';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const Popup = () => {
  const {
    startRecord,
    isRecording,
    toggleAudioSwitch,
    toggleVideoSwitch,
    error,
  } = useRecording();

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
                <img src='/icons/setting.svg' alt='' />
                <img src='/icons/close.svg' alt='' />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className='text-sm text-main-500 text-left font-light'>
              This extension helps you record and share help videos with ease.
            </p>

            <div className='flex itesm-center justify-center gap-14 my-6'>
              <div className='flex flex-col items-center spac-y-2'>
                <img
                  src='/icons/desktop.svg'
                  alt='desktop view'
                  className='w-[32px] h-[32px]'
                />
                <span>Desktop</span>
              </div>
              <div className='flex flex-col items-center spac-y-2'>
                <img src='/icons/copy.svg' alt='' className='w-[32px] h-[32px]' />
                <span className='text-main-500'>Current Tab</span>
              </div>
            </div>

            {error ? (
              <Alert variant='destructive' className='w-full mb-5'>
                <AlertCircle className='h-4 w-4' />
                <AlertTitle>An Error Occured!</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            ) : null}
            <div className='flex flex-col gap-4 mb-5'>
              <div className='rounded-2xl border-2 border-main-500 py-3 px-5 w-full'>
                <div className='flex justify-between items-center'>
                  <div className='flex gap-2 items-center'>
                    <img
                      src='/icons/video.svg'
                      alt='video icon'
                      className='w-[24px] h-[24px]'
                    />
                    <span className='text-main-500'>Camera</span>
                  </div>
                  <Switch
                    className='data-[state=checked]:bg-main-500'
                    onClick={toggleVideoSwitch}
                  />
                </div>
              </div>
              <div className='rounded-2xl border-2 border-main-500 py-3 px-5 w-full'>
                <div className='flex justify-between items-center'>
                  <div className='flex gap-2 items-center'>
                    <img
                      src='/icons/audio.svg'
                      alt='audio icon'
                      className='w-[24px] h-[24px]'
                    />
                    <span className='text-main-500'>Audio</span>
                  </div>
                  <Switch
                    className='data-[state=checked]:bg-main-500'
                    onClick={toggleAudioSwitch}
                  />
                </div>
              </div>
            </div>

            <div className='w-full'>
              <Button
                className='flex w-full bg-main-500 h-[48px] hover:bg-main-600'
                onClick={startRecord}
              >
                {isRecording ? 'Recording in Progress' : 'Start Recording'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* <RecorderBar start={isRecording} end={endRecording} /> */}
    </Fragment>
  );
};

export default Popup;
