import type { NextPage } from 'next';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { wrapper } from '../../../store/store';
import { verifyJwt } from '../../../utils/verifyJwt';
import { getCookie } from '../../../utils/cookie'

// import component
import Layout from '../../../components/layouts/index';
import SidebarAkun from '../../../components/presentational/SidebarAkun/SidebarAkun';

const TambahAlamat: NextPage = ({auth,user,provinsi,kabupaten,address}:any) => {

    const [message, setMessage] = useState('save'); // This will be used to show a message if the submission is successful
    const [submitted, setSubmitted] = useState(false);

    const formik = useFormik({
      initialValues: {
        address: address.data.attributes.address,
        provinsi: address.data.attributes.Provinsi.data?.id,
        kabupaten: address.data.attributes.Kabupaten.data?.id
      },

      onSubmit: async (val) => {
        setMessage('Loading...');
        setSubmitted(true)

        const data = {
            data:{
                address: val.address,
                users_permissions_user: {
                    connect: [user.id],
                },
                Provinsi:{
                    connect: [val.provinsi]
                },
                Kabupaten:{
                    connect: [val.kabupaten]
                }
            }
        };

        const token = getCookie('refreshToken',{})
        const JSONdata = JSON.stringify(data);
        const endpoint = `http://localhost:1337/api/user-addresses/${address.data.id}`;
        const options = {
          method: 'PUT',
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
          body: JSONdata,
        };
        const response = await fetch(endpoint, options);
        const result = await response.json();

        if (result.data) {
          setMessage('Terkirim');
        } else {
          setMessage(result.error.message);
          setTimeout(() => {
            setMessage('save');
          }, 2000);
          setSubmitted(false);
        }
      },
      validationSchema: yup.object({

      }),
    });

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
                            <li className={`basis-1/3 cursor-pointer text-center font-sans font-bold rounded-tr-[2rem] bg-[#951B66]`}>
                            </li>
                        </ul>
                        <div>
                            <div className='flex flex-wrap'>
                                <div className='py-8 px-16 basis-full h-[516px] overflow-y-scroll'>
                                   <h3 className='text-[20px] font-sansSemi text-femmy-pdark mb-8'>Edit Alamat</h3>
                                   <form className='w-full mb-4' onSubmit={formik.handleSubmit}>
                                        <div className="relative z-0 mb-4 md:mb-4 w-full group">
                                            <input
                                                className="bg-[#F5E8DF] lg:bg-transparent w-full rounded-2xl lg:rounded-lg placeholder:femmy-pdark placeholder:femmy-pdark placeholder:text-[13px] placeholder:font-sans placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] text-femmy-pdark border-femmy-pdark"
                                                placeholder="nama alamat"
                                                name="address"
                                                value={formik.values.address}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                                            <div className="relative z-0 mb-4 md:mb-2  w-full group">
                                                <select
                                                className="bg-transparent w-full rounded-lg tracking-[2px] text-femmy-pdark text-[13px] font-semibold placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                                                placeholder="Provinsi*"
                                                name="provinsi"
                                                value={formik.values.provinsi}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                >
                                                    <option className='tracking-[2px] text-femmy-pdark text-[13px] font-semibold' value={0}>Provinsi</option>
                                                    {provinsi.data.map((data:any,i:any)=>{
                                                        return (
                                                            <option className='tracking-[2px] text-femmy-pdark text-[13px] font-semibold' key={i} value={data.id}>{data.attributes.name}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>

                                            <div className="relative z-0 mb-4 md:mb-2 w-full group">
                                                <select
                                                className="bg-transparent w-full rounded-lg tracking-[2px] text-femmy-pdark text-[13px] font-semibold placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                                                placeholder="Kabupaten*"
                                                name="kabupaten"
                                                value={formik.values.kabupaten}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                >
                                                    <option className='tracking-[2px] text-femmy-pdark text-[13px] font-semibold' value={0}>Kabupaten</option>
                                                    {kabupaten.data.map((data:any,i:any)=>{
                                                        return (
                                                            <option className='tracking-[2px] text-femmy-pdark text-[13px] font-semibold' key={i} value={data.id}>{data.attributes.name}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>

                                        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
                                            <Link href="/akun/alamat" className="mt-0 border-[1px] border-femmy-pdark md:mt-4 w-full text-center rounded-2xl text-femmy-white bg-femmy-pdark tracking-[2px] hover:bg-[#F6C2C6] hover:text-femmy-pdark focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 font-sans">
                                                kembali
                                            </Link>
                                            <button
                                                type="submit"
                                                disabled={submitted?true:false}
                                                className="mt-0 border-[1px] border-femmy-pdark md:mt-4 w-full text-center rounded-2xl text-femmy-white bg-femmy-pdark tracking-[2px] hover:bg-[#F6C2C6] hover:text-femmy-pdark focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 font-sans"
                                            >
                                                {message}
                                            </button>
                                        </div>
                                    </form>
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

export const getServerSideProps =  wrapper.getServerSideProps( store => async ({req, res, params}:any) => {

    let token = await verifyJwt(req.cookies.refreshToken)
    let user = []
    let provinsi = []
    let kabupaten = []
    let address = []
    let auth = false

    if(token){
        const fetchData = await fetch(`${process.env.NEXT_PUBLIC_API}/api/users/${token.id}?populate=deep`,{
            method:"GET",
            headers:{
                'Authorization': 'Bearer ' + req.cookies.refreshToken,
            }
        })
        user = await fetchData.json()

        const fetchAddress = await fetch(`${process.env.NEXT_PUBLIC_API}/api/user-addresses/${params.slug}?populate=deep`,{
            method:"GET",
            headers:{
                'Authorization': 'Bearer ' + req.cookies.refreshToken,
            }
        })
        address = await fetchAddress.json()

        const fetchProvinsi = await fetch(`${process.env.NEXT_PUBLIC_API}/api/provinsis`,{
            method:"GET",
            headers:{
                'Authorization': 'Bearer ' + req.cookies.refreshToken,
            }
        })
        provinsi = await fetchProvinsi.json()

        const fetchKabupaten = await fetch(`${process.env.NEXT_PUBLIC_API}/api/kabupatens`,{
            method:"GET",
            headers:{
                'Authorization': 'Bearer ' + req.cookies.refreshToken,
            }
        })
        kabupaten = await fetchKabupaten.json()

        auth = true
    }

    return {
      props: {
        user,
        provinsi,
        kabupaten,
        address,
        auth : auth
      },
    }
})

export default TambahAlamat;