import React from 'react';
import LoginInput from '../components/LoginInput';

function LoginPage() {
  const onLoginHandler = () => {};
  return (
    <div className=" text-slate-200 h-screen mt-[-74px] flex justify-center items-center">
      <LoginInput onLogin={onLoginHandler} />
    </div>
  );
}

export default LoginPage;
