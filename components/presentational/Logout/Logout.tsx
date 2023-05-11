import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'

import { setAuthState, selectAuthState } from "../../../store/authSlice";
import { removeCookie } from '../../../utils/cookie';


export interface INav {

}
const MediaSocial: React.FC<INav> = () => {
    const dispatch = useDispatch();
    const router = useRouter()

    const logout = () =>{
        dispatch(setAuthState(false))

        removeCookie('refreshToken')

        router.push('/')
    }
  return (
    <ul className='p-4 border-t-[1px] border-[#8F2A64]'>
        <li className='font-sansMedium text-femmy-pdark text-[16px] cursor-pointer' onClick={logout}>keluar</li>
    </ul>

  );
};

export default MediaSocial;
