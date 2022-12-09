import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onRegisterHandler = ({ name, email, password, confirmPassword }) => {
    if (password !== confirmPassword) {
      swal("Password and confirm password doesn't match");
      return;
    }
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/login');
  };
  return (
    <div className=" text-slate-200 h-screen mt-[-74px] flex justify-center items-center">
      <RegisterInput onRegister={onRegisterHandler} />
    </div>
  );
}

export default RegisterPage;
