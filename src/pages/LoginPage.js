import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncSetAuthUser } from '../states/authUser/action';
import LoginInput from '../components/LoginInput';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLoginHandler = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };
  return (
    <div className=" text-slate-200 h-screen mt-[-74px] flex justify-center items-center">
      <LoginInput onLogin={onLoginHandler} />
    </div>
  );
}

export default LoginPage;
