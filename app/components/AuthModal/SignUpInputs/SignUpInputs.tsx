import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  changeAuthButton,
  SignUpSchema,
  signUpType,
} from '@/app/types/authentication/auth.types';
import SubmitButton from '../SubmitButton/SubmitButton';

export default function SignUpInputs({ auth, setAuth }: changeAuthButton) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpType>({
    resolver: yupResolver(SignUpSchema),
  });

  const handleSignUp = async (data: signUpType) => {};

  return (
    <form
      className="w-full flex flex-col gap-4 items-center justify-center flex-shrink-0"
      onSubmit={handleSubmit(handleSignUp)}
    >
      <SubmitButton auth={auth} setAuth={setAuth} />
    </form>
  );
}
