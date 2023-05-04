import React, {useState} from 'react';
import Link from 'next/link';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { setModalRegisterState, setModalState } from "../../../store/modal";
import { useDispatch } from "react-redux";

export interface IFormReseller {

}

const FormReseller: React.FC<IFormReseller> = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('bergabung sekarang!'); // This will be used to show a message if the submission is successful
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      username: '',
      email: '',
      password: '',
      phoneNumber: '',
      occupation: '',
      city: '',
      district:'',
      address: '',
      instagram: '',
      tiktok: '',
    },
    onSubmit: async (val) => {
      setMessage('Loading...');
      setSubmitted(true)
      const data = {
        fullName: val.fullName,
        username: val.username,
        email: val.email,
        password: val.password,
        phoneNumber: val.phoneNumber,
        occupation: val.occupation,
        city: val.city,
        district: val.district,
        address: val.address,
        instagram: val.instagram,
        tiktok: val.tiktok,
        role: 1
      };
      const JSONdata = JSON.stringify(data);
      const endpoint = 'http://localhost:6251/auth/register-reseller';
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
          setMessage('bergabung sekarang!');
          setSubmitted(false)
        }, 2000);
        setSubmitted(true);
      } else {
        setMessage('Gagal');
        setTimeout(() => {
          setMessage('bergabung sekarang!');
          setSubmitted(false)
        }, 2000);
      }
    },
    validationSchema: yup.object({
      fullName: yup.string().trim().required('Name is required'),
      email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
    }),
  });

  return(
    <div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-[#F5E8DF] rounded-3xl w-[90%] flex flex-col items-center justify-center h-[90%]'>
      <div className='flex w-full h-full'>
        <div className='basis-[55%] py-8 px-20'>

          <h2 className="text-femmy-pdark text-[35px] xl:text-[27px] font-head font-semibold leading-tight">Daftar menjadi </h2>
          <div className="pb-4 xl:pb-4 mb-8 border-b-[1px] border-femmy-pdark">
            <h2 className="text-femmy-pdark text-[35px] xl:text-[38px] font-head font-semibold leading-tight">Reseller Femmy </h2>
          </div>

          <form className='mb-4' onSubmit={formik.handleSubmit}>
            <div className="grid md:grid-cols-2 md:gap-4">
              <div className="relative z-0 mb-4 md:mb-2  w-full group">
                <input
                  className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                  placeholder="nama lengkap *"
                  name="fullName"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="relative z-0 mb-4 md:mb-2  w-full group">
                <input
                  className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                  placeholder="nama femmy reseller*"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>

            <div className="relative z-0 mb-4 md:mb-2  w-full group">
              <input
                className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                placeholder="e-mail*"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="email"
              />
            </div>

            <div className="grid md:grid-cols-2 md:gap-4">
              <div className="relative z-0 mb-4 md:mb-2  w-full group">
                <input
                  className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                  placeholder="kata sandi*"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="password"
                />
              </div>
              <div className="relative z-0 mb-4 md:mb-2  w-full group">
                <input
                  className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark"
                  placeholder="ulangi kata sandi*"
                  name="re-password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="password"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-4">
              <div className="relative z-0 mb-4 md:mb-2  w-full group">
                  <input
                    className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                    placeholder="no whatsapp*"
                    type={'tel'}
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
              </div>

              <div className="relative z-0 mb-4 md:mb-2  w-full group">
                <input
                  className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                  placeholder="pekerjaan*"
                  name="occupation"
                  value={formik.values.occupation}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-4">
              <div className="relative z-0 mb-4 md:mb-2  w-full group">
                <select className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] font-semibold tracking-[2px] text-[14px] border-femmy-pdark text-femmy-pdark">
                  <option>pilih kota*</option>
                </select>
              </div>

              <div className="relative z-0 mb-4 md:mb-2  w-full group">
                <select className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] font-semibold tracking-[2px] text-[14px] border-femmy-pdark text-femmy-pdark">
                  <option>pilih kecamatan*</option>
                </select>
              </div>
            </div>

            <div className="relative z-0 mb-4 md:mb-2  w-full group">
                <input
                  className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                  placeholder="alamat*"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
            </div>

            <div className="grid md:grid-cols-2 md:gap-4">
              <div className="relative z-0 mb-4 md:mb-2  w-full group">
                <input
                  className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                  placeholder="instagram"
                  name="instagram"
                  value={formik.values.instagram}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="relative z-0 mb-4 md:mb-2  w-full group">
                <input
                  className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                  placeholder="tiktok"
                  name="tiktok"
                  value={formik.values.tiktok}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitted?true:false}
              className="mt-4 w-full text-center text-femmy-white bg-femmy-pdark hover:bg-[#F6C2C6] hover:text-femmy-pdark  focus:ring-4 focus:outline-none tracking-[2px] focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 font-sans"
            >
              {message}
            </button>
          </form>

          <div className='text-center'>
            <p className='text-femmy-pdark font-sans'>sudah punya akun? <Link href={"/"} className='text-femmy-pdark font-semibold mb-4 underline'>masuk disini</Link></p>
          </div>

        </div>

        <div className='basis-[45%] relative'>
        <Link href="/" className='bg-[#951B66] w-[40px] h-[40px] absolute right-5 top-5 rounded-full flex justify-center items-center cursor-pointer'>
                <img className='object-contain w-[15px]' src='/images/xclose.png' />
        </Link>
            <img className='h-full w-full object-cover rounded-tr-3xl rounded-br-3xl' src='/images/banner-form-reseller.png'/>
        </div>
      </div>
    </div>
  )
}

export default FormReseller

