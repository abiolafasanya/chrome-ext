import Image from 'next/image';
import Link from 'next/link';
import Header from '../_components/header';
import EditSection from '../_components/edit-section';
import VideoSection from '../_components/video-section';
import { Button } from '@/components/ui/button';
import Footer from '../_components/footer';

export default function Home() {
  return (
    <main className='w-full h-full min-h-screen'>
      <Header />
      <section className='w-full container flex flex-col lg:flex-row justify-between gap-5 py-10'>
        <EditSection />
        <VideoSection />
      </section>
      <div className='w-full container flex flex-col items-center justify-center  h-[300px]'>
        <div className='max-w-2xl mx-auto flex items-center flex-col gap-5'>
          <h2 className='text-2xl text-center text-main-500 font-semibold'>
            To ensure the availability and privacy of your video, we recommend
            saving it to your account.
          </h2>
          <Button className='bg-main-500 hover:bg-main-600 px-7'>
            Save Video
          </Button>
        </div>
        <p className='my-10 space-x-2 font-medium   '>
          <span className='text-gray-600 text-xl'>Don’t have an account?</span>
          <Link href={"#"} className='text-main-500 text-xl'>Create account</Link>
        </p>
      </div>
      <Footer />  
    </main>
  );
}
