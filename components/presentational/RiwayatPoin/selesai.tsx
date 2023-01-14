import React from 'react';
import Link from 'next/link';

export interface ISelesai {
}

const Selesai: React.FC<ISelesai> = () => {
    return (
        <div>
            <h4 className='font-sansBold text-[20px] text-femmy-pdark mb-4'>Selesai</h4>
            <div className='flex flex-wrap'>
                <div className='basis-full bg-[#FDC8CE] border-[1px] border-femmy-pdark px-8 py-4 rounded-xl mb-4'>
                    <p className='text-[#8F2A64] font-sans'>17/09/22</p>
                    <p className='font-sansBold text-[#CC3F80] text-end text-[20px]'>-Rp25.000</p>
                    <ul className='flex justify-between mb-4'>
                        <li className='text-[#8F2A64] font-sans'>
                            <p className='font-sans text-[#8F2A64]'>Transfer Poin GO-PAY</p>
                            <p className='font-sans text-[#8F2A64]'>#68462944920048220</p>
                        </li>
                    </ul>
                </div>
                <div className='basis-full bg-[#FDC8CE] border-[1px] border-femmy-pdark px-8 py-4 rounded-xl mb-4'>
                    <p className='text-[#8F2A64] font-sans'>17/09/22</p>
                    <p className='font-sansBold text-[#CC3F80] text-end text-[20px]'>-Rp25.000</p>
                    <ul className='flex justify-between mb-4'>
                        <li className='text-[#8F2A64] font-sans'>
                            <p className='font-sans text-[#8F2A64]'>Transfer Poin GO-PAY</p>
                            <p className='font-sans text-[#8F2A64]'>#68462944920048220</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Selesai

