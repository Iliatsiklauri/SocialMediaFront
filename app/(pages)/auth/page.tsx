import AuthModal from '../../components/AuthModal/Modal/AuthModal';
import WelcomeText from '../../components/WelcomeText/WelcomeText';

export default function page() {
  return (
    <div className="bg-[#dcdee6] w-full min-h-screen flex items-start justify-between px-40 pt-32 relative">
      <AuthModal />
      <WelcomeText />
    </div>
  );
}
