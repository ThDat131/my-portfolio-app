import Experience from '@/app/components/experience';
import Projects from '@/app/components/projects';
import Skills from '@/app/components/skills';
import React from 'react';

export interface HeaderItem {
  label: string;
  href: string;
  component?: React.FC;
}

export const headerItems: HeaderItem[] = [
  { label: 'Home', href: '/#home' },
  { label: 'Skills', href: '/#skills', component: Skills },
  { label: 'Experience', href: '/#experience', component: Experience },
  { label: 'Projects', href: '/#projects', component: Projects },
  { label: 'Blogs', href: '/blogs' },
];
