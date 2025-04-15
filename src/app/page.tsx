import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { socialMedia } from './constant';
import Link from 'next/link';
import TypeAnimation from './components/TypeAnimation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Hi my name is Daxton',
};

export default function Home() {
  return (
    <div className='@container'>
      <div className='flex flex-col @md:px-12 @md:flex-row'>
        <div className='flex-8/12'>
          <h1 className='@md:text-6xl my-3 font-nexa-light'>
            Hi my name is <span className='font-nexa-bold'>Daxton</span>
          </h1>
          <TypeAnimation />
          <h1 className='text-4xl my-3'>Based in Vietnam</h1>
          <p>
            Aliquam convallis sodales suscipit. Nunc ullamcorper dui eget
            porttitor egestas. Proin in erat sit amet mauris pretium tincidunt
            vel in augue. Proin dolor tortor, venenatis nec magna vitae,
            accumsan posuere tellus. Morbi quam mauris, vulputate sit amet
            libero vel, tempor efficitur nunc. Aliquam suscipit sollicitudin
            ullamcorper. Nunc posuere elit risus, non blandit sapien lobortis
            eget.
          </p>
        </div>
        <div className='flex-4/12'>
          <Image
            src='/svg/about-left.svg'
            alt='about-left'
            width={400}
            height={2000}
          />
        </div>
      </div>
      <div className='flex flex-col @md:px-12 @md:flex-row'>
        {socialMedia.map(({ icon: Icon, name, url }) => (
          <Button
            asChild
            variant={'outline'}
            key={name}
            className='w-16 h-16 mr-4'
          >
            <Link href={url} target='_blank'>
              <Icon size={'24'} className='size-fit' />
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
