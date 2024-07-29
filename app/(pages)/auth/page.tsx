import AuthModal from '@/app/components/AuthModal/Modal/AuthModal';
import Image from 'next/image';

export default function page() {
  return (
    <div className="bg-[#dcdee6] w-full min-h-screen flex items-start justify-between px-40 pt-32 relative">
      <AuthModal />
      <div className="flex flex-col gap-10 w-1/2">
        <h1 className="text-4xl text-[#0766ff] pt-36">Gamarjoba</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          sapiente voluptatem, maiores blanditiis vel ea assumenda voluptas
          praesentium sed optio.
        </p>
      </div>
    </div>
  );
}
