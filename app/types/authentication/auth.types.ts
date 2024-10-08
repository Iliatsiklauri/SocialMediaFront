import { FieldErrors, UseFormRegister } from 'react-hook-form';
import * as yup from 'yup';
export type AuthSignUp = {
  name: string;
  lastname: string;
  email: string;
  password: string;
};
export type signUpType = {
  name: string;
  lastname: string;
  email: string;
  password: string;
  confirm_password: string;
};
export type loginType = {
  email: string;
  password: string;
};
export type changeAuthButton = {
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
};
export type customSignUp = {
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
  setEmail: React.Dispatch<React.SetStateAction<string | null>>;
  email?: string | null;
};

export const logInSchema = yup.object().shape({
  email: yup
    .string()
    .required()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Enter a valid email'
    )
    .email(),
  password: yup.string().min(8).required(),
});

export const SignUpSchema = yup.object().shape({
  email: yup
    .string()
    .required()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Enter a valid email address'
    ),
  password: yup.string().required().min(8),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  name: yup
    .string()
    .required()
    .matches(/^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/, 'Enter a valid name'),
  lastname: yup
    .string()
    .required()
    .matches(
      /^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/,
      'Enter a valid lastname'
    ),
});
