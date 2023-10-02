import Header from '../_components/header';
import Footer from '../_components/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import CredentialForm from './_components/credentials';
import Link from 'next/link';

export default function GetStarted() {
  return (
    <main className='w-full h-full min-h-screen'>
      <div className='mt-12 container mx-auto'>
        <Link href='/' className='flex gap-2 items-center'>
          <Image src='/logo.png' alt='logo' width={48} height={48} />
          <h3 className='text-2xl text-main-500 font-medium'>HelpMeOut</h3>
        </Link>
      </div>
      <div className='container p-5 flex flex-col items-center justify-center w-full h-full'>
        <div className='max-w-sm flex items-center flex-col'>
          <div className='flex items-center flex-col gap-2 text-center mb-5'>
            <h2 className='text-2xl font-semibold'>Log in or Sign up</h2>
            <p className='text text-sm gray-600 font-light'>
              Join millions of others in sharing successful moves on HelpMeOut.
            </p>
          </div>

          <div className='w-full my-5 flex flex-col gap-4'>
            <Button variant={'outline'} className='flex gap-4 px-7 py-3 w-full'>
              <Image src='/google.svg' alt='' width={20} height={20} />
              <span>Continue with Google</span>
            </Button>
            <Button variant={'outline'} className='flex gap-4 px-7 py-3 w-full'>
              <Image src='/facebook.svg' alt='' width={20} height={20} />
              <span>Continue with Facebook</span>
            </Button>
          </div>

          <div className='w-full flex items-center justify-center'>
            <hr className='w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
            <span className='absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900'>
              or
            </span>
          </div>

          <CredentialForm />
          <div className="mb-10" />
        </div>
      </div>
      <Footer />
    </main>
  );
}
