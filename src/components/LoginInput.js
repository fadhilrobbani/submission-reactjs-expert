import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ onLogin }) {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  return (
    <div className="bg-slate-600 text-slate-200 w-3/4 h-fit max-w-lg py-10 gap-6 rounded-lg flex flex-col items-center shadow-md">
      <h1 className="text-center font-bold text-xl">Login</h1>
      <div className="w-4/5 flex flex-col gap-6 justify-center">
        <div className="flex flex-col gap-2 justify-center">
          <label htmlFor="email" className="font-semibold">
            <p>Email</p>
            <input
              className="bg-slate-500 text-slate-200 
                 border border-slate-400 py-2 px-4 rounded-md mt-2 w-full"
              type="text"
              id="email"
              value={email}
              placeholder="youremail@example.com"
              onChange={setEmail}
            />
          </label>
        </div>
        <div className="flex flex-col justify-center">
          <label htmlFor="password" className="font-semibold">
            <p>Password</p>
            <input
              className="bg-slate-500 text-slate-200 
                 border border-slate-400 py-2 px-4 rounded-md w-full mt-2"
              type="password"
              id="password"
              value={password}
              placeholder="******"
              onChange={setPassword}
            />
          </label>
          <button
            onClick={onLogin}
            type="button"
            className=" text-slate-100 bg-teal-700 px-3 py-2 rounded-md mt-6 hover:bg-teal-800 "
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

LoginInput.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginInput;