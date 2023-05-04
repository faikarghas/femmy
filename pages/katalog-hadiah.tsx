import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

import { verifyJwt } from '../utils/verifyJwt';
import {wrapper} from '../store/store';

// import component
import Layout from '../components/layouts/index';
import SearchProduct from '../components/presentational/SearchProduct/SearchProduct';
import KatalogWrap from '../components/presentational/Katalog/Katalog';


const KatalogHadiah: NextPage = ({auth,rewardProduct,user}:any) => {
  return (
    <Layout page="tentang-kami" auth={auth}>
      <section className="flex flex-wrap flex-row pb-8 pt-10 lg:pt-16 px-8 lg:px-16 bg-[#FEF7F8]">
        <nav className="flex mb-12 basis-full" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3 list-none">
                    <li className="inline-flex items-center">
                          <Link href="/" className="inline-flex items-center text-sm font-medium font-sans text-femmy-pdark">Beranda</Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg aria-hidden="true" className="w-6 h-6 text-femmy-pdark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            <Link href="/cek-poin" className="ml-1 text-sm font-medium font-sans text-femmy-pdark">Cek Poinmu</Link>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <svg aria-hidden="true" className="w-6 h-6 text-femmy-pdark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            <Link href="#" className="ml-1 text-sm font-bold font-sans text-femmy-pdark">Kataloh Hadiah</Link>
                        </div>
                    </li>
                </ol>
        </nav>

        <div className="basis-full xl:basis-1/4 mb-12">
          <h4 className="font-head text-femmy-pdark text-[35px] font-semibold">Katalog<br/>Hadiah</h4>
        </div>
        <div className="basis-full xl:basis-3/4 mb-12 flex items-center w-full">
          <SearchProduct />
        </div>
        {/* ${user.default_address?.kecamatan.name} */}
        <KatalogWrap rewardProduct={rewardProduct} point={user.point} fullname={user.fullname} userId={user.id} address={`${user.default_address?.address}, , ${user.default_address?.Kabupaten.name}, ${user.default_address?.Provinsi.name} `}/>
      </section>
    </Layout>
  );
};

export const getServerSideProps =  wrapper.getServerSideProps( store => async ({req, res}:any) => {

  let token = await verifyJwt(req.cookies.refreshToken)
  let auth = false
  let rewardProduct = []
  let user = []

  if(token){
      const fetchData = await fetch(`${process.env.NEXT_PUBLIC_API}/api/users/${token.id}?populate=deep`,{
          method:"GET",
          headers:{
              'Authorization': 'Bearer ' + req.cookies.refreshToken,
          }
      })

      const fetchDataReward = await fetch(`${process.env.NEXT_PUBLIC_API}/api/reward-products?populate=*`,{
          method:"GET",
          headers:{
              'Authorization': 'Bearer ' + req.cookies.refreshToken,
          }
      })

      rewardProduct = await fetchDataReward.json()
      user = await fetchData.json()
      console.log(user.default_address.Kabupaten.name);
      
      auth = true
  }

  return {
    props: {
      auth,
      rewardProduct,
      user
    },
  }
})

export default KatalogHadiah;
