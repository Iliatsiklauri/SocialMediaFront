import {
  AuthSignUp,
  loginType,
  signUpType,
} from '../../../app/types/authentication/auth.types';

const SIGN_UP_URL = 'http://localhost:4000/auth/sign-up';
const SIGN_IN_URL = 'http://localhost:4000/auth/sign-in';

export async function signup(signUpType: AuthSignUp) {
  try {
    const res = await fetch(SIGN_UP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signUpType),
    });

    return res;
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

    return res;
  } catch (er) {
    console.log(er);
  }
}
