import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  changeAuthButton,
  logInSchema,
  loginType,
} from '@/app/types/authentication/auth.types';
import SubmitButton from '../SubmitButton/SubmitButton';

export default function SignInInputs({ auth, setAuth }: changeAuthButton) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginType>({
    resolver: yupResolver(logInSchema),
  });

  const handleSignIn = async (data: loginType) => {};

  return (
    <form
      className="flex items-center justify-center flex-col gap-4 w-full flex-shrink-0"
      onSubmit={handleSubmit(handleSignIn)}
    >
      <SubmitButton auth={auth} setAuth={setAuth} />
    </form>
  );
}
