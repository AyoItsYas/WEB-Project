import React from 'react';
import LoginForm from '@/components/login/LoginForm';
import SignupForm from '@/components/login/SignupForm';

export default () => (
  <div className="LoginPage">
    <div className="LoginContainer">
      <LoginForm />
      <SignupForm />
    </div>
  </div>
);
