import React from 'react';

import LoginForm from '@/components/login/LoginForm';
import SignupForm from '@/components/login/SignupForm';

import style from './layout.module.scss';

export default function Page() {
  return (
  <div className={style.container}>
    <div className="LoginBox">
      <LoginForm></LoginForm>
    </div>

    <div className="SignupBox">
     <SignupForm></SignupForm>
    </div>
  </div>
)
};
