import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="p-4 bg-slate-700 z-40 w-full fixed top-0">
      <p className="text-xl text-slate-100 font-semibold px-4">
        <Link to="/">FORUM APP</Link>
      </p>
    </div>
  );
}

export default Navbar;
