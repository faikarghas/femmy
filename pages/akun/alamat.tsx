import type { NextPage } from 'next';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// import component
import Layout from '../../components/layouts/index';
import AkunInformasi from '../../components/presentational/AkunInformasi/AkunInformasi';
import AkunSandi from '../../components/presentational/AkunSandi/AkunSandi';

// import hoc
import { withAUth } from '../../hoc/withAuth';


const AkunAlamat: NextPage = () => {
    const [activeTab, setActiveTab] = useState<number>(1);


    const tabHandler = (n:any) => {
        setActiveTab(n)
    };

    return (
        <Layout page="akun-saya">
            <section className='pt-10 mb-24 px-8 lg:px-16 bg-[#FEF7F8]'>
                <nav className="flex mb-24" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3 list-none">
                        <li className="inline-flex items-center">
                            <a href="#" className="inline-flex items-center text-sm font-medium font-sans text-femmy-pdark">Beranda</a>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg aria-hidden="true" className="w-6 h-6 text-femmy-pdark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                <a href="#" className="ml-1 text-sm font-bold font-sans text-femmy-pdark">Alamat</a>
                            </div>
                        </li>
                    </ol>
                </nav>
                <div className='mb-6'>
                    <h1 className='font-head text-femmy-pdark text-[35px] font-semibold'>Update Akunmu</h1>
                </div>
                <div className='flex flex-wrap'>
                    <div className='bg-femmy-pdark p-10 rounded-tl-[40px] rounded-bl-[40px] basis-[25%]'>
                        <div className='mb-8'>
                            <img className='mx-auto' src='/images/user-avatar.png' />
                        </div>
                        <div className='text-center px-8'>
                            <p className='font-sans text-white'>hi selamat datang!</p>
                            <p className='font-sans font-semibold text-white text-[18px]'>Ruth Eirene</p>
                        </div>
                        <div className='my-8 h-[1px] bg-[#FDC8CE] w-full'></div>
                        <div className='text-center'>
                            <p className='font-sans font-semibold text-[#FDC8CE]'>No. ID Femmy Reseller</p>
                            <p className='font-sans font-bold text-[#FDC8CE] text-[20px]'>F599999</p>
                        </div>
                    </div>
                    <div className='w-full basis-[75%] bg-[#FDC8CE] rounded-tr-[40px] rounded-br-[40px]'>
                        <ul className='w-full flex flex-wrap border-t-[1px] border-b-[1px] bg-[#FDC8CE] border-femmy-pdark rounded-tr-[2rem]'>
                            <li className={`basis-1/3 cursor-pointer text-center font-sans font-bold`}>
                                <Link href="/akun">
                                    <a className={`rounded-tr-[2rem] p-4 block font-sans bg-[#951B66] text-[#FDC8CE] border-r-[1px] border-[#FDC8CE]`}>Akun</a>
                                </Link>
                            </li>
                            <li className={`basis-1/3 cursor-pointer text-center font-sans font-bold bg-[#951B66]`}>
                                <Link href="/akun/alamat" className={`rounded-tr-[2rem] p-4`}>
                                    <a className={`rounded-tr-[2rem] p-4 block font-sans bg-[#FDC8CE] text-femmy-pdark border-r-[1px] border-femmy-pdark`}>Alamat</a>
                                </Link>
                            </li>
                            <li className={`basis-1/3 cursor-pointer text-center font-sans font-bold rounded-tr-[2rem] }`}>
                                <Link href="/akun/riwayat-transaksi" className={`rounded-tr-[2rem] p-4 `}>
                                    <a className={`rounded-tr-[2rem] p-4 block font-sans bg-[#951B66] text-[#FDC8CE] border-r-[1px] border-[#FDC8CE]`}>Riwayat Transaksi</a>
                                </Link>
                            </li>
                        </ul>
                        <div>
                            <div className='flex flex-wrap'>
                                <div className='py-8 px-16 basis-full h-[516px] overflow-y-scroll'>
                                    <div className='mb-9'>
                                        <h3 className='info mb-2 text-[20px] font-sans text-femmy-pdark font-bold'>Ruth Eirene</h3>
                                        <p className='text-femmy-pdark leading-tight font-sans'>08989489400402</p>
                                        <p className='text-femmy-pdark leading-tight font-sans'>Jl. Layar Permai 8B No.1 A,  Jakarta Utara, Penjaringan, DKI Jakarta 14410</p>
                                        <div className='mt-8'>
                                            <div className='flex flex-wrap justify-between mb-4'>
                                                <Link href="/"><a className='rounded-xl basis-[49%] text-center block font-sans text-[#FDC8CE] bg-femmy-pdark py-2 w-full'>edit</a></Link>
                                                <Link href="/"><a className='rounded-xl basis-[49%] text-center block font-sans text-femmy-pdark bg-[#FDC8CE] py-2 w-full border-[1px] border-femmy-pdark'>hapus</a></Link>
                                            </div>
                                            <div className='flex'>
                                                <div className='rounded-xl text-center block font-sans text-[#FDC8CE] bg-femmy-pdark py-2 w-full cursor-pointer'>default</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mb-9'>
                                        <h3 className='info mb-2 text-[20px] font-sans text-femmy-pdark font-bold'>Ruth Eirene</h3>
                                        <p className='text-femmy-pdark leading-tight font-sans'>08989489400402</p>
                                        <p className='text-femmy-pdark leading-tight font-sans'>Jl. Layar Permai 8B No.1 A,  Jakarta Utara, Penjaringan, DKI Jakarta 14410</p>
                                        <div className='mt-8'>
                                            <div className='flex flex-wrap justify-between mb-4'>
                                                <Link href="/"><a className='rounded-xl basis-[49%] text-center block font-sans text-[#FDC8CE] bg-femmy-pdark py-2 w-full'>edit</a></Link>
                                                <Link href="/"><a className='rounded-xl basis-[49%] text-center block font-sans text-femmy-pdark bg-[#FDC8CE] py-2 w-full border-[1px] border-femmy-pdark'>hapus</a></Link>
                                            </div>
                                            <div className='flex'>
                                                <div className='rounded-xl text-center block font-sans text-[#FDC8CE] bg-femmy-pdark py-2 w-full cursor-pointer'>set sebagai default</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <h3 className='info mb-2 text-[20px] font-sans text-femmy-pdark font-bold'>Ruth Eirene</h3>
                                        <p className='text-femmy-pdark leading-tight font-sans'>08989489400402</p>
                                        <p className='text-femmy-pdark leading-tight font-sans'>Jl. Layar Permai 8B No.1 A,  Jakarta Utara, Penjaringan, DKI Jakarta 14410</p>
                                        <div className='mt-8'>
                                            <div className='flex flex-wrap justify-between mb-4'>
                                                <Link href="/"><a className='rounded-xl basis-[49%] text-center block font-sans text-[#FDC8CE] bg-femmy-pdark py-2 w-full'>edit</a></Link>
                                                <Link href="/"><a className='rounded-xl basis-[49%] text-center block font-sans text-femmy-pdark bg-[#FDC8CE] py-2 w-full border-[1px] border-femmy-pdark'>hapus</a></Link>
                                            </div>
                                            <div className='flex'>
                                                <div className='rounded-xl text-center block font-sans text-[#FDC8CE] bg-femmy-pdark py-2 w-full cursor-pointer'>set sebagai default</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mx-16 h-[1px] bg-femmy-pdark w-full'></div>
                                <div className='p-8 px-16 basis-full'>
                                    <div className='flex'>
                                        <div className='rounded-xl text-center block font-sans text-[#FDC8CE] bg-femmy-pdark py-2 w-full cursor-pointer'>tambah alamat</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default AkunAlamat;