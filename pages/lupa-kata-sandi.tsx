import type { NextPage } from 'next';
import React,{useState} from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Link from 'next/link';

import InfoNotif from '../components/presentational/Modal/InfoNotif';

const LupaSandi: NextPage = () => {
    const [message, setMessage] = useState('kirim'); // This will be used to show a message if the submission is successful
    const [submitted, setSubmitted] = useState(false);
    const [modal, setModal] = useState(false);

    const formik = useFormik({
      initialValues: {
        email: '',
      },
      onSubmit: async (val) => {
        setMessage('Loading...');
        setSubmitted(true)
  
        const data = {
            email: val.email,
        };
  
        const JSONdata = JSON.stringify(data);
        const endpoint = 'http://localhost:1337/api/auth/forgot-password';
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSONdata,
        };
        const response = await fetch(endpoint, options);
        const result = await response.json();
        console.log(result);

        if (result.ok) {
            setMessage('kirim');
            setModal(true)
            setTimeout(() => {
              setModal(false)
            }, 3000);
        }
      },
      validationSchema: yup.object({
        email: yup
          .string()
          .email('Must be a valid email')
          .required('Email is required'),
      }),
    });
  return (
    <>
    <div className='h-[350px] w-[80%] md:w-[550px] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-[#F5E8DF] p-8 lg:p-16 rounded-3xl flex flex-col items-center justify-center'>
        <Link href="/" className='bg-[#951B66] w-[40px] h-[40px] absolute right-5 top-5 rounded-full flex justify-center items-center cursor-pointer'>
          <img className='object-contain w-[15px]' src='/images/xclose.png' />
        </Link>
        <form className='w-full mb-4' onSubmit={formik.handleSubmit}>
          <div className="relative z-0 mb-4 md:mb-4 w-full group">
            <input
              className="bg-[#F5E8DF] lg:bg-transparent w-full rounded-2xl lg:rounded-lg placeholder:femmy-pdark placeholder:femmy-pdark placeholder:text-[13px] placeholder:font-sans placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] text-femmy-pdark border-femmy-pdark"
              placeholder="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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

        <p className='text-femmy-pdark font-sans'>belum punya akun? <Link href={"/daftar"} className='text-femmy-pdark font-semibold mb-4 underline'>daftar disini</Link></p>
    </div>

    <InfoNotif modal={modal} text="silahkan cek email kamu untuk" counter={0}/>
    </>
    
  );
};

export default LupaSandi;
