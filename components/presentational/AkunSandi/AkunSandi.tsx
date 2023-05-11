import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'

import { useFormik } from 'formik';
import * as yup from 'yup';

import { setAuthState, selectAuthState } from "../../../store/authSlice";
import { removeCookie } from '../../../utils/cookie';
import { getCookie } from '../../../utils/cookie'
import InfoNotif from '../Modal/InfoNotif'

export interface IAkunSandi {
}

const AkunSandi: React.FC<IAkunSandi> = () => {
    const [message, setMessage] = useState('simpan');
    const [modal, setModal] = useState(false);
    const [counter, setCounter] = useState(4);

    const dispatch = useDispatch();
    const router = useRouter()

    const formik = useFormik({
        initialValues: {
          currentPassword: '',
          password: '',
          passwordConfirmation: '',
        },
        onSubmit: async (val) => {
          setMessage('Loading...')
          const data = {
            currentPassword: val.currentPassword,
            password: val.password,
            passwordConfirmation: val.passwordConfirmation
          };

          const token = getCookie('refreshToken',{})
          const JSONdata = JSON.stringify(data);
          const endpoint = 'http://localhost:1337/api/auth/change-password';
          const options = {
            method: 'POST',
            headers: {
              'Authorization': 'Bearer ' + token,
              'Content-Type': 'application/json',
            },
            body: JSONdata,
          };
          const response = await fetch(endpoint, options);
          const result = await response.json();

          console.log(result,'result');
          setMessage('simpan')

          if (result.jwt) {
            setMessage('simpan')
            dispatch(setAuthState(false))
            setModal(true)

            let count = 4
            setInterval(()=>{
              count--
              setCounter(count)
            },1000)

            setTimeout(() => {
              removeCookie('refreshToken')
              router.push('/login')
            }, 3000);

          } else {
            setMessage('gagal ubah kata sandi')
            setTimeout(() => {
              setMessage('simpan');
            }, 2000);
          }

        },
        validationSchema: yup.object({
          passwordConfirmation: yup.string().oneOf([yup.ref("password"), null])
        }),
    });

    return (
      <>
        <form className='mb-4' onSubmit={formik.handleSubmit}>
            <div className="grid md:grid-cols-1">
                <div className="relative z-0 mb-4 md:mb-3  w-full group">
                    <input
                    className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] py-1.5  pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                    placeholder="kata sandi lama"
                    name="currentPassword"
                    value={formik.values.currentPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="password"
                    />
                </div>
                <div className="relative z-0 mb-4 md:mb-3  w-full group">
                    <input
                    className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] py-1.5  pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                    placeholder="masukkan kata sandi baru"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="password"
                    />
                </div>
                <div className="relative z-0 mb-4 md:mb-3  w-full group">
                    <input
                    className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] py-1.5  pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                    placeholder="konfirmasi kata sandi baru"
                    name="passwordConfirmation"
                    value={formik.values.passwordConfirmation}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="password"
                    />
                </div>
            </div>
            <div className='text-right'>
                <button
                    type="submit"
                    className="mt-4 w-1/2 text-center text-femmy-white bg-femmy-pdark  focus:ring-4 focus:outline-none tracking-[2px] focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 font-sans">
                    {message}
                </button>
            </div>
        </form>
        <InfoNotif modal={modal} text="silahkan login kembali" counter={counter}/>
      </>
    )
}

export default AkunSandi;
