import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiInstagram } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className="footer p-10 bg-accent text-retro-content justify-between xl:px-[20%]">
      <aside>
        <h1 className="font-bold text-xl">@jangdu</h1>
        <p className="font-semibold text-lg text-slate-200 flex flex-row items-center gap-2">
          <AiOutlineMail />
          jjd0324@gmail.com
        </p>
      </aside>
      <nav>
        {/* <header className="footer-title">Social</header> */}
        <div className=" grid grid-flow-col gap-4">
          <Link
            to={'https://github.com/jangdu/'}
            className="text-4xl btn btn-ghost text-slate-50 btn-square rounded-btn pt-1"
          >
            <FiGithub />
          </Link>
          <Link
            to={'https://github.com/jangdu/'}
            className="text-4xl btn btn-ghost text-slate-50 btn-square rounded-btn"
          >
            <FiInstagram />
          </Link>
        </div>
      </nav>
    </footer>
  );
}
