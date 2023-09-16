import React from 'react';
import { Link } from 'react-router-dom';
import { BiChevronDown } from 'react-icons/bi';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="w-full max-w-7xl mx-auto p-2">
        <div className="flex-1">
          <Link
            to={'/'}
            className="btn btn-ghost font-bold normal-case text-2xl"
          >
            JangDoLog
          </Link>
        </div>
        <Link to={'posts'} className="btn btn-ghost rounded-btn me-2">
          Posts
        </Link>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost rounded-btn">
            readme <BiChevronDown />
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={'resumes'}>Resume</Link>
            </li>
            <li>
              <Link to={'portfolio'}>Portfolio</Link>
            </li>
            <li>
              <Link to={'https://github.com/jangdu/'}>Github</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
