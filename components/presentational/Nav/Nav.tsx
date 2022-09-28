import React from 'react';
import Link from 'next/link';

import { listNav } from '../../../utils/static/nav';

export interface INav {
  page: string;
  position: string;
}
const Nav: React.FC<INav> = ({ page, position }) => (
  <nav
    className={`py-8 px-8 ${
      position == 'header' ? 'lg:px-12' : 'lg:px-0'
    } top-0 left-0 ${page == 'home' ? 'absolute' : 'relative'} w-full`}
  >
    <div className="flex flex-wrap items-center justify-between mx-auto">
      <Link href="/">
        <a className="flex items-center">
          <img
            src={'/images/logo-femmy.png'}
            className="lg:mr-3 h-6 sm:h-10 lg:h-[45px] object-contain"
            alt="Flowbite Logo"
          />
        </a>
      </Link>
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        {/* <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg> */}
      </button>
      <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul className="flex flex-col mt-4 rounded-lg border  md:flex-row md:space-x-4 lg:space-x-8 xl:space-x-12 md:mt-0 md:text-sm md:font-medium md:border-0">
          {listNav.map((txt, i) => {
            return (
              <li className="flex items-center" key={i}>
                <Link href={txt.replace(/[^\w\s]/gi, 'dan').split(' ').join('-')}>
                  <a
                    className="font-sans font-semibold md:text-[9px] xl:text-[15px] block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 text-femmy-pdark"
                    aria-current="page"
                  >
                    {txt}
                  </a>
                </Link>
              </li>
            );
          })}
          {position == 'header' ? (
            <li className="flex items-center">
              <div className="rounded-[56px] md:w-[130px] lg:w-[210px] text-center bg-femmy-pdark text-femmy-white md:py-1.5 lg:py-2.5 md:px-2 lg:px-4 flex items-center">
                <img
                  className="md:w-[12px] lg:w-[18px] object-contain"
                  src="/images/mag.png"
                />
                <span className="px-2">|</span>
                <span className="font-sans font-semibold block leading-[10px] md:tracking-normal lg:tracking-[1px] md:text-[9px] xl:text-[14px]">
                  media sosial kami
                </span>
              </div>
            </li>
          ) : (
            ''
          )}
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
