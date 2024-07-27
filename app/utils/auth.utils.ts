import { loginType, signUpType } from '../types/authentication/auth.types';

export const onSignUp = (data: signUpType) => {
  console.log(data);
};
export const onSignIn = (data: loginType) => {
  console.log(data);
};
