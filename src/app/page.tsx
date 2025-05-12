import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { socialMedia } from './constant';
import Link from 'next/link';
import TypeAnimation from './components/TypeAnimation';
import { Metadata } from 'next';
import { headerItems } from '@/components/header/constant';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Hi my name is Daxton',
};

export default function Home() {
  return (
    <>
      <section id='home' className='h-[95vh] snap-start px-6 @md:px-12'>
        <div className='@container'>
          <div className='flex flex-col @md:flex-row'>
            <div className='flex-8/12'>
              <h1 className='text-3xl @md:text-6xl my-3 font-nexa-light'>
                Hi my name is <span className='font-nexa-bold'>Daxton</span>
              </h1>
              <TypeAnimation />
              <h1 className='text-2xl @md:text-4xl my-3'>Based in Vietnam</h1>
              <p className='text-sm @md:text-lg'>
                I&apos;m a Fullstack Developer with a strong focus on building
                modern web applications using the JavaScript ecosystem, allowing me to deliver fullstack
                solutions that are fast, scalable, and maintainable.{' '}
              </p>
              <p className='text-sm @md:text-lg'>
                With hands-on experience in both client-side and server-side
                development, I enjoy designing and building applications from
                the ground up — from crafting clean, responsive UIs to
                structuring robust backend APIs. I follow best practices in code
                structure, version control, and system design to ensure every
                project I touch is reliable, performant, and easy to extend.
              </p>
              <p className='text-sm @md:text-lg'>
                Beyond just writing code, I care deeply about the user
                experience, maintainability, and performance. I actively explore
                new tools and patterns to stay up to date with the latest
                advancements in the JavaScript world, continuously refining my
                workflow and adopting solutions that make my development process
                more efficient.
              </p>
              <p className='text-sm @md:text-lg'>
                I&apos;m comfortable working in product-focused teams or
                building personal projects end-to-end. Whether it&apos;s
                integrating third-party services like Stripe or Auth0, setting
                up RESTful or GraphQL APIs, or optimizing frontend performance —
                I aim to solve problems in ways that are both elegant and
                practical.
              </p>
            </div>
            <div className='flex-4/12 hidden @md:block'>
              <Image
                src='/svg/about-left.svg'
                alt='about-left'
                width={400}
                height={2000}
              />
            </div>
          </div>
          <div className='flex flex-row'>
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
      </section>
      {headerItems.map(({ component: Component, label, href }) => {
        console.log(label);
        return (
          Component && (
            <section
              key={label}
              id={href.replace('#', '')}
              className='h-[95vh] snap-start px-6 @md:px-12'
            >
              <Component />
            </section>
          )
        );
      })}
    </>
  );
}
