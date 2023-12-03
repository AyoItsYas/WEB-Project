import React from 'react';
import LoginForm from '@/components/login/LoginForm';
import SignupForm from '@/components/login/SignupForm';



export default () => (
  <div className="LoginPage">
    <div className="LoginContainer">
      <div className="LoginBox">
        <LoginForm />
      </div>
      <div className="SignupBox">
        <SignupForm />
      </div>
    </div>
  </div>
);
