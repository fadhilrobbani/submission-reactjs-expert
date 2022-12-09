import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';

function RegisterPage() {
  const navigate = useNavigate();
  const onRegisterHandler = () => {
    navigate('/login');
  };
  return (
    <div className=" text-slate-200 h-screen mt-[-74px] flex justify-center items-center">
      <RegisterInput onRegister={onRegisterHandler} />
    </div>
  );
}

export default RegisterPage;
