import type { NextPage } from 'next';
import React, {useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

import { wrapper } from '../../store/store';
import { verifyJwt } from '../../utils/verifyJwt';

// import component
import Layout from '../../components/layouts/index';
import SidebarAkun from '../../components/presentational/SidebarAkun/SidebarAkun';
import { getCookie } from '../../utils/cookie'

const AkunAlamat: NextPage = ({auth,user}:any) => {
    const router = useRouter()
    const [message, setMessage] = useState('hapus');

    const deleteAddressHandler = async (id:any) => {
        const token = getCookie('refreshToken',{})
        const endpoint = `http://localhost:1337/api/user-addresses/${id}`;
        const options = {
          method: 'DELETE',
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(endpoint, options);
        const result = await response.json();


        if (result.data) {
            router.push('/akun/alamat')
        } else {
            setMessage('coba lagi')
            setTimeout(() => {
                setMessage('hapus');
            }, 2000);
        }

    }

    const setAddressHandler = async (user_id:any,address_id:any) => {
        const data = {
            default_address: {
                connect:[address_id]
            },
        };

        const token = getCookie('refreshToken',{})
        const JSONdata = JSON.stringify(data);
        const endpoint = `http://localhost:1337/api/users/${user_id}`;
        const options = {
          method: 'PUT',
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
          body: JSONdata,
        };
        const response = await fetch(endpoint, options);
        if (response.status === 200) {
            router.push('/akun/alamat')
        }
    }

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
                                <Link href="#" className="ml-1 text-sm font-bold font-sans text-femmy-pdark">Alamat</Link>
                            </div>
                        </li>
                    </ol>
                </nav>
                <div className='mb-6'>
                    <h1 className='font-head text-femmy-pdark text-[35px] font-semibold'>Update Akunmu</h1>
                </div>
                <div className='flex flex-wrap'>
                    <SidebarAkun data={user}/>
                    <div className='w-full basis-[75%] bg-[#FDC8CE] rounded-tr-[40px] rounded-br-[40px]'>
                        <ul className='w-full flex flex-wrap border-t-[1px] border-b-[1px] bg-[#FDC8CE] border-femmy-pdark rounded-tr-[2rem]'>
                            <li className={`basis-1/3 cursor-pointer text-center font-sans font-bold`}>
                                <Link href="/akun" className={`rounded-tr-[2rem] p-4 block font-sansBold bg-[#951B66] text-[#FDC8CE] border-r-[1px] border-[#FDC8CE]`}>Akun
                                </Link>
                            </li>
                            <li className={`basis-1/3 cursor-pointer text-center font-sans font-bold bg-[#951B66]`}>
                                <Link href="/akun/alamat"  className={`rounded-tr-[2rem] p-4 block font-sansBold bg-[#FDC8CE] text-femmy-pdark border-r-[1px] border-femmy-pdark`}>Alamat
                                </Link>
                            </li>
                            <li className={`basis-1/3 cursor-pointer text-center font-sans font-bold rounded-tr-[2rem] bg-[#951B66]`}></li>
                        </ul>
                        <div>
                            <div className='flex flex-wrap'>
                                <div className='py-8 px-16 basis-full h-[516px] overflow-y-scroll'>
                                    {user.user_addresses?.map((data:any,i:any)=>{
                                        return (
                                        <div className='mb-9' key={i}>
                                            <h3 className='info mb-2 text-[20px] font-sans text-femmy-pdark font-bold'>{user.fullname}</h3>
                                            <p className='text-femmy-pdark leading-tight font-sans'>{data.address}, {data.Kabupaten?.name}, {data.kecamatan?.name}, {data.Provinsi?.name}, {data.kodepos} </p>
                                            <div className='mt-8'>
                                                <div className='flex flex-wrap justify-between mb-4'>
                                                    <Link href={`/akun/edit-alamat/${data.id}`} className='rounded-xl basis-[49%] text-center block font-sans text-[#FDC8CE] bg-femmy-pdark py-2 w-full'>edit</Link>
                                                    <div onClick={() => deleteAddressHandler(data.id)} className='rounded-xl basis-[49%] text-center block font-sans text-femmy-pdark bg-[#FDC8CE] py-2 w-full border-[1px] border-femmy-pdark cursor-pointer'>{message}</div>
                                                </div>
                                                <div className='flex'>
                                                    {/* alamat utama */}
                                                    <div onClick={() => setAddressHandler(user.id,data.id)} className='rounded-xl text-center block font-sans text-[#FDC8CE] bg-femmy-pdark py-2 w-full cursor-pointer'>
                                                        {
                                                            user.default_address.id == data.id ? 'alamat utama' : 'jadikan alamat utama'
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    })}
                                </div>
                                <div className='mx-16 h-[1px] bg-femmy-pdark w-full'></div>
                                <div className='p-8 px-16 basis-full'>
                                    <div className='flex'>
                                        <Link href={'/akun/tambah-alamat'} className='rounded-xl text-center block font-sans text-[#FDC8CE] bg-femmy-pdark py-2 w-full cursor-pointer'>tambah alamat</Link>
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

export const getServerSideProps =  wrapper.getServerSideProps( store => async ({req, res}:any) => {

    let token = await verifyJwt(req.cookies.refreshToken)
    let user = []
    let auth = false

    if(token){
        const fetchData = await fetch(`${process.env.NEXT_PUBLIC_API}/api/users/${token.id}?populate=deep`,{
            method:"GET",
            headers:{
                'Authorization': 'Bearer ' + req.cookies.refreshToken,
            }
        })
        user = await fetchData.json()

        console.log(user);
        
        auth = true
    }

    return {
      props: {
        user,
        auth : auth
      },
    }
})

export default AkunAlamat;