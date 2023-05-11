import React, {useState} from 'react';

export interface IInfoNotif {
  modal: boolean,
  text: string,
  counter: any
}

const InfoNotif: React.FC<IInfoNotif> = ({modal,closeModal,text,counter=0}:any) => {

  return (
    <div className={` ${modal ? 'fixed' : 'hidden'} fixed top-0 left-0 z-[100] w-full h-full bg-femmy-pdark bg-opacity-30`} >
      <div className='flex justify-center items-center text-center bg-[#F5E8DF] px-12 p-8 lg:h-[400px] rounded-3xl absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] '>
          <div>
            <img src="/images/check.png" alt="img thankyou" className='w-[70px] lg:w-[100px] m-auto mb-8'  />
            <p className='text-femmy-pdark font-sansMedium text-[20px] mb-4'>{text}</p>
            <p className='text-femmy-pdark font-sansMedium text-[20px]'>{counter}</p>
          </div>
      </div>
    </div>
  );
};

export default InfoNotif;
