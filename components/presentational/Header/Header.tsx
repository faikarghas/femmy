import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

import { selectAuthState, setAuthState } from '../../../store/authSlice';
import Nav from '../Nav/Nav';

export interface IHeader {
  page: string;
}

const Header: React.FC<IHeader> = ({ page }) => {
  const { authState } = useSelector(selectAuthState);
  const dispatch = useDispatch();

  if (page == 'home') {
    return (
      <header className="relative h-screen bg-[#F4AFC2]">
        <Nav position="header" page={page} />

        <picture>
          <source
            media="(min-width:750px)"
            srcSet="/images/femmy_banner_banner1.jpg"
          />
          <img
            src="/images/femmy_banner_mobile2.jpg"
            className="w-full object-contain"
          ></img>
        </picture>

        {/* <div className="flex flex-col items-center xl:w-[450px] absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:transform-none md:left-unset text-banner md:right-[8%] lg:top-[30%] text-center">
          <h1 className="font-head text-femmy-pdark text-[50px] lg:text-[45px] text-center leading-[50px] pb-4 font-semibold">
            Cantik Ternutrisi
          </h1>
          <p className="mb-16 font-sans text-femmy-pdark text-[14px] lg:text-[14px] text-center font-medium leading-[20px]">
            Femmy hadir sebagai solusi komprehensif bagi perempuan
            <br />
            modern untuk senantiasa menjaga kesehatan tubuh sekaligus
            <br />
            merawat kecantikan dari dalam.{' '}
          </p>
          <Link href="/">
            <a className="block bg-femmy-pdark rounded-[56px] text-femmy-white text-[16px] py-[12px] px-4 leading-[10px] w-[190px] text-center">
              cerita kami
            </a>
          </Link>
        </div> */}
      </header>
    );
  } else {
    return <Nav position="header" page="nh" />;
  }
};

export default Header;
