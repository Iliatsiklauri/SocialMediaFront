import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';

export default function Home() {
  return (
    <div className="flex items-start justify-center relative py-[120px] bg-slate-300 min-h-screen">
      <Header />
      <Posts />
    </div>
  );
}
