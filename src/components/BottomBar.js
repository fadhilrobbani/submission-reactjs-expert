import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { asyncUnsetAuthUser } from '../states/authUser/action';

function BottomBar() {
  const { authUser = null } = useSelector((states) => states);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogoutHandler = () => {
    if (authUser) {
      dispatch(asyncUnsetAuthUser());
      navigate('/login');
    } else {
      navigate('/login');
    }
  };
  return (
    <div>
      <div className="btm-nav bg-slate-700 text-slate-100">
        <button
          type="button"
          className={
            window.location.pathname === '/' ? 'active bg-slate-600' : ''
          }
          onClick={() => navigate('/')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="btm-nav-label">Home</span>
        </button>
        <button
          className={
            window.location.pathname === '/leaderboards'
              ? 'active bg-slate-600'
              : ''
          }
          type="button"
          onClick={() => navigate('/leaderboards')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <span className="btm-nav-label">Leaderboards</span>
        </button>
        <button
          type="button"
          className={
            window.location.pathname === '/login' ? 'active bg-slate-600' : ''
          }
          onClick={onLogoutHandler}
        >
          {!authUser ? (
            <AiOutlineLogin size={25} />
          ) : (
            <AiOutlineLogout size={25} />
          )}

          <span className="btm-nav-label">{authUser ? 'logout' : 'login'}</span>
        </button>
      </div>
    </div>
  );
}

export default BottomBar;
