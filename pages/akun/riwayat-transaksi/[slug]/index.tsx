import type { NextPage } from 'next';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// import component
import Layout from '../../../../components/layouts/index';

// import hoc
import { withAUth } from '../../../../hoc/withAuth';


const RiwayatTransaksi: NextPage = () => {
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
                            <Link href="/akun"><a className="inline-flex items-center text-sm font-medium font-sans text-femmy-pdark">Beranda</a></Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg aria-hidden="true" className="w-6 h-6 text-femmy-pdark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                <Link href="#"><a className="ml-1 text-sm font-bold font-sans text-femmy-pdark">Riwayat Transaksi</a></Link>
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
                        <ul className='w-full flex flex-wrap border-t-[1px] border-b-[1px] bg-[#951B66] border-femmy-pdark rounded-tr-[2rem]'>
                            <li className={`basis-1/3 cursor-pointer text-center font-sans font-bold`}>
                                <Link href="/akun">
                                    <a className={`rounded-tr-[2rem] p-4 block font-sansBold bg-[#951B66] text-[#FDC8CE] border-r-[1px] border-[#FDC8CE]`}>Akun</a>
                                </Link>
                            </li>
                            <li className={`basis-1/3 cursor-pointer text-center font-sans font-bold bg-[#FDC8CE]`}>
                                <Link href="/akun/alamat" className={`rounded-tr-[2rem] p-4`}>
                                    <a className={`rounded-tr-[2rem] p-4 block font-sansBold bg-[#951B66] text-[#FDC8CE] border-r-[1px] border-[#FDC8CE]`}>Alamat</a>

                                </Link>
                            </li>
                            <li className={`basis-1/3 cursor-pointer text-center font-sans font-bold rounded-tr-[2rem] }`}>
                                <Link href="/akun/riwayat-transaksi" className={`rounded-tr-[2rem] p-4 `}>
                                    <a className={`rounded-tr-[2rem] p-4 block font-sansBold bg-[#FDC8CE] text-femmy-pdark border-r-[1px] border-femmy-pdark`}>Riwayat Transaksi</a>
                                </Link>
                            </li>
                        </ul>
                        {/* PESANAN ID */}
                        <div className='pt-12 px-10'>
                            <div className='mb-8'>
                                <h3 className='font-sansBold text-femmy-pdark text-[24px]'>Order ID : 73549</h3>
                                <p className='font-sans text-femmy-pdark'>Rabu, 17 Agustus 2022 16:31</p>
                            </div>
                            <div className='flex pb-8'>
                                <div className='basis-full lg:basis-1/2'>
                                    <div className='mb-4'>
                                        <h3 className='font-sansBold text-femmy-pdark text-[18px]'>Status Pembayaran</h3>
                                        <p className='font-sans text-femmy-pdark'>Sudah Dikirimkan</p>
                                    </div>

                                    <div className='mb-4'>
                                        <h3 className='font-sansBold text-femmy-pdark text-[18px]'>Alamat Pengiriman</h3>
                                        <p className='font-sans text-femmy-pdark'>Ruth Eirene</p>
                                        <p className='font-sans text-femmy-pdark'>08989489400402</p>
                                        <p className='font-sans text-femmy-pdark'>San Bruno 94066, California, U.S</p>
                                        <p className='font-sans text-femmy-pdark'>Postal code Los Angeles 90001</p>
                                    </div>

                                    <div className='mb-4'>
                                        <h3 className='font-sansBold text-femmy-pdark text-[18px]'>Estimasi Pengiriman</h3>
                                        <p className='font-sans text-femmy-pdark'>2-5 hari kerja</p>
                                    </div>
                                </div>
                                <div className='basis-full lg:basis-1/2'>
                                    <div className='mb-4'>
                                        <h3 className='font-sansBold text-femmy-pdark text-[18px]'>Status Pengiriman</h3>
                                        <p className='font-sans text-femmy-pdark'>Sudah Dikirimkan</p>
                                    </div>

                                    <div className='mb-4'>
                                        <h3 className='font-sansBold text-femmy-pdark text-[18px]'>Informasi Pembayaran</h3>
                                        <p className='font-sans text-femmy-pdark'>Bank Virtual Account</p>
                                    </div>

                                    <div className='mb-4'>
                                        <h3 className='font-sansBold text-femmy-pdark text-[18px]'>Informasi Pengiriman</h3>
                                        <p className='font-sans text-femmy-pdark'>Anteraja Regular</p>
                                    </div>
                                    <div className='mb-4'>
                                        <h3 className='font-sansBold text-femmy-pdark text-[18px]'>Nomor Tracking Pesanan</h3>
                                        <p className='font-sans text-femmy-pdark'>10005490171667</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-femmy-pdark h-[1px] mx-8'></div>
                        {/* RANGKUMAN PESANAN */}
                        <div className='bg-[#FDC8CE]'>
                            <div className='pt-8 px-10 mb-8'>
                                <h3 className='font-sansBold text-femmy-pdark text-[20px]'>Rangkuman Pesanan (15 items)</h3>
                            </div>
                            <div className='flex flex-wrap pb-8 mx-10'>
                                <div className='basis-full flex flex-wrap rangkuman-card w-full'>
                                    <div className='basis-[18%] py-6 px-6'>
                                        <div className='bg-white p-4 flex justify-center items-center rounded-xl'>
                                            <img className='w-[100px]' src='/images/produk/estrocal 1.png' />
                                        </div>
                                    </div>
                                    <div className='basis-[82%] px-8 py-10 flex flex-warp items-center'>
                                        <div className='basis-[100%] w-full'>
                                            <h5 className='text-femmy-pdark font-sansBold'>Femmy Trimune</h5>
                                            <span className='block font-sansSemi text-femmy-pdark'>RP 25.000,-</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='basis-full flex flex-wrap rangkuman-card w-full'>
                                    <div className='basis-[18%] py-6 px-6'>
                                        <div className='bg-white p-4 flex justify-center items-center rounded-xl'>
                                            <img className='w-[100px]' src='/images/produk/estrocal 1.png' />
                                        </div>
                                    </div>
                                    <div className='basis-[82%] px-8 py-10 flex flex-warp items-center'>
                                        <div className='basis-[100%] w-full'>
                                            <h5 className='text-femmy-pdark font-sansBold'>Femmy Trimune</h5>
                                            <span className='block font-sansSemi text-femmy-pdark'>RP 25.000,-</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='basis-full flex flex-wrap rangkuman-card w-full'>
                                    <div className='basis-[18%] py-6 px-6'>
                                        <div className='bg-white p-4 flex justify-center items-center rounded-xl'>
                                            <img className='w-[100px]' src='/images/produk/estrocal 1.png' />
                                        </div>
                                    </div>
                                    <div className='basis-[82%] px-8 py-10 flex flex-warp items-center'>
                                        <div className='basis-[100%] w-full'>
                                            <h5 className='text-femmy-pdark font-sansBold'>Femmy Trimune</h5>
                                            <span className='block font-sansSemi text-femmy-pdark'>RP 25.000,-</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-femmy-pdark h-[1px] mx-10'></div>
                        {/* KALKULASI PESANAN */}
                        <div className='pt-8 px-10 mb-8'>
                            <ul className='flex justify-between'>
                                <li className='font-sans text-femmy-pdark'>subtotal</li>
                                <li className='font-sansBold text-femmy-pdark'>Rp 319.000</li>
                            </ul>
                            <ul className='flex justify-between'>
                                <li className='font-sans text-femmy-pdark'>pengiriman</li>
                                <li className='font-sansBold text-femmy-pdark'>Rp 13.000</li>
                            </ul>
                            <ul className='flex justify-between mb-4'>
                                <li className='font-sans text-femmy-pdark'>poin yang diperoleh</li>
                                <li className='font-sansBold text-femmy-pdark'>Rp 319.000</li>
                            </ul>
                            <ul className='flex justify-between'>
                                <li className='font-sansSemi text-femmy-pdark'>TOTAL</li>
                                <li className='font-sansBold text-femmy-pdark'>Rp 332.000</li>
                            </ul>
                        </div>
                        {/* BUTTON PESANAN */}
                        <div className='px-10 mb-20'>
                            <ul className='flex'>
                                <li className='mr-4'>
                                    <Link href='/'><a className='block bg-femmy-pdark py-3 px-16 rounded-3xl text-[#F9EFE6] font-sansSemi'>LACAK PESANAN</a></Link>
                                </li>
                                <li>
                                    <Link href='/'><a className='block bg-[#FDC8CE] py-3 px-16 rounded-3xl text-femmy-pdark border-[1px] border-femmy-pdark font-sansSemi'>UNDUH INVOICE</a></Link>
                                </li>
                            </ul>
                        </div>
                        {/* SEJARAH PESANAN */}
                        <div className='px-10 pb-12'>
                            <h3 className='font-sansBold text-femmy-pdark text-[20px] mb-6'>Sejarah Pesanan</h3>
                            <ul className='flex justify-between py-3 border-b-[1px] border-femmy-pdark'>
                                <li className='font-sansSemi text-femmy-pdark'>Pesanan telah dilakukan</li>
                                <li className='font-sans text-femmy-pdark'>Rabu, 17 Agst 2022 16:31</li>
                            </ul>
                            <ul className='flex justify-between py-3 border-b-[1px] border-femmy-pdark'>
                                <li className='font-sansSemi font-medium text-femmy-pdark'>Pesanan telah dilakukan</li>
                                <li className='font-sans text-femmy-pdark'>Rabu, 17 Agst 2022 16:31</li>
                            </ul>
                            <ul className='flex justify-between py-3 border-b-[1px] border-femmy-pdark'>
                                <li className='font-sansSemi font-medium text-femmy-pdark'>Pesanan telah dilakukan</li>
                                <li className='font-sans text-femmy-pdark'>Rabu, 17 Agst 2022 16:31</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default RiwayatTransaksi;