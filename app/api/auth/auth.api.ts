import { loginType, signUpType } from '@/app/types/authentication/auth.types';
import { babelIncludeRegexes } from 'next/dist/build/webpack-config';

const SIGN_UP_URL = 'http://localhost:4000/auth/sign-up';
const SIGN_IN_URL = 'http://localhost:4000/auth/sign-in';

export async function signup(signUpType: signUpType) {
  try {
    const res = await fetch(SIGN_UP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signUpType),
    });

    if (!res.ok) {
      let error = await res.json();
      console.log(error);
      return error;
    }
    return 'User registered successfully';
  } catch (er) {
    console.log(`error cought in catch ${er}`);
  }
}

export async function logIn(loginType: loginType) {
  try {
    const res = await fetch(SIGN_IN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginType),
    });

    const data = await res.json();

    if (!res.ok) {
      console.log(data);
      return data;
    }
    console.log(data.accessToken);
    return data.accessToken;
  } catch (er) {
    console.log(er);
  }
}
