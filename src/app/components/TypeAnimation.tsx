'use client';
import { TypeAnimation as Component } from 'react-type-animation';

export default function TypeAnimation() {
  return (
    <Component
      sequence={[
        'Frontend Developer',
        300,
        'Backend Developer',
        300,
        'Full-stack Developer',
      ]}
      wrapper='span'
      cursor={true}
      className='text-4xl my-3'
    />
  );
}
