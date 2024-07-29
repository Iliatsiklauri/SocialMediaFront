import { checkQookie } from './utils/auth.utils';

export default function Home() {
  checkQookie();
  return <div></div>;
}
