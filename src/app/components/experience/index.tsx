import React from 'react';
import { experiences } from './constant';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

export default function Experience() {
  return (
    <div className='@container'>
      <h3 className='@md:text-4xl my-3 font-nexa-bold'>Experiences</h3>
      {experiences.map(({ title, description, icon, period }) => (
        <Card key={title} className='mb-3'>
          <CardHeader>
            <div className='flex'>
              <div>
                <Image className='mb-2' src={icon} width={120} height={20} alt={title} />
                <CardTitle className='@md text-2xl'>{title}</CardTitle>
              </div>
              <div className='ml-auto'>
                <p className='font-bold'>{period}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className='text-lg'>{description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
