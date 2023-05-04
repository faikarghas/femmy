import type { NextPage } from 'next';
import React,{useState,useEffect} from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

import { useFormik } from 'formik';
import * as yup from 'yup';


const UbahKataSandi: NextPage = () => {
    const [message, setMessage] = useState('kirim'); // This will be used to show a message if the submission is successful
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [code, setCode] = useState<string | string[] | undefined>('');

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
          code: code,
          password: val.password,
          passwordConfirmation: val.passwordConfirmation
        };

        const JSONdata = JSON.stringify(data);
        const endpoint = 'http://localhost:1337/api/auth/reset-password';
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSONdata,
        };
        const response = await fetch(endpoint, options);
        const result = await response.json();

        setMessage('simpan')
        console.log(result,'result');
        if (result.jwt) {
          setMessage('simpan')
          router.push('/login')

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

    useEffect(() => {
      console.log(
        router.query.code
      );
      setCode(router.query.code)
    }, [])

  return (
    <div className='h-[350px] w-[80%] md:w-[550px] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-[#F5E8DF] p-8 lg:p-16 rounded-3xl flex flex-col items-center justify-center'>
        <Link href="/" className='bg-[#951B66] w-[40px] h-[40px] absolute right-5 top-5 rounded-full flex justify-center items-center cursor-pointer'>
          <img className='object-contain w-[15px]' src='/images/xclose.png' />
        </Link>
        <form className='w-full mb-4' onSubmit={formik.handleSubmit}>
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
          <button
            type="submit"
            disabled={submitted?true:false}
            className="mt-0 md:mt-4 w-full text-center rounded-2xl text-femmy-white bg-femmy-pdark tracking-[2px] hover:bg-[#F6C2C6] hover:text-femmy-pdark focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 font-sans"
          >
            {message}
          </button>
        </form>
    </div>
  );
};

export default UbahKataSandi;
