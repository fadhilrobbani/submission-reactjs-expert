import React from 'react';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';
import LoginInput from '../components/LoginInput';

function LoginPage() {
  const dispatch = useDispatch();
  const onLoginHandler = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };
  return (
    <div className=" text-slate-200 h-screen mt-[-74px] flex justify-center items-center">
      <LoginInput onLogin={onLoginHandler} />
    </div>
  );
}

export default LoginPage;
