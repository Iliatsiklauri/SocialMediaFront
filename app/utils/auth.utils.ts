import { hasCookie } from 'cookies-next';
import { redirect } from 'next/navigation';

export const inputs = [
  'email',
  'password',
  'confirm_password',
  'name',
  'lastname',
];

export function checkQookie() {
  const cookie = hasCookie('AccessToken');
  if (!cookie) {
    redirect('/');
  }
}
