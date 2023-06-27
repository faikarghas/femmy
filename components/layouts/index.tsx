import React, { useState, useEffect } from 'react';
import Header from '../presentational/Header/Header';
import Footer from '../presentational/Footer/Footer';
import Script from 'next/script'
export interface ILayout {
  children: React.ReactNode;
  page: string;
  auth: boolean;
}

import { useDispatch } from "react-redux";
import { setAuthState, setAuthId } from "../../store/authSlice";
import { getCookie } from '../../utils/cookie';
import { verifyJwt } from '../../utils/verifyJwt';

import TagManager from 'react-gtm-module'
 
const tagManagerArgs = {
    gtmId: 'GTM-MXWML3M'
}
const Layout: React.FC<ILayout> = ({ children, page, auth }) => {
  const dispatch = useDispatch();

  const setAuth = async () => {
    let refreshToken = getCookie('refreshToken',{})

    if (refreshToken) {
      verifyJwt(refreshToken).then(async(res:any)=>{
        dispatch(setAuthState(true))
        dispatch(setAuthId(res.id))
      })
    } else {
      dispatch(setAuthState(false))
    }
  }

  useEffect(() => {
    setAuth()

    TagManager.initialize(tagManagerArgs)
  }, [])


  return (
    <>
     {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-245288693-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-245288693-1');
        `}
      </Script>
      <Header page={page} auth={auth}/>
      <main className={`${page !== 'home' ? 'mt-[85px]' : ''}`}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
