import React from 'react';
import Link from 'next/link';

import Nav from '../Nav/Nav';

import { selectAuthState, setAuthState } from '../../../store/authSlice';
import { useSelector, useDispatch } from 'react-redux';

export interface IHeader {
  page: string;
  auth: boolean;
}

const Header: React.FC<IHeader> = ({ page, auth }) => {

  if (page == 'home') {
    return (
      <header className="relative lg:h-screen bg-[#F4AFC2]">
        <Nav position="header" page={page} auth={auth}/>
        <picture>
          <source
            media="(min-width:750px)"
            srcSet="/images/HOMEBANNER-DESKTOP-3840x2171.jpg"
          />
          <img
            src="/images/HOMEBANNER-MOBILE-622x1133.jpg"
            className="w-full h-full object-contain lg:object-cover"
          ></img>
        </picture>
      </header>
    );
  } else {
    return <Nav position="header" page={page} auth={auth}/>;
  }
};

export default Header;
