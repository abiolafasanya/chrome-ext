'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Fragment, useState } from 'react';
import { Button } from '@/components/ui/button';

const socials = [
  { id: 1, name: 'Facebook', link: '', icon: "/socials/facebook.svg" },
  { id: 2, name: 'WhatsApp', link: '', icon: "/socials/whatsapp.svg" },
  { id: 3, name: 'Telegram', link: '', icon: "/socials/telegram.svg" },
];

const EditSection = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <article className='w-full lg:w-1/2'>
      <h2 className='text-[45px] font-semibold'>Your video is ready!</h2>
      <div className='py-10'>
        <Label className='text-lg text-gray-600'>Name</Label>
        <div className='flex gap-5'>
          <Input
            disabled={disabled}
            defaultValue={`Untitled_Video_${new Date().getTime()}`}
            className='border-none disabled:text-main-500 p-0 font-medium text-main-500 text-2xl max-w-sm'
          />
          <Image
            src='/edit.svg'
            alt='edit icon'
            width={32}
            height={32}
            onClick={() => setDisabled((disabled) => !disabled)}
          />
        </div>
      </div>
      <div className='bg-main-100 py-3 px-5 rounded-lg flex justify-between mb-10'>
        <input
          defaultValue={'Enter email of receiver'}
          className='outline-none text-gray-600 bg-transparent border-none'
        />
        <Button className='bg-main-300 hover:bg-main-400 px-5text-white'>Send</Button>
      </div>

      <h3 className='text-2xl font-semibold'>Video Url</h3>
      <div className='border-2 py-3 px-5 rounded-lg flex justify-between mb-10'>
        <input
          defaultValue={'https://www.helpmeout/Untitled_Video_20232509'}
          className='outline-none text-gray-600 bg-transparent border-none'
        />
        <Button
          variant={'outline'}
          className='text-main-500 border-2 bg-none px-5 gap-2'
        >
          <Image src='/copy.svg' alt='copy icon' width={20} height={20} />
          <span>Copy</span>
        </Button>
      </div>

      <h3 className='text-lg font-semibold'>Share your video</h3>
      <div className='py-3 rounded-lg flex gap-5 mb-10'>
        {socials.map((social) => (
          <Fragment key={social.id}>
            <Link href={social.link} className='flex gap-2 rounded-lg border-2 py-3 px-5'>
              <span>{social.name}</span>
              <Image src={social.icon} alt={social.name} width={20} height={20} />
            </Link>
          </Fragment>
        ))}
      </div>
    </article>
  );
};

export default EditSection;
