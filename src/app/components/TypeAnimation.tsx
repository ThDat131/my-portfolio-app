'use client';
import { TypeAnimation as Component } from 'react-type-animation';

export default function TypeAnimation() {
  return (
    <Component
      sequence={[
        1000,
        'Fullstack Developer',
      ]}
      wrapper='span'
      cursor={true}
      className='text-4xl my-3'
    />
  );
}
