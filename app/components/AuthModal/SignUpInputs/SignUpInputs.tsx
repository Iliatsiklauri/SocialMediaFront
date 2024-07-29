import {
  changeAuthButton,
  customSignUp,
  SignUpSchema,
  signUpType,
} from '@/app/types/authentication/auth.types';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SubmitButton from '../SubmitButton/SubmitButton';
import { signup } from '@/app/api/auth/auth.api';

export default function SignUpInputs({
  auth,
  setAuth,
  setEmail,
}: customSignUp) {
  const [error, setError] = useState<null | string>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpType>({
    resolver: yupResolver(SignUpSchema),
  });

  async function handleSignUp(data: signUpType) {
    const { confirm_password, ...newData } = data;
    const res = await signup(newData);
    if (!res?.ok) {
      const response = await res?.json();
      setError(response.message);
      return;
    }
    setEmail(data.email);
    setAuth(true);
    setError(null);
    return { success: true };
  }

  return (
    <form
      className="flex flex-col w-full gap-2"
      onSubmit={handleSubmit(handleSignUp)}
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
          {...register('email')}
        />
        <p className="absolute text-red-400 text-[12px] right-0 bottom-[-17px]">
          {errors.email?.message}
        </p>
        <p className="absolute text-red-400 text-[12px] right-0 bottom-[-17px]">
          {error ? error : null}
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
      </div>
      <div className="Auth_boxes">
        <label htmlFor="Confirm_password">
          Confirm Password <span className="text-red-400">*</span>{' '}
        </label>
        <input
          type="password"
          id="Confirm_password"
          className="Auth_Inputs  border-gray-300 border-[1px] "
          placeholder="**************"
          {...register('confirm_password')}
        />
        <p className="absolute text-red-400 text-[12px] right-0 bottom-[-17px]">
          {errors.confirm_password?.message}
        </p>
      </div>
      <div className="Auth_boxes ">
        <label htmlFor="name">
          name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="name"
          className="Auth_Inputs  border-gray-300 border-[1px]"
          placeholder="John"
          {...register('name')}
        />
        <p className="absolute text-red-400 text-[12px] right-0 bottom-[-17px]">
          {errors.name?.message}
        </p>
      </div>
      <div className="Auth_boxes">
        <label htmlFor="lastname">
          lastname <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="lastname"
          className="Auth_Inputs border-gray-300 border-[1px]"
          placeholder="Doe"
          {...register('lastname')}
        />
        <p className="absolute text-red-400 text-[12px] right-0 bottom-[-17px]">
          {errors.lastname?.message}
        </p>
      </div>
      <SubmitButton auth={auth} setAuth={setAuth} />
    </form>
  );
}
