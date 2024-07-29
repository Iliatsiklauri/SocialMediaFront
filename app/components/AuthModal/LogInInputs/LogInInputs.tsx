import {
  customSignUp,
  logInSchema,
  loginType,
} from '@/app/types/authentication/auth.types';
import React, { useState } from 'react';
import SubmitButton from '../SubmitButton/SubmitButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { logIn } from '@/app/api/auth/auth.api';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export default function LogInInputs({ auth, setAuth, email }: customSignUp) {
  const [passError, setPassError] = useState<null | string>(null);
  const [emailError, setEmailError] = useState<null | string>(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginType>({
    resolver: yupResolver(logInSchema),
  });

  async function logInHandler(data: loginType) {
    const res = await logIn(data);
    const response = await res?.json();
    if (!res?.ok) {
      if (response.message === 'incorect password') {
        setPassError(response.message);
        return;
      }
      if (response.message === 'User does not exist') {
        setEmailError(response.message);
        return;
      }
    }
    setCookie('AccessToken', response.accessToken, {
      path: '/',
      maxAge: 3600,
      httpOnly: false,
    });
    router.push('/');
    return;
  }
  return (
    <form
      className="flex flex-col items-center justify-center gap-2 w-full"
      onSubmit={handleSubmit(logInHandler)}
    >
      <div className="Auth_boxes">
        <label htmlFor="Email">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          id="Email"
          className="Auth_Inputs  border-gray-300 border-[1px]"
          placeholder="Example@Example.com"
          defaultValue={email ? email : ''}
          {...register('email')}
        />
        <p className="absolute text-red-400 text-[12px] right-0 bottom-[-17px]">
          {errors.email?.message}
        </p>
        <p className="absolute text-red-400 text-[12px] right-0 bottom-[-17px]">
          {emailError ? emailError : null}
        </p>
      </div>
      <div className="Auth_boxes">
        <label htmlFor="Password">
          Password <span className="text-red-400">*</span>
        </label>
        <input
          type="password"
          id="Password"
          className="Auth_Inputs  border-gray-300 border-[1px]"
          placeholder="**************"
          {...register('password')}
        />
        <p className="absolute text-red-400 text-[12px] right-0 bottom-[-17px]">
          {errors.password?.message}
        </p>
        <p className="absolute text-red-400 text-[12px] right-0 bottom-[-17px]">
          {passError ? passError : null}
        </p>
      </div>
      <SubmitButton auth={auth} setAuth={setAuth} />
    </form>
  );
}
