import React from 'react';
import { customId } from '../../../utils/customId';


export interface IUtuhBersama {
    data:any
}

const SidebarAkun: React.FC<IUtuhBersama> = ({data}) => {

  return(
    <div className='bg-femmy-pdark p-10 lg:rounded-tl-[40px] lg:rounded-bl-[40px] basis-full lg:basis-[25%] mb-8 md:mb-0'>
        <div className='mb-8'>
            <img className='mx-auto' src='/images/user-avatar.png' />
        </div>
        <div className='text-center px-8'>
            <p className='font-sans text-white'>hi selamat datang!</p>
            <p className='font-sans font-semibold text-white text-[18px]'>{data.fullname}</p>
        </div>
        <div className='my-8 h-[1px] bg-[#FDC8CE] w-full'></div>
        <div className='text-center'>
            <p className='font-sans font-semibold text-[#FDC8CE]'>No. ID Femmy Bestie</p>
            <p className='font-sans font-bold text-[#FDC8CE] text-[20px]'>{customId(data.id)}</p>
        </div>
    </div>
  )
}

export default SidebarAkun

