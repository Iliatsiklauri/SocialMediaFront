import BgMark from './assets/Bgmark/BgMark';
import Header from './components/Header/Header';
import LeftBar from './components/LeftBar/LeftBar';
import Posts from './components/Posts/Posts';

export default function Home() {
  return (
    <div className="flex items-start justify-center relative py-[120px] bg-slate-300 h-screen overflow-y-auto">
      <LeftBar />
      <Header />
      <Posts />
      <BgMark />
    </div>
  );
}
