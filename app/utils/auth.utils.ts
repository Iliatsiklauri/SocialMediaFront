import { hasCookie } from 'cookies-next';
import { redirect } from 'next/navigation';
import { getPostsApi } from '../api/posts/posts.api';
import { getPostsType } from '../types/posts/posts.type';

export const inputs = [
  'email',
  'password',
  'confirm_password',
  'name',
  'lastname',
];
export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const optionsDate: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
  };
  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', optionsDate).format(
    date
  );
  const formattedTime = new Intl.DateTimeFormat('en-US', optionsTime).format(
    date
  );

  return `${formattedDate} at ${formattedTime}`;
}
