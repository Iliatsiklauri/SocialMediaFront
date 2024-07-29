import { FieldErrors, UseFormRegister } from 'react-hook-form';
import * as yup from 'yup';

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

export const logInSchema = yup.object().shape({
  email: yup.string().required().email('/^[^s@]+@[^s@]+.[^s@]+$/'),
  password: yup.string().min(8).required(),
});

export const SignUpSchema = yup.object().shape({
  email: yup
    .string()
    .required()
    .matches(/^\S+@\S+\.\S+$/, 'Enter a valid email address'),
  password: yup.string().required().min(8),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  name: yup.string().required(),
  lastname: yup.string().required(),
});
