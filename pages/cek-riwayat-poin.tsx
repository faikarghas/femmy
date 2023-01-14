import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

// import component
import Layout from '../components/layouts/index';
import SearchProduct from '../components/presentational/SearchProduct/SearchProduct';
import RiwayatPoinWrapper from '../components/presentational/RiwayatPoin/RiwayatPoin';

// import hoc
import { withAUth } from '../hoc/withAuth';

const RiwayatPoin: NextPage = () => {
  return (
    <Layout page="tentang-kami">    
      <section className="flex flex-wrap flex-row pb-8 pt-10 lg:pt-16 px-8 lg:px-16 bg-[#FEF7F8]">
        <nav className="flex mb-12 basis-full" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3 list-none">
                <li className="inline-flex items-center">
                    <a href="#" className="inline-flex items-center text-sm font-medium font-sans text-femmy-pdark">Beranda</a>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg aria-hidden="true" className="w-6 h-6 text-femmy-pdark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                        <a href="#" className="ml-1 text-sm font-medium font-sans text-femmy-pdark">Cek Poinmu</a>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg aria-hidden="true" className="w-6 h-6 text-femmy-pdark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                        <a href="#" className="ml-1 text-sm font-bold font-sans text-femmy-pdark">Cek Riwayat Penukaran Poin</a>
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

        <RiwayatPoinWrapper/>
      </section>
    </Layout>
  );
};

export default RiwayatPoin;
