import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiChevronDown } from 'react-icons/bi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar bg-base-100">
      <div className="w-full max-w-7xl mx-auto sm:p-2">
        <div className="flex-1">
          <Link
            to={'/'}
            className="btn btn-ghost normal-case text-xl sm:font-bold sm:text-2xl"
          >
            JangDoLog
          </Link>
        </div>
        <Link
          to={'posts'}
          className="btn p-1 btn-ghost items-center flex rounded-btn me-1 sm:p-2 sm:me-2"
        >
          Posts
        </Link>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="flex flex-rowbtn-ghost p-1 sm:p-2 btn btn-ghost rounded-btn items-center"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Readme <BiChevronDown />
          </label>
          {menuOpen && (
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  to={'resumes'}
                  className="btn btn-ghost flex content-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  to={'portfolio'}
                  className="btn btn-ghost flex content-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to={'https://github.com/jangdu/'}
                  className="btn btn-ghost flex content-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Github
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
