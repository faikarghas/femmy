import {useState,useEffect} from 'react'
import type { NextPage } from 'next';
import Link from 'next/link';

// import component
import Layout from '../components/layouts/index';
import FormJoin from '../components/presentational/FormJoin/FormJoin';
import ProdukWrap from '../components/presentational/Produk/Produk';
import SearchProduct from '../components/presentational/SearchProduct/SearchProduct';
import CardNews from '../components/presentational/CardNews/CardNews';

// import hoc
import { withAUth } from '../hoc/withAuth';

const Home: NextPage = () => {
  return (
    <Layout page="home">
        <section className="flex flex-row relative lg:h-screen">
          <div className="hidden lg:block object-contain basis-2/4">
            <img
              src="/images/femmy-laptop.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="basis-full lg:basis-2/4 bg-femmy-pdark p-8 lg:p-0">
            <div className="py-6 px-10 relative lg:absolute lg:top-[50%] right-[0] lg:right-[calc(0%+48px)] lg:translate-x-[0%] lg:translate-y-[-50%] bg-femmy-plight h-full lg:h-[calc(100%-96px-35px)] w-[100%] lg:w-[64%] rounded-2xl shadow-[16px_17px_16px_rgba(0, 0, 0, 0.17)]">
              <div className="pb-4 xl:pb-2 mb-4 border-b-[1px] border-femmy-pdark">
                <h2 className="text-femmy-pdark text-[20px] xl:text-[40px] font-head font-semibold">
                  Jadi Utuh Bersama
                </h2>
              </div>
              <h4 className="mb-6 text-femmy-pdark text-[15px] xl:text-[25px] leading-[22px] xl:leading-[30px] font-head">
                Bergabung menjadi
                <br />
                Femmy Reseller sekarang!
              </h4>
              <div className="flex flex-row">
                <div className="basis-full md:basis-3/5">
                  <FormJoin />
                </div>
                <div className="hidden md:flex basis-2/5 items-center justify-center">
                  <img
                    src="/images/draft.png"
                    className="object-contain w-[245px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

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

        <section className="flex flex-wrap flex-row pb-16 pt-16 lg:pt-16 px-8 lg:px-16 bg-[#F6C2C6]">
          <div className="flex justify-between items-center w-full mb-8">
            <h3 className="text-femmy-pdark text-[35px] xl:text-[40px] font-head font-medium font-semibold">
              Tips & Trik
            </h3>
            <Link href="#">
              <a className="text-femmy-pdark text-[12px] font-sans">Lihat Semua</a>
            </Link>
          </div>
          <div className="grid lg:grid-rows-2 grid-cols-4 grid-flow-col gap-4 w-full">
            <div className="col-span-4 lg:row-span-2 lg:col-span-2">
              <CardNews
                type="big"
                height="h-[280px] lg:h-[210px]"
                paragraph={true}
                data={{ title: 'lorem', short: 'lorem ipsu olor sit amet' }}
              />
            </div>
            <div className="hidden lg:block col-span-1">
              <CardNews
                type="small"
                height="h-[150px]"
                paragraph={false}
                data={{ title: 'lorem', short: 'lorem ipsu olor sit amet' }}
              />
            </div>
            <div className="hidden lg:block col-span-1">
              <CardNews
                type="small"
                height="h-[150px]"
                paragraph={false}
                data={{ title: 'lorem', short: 'lorem ipsu olor sit amet' }}
              />
            </div>
            <div className="hidden lg:block col-span-1">
              <CardNews
                type="small"
                height="h-[150px]"
                paragraph={false}
                data={{ title: 'lorem', short: 'lorem ipsu olor sit amet' }}
              />
            </div>
            <div className="hidden lg:block col-span-1">
              <CardNews
                type="small"
                height="h-[150px]"
                paragraph={false}
                data={{ title: 'lorem', short: 'lorem ipsu olor sit amet' }}
              />
            </div>
          </div>
        </section>
    </Layout>
  );
};

export default Home;
