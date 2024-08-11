import BackgroundAnimation from './components/BlackBackground/BackgroundAnimation';
import Box from './components/Friendsbox/Box/Box';
import Header from './components/Header/Header';
import Posts from './components/Posts/PostsSection/Posts';

export default function Home() {
  return (
    <div className="flex items-start justify-center relative py-[120px] bg-[#fafafb] h-screen overflow-y-auto z-10">
      <Header />
      <Posts />
      <BackgroundAnimation />
      <Box />
    </div>
  );
}
