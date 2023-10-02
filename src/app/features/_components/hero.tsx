import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { images } from '../data/images';
import Image from 'next/image';


const Hero = () => {
    return ( 
        <section className='w-full container mx-auto h-full py-10 '>
        <div className='flex w-full gap-10 justify-between items-center'>
          <div className='w-full'>
            <div className='max-w-[548px] py-5 flex flex-col gap-4'>
              <h2 className='text-6xl font-semibold'>
                Show Them Don’t Just Tell
              </h2>
              <p className='text base'>
                Help your friends and loved ones by creating and sending videos
                on how to get things done on a website.
              </p>
              <Button className='bg-main-500 hover:bg-main-600 w-fit py-3 mt-5 px-7 flex gap-4'>
                Install HelpMeOut <ArrowRight />
              </Button>
            </div>
          </div>
          <div className='w-full flex gap-5 my-10 relative'>
            <div className='flex flex-col justify-between gap-5 max-h-[520px] h-full'>
              <Image src={images[0]} alt='' width={300} height={300} className='w-auto h-[200px]  rounded-md' />
              <Image src={images[1]} alt='' width={300} height={300} className='w-auto h-[200px] rounded-md' />
              <Image src={"/features/img2.svg"} alt='background ' width={300} height={300} className='absolute -z-10  -left-10 -bottom-10 rounded-md' />
            </div>
            <div className='max-h-[448px] h-full  relative'>
            <Image src={"/features/img1.svg"} alt='background ' width={300} height={300} className='absolute w-full -z-10  -right-14 -top-10 rounded-md' />
              <Image src={images[2]} alt='' width={300} height={300} className='w-auto h-[420px] rounded-md z-50' />
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default Hero;