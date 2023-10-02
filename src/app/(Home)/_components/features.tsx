import { features } from '../data/content';
import Link from 'next/link';
import { feature_image } from '../data/images';
import Image from 'next/image';

const FeaturesArea = () => {
  return (
    <>
      <section className='bg-gray-50 py-10 h-12' />

      <section className='bg-white py-10' id='features'>
        <div className='container'>
          <div className='flex items-center justify-center w-full flex-col gap-2'>
            <h2 className='text-2xl font-semibold'>Features</h2>
            <p className='text-gray-600 text-light'>
              Key Highlights of Our Extension
            </p>
          </div>

          <div className='flex flex-col lg:flex-row w-full justify-between gap-14  mt-10 p-10'>
            <div className='flex w-full justify-between flex-col items-center p-5'>
              {features.map((feature, i) => (
                <div key={i} className='flex gap-2 flex-col w-full'>
                  <div className='flex  gap-4'>
                    <div className='bg-main-500 w-[48px] h-[48px] rounded-full p-2 flex items-center justify-center'>
                      <Image
                        src={feature.icons}
                        alt='images'
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className='w-full flex flex-col'>
                      <h3 className='text-xl'>{feature.name}</h3>
                      <p className='text-gray-600 text-sm'>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='w-full'>
              <Image
                src={feature_image}
                alt='Featured Images'
                width={454}
                height={454}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesArea;
