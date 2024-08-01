import React, { useState } from 'react';
import SignUpInputs from '../SignUpInputs/SignUpInputs';
import LogInInputs from '../LogInInputs/LogInInputs';
import { changeAuthButton } from '@/app/types/authentication/auth.types';

export default function InputsForAuth({ auth, setAuth }: changeAuthButton) {
  const [email, setEmail] = useState<string | null>(null);
  return (
    <div className="w-full flex items-center justify-center">
      {!auth ? (
        <SignUpInputs auth={auth} setAuth={setAuth} setEmail={setEmail} />
      ) : (
        <LogInInputs
          auth={auth}
          setAuth={setAuth}
          email={email}
          setEmail={setEmail}
        />
      )}
    </div>
  );
}
