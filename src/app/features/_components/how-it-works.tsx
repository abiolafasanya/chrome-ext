import { features, howItWorks } from '../data/content';
import Link from 'next/link';
import { feature_image } from '../data/images';
import Image from 'next/image';

const HowITWorks = () => {
  return (
    <>
      <section className='bg-gray-50 py-10 h-12' />

      <section className='bg-white py-10'>
        <div className='container'>
          <div className='flex items-center justify-center w-full flex-col gap-2'>
            <h2 className='text-2xl font-semibold'>How it works </h2>
            <p className='text-gray-600 text-light'>
              Key Highlights of Our Extension
            </p>
          </div>

          <div className='w-full flex items-center flex-col lg:flex-row lg:gap-20 justify-center mt-10 p-10'>
            {howItWorks.map((desc, i) => (
              <div
                key={i}
                className='flex flex-col gap-2 items-center w-[300px]'
              >
                <h4 className='text-xl text-white w-[54px] h-[54px] flex items-center justify-center bg-main-500 rounded-full'>
                  {desc.id}
                </h4>
                <div className='flex flex-col gap-2'>
                  <h3 className='text-xl text-center font-semibold text-main-500'>
                    {desc.name}
                  </h3>
                  <p className='text-gray-600 text-sm text-center'>
                    {desc.description}
                  </p>
                  <Image
                    src={'/features/loader-img.svg'}
                    width={325}
                    height={325}
                    alt='loader'
                    className='w-auto h-auto mt-4'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowITWorks;
