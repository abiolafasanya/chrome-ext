import Image from 'next/image';
import { menus } from '../(home)/data/menu';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full h-full lg:h-[350px] p-5 bg-main-500 text-white'>
      <div className='container w-full mx-auto flex  gap-5 flex-col lg:p-10 md:flex-row lg:items-center lg:justify-between h-full'>
        <article className='flex items-center w-full gap-2'>
          <Image
            src={'/logo2.svg'}
            alt='logo'
            width={40}
            height={40}
            className='w-auato h-auto'
          />
          <span className='text-2xl '>HelpMeOut</span>
        </article>
        <article className='flex md:flex-row flex-wrap gap-10 lg:items-center lg:justify-between w-full lg:mx-10'>
          {menus.map((menu, i) => (
            <div key={i}>
              <h4 className='text-base mb-4'>{menu.name}</h4>
              <ul className='flex flex-col gap-4'>
                {menu.list.map((item) => (
                  <Link href={item.url} key={item.id} className='text-sm font-light'>{item.name}</Link>
                ))}
              </ul>
            </div>
          ))}
        </article>
      </div>
    </footer>
  );
};


export default Footer;
