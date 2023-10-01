import Image from 'next/image';
import Link from 'next/link';
import Header from '../_components/header';
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import EditSection from '../_components/edit-section';
// import VideoSection from '../_components/video-section';
// import { Button } from '@/components/ui/button';
import Footer from '../_components/footer';

export default function Home() {
  return (
    <main className='w-full h-full min-h-screen'>
      <Header className='shadow-sm'/>
      <section className='w-full container mx-auto h-full mt-10'>
        <div className="flex w-full gap-10 justify-between">
            <div className="w-full">
                <Image src="/features/recording.svg" alt="" width={48} height={48} />
            </div>
            <div className="w-full"></div>
        </div>
      </section>
      <Footer />  
    </main>
  );
}
