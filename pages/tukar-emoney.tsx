import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

// import component

// import hoc
import { withAUth } from '../hoc/withAuth';

const TukarEmoney: NextPage = () => {
  return (
    <div className='bg-[#6A1445] w-full h-screen'>
        <div className='bg-[#F5E8DF] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[65%] rounded-3xl py-12 px-20'>
            <div className='absolute top-5 right-5'>
                <Link href="/katalog-hadiah"><a><img className='w-[50px] object-contain' src='/images/icon-close.png' /></a></Link>
            </div>
            <h5 className='text-femmy-pdark font-sansBold text-[20px] mb-4'>Poin Rewards-mu : 20.000</h5>
            <ul className='flex mb-10'>
                <li className='font-sans text-femmy-pdark flex items-center mr-6'>masukan nilai yang ingin ditukarkan</li>
                <li className='mr-4'>
                    <input
                        type="search"
                        id="default-search"
                        className="block p-2 pl-4 w-full text-sm text-gray-900 bg-transparent rounded-xl focus:outline-none border-femmy-pdark"
                        placeholder="Rp"
                    />
                </li>
                <li className='flex items-center'>
                    <span className='font-sans text-femmy-pdark'>*max Rp10.000.000</span>
                </li>
            </ul>
            <ul className='flex mb-5'>
                <li><img className='w-[280px]' src='/images/switch-poin.png'/></li>
            </ul>
            <div className='flex flex-wrap'>
                <div className='basis-full'>
                    <h5 className='text-femmy-pdark font-sansBold text-[20px] mb-4'>No HP di bawah ini akan dihubungkan ke GoPay</h5>
                </div>
                <div className='basis-[60%]'>
                    <div className='mb-4'>
                        <p className='text-femmy-pdark font-sans'>masukan no. ponsel yang dituju</p>
                        <p className='text-femmy-pdark font-sans text-[12px]'>*pastikan no. ponsel sudah terdaftar</p>
                    </div>
                    <div>
                        <input
                            type="search"
                            id="default-search"
                            className="block p-2 pl-4 w-full text-sm text-gray-900 bg-transparent rounded-xl focus:outline-none border-femmy-pdark mb-4"
                            placeholder=""
                        />
                        <ul className='flex flex-wrap justify-between'>
                            <li className='basis-[48%]'><Link href="/"><a className='bg-femmy-pdark py-2 px-10 font-sans text-[#FDC8CE] block rounded-lg text-center'>Kembali</a></Link></li>
                            <li className='basis-[48%] bg-femmy-pdark py-2 px-10 font-sans text-[#FDC8CE] cursor-pointer rounded-lg text-center'>Kirim</li>
                        </ul>
                    </div>
                </div>
                <div className='basis-[40%]'></div>
            </div>
        </div>
    </div>
  );
};

export default TukarEmoney;
