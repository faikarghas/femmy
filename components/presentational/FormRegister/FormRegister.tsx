import React from 'react';
import Link from 'next/link';

import { setModalRegisterState, setModalState } from "../../../store/modal";
import { useDispatch } from "react-redux";

export interface IFormRegister {

}

const FormRegister: React.FC<IFormRegister> = () => {
  const dispatch = useDispatch();


  return(
    <div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-[#F5E8DF] p-16 rounded-3xl w-[90%] flex flex-col items-center justify-center'>
      <div onClick={()=>dispatch(setModalRegisterState(false))} className='bg-[#951B66] w-[40px] h-[40px] absolute right-5 top-5 rounded-full flex justify-center items-center cursor-pointer'>
          <img className='object-contain w-[15px]' src='/images/xclose.png' />
      </div>
      <h2 className='text-femmy-pdark font-head text-[40px] mb-3'>Jadi Utuh Bersama</h2>
      <h4 className='text-femmy-pdark font-head text-[22px] mb-9'>Bergabung menjadi keluarga Femmy sekarang!</h4>

      <ul className='flex items-center mb-9'>
        <li className='bg-[#8F2A64] rounded-2xl text-center w-[290px]'>
            <Link href="/form-reseller">
              <a className='px-16 py-8 block'>
                <p className='text-[#DDC4B3] font-sans'>Daftar menjadi</p>
                <p className='text-white font-sans text-[20px]'>Femmy Reseller</p>
              </a>
            </Link>
        </li>
        <li className='font-sans text-femmy-pdark mx-5'>atau</li>
        <li className='bg-[#8F2A64] rounded-2xl text-center w-[290px]'>
          <Link href="/form-bestie">
            <a className='px-16 py-8 block'>
              <p className='text-[#DDC4B3] font-sans'>Daftar menjadi</p>
              <p className='text-white font-sans text-[20px]'>Femmy Bestie</p>
            </a>
          </Link>
        </li>
      </ul>

      <p className='text-femmy-pdark font-sans underline mb-20'> Pelajari manfaat menjadi <span className='font-semibold'>Femmy Bestie</span> dan <span className='font-semibold'>Femmy Reseller</span></p>
      <p onClick={()=>dispatch(setModalState(true))} className='text-femmy-pdark font-sans'>sudah punya akun? <Link href={"/"}><a className='text-femmy-pdark font-semibold mb-4 underline'>masuk disini </a></Link></p>

  </div>
  )
}

export default FormRegister

