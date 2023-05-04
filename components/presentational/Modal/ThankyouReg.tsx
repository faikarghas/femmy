import React, {useState} from 'react';

export interface IThankyouReg {
  modal: boolean
  closeModal: any
}

const ThankyouReg: React.FC<IThankyouReg> = ({modal,closeModal}:any) => {

  return (
    <div className={` ${modal ? 'fixed' : 'hidden'} fixed w-full h-full bg-femmy-pdark bg-opacity-30`} >
      <div className='flex justify-center items-center text-center bg-[#F5E8DF] px-12 h-[70%] rounded-3xl absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] '>
          <img onClick={closeModal} className='cursor-pointer object-contain w-[55px] absolute top-5 right-5' src='/images/close.png' />

          <div>
            <img src="/images/reg_thankyou.png" alt="img thankyou" className='w-[220px] m-auto mb-8'  />
            <h3 className='text-femmy-pdark font-head text-[30px] leading-[30px] mb-2'>Terima Kasih!</h3>
            <p className='text-femmy-pdark font-sansMedium text-[20px]'>silahkan cek email kamu untuk konfirmasi</p>
          </div>
      </div>
    </div>
  );
};

export default ThankyouReg;
