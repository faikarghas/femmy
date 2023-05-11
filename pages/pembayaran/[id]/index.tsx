import type { NextPage } from 'next';
import Link from 'next/link';
import { Accordion } from "flowbite-react";

import { verifyJwt } from '../../../utils/verifyJwt';
import {wrapper} from '../../../store/store';

// import component
import Layout from '../../../components/layouts/index';

const Pembayaran: NextPage = ({auth}:any) => {
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
                        <Link href="/pilih-kurir" className="ml-1 text-sm font-medium font-sans text-femmy-pdark">Pilihan Pengiriman</Link>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg aria-hidden="true" className="w-6 h-6 text-femmy-pdark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                        <Link href="/pilih-kurir" className="ml-1 text-sm font-medium font-sans text-femmy-pdark">Pembayaran</Link>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg aria-hidden="true" className="w-6 h-6 text-femmy-pdark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                        <Link href="#" className="ml-1 text-sm font-bold font-sans text-femmy-pdark">Panduan Pembayaran</Link>
                    </div>
                </li>
            </ol>
        </nav>

        <div className='flex flex-wrap'>
            <div className='basis-full lg:basis-[35%] mb-4 border-r-[1px] border-femmy-pdark pt-12'>
                <h2 className='text-femmy-pdark font-sansSemi text-[26px] mb-6 leading-tight'>Panduan<br/>Pembayaran</h2>
                <div>
                    <Accordion alwaysOpen={true} style={{border:'none'}}>
                        <Accordion.Panel>
                            <Accordion.Title style={{backgroundColor:'#FDC8CE',padding:'16px',borderRadius:'0px',border:'none',boxShadow:'none'}} className="override-button-acc">
                                <div className="flex items-center justify-between w-full font-medium" data-accordion-target="#accordion-faq-body-1" aria-expanded="false" aria-controls="accordion-faq-body-1">
                                    <span className="font-sansSemi text-femmy-pdark text-[18px]">ATM BCA</span>
                                </div>
                            </Accordion.Title>
                            <Accordion.Content style={{border:'none'}}>
                                <div className='p-4'>
                                    <ol>
                                        <li className='font-sans text-femmy-pdark'>Masukkan kartu dan PIN Anda.</li>
                                        <li className='font-sans text-femmy-pdark'>Pilih Transaksi Lainnya, lalu Transfer, lalu ke Rek BCA Virtual Account.</li>
                                        <li className='font-sans text-femmy-pdark'>Masukkan nomor Virtual Account Anda 1270200003619011 kemudian klik Benar.</li>
                                        <li className='font-sans text-femmy-pdark'>Cek nama dan nominal pembayaran, apabila telah sesuai, klik Ya.</li>
                                        <li className='font-sans text-femmy-pdark'>Transaki selesai, mohon simpan bukti pembayaran.</li>
                                    </ol>
                                </div>
                            </Accordion.Content>
                        </Accordion.Panel>

                        <Accordion.Panel >
                            <Accordion.Title style={{backgroundColor:'#FDC8CE',padding:'16px',boxShadow:'none'}} className="override-button-acc">
                                <div className="flex items-center justify-between w-full font-medium" data-accordion-target="#accordion-faq-body-1" aria-expanded="false" aria-controls="accordion-faq-body-1">
                                    <span className="font-sansSemi text-femmy-pdark text-[18px]">BCA Mobile Banking (mBCA)</span>
                                </div>
                            </Accordion.Title>
                            <Accordion.Content>
                                <div className='p-4'>
                                    <ol>
                                        <li className='font-sans text-femmy-pdark'>Masukkan kartu dan PIN Anda.</li>
                                        <li className='font-sans text-femmy-pdark'>Pilih Transaksi Lainnya, lalu Transfer, lalu ke Rek BCA Virtual Account.</li>
                                        <li className='font-sans text-femmy-pdark'>Masukkan nomor Virtual Account Anda 1270200003619011 kemudian klik Benar.</li>
                                        <li className='font-sans text-femmy-pdark'>Cek nama dan nominal pembayaran, apabila telah sesuai, klik Ya.</li>
                                        <li className='font-sans text-femmy-pdark'>Transaki selesai, mohon simpan bukti pembayaran.</li>
                                    </ol>
                                </div>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>
            </div>

            <div className='basis-full lg:basis-[50%] pl-14'>
                <img className='w-[120px] mb-6' src='/images/mpembayaran/bca.png' alt='icon bca'/>
                <h2 className='text-femmy-pdark font-sansSemi text-[26px] mb-6 leading-tight'>Pembayaran via<br/>Virtual Account</h2>
                <div className='mb-8'>
                    <p className='text-femmy-pdark font-sansSemi'>Hi, Ruth Eirene!</p>
                    <p className='text-femmy-pdark font-sans'>Anda akan menerima e-mail dan SMS sebagai bukti konfirmasi pemesanan Anda.</p>
                </div>

                <div className='bg-femmy-pdark rounded-2xl p-8 mb-4'>
                    <ul className='flex justify-between pb-4 border-b-[1px] border-white'>
                        <li className='font-sansSemi text-[#FEF7F8] text-[22px]'>No Order</li>
                        <li className='font-sansSemi text-[#FEF7F8] text-[22px]'>257648237</li>
                    </ul>
                    <ul className='flex justify-between py-4 border-b-[1px] border-white'>
                        <li className='font-sans text-[#FEF7F8]'>Pembayaran dengan</li>
                        <li className='font-sans text-[#FEF7F8]'>Bank Transfer - Virtual Account</li>
                    </ul>
                    <ul className='flex justify-between py-4'>
                        <li className='font-sans text-[#FEF7F8]'>Bank</li>
                        <li className='font-sans text-[#FEF7F8]'>BCA</li>
                    </ul>
                    <ul className='flex flex-wrap justify-between py-4 border-b-[1px] border-white'>
                        <li className='font-sans text-[#FEF7F8] basis-[33%]'>No Virtual Account</li>
                        <li className='font-sans text-[#FEF7F8] basis-[43%]'>1270200003619011</li>
                        <li className='font-sans text-[#FEF7F8] basis-[13%] text-end'>Salin</li>
                    </ul>
                    <ul className='flex flex-wrap justify-between py-4 border-b-[1px] border-white'>
                        <li className='font-sans text-[#FEF7F8] basis-[33%]'>Jumlah Pembayaran</li>
                        <li className='font-sans text-[#FEF7F8] basis-[43%]'>1270200003619011</li>
                        <li className='font-sans text-[#FEF7F8] basis-[13%] text-end'>Salin</li>
                    </ul>
                </div>

                <div className='py-8'>
                    <p className='text-femmy-pdark font-sans mb-4'>PENTING! Lakukan pembayaran sebelum</p>

                    <p className='text-[#EE6E02] font-sansSemi text-[20px] mb-4'>06 Oktober 2022 pukul 14:00</p>

                    <p className='text-femmy-pdark font-sans mb-4'>atau pesanan Anda otomatis dibatalkan oleh sistem.</p>

                    <p className='text-femmy-pdark font-sans'>Infomasi Virtual Account telah dikirimkan ke email dan SMS Anda. Apabila sudah melakukan pembayaran, Anda bisa cek status pesanan dengan klik tombol Cek Pesanan di bawah.</p>
                </div>
            </div>
        </div>
      </section>
    </Layout>
  );
};

export const getServerSideProps =  wrapper.getServerSideProps( store => async ({req, res}:any) => {

    let token = await verifyJwt(req.cookies.refreshToken)
    let user = []
    let auth = false
  
    if(token){
        const fetchData = await fetch(`${process.env.NEXT_PUBLIC_API}/api/users/${token.id}`,{
            method:"GET",
            headers:{
                'Authorization': 'Bearer ' + req.cookies.refreshToken,
            }
        })
        user = await fetchData.json()
        auth = true
    }
  
    return {
      props: {
        user,
        auth : auth
      },
    }
})

export default Pembayaran;
