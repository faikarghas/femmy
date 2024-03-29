import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

import { verifyJwt } from '../utils/verifyJwt';
import {wrapper} from '../store/store';

// import component
import Layout from '../components/layouts/index';
import SearchProduct from '../components/presentational/SearchProduct/SearchProduct';
import RiwayatPoinWrapper from '../components/presentational/RiwayatPoin/RiwayatPoin';

const RiwayatPoin: NextPage = ({auth,rewardHistory}:any) => {
  return (
    <Layout page="tentang-kami" auth={auth}>    
      <section className="flex flex-wrap flex-row pb-8 pt-10 lg:pt-16 px-8 lg:px-16 bg-[#FEF7F8]">
        <nav className="flex mb-12 basis-full" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3 list-none">
                <li className="inline-flex items-center">
                    <Link href="#" className="inline-flex items-center text-sm font-medium font-sans text-femmy-pdark">Beranda</Link>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg aria-hidden="true" className="w-6 h-6 text-femmy-pdark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                        <Link href="#" className="ml-1 text-sm font-medium font-sans text-femmy-pdark">Cek Poinmu</Link>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg aria-hidden="true" className="w-6 h-6 text-femmy-pdark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                        <Link href="#" className="ml-1 text-sm font-bold font-sans text-femmy-pdark">Cek Riwayat Penukaran Poin</Link>
                    </div>
                </li>
            </ol>
        </nav>

        <div className="basis-full xl:basis-1/4 mb-12">
          <h4 className="font-head text-femmy-pdark text-[35px] font-semibold">Cek Riwayat<br/>Penukaran<br/>Poin</h4>
        </div>
        <div className="basis-full xl:basis-3/4 mb-2 flex items-center w-full">
          <SearchProduct />
        </div>

        <RiwayatPoinWrapper data={rewardHistory}/>
      </section>
    </Layout>
  );
};

export const getServerSideProps =  wrapper.getServerSideProps( store => async ({req, res}:any) => {
  // /api/reward-converteds
  let token = await verifyJwt(req.cookies.refreshToken)
  let auth = false
  let rewardHistory = []

  if(token){
    const fetchData = await fetch(`${process.env.NEXT_PUBLIC_API}/api/reward-transactions?filter`,{
        method:"GET",
        headers:{
            'Authorization': 'Bearer ' + req.cookies.refreshToken,
        }
    })
    rewardHistory = await fetchData.json()
    console.log(rewardHistory.data);
    auth = true
  }

  return {
    props: {
      auth : auth,
      rewardHistory
    },
  }
})

export default RiwayatPoin;
