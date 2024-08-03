import AuthModal from '../../components/AuthModal/Modal/AuthModal';
import WelcomeText from '../../components/WelcomeText/WelcomeText';

export default function page() {
  return (
    <div className="bg-[#dcdee6] w-full min-h-screen flex items-start xl:items-start justify-center xl:justify-between xl:px-40 pt-10 xl:pt-32 relative gap-5">
      <AuthModal />
      <WelcomeText />
    </div>
  );
}
