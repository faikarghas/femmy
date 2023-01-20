import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react'
import Link from 'next/link';

// import component
import Layout from '../components/layouts/index';
import CardKeranjang from '../components/presentational/CardKeranjang/CardKeranjang';
import FormKontak from '../components/presentational/FormKontak/FormKontak';

// import hoc
import { withAUth } from '../hoc/withAuth';

const MetodePembayaran: NextPage = () => {

    const [radioVal, setRadioVal] = useState('')

    const handleOnChange = (e:any) => {
        setRadioVal(e.target.value);
    }

    useEffect(() => {
        console.log(radioVal);
    }, [radioVal])

    return (
        <Layout page="tentang-kami">
        <section className="pb-8 pt-10 lg:pt-16 px-8 lg:px-16 bg-[#FEF7F8]">
            <nav className="flex mb-12 basis-full" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3 list-none">
                    <li className="inline-flex items-center">
                        <Link href="/"><a className="inline-flex items-center text-sm font-medium font-sans text-femmy-pdark">Beranda</a></Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg aria-hidden="true" className="w-6 h-6 text-femmy-pdark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            <Link href="/keranjang"><a className="ml-1 text-sm font-medium font-sans text-femmy-pdark">Keranjang</a></Link>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg aria-hidden="true" className="w-6 h-6 text-femmy-pdark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            <Link href="/metode-pembayaran"><a className="ml-1 text-sm font-medium font-sans text-femmy-pdark">Pilih Metode Pembayaran</a></Link>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className='text-center mb-6'>
                <h1 className='text-femmy-pdark text-[35px] font-head mb-12'>Metode Pembayaran</h1>
                <h6 className='text-femmy-pdark font-sans text-[20px] text-center border-b-[1px] border-femmy-pdark pb-4 pl-6'>Pilih metode pembayaranmu. Kamu bisa melihat dan konfirmasi pesanan di tahap berikutnya</h6>
            </div>

            <div className=''>
                {/* Pembayaran Instan */}
                <div className={`flex flex-wrap ${parseInt(radioVal) <= parseInt('3') ? 'bg-[#F3E1E9]' : ''}`}>
                    <div className='basis-[35%] p-10'>
                        <h5 className='font-sansSemi text-femmy-pdark text-[18px]'>Pembayaran Instan</h5>
                    </div>
                    <div className='basis-[65%] p-10 text-center'>
                        <h5 className='font-sans text-femmy-pdark text-[18px] mb-12'>Pilih bank yang diinginkan</h5>
                        <ul className='flex justify-between px-10 mb-12'>
                            <li className='flex items-center'>
                                <input id="default-radio-1" type="radio" className="w-4 h-4 mr-4 text-femmy-pdark bg-gray-100 border-femmy-pdark focus:ring-femmy-pdark dark:focus:ring-femmy-pdark dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    name="payment-method"
                                    value={'1'}
                                    key={''}
                                    checked={radioVal === '1'}
                                    onChange={handleOnChange}
                                />
                                <label htmlFor="default-radio-1" >
                                    <img className='w-[100px]' src='/images/mpembayaran/shopee.png' alt='icon shopee pay'/>
                                </label>
                            </li>
                            <li className='flex items-center'>
                                <input id="default-radio-2" type="radio" className="w-4 h-4 mr-4 text-femmy-pdark bg-gray-100 border-femmy-pdark focus:ring-femmy-pdark dark:focus:ring-femmy-pdark dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                    name="payment-method"
                                    value={'2'}
                                    key={''}
                                    checked={radioVal === '2'}
                                    onChange={handleOnChange}
                                />
                                <label htmlFor="default-radio-2" >
                                    <img className='w-[150px]' src='/images/mpembayaran/gopay.png' alt='icon gopay pay'/>
                                </label>
                            </li>
                            <li className='flex items-center'>
                                <input id="default-radio-3" type="radio" className="w-4 h-4 mr-4 text-femmy-pdark bg-gray-100 border-femmy-pdark focus:ring-femmy-pdark dark:focus:ring-femmy-pdark dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                    name="payment-method"
                                    value={'3'}
                                    key={''}
                                    checked={radioVal === '3'}
                                    onChange={handleOnChange}
                                />
                                <label htmlFor="default-radio-3" >
                                    <img className='w-[130px]' src='/images/mpembayaran/ovo.png' alt='icon ovo pay'/>
                                </label>
                            </li>
                        </ul>
                        <p className='font-sansSemi text-femmy-pdark mb-12'>Kami akan verifikasi pembayaran Anda max. 1x24 jam setelah<br/>Anda melakukan konfirmasi pembayaran.</p>
                        <div className='mt-6'>
                            <Link href='/pilih-kurir'><a className={`font-sansSemi px-16 py-3 text-center rounded-3xl
                                ${parseInt(radioVal) <= parseInt('3') ? 'text-[#FDC8CE] bg-femmy-pdark' : 'text-femmy-pdark bg-[#FDC8CE]'}
                            `}>lanjut ke pengiriman</a></Link>
                        </div>
                    </div>
                </div>
                {/* virtual account */}
                <div className={`flex flex-wrap ${parseInt(radioVal) <= parseInt('8') && parseInt(radioVal) >= parseInt('4') ? 'bg-[#F3E1E9]' : ''}`}>
                    <div className='basis-[35%] p-10'>
                        <h5 className='font-sansSemi text-femmy-pdark text-[18px]'>Bank Transfer - Virtual Account</h5>
                    </div>
                    <div className='basis-[65%] p-10 text-center'>
                        <h5 className='font-sans text-femmy-pdark text-[18px] mb-12'>Pilih bank yang diinginkan</h5>
                        <ul className='flex flex-wrap justify-center px-10 mb-12'>
                            <li className='flex items-center basis-[33%] mb-8'>
                                <input id="default-radio-4" type="radio" className="w-4 h-4 mr-4 text-femmy-pdark bg-gray-100 border-femmy-pdark focus:ring-femmy-pdark dark:focus:ring-femmy-pdark dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    name="payment-method"
                                    value={'4'}
                                    key={''}
                                    checked={radioVal === '4'}
                                    onChange={handleOnChange}
                                />
                                <label htmlFor="default-radio-4" >
                                    <img className='w-[100px]' src='/images/mpembayaran/bni.png' alt='icon shopee pay'/>
                                </label>
                            </li>
                            <li className='flex items-center basis-[33%] mb-8'>
                                <input id="default-radio-5" type="radio" className="w-4 h-4 mr-4 text-femmy-pdark bg-gray-100 border-femmy-pdark focus:ring-femmy-pdark dark:focus:ring-femmy-pdark dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                    name="payment-method"
                                    value={'5'}
                                    key={''}
                                    checked={radioVal === '5'}
                                    onChange={handleOnChange}
                                />
                                <label htmlFor="default-radio-5" >
                                    <img className='w-[150px]' src='/images/mpembayaran/permata.png' alt='icon gopay pay'/>
                                </label>
                            </li>
                            <li className='flex items-center basis-[33%] mb-8'>
                                <input id="default-radio-6" type="radio" className="w-4 h-4 mr-4 text-femmy-pdark bg-gray-100 border-femmy-pdark focus:ring-femmy-pdark dark:focus:ring-femmy-pdark dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                    name="payment-method"
                                    value={'6'}
                                    key={''}
                                    checked={radioVal === '6'}
                                    onChange={handleOnChange}
                                />
                                <label htmlFor="default-radio-6" >
                                    <img className='w-[130px]' src='/images/mpembayaran/mandiri.png' alt='icon ovo pay'/>
                                </label>
                            </li>
                            <li className='flex items-center basis-[33%] mb-8'>
                                <input id="default-radio-7" type="radio" className="w-4 h-4 mr-4 text-femmy-pdark bg-gray-100 border-femmy-pdark focus:ring-femmy-pdark dark:focus:ring-femmy-pdark dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                    name="payment-method"
                                    value={'7'}
                                    key={''}
                                    checked={radioVal === '7'}
                                    onChange={handleOnChange}
                                />
                                <label htmlFor="default-radio-7" >
                                    <img className='w-[130px]' src='/images/mpembayaran/bca.png' alt='icon ovo pay'/>
                                </label>
                            </li>
                            <li className='flex items-center basis-[33%] mb-8'>
                                <input id="default-radio-8" type="radio" className="w-4 h-4 mr-4 text-femmy-pdark bg-gray-100 border-femmy-pdark focus:ring-femmy-pdark dark:focus:ring-femmy-pdark dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                    name="payment-method"
                                    value={'8'}
                                    key={''}
                                    checked={radioVal === '8'}
                                    onChange={handleOnChange}
                                />
                                <label htmlFor="default-radio-8" >
                                    <img className='w-[60px]' src='/images/mpembayaran/bri.png' alt='icon ovo pay'/>
                                </label>
                            </li>
                        </ul>
                        <p className='font-sansSemi text-femmy-pdark mb-12'>Kami akan verifikasi pembayaran Anda max. 1x24 jam setelah<br/>Anda melakukan konfirmasi pembayaran.</p>
                        <div className='mt-6'>
                            <Link href='/pilih-kurir'><a className={`font-sansSemi px-16 py-3 text-center rounded-3xl
                                ${parseInt(radioVal) <= parseInt('8') && parseInt(radioVal) >= parseInt('4') ? 'text-[#FDC8CE] bg-femmy-pdark' : 'text-femmy-pdark bg-[#FDC8CE]'}
                            `}>lanjut ke pengiriman</a></Link>
                        </div>
                    </div>
                </div>
                {/* cod */}
                <div className={`flex flex-wrap ${parseInt(radioVal) <= parseInt('9') && parseInt(radioVal) >= parseInt('8') ? 'bg-[#F3E1E9]' : ''}`}>
                    <div className='basis-[35%] p-10'>
                        <h5 className='font-sansSemi text-femmy-pdark text-[18px]'>Cash on Delivery</h5>
                    </div>
                    <div className='basis-[65%] p-10 text-center'>
                        <h5 className='font-sans text-femmy-pdark text-[18px] mb-12'>Pilih kurir yang diinginkan</h5>
                        <ul className='flex flex-wrap justify-center px-10 mb-12'>
                            <li className='flex items-center mb-8'>
                                <input id="default-radio-9" type="radio" className="w-4 h-4 mr-4 text-femmy-pdark bg-gray-100 border-femmy-pdark focus:ring-femmy-pdark dark:focus:ring-femmy-pdark dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    name="payment-method"
                                    value={'9'}
                                    key={''}
                                    checked={radioVal === '9'}
                                    onChange={handleOnChange}
                                />
                                <label htmlFor="default-radio-9" className='flex flex-col justify-center items-center'>
                                    <img className='w-[100px] mb-4' src='/images/mpembayaran/cod.png' alt='icon cod pay'/>
                                    <img className='w-[140px]' src='/images/mpembayaran/b77.png' alt='icon b7 pay'/>
                                </label>
                            </li>
                        </ul>
                        <div className='mt-6'>
                            <Link href='/metode-pembayaran'><a className={`font-sansSemi px-16 py-3 text-center rounded-3xl
                                ${parseInt(radioVal) <= parseInt('9') && parseInt(radioVal) >= parseInt('8') ? 'text-[#FDC8CE] bg-femmy-pdark' : 'text-femmy-pdark bg-[#FDC8CE]'}
                            `}>COD (Kurir B7)</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Layout>
    );
};

export default MetodePembayaran;
