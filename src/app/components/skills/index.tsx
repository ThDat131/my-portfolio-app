import React from 'react';
import { skills } from './constant';
import { Button } from '@/components/ui/button';

export default function Skills() {
  return (
    <div className='@container'>
      <h3 className='@md:text-4xl my-3 font-nexa-bold'>Skills</h3>
      <div className='grid grid-cols-2 @md:grid-cols-5 gap-4'>
        {skills.map(({ icon: Icon, label }) => (
          <Button
            variant={'outline'}
            key={label}
            className='h-30 @md:h-50 mr-4 flex flex-col gap-5'
          >
            <Icon size={'80'} className='size-fit' />
            <p className='@md:text-2xl'>{label}</p>
          </Button>
        ))}
      </div>
    </div>
  );
}
