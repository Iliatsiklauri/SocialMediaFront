import { logIn, signup } from '../api/auth/auth.api';
import { loginType, signUpType } from '../types/authentication/auth.types';

export const onSignUp = (data: signUpType) => {
  signup(data);
};
export const onSignIn = (data: loginType) => {
  logIn(data);
};
