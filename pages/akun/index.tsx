import type { NextPage } from 'next';
import React from 'react';
import Link from 'next/link';
import { wrapper } from '../../store/store';
import { verifyJwt } from '../../utils/verifyJwt';

// import component
import Layout from '../../components/layouts/index';
import AkunInformasi from '../../components/presentational/AkunInformasi/AkunInformasi';
import AkunSandi from '../../components/presentational/AkunSandi/AkunSandi';
import SidebarAkun from '../../components/presentational/SidebarAkun/SidebarAkun';


const AkunSaya: NextPage = ({user,auth}:any) => {

    return (
        <Layout page="akun-saya" auth={auth}>
            <section className='pt-10 mb-24 px-8 lg:px-16 bg-[#FEF7F8]'>
                <nav className="flex mb-24" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3 list-none">
                        <li className="inline-flex items-center">
                            <Link href="#" className="inline-flex items-center text-sm font-medium font-sans text-femmy-pdark">Beranda</Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg aria-hidden="true" className="w-6 h-6 text-femmy-pdark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                <Link href="#" className="ml-1 text-sm font-bold font-sans text-femmy-pdark">Akun</Link>
                            </div>
                        </li>
                    </ol>
                </nav>
                <div className='mb-6'>
                    <h1 className='font-head text-femmy-pdark text-[35px] font-semibold'>Update Akunmu</h1>
                </div>
                <div className='flex flex-wrap'>
                    <SidebarAkun data={user} />
                    <div className='w-full basis-full lg:basis-[75%] bg-[#FDC8CE] rounded-tr-[40px] rounded-br-[40px]'>
                        <ul className='w-full flex flex-wrap border-t-[1px] border-b-[1px] bg-[#951B66] border-femmy-pdark rounded-tr-[2rem]'>
                            <li className={`basis-1/3 cursor-pointer text-center font-sans font-bold`}>
                                <Link href="/akun" className={`rounded-tr-[2rem] p-4 block font-sansBold bg-[#FDC8CE] text-femmy-pdark border-[1px] border-femmy-pdark`}>Akun
                                </Link>
                            </li>
                            <li className={`basis-1/3 cursor-pointer text-center font-sans font-bold`}>
                                <Link href="/akun/alamat"  className={`rounded-tr-[2rem] p-4 block font-sansBold bg-[#951B66] text-[#FDC8CE] border-r-[1px] border-[#FDC8CE]`}>Alamat
                                </Link>
                            </li>
                            {/* <li className={`basis-1/3 cursor-pointer text-center font-sans font-bold rounded-tr-[2rem] }`}>
                                <Link href="/akun/riwayat-transaksi"  className={`rounded-tr-[2rem] p-4 block font-sansBold bg-[#951B66] text-[#FDC8CE] border-r-[1px] border-[#FDC8CE]`}>Riwayat Transaksi
                                </Link>
                            </li> */}
                        </ul>
                        <div>
                            <div className={`flex flex-wrap`}>
                                <div className='p-8 basis-full lg:basis-1/2 border-r-[1px] border-femmy-pdark'>
                                    <h3 className='info mb-8 text-[20px] font-sans text-femmy-pdark font-bold'>Informasi</h3>
                                    <AkunInformasi userData={user}/>
                                </div>
                                <div className='p-8 basis-full lg:basis-1/2'>
                                    <h3 className='info mb-8 text-[20px] font-sans text-femmy-pdark font-bold'>Kata Sandi</h3>
                                    <AkunSandi/>
                                </div>
                            </div>
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

export default AkunSaya;