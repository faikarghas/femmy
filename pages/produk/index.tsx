import {useState,useEffect} from 'react'
import type { NextPage } from 'next';
import Link from 'next/link';

// import component
import Layout from '../../components/layouts/index';
import SearchProduct from '../../components/presentational/SearchProduct/SearchProduct';
import ProdukWrap from '../../components/presentational/Produk/Produk';
 
// import hoc
import { withAUth } from '../../hoc/withAuth';

const Produk: NextPage = () => {
  return (
    <Layout page="tentang-kami">
        <section className="flex flex-wrap flex-row pb-8 pt-10 lg:pt-16 px-8 lg:px-16 bg-[#FEF7F8]">
          <div className="basis-full xl:basis-1/4 mb-12">
            <h4 className="font-head text-femmy-pdark text-[35px] font-semibold">
              Produk Femmy
            </h4>
          </div>
          <div className="basis-full xl:basis-3/4 mb-12 flex items-center w-full">
            <SearchProduct />
          </div>

          <ProdukWrap/>
        </section>
    </Layout>
  );
};

export default Produk;
