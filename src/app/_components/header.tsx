import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const Header = ({className}: {className?: string}) => {
  const styles = 'flex flex-row justify-between container mx-auto py-5 px-7 items-center'
  return (
    <div className={cn(styles, className)}>
      <div className='flex gap-2 items-center'>
        <Image src='/logo.png' alt='logo' width={48} height={48} />
        <h3 className='text-2xl text-main-500 font-semibold'>HelpMeOut</h3>
      </div>
      <menu className='flex gap-4'>
        <Link href={'/features'} className=''>
          Features
        </Link>
        <Link href={'#how-it-works'} className=''>
          How it works
        </Link>
      </menu>
      <button className='text-main-500'>Get Started</button>
    </div>
  );
};

export default Header;
