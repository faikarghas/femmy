import React, {useState} from 'react';
import Link from 'next/link';

import { useFormik } from 'formik';
import * as yup from 'yup';
import ThankyouReg from '../Modal/ThankyouReg';

export interface IFormBestie {
  provinsi:any;
  kabupaten:any;
  kecamatan:any;
}

const FormBestie: React.FC<IFormBestie> = ({provinsi,kabupaten,kecamatan}) => {
  const [message, setMessage] = useState('bergabung sekarang!');
  const [modal, setModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      address: '',
      provinsi: '',
      kabupaten: '',
      kecamatan: '',
      kodepos: '',
      confPassword: '',
    },
    onSubmit: async (val, { resetForm }) => {
      setMessage('Loading..')
      setSubmitted(true)

      // set default address
      const dataAddress = {
        data: {
          Provinsi: val.provinsi,
          Kabupaten: val.kabupaten,
          kecamatan: val.kecamatan,
          kodepos: val.kodepos,
          address: val.address,
        }
      }
      const endpoint = 'http://localhost:1337/api/user-addresses';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataAddress),
      };
      const response = await fetch(endpoint, options);
      const result = await response.json();

      console.log(result,'DF');


      const idAddress = result.data.id

      if (result.data.id) {
        const data = {
          default_address:{
            connect:[idAddress]
          },
          user_addresses:{
            connect:[idAddress]
          },
          username: val.fullName.split(' ')[0],
          fullname: val.fullName,
          email: val.email,
          password: val.password,
          type: 'Bestie',
        };
        // register
        const JSONdata = JSON.stringify(data);
        const endpoint = 'http://localhost:1337/api/auth/local/register';
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

        if (result.user) {
          setMessage('bergabung sekarang!');
          setSubmitted(false);
          setModal(true)
          resetForm()
        } else {
          setMessage(result.error.message);
          setSubmitted(false);
          setTimeout(() => {
            setMessage('bergabung sekarang!');
          }, 2000);
        }

      } else {
        setMessage(result.error.message);
        setTimeout(() => {
          setMessage('bergabung sekarang!');
        }, 2000);
        setSubmitted(false);
        resetForm()
      }
    },
    validationSchema: yup.object({
      fullName: yup.string().trim().required('Name is required'),
      email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
      confPassword: yup.string().oneOf([yup.ref("password"), null])

    }),
  });

  const closeModal = () => {
    setModal(false)
  }

  return(
    <>
      <div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-[#F5E8DF] lg:rounded-3xl w-full lg:w-[90%] h-full lg:h-[90%] flex flex-col items-center justify-center p-8'>
        <div className='flex flex-wrap w-full h-full overflow-auto lg:overflow-hidden'>
          <div className='basis-full lg:basis-[55%] lg:pt-8 pb-8 lg:px-20'>
            <Link href="/" className='bg-[#951B66] w-[40px] h-[40px] absolute right-5 top-5 rounded-full flex justify-center items-center cursor-pointer lg:hidden'>
                  <img className='object-contain w-[15px]' src='/images/xclose.png' />
            </Link>

            <h2 className="text-femmy-pdark text-[35px] xl:text-[27px] font-head font-semibold leading-tight">Daftar menjadi</h2>
            <div className="pb-4 xl:pb-4 mb-8 border-b-[1px] border-femmy-pdark">
              <h2 className="text-femmy-pdark text-[35px] xl:text-[38px] font-head font-semibold leading-tight">Femmy Bestie</h2>
            </div>

            <form className='mb-4' onSubmit={formik.handleSubmit}>
              <div className="relative z-0 mb-4 md:mb-2  w-full group">
                <input
                  className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                  placeholder="nama lengkap*"
                  name="fullName"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
              </div>

              <div className="relative z-0 mb-4 md:mb-2  w-full group">
                <input
                  className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                  placeholder="e-mail*"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 md:gap-4">
                <div className="relative z-0 mb-4 md:mb-2  w-full group">
                  <input
                    className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                    placeholder="kata sandi*"
                    name="password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
                </div>
                <div className="relative z-0 mb-4 md:mb-2  w-full group">
                  <input
                    className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark"
                    placeholder="ulangi kata sandi*"
                    name="confPassword"
                    type="password"
                    value={formik.values.confPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 md:gap-4">
                <div className="relative z-0 mb-4 md:mb-2  w-full group">
                <select
                  className="bg-transparent w-full rounded-lg tracking-[2px] text-femmy-pdark text-[13px] font-semibold placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                  placeholder="Provinsi*"
                  name="provinsi"
                  value={formik.values.provinsi}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                  >
                      <option className='tracking-[2px] text-femmy-pdark text-[13px] font-semibold' value={0}>Provinsi</option>
                      {provinsi.data.map((data:any,i:any)=>{
                          return (
                              <option className='tracking-[2px] text-femmy-pdark text-[13px] font-semibold' key={i} value={data.id}>{data.attributes.name}</option>
                          )
                      })}
                  </select>
                </div>

                <div className="relative z-0 mb-4 md:mb-2  w-full group">
                <select
                  className="bg-transparent w-full rounded-lg tracking-[2px] text-femmy-pdark text-[13px] font-semibold placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                  placeholder="Kabupaten*"
                  name="kabupaten"
                  value={formik.values.kabupaten}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                  >
                      <option className='tracking-[2px] text-femmy-pdark text-[13px] font-semibold' value={0}>Kabupaten</option>
                      {kabupaten.data.map((data:any,i:any)=>{
                          return (
                              <option className='tracking-[2px] text-femmy-pdark text-[13px] font-semibold' key={i} value={data.id}>{data.attributes.name}</option>
                          )
                      })}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 md:gap-4">
                <div className="relative z-0 mb-4 md:mb-2  w-full group">
                <select
                  className="bg-transparent w-full tracking-[2px] text-femmy-pdark text-[13px] font-semibold rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                  placeholder="Kecamatan*"
                  name="kecamatan"
                  value={formik.values.kecamatan}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                  >
                      <option className='tracking-[2px] text-femmy-pdark text-[13px] font-semibold' value={0}>Kecamatan</option>
                      {kecamatan.data.map((data:any,i:any)=>{
                          return (
                              <option className='tracking-[2px] text-femmy-pdark text-[13px] font-semibold' key={i} value={data.id}>{data.attributes.name}</option>
                          )
                      })}
                  </select>
                </div>

                <div className="relative z-0 mb-4 md:mb-2  w-full group">
                  <input
                    className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark"
                    placeholder="Kodepos*"
                    name="kodepos"
                    value={formik.values.kodepos}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>

              <div className="relative z-0 mb-4 md:mb-2  w-full group">
                  <textarea
                    className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                    placeholder="alamat*"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />
              </div>

              <button
                type="submit"
                disabled={submitted?true:false}
                className="mt-4 w-full text-center text-femmy-white bg-femmy-pdark hover:bg-[#F6C2C6] hover:text-femmy-pdark focus:ring-4 focus:outline-none tracking-[2px] focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 font-sans"
              >
                {message}
              </button>
            </form>

            <div className='text-center'>
              <p className='text-femmy-pdark font-sans'>sudah punya akun? <Link href={"/login"} className='text-femmy-pdark font-semibold mb-4 underline'>masuk disini</Link></p>
            </div>

          </div>

          <div className='basis-full lg:basis-[45%] relative hidden lg:block'>
              <Link href="/" className='bg-[#951B66] w-[40px] h-[40px] absolute right-5 top-5 rounded-full flex justify-center items-center cursor-pointer'>
                  <img className='object-contain w-[15px]' src='/images/xclose.png' />
              </Link>
              <img className='h-full w-full object-cover rounded-tr-3xl rounded-br-3xl' src='/images/banner-form-bestie.png'/>
          </div>
        </div>

      </div>

      <ThankyouReg modal={modal} closeModal={closeModal}/>
    </>
  )
}

export default FormBestie

