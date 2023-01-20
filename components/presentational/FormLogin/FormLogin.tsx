import React,{useState} from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Link from 'next/link';

import { setModalState } from "../../../store/modal";
import { useDispatch } from "react-redux";

export interface IFormLogin {

}

const FormLogin: React.FC<IFormLogin> = () => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState('tanya sekarang!'); // This will be used to show a message if the submission is successful
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (val) => {
      const data = {
        password: val.password,
        email: val.email,
      };

      const JSONdata = JSON.stringify(data);
      const endpoint = 'https://api-femmy.owlandfoxes.id/question';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSONdata,
      };
      const response = await fetch(endpoint, options);
      const result = await response.json();
      if (result.status == 200) {
        setMessage('Terkirim');
        setTimeout(() => {
          setMessage('tanya sekarang!');
        }, 3000);
        setSubmitted(true);
      }
    },
    validationSchema: yup.object({
      password: yup.string().trim().required('Password is required'),
      email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
    }),
  });


  return (
    <div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-[#F5E8DF] p-16 rounded-3xl w-[550px] flex flex-col items-center justify-center'>
        <div onClick={()=>dispatch(setModalState(false))} className='bg-[#951B66] w-[40px] h-[40px] absolute right-5 top-5 rounded-full flex justify-center items-center cursor-pointer'>
          <img className='object-contain w-[15px]' src='/images/xclose.png' />
        </div>
        <img className='w-[200px] mb-3' src="images/login-icon.png" />
        <h2 className='text-[30px] font-head text-femmy-pdark mb-4'>Masuk</h2>
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
          <div className="relative z-0 mb-4 md:mb-2  w-full group">
            <input
              className="bg-[#F5E8DF] lg:bg-transparent w-full rounded-2xl lg:rounded-lg placeholder:femmy-pdark placeholder:femmy-pdark placeholder:text-[13px] placeholder:font-sans placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] text-femmy-pdark border-femmy-pdark"
              placeholder="Password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <button
            type="submit"
            className="mt-0 md:mt-4 w-full text-center rounded-2xl text-femmy-white bg-femmy-pdark tracking-[2px] hover:bg-[#F6C2C6] hover:text-femmy-pdark focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 font-sans"
          >
            {message}
          </button>

        </form>

        <Link href={"/"}><a className='text-femmy-pdark font-sans mb-3 underline'>lupa password?</a></Link>
        <p className='text-femmy-pdark font-sans'>belum punya akun? <Link href={"/"}><a className='text-femmy-pdark font-semibold mb-4 underline'>daftar disini </a></Link></p>
    </div>
  )
}

export default FormLogin

