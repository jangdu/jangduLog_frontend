import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 ">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex-1">
          <Link to={'/'} className="btn btn-ghost normal-case text-2xl">
            JangDoLog
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link>Link</Link>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <Link>Link 1</Link>
                  </li>
                  <li>
                    <Link>Link 2</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
