import Header from '../_components/header';
import Footer from '../_components/footer';
import Hero from './_components/hero';
import { features } from './data/content';
import Link from 'next/link';
import { feature_image } from './data/images';
import Image from 'next/image';
import FeaturesArea from './_components/features';
import HowITWorks from './_components/how-it-works';

export default function Home() {
  return (
    <main className='w-full h-full min-h-screen'>
      <Header className='shadow-sm' />
      <Hero />
     <FeaturesArea />
     <HowITWorks />
      <Footer />
    </main>
  );
}
