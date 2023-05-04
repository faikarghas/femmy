import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

import { verifyJwt } from '../../utils/verifyJwt';
import {wrapper} from '../../store/store';

// import component
import Layout from '../../components/layouts/index';
import SearchProduct from '../../components/presentational/SearchProduct/SearchProduct';
import ProdukWrap from '../../components/presentational/Produk/Produk';


const Produk: NextPage = ({auth}:any) => {
  return (
    <Layout page="tentang-kami" auth={auth}>
      <section className="flex flex-wrap flex-row pb-14 pt-10 lg:pt-16 px-8 lg:px-16 bg-[#FEF7F8]">
        <div className="basis-full xl:basis-1/4 mb-12">
          <h4 className="font-head text-femmy-pdark text-[35px] font-semibold">
            Produk Femmy
          </h4>
        </div>
        <div className="basis-full xl:basis-3/4 mb-12 flex items-center w-full">
          <SearchProduct />
        </div>

        <ProdukWrap />
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

export default Produk;
