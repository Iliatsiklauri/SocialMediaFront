import Header from './components/Header/Header';
import Posts from './components/Posts/PostsSection/Posts';

export default function Home() {
  return (
    <div className="flex items-start justify-center relative py-[120px] bg-[#fafafb] h-screen overflow-y-auto z-10">
      <Header />
      <Posts />
      <div className="bg-lightGreen w-[500px] h-[200%] fixed top-[-20%] right-[30%] rotateBG pointer-events-none"></div>
    </div>
  );
}
