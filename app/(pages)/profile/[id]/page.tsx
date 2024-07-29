import { checkQookie } from '@/app/utils/auth.utils';
import React from 'react';

export default function page({ params }: { params: { id: string } }) {
  checkQookie();
  return <div>{params.id}</div>;
}
