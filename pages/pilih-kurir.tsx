import type { NextPage } from 'next';
import Link from 'next/link';

import { verifyJwt } from '../utils/verifyJwt';
import {wrapper} from '../store/store';

// import component
import Layout from '../components/layouts/index';
import CardKeranjang from '../components/presentational/CardKeranjang/CardKeranjang';
import FormKontak from '../components/presentational/FormKontak/FormKontak';


const PilihKurir: NextPage = ({auth}:any) => {
  return (
    <Layout page="tentang-kami" auth={auth}>
      <section className="pb-8 pt-10 lg:pt-16 px-8 lg:px-16 bg-[#FEF7F8]">
        <nav className="flex mb-12 basis-full" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3 list-none">
                <li className="inline-flex items-center">
                    <Link href="/" className="inline-flex items-center text-sm font-medium font-sans text-femmy-pdark">Beranda</Link>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg aria-hidden="true" className="w-6 h-6 text-femmy-pdark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                        <Link href="/keranjang" className="ml-1 text-sm font-medium font-sans text-femmy-pdark">Keranjang</Link>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg aria-hidden="true" className="w-6 h-6 text-femmy-pdark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                        <Link href="/metode-pembayaran" className="ml-1 text-sm font-medium font-sans text-femmy-pdark">Pilih Metode Pembayaran</Link>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg aria-hidden="true" className="w-6 h-6 text-femmy-pdark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                        <Link href="/pilih-kurir" className="ml-1 text-sm font-bold font-sans text-femmy-pdark">Pilihan Pengiriman</Link>
                    </div>
                </li>
            </ol>
        </nav>

        <div className='text-center'>
            <h1 className='text-femmy-pdark text-[35px] font-head'>Pilihan Pengiriman</h1>
        </div>

        <div className='flex flex-wrap'>
            <div className='basis-full lg:basis-[70%] mb-4'>
                <h6 className='text-femmy-pdark font-sans text-[20px] border-b-[1px] border-femmy-pdark pb-4 pl-6 mb-4'>produk (15 produk)</h6>

                <div className='bg-[#F3E1E9] p-10 grid grid-cols-4 gap-10'>
                    <div className='rounded-3xl'>
                        <div className='bg-white rounded-t-3xl px-6 py-2'>
                            <img className='w-[130px] rounded-t-3xl m-auto' src='/images/produk/estrocal 1.png' />
                        </div>
                        <div className='bg-femmy-pdark text-white font-sans text-center rounded-b-3xl py-3'>2 items</div>
                    </div>

                    <div className='rounded-3xl'>
                        <div className='bg-white rounded-t-3xl px-6 py-2'>
                            <img className='w-[130px] rounded-t-3xl m-auto' src='/images/produk/estrocal 1.png' />
                        </div>
                        <div className='bg-femmy-pdark text-white font-sans text-center rounded-b-3xl py-3'>2 items</div>
                    </div>

                    <div className='rounded-3xl'>
                        <div className='bg-white rounded-t-3xl px-6 py-2'>
                            <img className='w-[130px] rounded-t-3xl m-auto' src='/images/produk/estrocal 1.png' />
                        </div>
                        <div className='bg-femmy-pdark text-white font-sans text-center rounded-b-3xl py-3'>2 items</div>
                    </div>

                    <div className='rounded-3xl'>
                        <div className='bg-white rounded-t-3xl px-6 py-2'>
                            <img className='w-[130px] rounded-t-3xl m-auto' src='/images/produk/estrocal 1.png' />
                        </div>
                        <div className='bg-femmy-pdark text-white font-sans text-center rounded-b-3xl py-3'>2 items</div>
                    </div>

                    <div className='rounded-3xl'>
                        <div className='bg-white rounded-t-3xl px-6 py-2'>
                            <img className='w-[130px] rounded-t-3xl m-auto' src='/images/produk/estrocal 1.png' />
                        </div>
                        <div className='bg-femmy-pdark text-white font-sans text-center rounded-b-3xl py-3'>2 items</div>
                    </div>
                </div>
            </div>

            <div className='basis-full lg:basis-[30%] pl-8'>
                <div>
                    <div className='bg-[#FDC8CE] px-10 pt-8 pb-10 rounded-3xl'>
                        <h3 className='text-femmy-pdark text-[20px] font-sansSemi border-b-[1px] border-femmy-pdark pb-4 mb-6'>Ringkasan Pesanan</h3>
                        <div className='flex items-start mb-4'>
                            <div className='pt-[2px]'>
                                <input id="default-kurir-1" type="radio" className="w-4 h-4 mr-4 text-femmy-pdark bg-gray-100 border-femmy-pdark focus:ring-femmy-pdark dark:focus:ring-femmy-pdark dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                    name="kurir"
                                />
                            </div>
                            <label htmlFor="default-kurir-1" className='text-femmy-pdark font-sansSemi'>JNE (Rp 13.000)<br/><span className='font-sans text-femmy-pdark'>Reguler 5-7 Okt</span></label>
                        </div>
                        <div className='flex items-start mb-4'>
                            <div className='pt-[2px]'>
                                <input id="default-kurir-2" type="radio" className="w-4 h-4 mr-4 text-femmy-pdark bg-gray-100 border-femmy-pdark focus:ring-femmy-pdark dark:focus:ring-femmy-pdark dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                    name="kurir"
                                />
                            </div>
                            <label htmlFor="default-kurir-2" className='text-femmy-pdark font-sansSemi'>SiCepat (Rp 8.000)<br/><span className='font-sans text-femmy-pdark'>Reguler 5-7 Okt</span></label>
                        </div>
                        <div className='flex items-start mb-4'>
                            <div className='pt-[2px]'>
                                <input id="default-kurir-3" type="radio" className="w-4 h-4 mr-4 text-femmy-pdark bg-gray-100 border-femmy-pdark focus:ring-femmy-pdark dark:focus:ring-femmy-pdark dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                    name="kurir"
                                />
                            </div>
                            <label htmlFor="default-kurir-3" className='text-femmy-pdark font-sansSemi'>Kurir Bintang Toedjoe<br/><span className='font-sans text-femmy-pdark'>Reguler 5-7 Okt</span></label>
                        </div>
                    </div>
                </div>

                <div className='mt-6'>
                    <Link href='/pembayaran' className='font-sansSemi text-white bg-femmy-pdark w-full block py-3 text-center rounded-3xl'>cek pesanan</Link>
                </div>
            </div>
        </div>
      </section>
    </Layout>
  );
};

export const getServerSideProps =  wrapper.getServerSideProps( store => async ({req, res}:any) => {

    let token = await verifyJwt(req.cookies.refreshToken)
    let auth = false
  
    if(token){
        auth = true
    }
  
    return {
      props: {
        auth : auth
      },
    }
})


export default PilihKurir;
