import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { listNav } from '../../../utils/data';

export interface INav {
  page: string;
  position: string;
}
const Nav: React.FC<INav> = ({ page, position }) => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu((prevState) => !prevState);
  };

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // ${menu ? 'bg-[#601146]' : 'bg-white'}

  return (
    <>
      <nav
        className={`
      ${position == 'header' ? 'px-6 lg:px-12' : 'px-0 lg:px-0 mb-2'}
      ${
        page == 'home'
          ? `${offset > 100 ?  `${menu ? 'bg-[#601146]': 'bg-white'}` : 'bg-transparent'}`
          : ``
      }
      ${position == 'header' ? 'fixed z-20' : ''}
      w-full top-0 left-0 py-4 transition-all h-[85px]`}
      >
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <Link href="/">
            <a className="flex items-center">
              <img
                src={`${
                  menu
                    ? '/images/logo-femmy-white.png'
                    : '/images/logo-femmy.png'
                }`}
                className={`${
                  position == 'header' ? 'h-[50px] z-10' : 'h-[50px]'
                }  lg:h-[45px] lg:mr-3 sm:h-10 object-contain `}
                alt="Flowbite Logo"
              />
            </a>
          </Link>
          {position !== 'header' ? (
            <ul className='text-right block lg:hidden'>
              <li><Link href='/'><a className='font-sans text-femmy-pdark text-right text-[14px]'>Kebijakan Privasi</a></Link></li>
              <li><Link href='/'><a className='font-sans text-femmy-pdark text-right text-[14px]'>Syarat & Ketentuan</a></Link></li>
            </ul>
            ) : ''}
          {position == 'header' && (
            <div
              id="menu-hamburger"
              onClick={openMenu}
              className={`${menu && 'open'} block md:hidden`}
            >
              <span
                className={`${menu ? 'bg-[#951B66]' : 'bg-femmy-pdark'} `}
              ></span>
              <span
                className={`${menu ? 'bg-[#951B66]' : 'bg-femmy-pdark'} `}
              ></span>
              <span
                className={`${menu ? 'bg-[#951B66]' : 'bg-femmy-pdark'} `}
              ></span>
              <span
                className={`${menu ? 'bg-[#951B66]' : 'bg-femmy-pdark'} `}
              ></span>
            </div>
          )}
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 rounded-lg border  md:flex-row md:space-x-4 lg:space-x-8 xl:space-x-9 md:mt-0 md:text-sm md:font-medium md:border-0">
              {listNav.map((txt, i) => {
                return (
                  <li className="flex items-center" key={i}>
                    <Link
                      href={`/${txt
                        .replace(/[^\w\s]/gi, 'dan')
                        .split(' ')
                        .join('-')}`}
                      replace={true}
                    >
                      <a
                        className="font-sans font-semibold md:text-[9px] xl:text-[13px] block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 text-femmy-pdark tracking-[2px]"
                        aria-current="page"
                      >
                        {txt}
                      </a>
                    </Link>
                  </li>
                );
              })}
              {position == 'header' ? (
                <li className="flex items-center group relative cursor-pointer">
                  <div className="rounded-[56px] md:w-[130px] lg:w-[210px] text-center bg-femmy-pdark text-femmy-white md:py-1.5 lg:py-2.5 md:px-2 lg:px-4 flex items-center justify-center">
                    {/* <img
                    className="md:w-[12px] lg:w-[18px] object-contain"
                    src="/images/mag.png"
                  />
                  <span className="px-2">|</span> */}
                    <span className="font-sans font-semibold block leading-[10px] md:tracking-normal lg:tracking-[2px] md:text-[9px] xl:text-[13px] ">
                      media sosial kami
                    </span>
                  </div>
                  <div className="group-hover:block hidden transition-all  absolute top-full w-full pt-6">
                    <ul className="list-none list rounded-2xl gap-y-2 flex flex-col justify-end bg-white p-4">
                      <li className="">
                        <Link href="#">
                          <a className="flex items-center">
                            <img
                              className="w-[30px]"
                              src="/images/tiktok.png"
                            />
                            <span className="ml-4 text-[16px] font-sans text-femmy-pdark">
                              Tiktok
                            </span>
                          </a>
                        </Link>
                      </li>
                      <li className="">
                        <Link href="#">
                          <a className="flex items-center">
                            <img
                              className="w-[30px]"
                              src="/images/logo-ig.png"
                            />
                            <span className="ml-4 text-[16px] font-sans text-femmy-pdark">
                              Instagram
                            </span>
                          </a>
                        </Link>
                      </li>
                      {/* <li className="">
                      <Link href="#">
                        <a className='flex items-center'>
                          <img className="w-[30px]" src="/images/logo-fb.png" />
                          <span className='ml-4 text-[16px] font-sans text-femmy-pdark'>Facebook</span>
                        </a>
                      </Link>
                    </li> */}
                      <li className="">
                        <Link href="#">
                          <a className="flex items-center">
                            <img
                              className="w-[30px]"
                              src="/images/logo-yt.png"
                            />
                            <span className="ml-4 text-[16px] font-sans text-femmy-pdark">
                              Youtube
                            </span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              ) : (
                ''
              )}
            </ul>
          </div>
        </div>
      </nav>
      {position == 'header' ? (
        <div
          className={`pt-36 pb-12 px-8 flex flex-col justify-between md:hidden fixed w-full h-full bg-[#601146] top-0 left-0 z-10 transition-all translate-x-[100%] ${
            menu && 'translate-x-[0%]'
          }`}
        >
          <ul className="p-0">
            {listNav.map((txt, i) => {
              return (
                <li className="flex items-center" key={i}>
                  <Link
                    href={`/${txt
                      .replace(/[^\w\s]/gi, 'dan')
                      .split(' ')
                      .join('-')}`}
                    replace={true}
                  >
                    <a
                      className="font-sans text-[16px] block py-2 px-0 mb-4 rounded md:bg-transparent md:p-0 text-femmy-white"
                      aria-current="page"
                    >
                      {txt}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          

          <ul className='pl-0'>
            <li className='inline-block mr-2'><Link href='/'><a><img className='w-[40px]' src='/images/tiktok.png'/></a></Link></li>
            <li className='inline-block mr-2'><Link href='/'><a><img className='w-[40px]' src='/images/logo-ig.png'/></a></Link></li>
            <li className='inline-block mr-2'><Link href='/'><a><img className='w-[40px]' src='/images/logo-yt.png'/></a></Link></li>
          </ul>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Nav;
