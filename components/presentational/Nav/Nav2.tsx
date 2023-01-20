import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { selectModalState, setModalState, setModalRegisterState } from "../../../store/modal";
import { useDispatch, useSelector } from "react-redux";

import { listNav } from '../../../utils/data';

export interface INav {
  page: string;
  position: string;
}
const Nav: React.FC<INav> = ({ page, position }) => {
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();

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

  return (
    <>
      <nav
        className={`
      ${position == 'header' ? 'px-6 lg:px-12' : 'px-0 lg:px-0 mb-2'}
      ${
        page == 'home'
          ? `${
              offset > 100
                ? `${menu ? 'bg-[#601146]' : 'bg-white'}`
                : 'bg-transparent'
            }`
          : `${menu ? 'bg-transparent' : 'bg-white'} `
      }
      ${position == 'header' ? 'fixed z-50' : ''}
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
                }  lg:h-[55px] lg:mr-3 sm:h-10 object-contain `}
                alt="Flowbite Logo"
              />
            </a>
          </Link>
          {position !== 'header' ? (
            <ul className="text-right block lg:hidden">
              <li>
                <Link href="/">
                  <a className="font-sans text-femmy-pdark text-right text-[14px]">
                    Kebijakan Privasi
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="font-sans text-femmy-pdark text-right text-[14px]">
                    Syarat & Ketentuan
                  </a>
                </Link>
              </li>
            </ul>
          ) : (
            ''
          )}
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
            <ul className="flex flex-col mt-4 rounded-lg border  md:flex-row md:space-x-4 lg:space-x-7 xl:space-x-9 md:mt-0 md:text-sm md:font-medium md:border-0">
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
                        className="font-sans font-semibold md:text-[9px] xl:text-[13px] block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 text-femmy-pdark xl:tracking-[2px]"
                        aria-current="page"
                      >
                        {txt}
                      </a>
                    </Link>
                  </li>
                );
              })}

              {/* Auth */}
              {position == 'header' ? (
                <li className="flex items-center group relative cursor-pointer">
                  <div className="rounded-[56px] md:w-[130px] lg:w-[210px] text-center bg-femmy-pdark text-femmy-white md:py-1.5 lg:py-2.5 md:px-2 lg:px-4 flex items-center justify-center">
                    <span onClick={()=>dispatch(setModalState(true))} className="font-sans font-semibold block leading-[10px] md:tracking-normal lg:tracking-[2px] md:text-[9px] xl:text-[13px] ">
                      masuk
                    </span>
                    <span className='text-white px-2'>|</span>
                    <span onClick={()=>dispatch(setModalRegisterState(true))} className="font-sans font-semibold block leading-[10px] md:tracking-normal lg:tracking-[2px] md:text-[9px] xl:text-[13px] ">
                      daftar
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
      {position == 'header' ? (
        <div
          className={`pt-36 pb-12 px-8 flex flex-col justify-between sm:hidden fixed w-full h-full bg-[#601146] top-0 left-0 z-10 transition-all translate-x-[100%] ${
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

          <ul className="pl-0">
            <li className="inline-block mr-2">
              <Link href="https://www.tiktok.com/@femmy.daily">
                <a target="_blank" rel="noopener">
                  <img className="w-[40px]" src="/images/tiktok.png" />
                </a>
              </Link>
            </li>
            <li className="inline-block mr-2">
              <Link href="https://www.Instagram.com/femmy.daily">
                <a target="_blank" rel="noopener">
                  <img className="w-[40px]" src="/images/logo-ig.png" />
                </a>
              </Link>
            </li>
            <li className="inline-block mr-2">
              <Link href="https://www.youtube.com/channel/UC7Sg8HkaWJItuMLbvNdKvWQ">
                <a target="_blank" rel="noopener">
                  <img className="w-[40px]" src="/images/logo-yt.png" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Nav;
