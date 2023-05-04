import { useRef, useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Slider from 'react-slick';
import Image from 'next/image';
import { useRouter } from 'next/router'

// import component
import Layout from '../components/layouts/index';
import FormLogin from '../components/presentational/FormLogin/FormLogin';
import FormRegister from '../components/presentational/FormRegister/FormRegister';
import ProdukWrap from '../components/presentational/Produk/Produk';
import SearchProduct from '../components/presentational/SearchProduct/SearchProduct';
import CardNews from '../components/presentational/CardNews/CardNews';
import FormJoin from '../components/presentational/FormJoin/FormJoin';

//import utils
import { tips } from '../utils/data';
import { verifyJwt } from '../utils/verifyJwt';
import { removeCookie } from '../utils/cookie';

// import redux
import { selectModalRegState, selectModalState, setModalState } from "../store/modal";
import { useDispatch, useSelector } from "react-redux";
import {wrapper} from '../store/store';

import { setAuthState, selectAuthState } from "../store/authSlice";


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,

  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

const Home: NextPage = ({auth}:any) => {
  const modalLoginState = useSelector(selectModalState);
  const modalRegisterState = useSelector(selectModalRegState);


  const [loginOpen, setLoginOpen] = useState(false)
  const dispatch = useDispatch();
  const router = useRouter()

  const produkSlider = useRef<any>(null);

  const nextSlider = () => {
    produkSlider.current.slickNext();
  };

  const prevSlider = () => {
    produkSlider.current.slickPrev();
  };

  const openLogin = () => {
    setLoginOpen(true)
  }

  const logout = () =>{
    dispatch(setAuthState(false))

    removeCookie('refreshToken')

    // router.push('/')
    router.push('/')

  }

  return (
      <Layout page="home" auth={auth}>
        {/* <section className='p-8 lg:px-16'>
          <div className=''>
            <div className='relative bg-no-repeat bg-cover rounded-2xl' style={{backgroundImage:'url(/images/banner-tukar-point2.png)'}}>
              <div className='w-full h-full py-9 px-8 lg:px-16'>
                <h3 className='text-[#F6C2C6] font-head text-[27px] leading-[30px] mb-2'>Kumpulkan & tukar poin <br/> sebanyak-banyaknya!</h3>
                <h5 className='text-[#F6C2C6] font-sans text-[18px] mb-6'>dan raih beragam keuntungan <br/> menarik dari Femmy!</h5>
                <Link href="" className='rounded-3xl px-8 py-2 bg-[#F6C2C6] text-[#8F2A64] font-semibold'>tukar poin sekarang</Link>
              </div>
            </div>
          </div>
        </section> */}

        <section className="flex flex-row relative lg:h-screen">
          <div className="hidden lg:block object-contain basis-2/4">
            <img
              alt="image-femmy"
              src="/images/jadi_home.jpg"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="basis-full lg:basis-2/4 bg-femmy-pdark p-8 lg:p-0">
            <div className="flex items-center py-6 px-6 lg:px-8 relative lg:absolute lg:top-[50%] right-[0] lg:right-[calc(0%+48px)] lg:translate-x-[0%] lg:translate-y-[-50%] bg-femmy-plight h-full lg:h-[calc(100%-96px-35px)] w-[100%] lg:w-[64%] rounded-2xl shadow-[16px_17px_16px_rgba(0, 0, 0, 0.17)]">
              <div className="w-full">
                <div className="pb-4 xl:pb-2 mb-4 border-b-[1px] border-femmy-pdark">
                  <h2 className="text-femmy-pdark text-[35px] xl:text-[40px] font-head font-semibold leading-tight">
                    Jadi Utuh Bersama
                  </h2>
                </div>
                <h4 className="mb-6 text-femmy-pdark text-[18px] xl:text-[22px] leading-[22px] xl:leading-[30px] font-head">
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
                      alt="image-femmy"
                      src="/images/draft.png"
                      className="object-contain w-[245px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="flex flex-wrap flex-row pb-28 pt-10 lg:pt-16 px-8 lg:px-16 bg-[#FEF7F8]">
          <div className="basis-full xl:basis-1/4 mb-12">
            <h4 className="font-head text-femmy-pdark text-[35px] font-semibold">
              Produk Femmy
            </h4>
            <span className="font-sansMedium text-[12px] text-femmy-pdark">
              1-6 dari 6 produk
            </span>
          </div>
          <div className="basis-full xl:basis-3/4 mb-12 flex items-center w-full">
            <SearchProduct />
          </div>
          <ProdukWrap />
        </section>

        <section className="flex flex-wrap flex-row pb-28 pt-16 lg:pt-16 px-8 lg:px-16 bg-[#F6C2C6]">
          <div className="flex justify-between items-center w-full mb-8">
            <h3 className="text-femmy-pdark text-[35px] xl:text-[40px] font-head font-semibold">
              Tips & Trik
            </h3>
            <Link href="/artikel" className="text-femmy-pdark text-[12px] font-sans">
                Lihat Semua
            </Link>
          </div>
          <div className="hidden lg:grid  lg:grid-rows-2 grid-cols-4 grid-flow-col gap-4 w-full">
            {tips.map((val, i) => {
              if (i === 0) {
                return (
                  <div key={i} className="col-span-4 lg:row-span-2 lg:col-span-2">
                    <CardNews
                      type="big"
                      height="h-[280px] lg:h-[250px]"
                      paragraph={true}
                      data={{
                        title: val.judul,
                        short: val.shortDesc,
                        link: val.slug,
                        image: val.image,
                      }}
                    />
                  </div>
                );
              }
              if (i <= 4) {
                return (
                  <div key={i} className="col-span-1">
                    <CardNews
                      type="small"
                      height="h-[170px]"
                      paragraph={false}
                      data={{
                        title: val.judul,
                        short: val.shortDesc,
                        link: val.slug,
                        image: val.image,
                      }}
                    />
                  </div>
                );
              }
            })}
          </div>

          <div className="block lg:hidden w-full relative">
            <button
              className="absolute top-[30%] left-[-20px] translate-y-[-50%] z-10"
              onClick={prevSlider}
            >
              <Image src="/images/prev-button.png" width={40} height={40} alt=""/>
            </button>

            <Slider
              {...settings}
              ref={(slider) => (produkSlider.current = slider)}
            >
              {tips.map((val, i) => {
                return (
                  <div key={i} className="">
                    <CardNews
                      type="big"
                      height="h-[280px] lg:h-[210px]"
                      paragraph={true}
                      data={{
                        title: val.judul,
                        short: val.shortDesc,
                        link: val.slug,
                        image: val.image,
                      }}
                    />
                  </div>
                );
              })}
            </Slider>

            <button
              className="absolute top-[30%] right-[-20px] translate-y-[-50%] z-5"
              onClick={nextSlider}
            >
              <Image src="/images/next-button.png" width={40} height={40} alt=""/>
            </button>
          </div>
        </section>

        <div className={`bg-[#BD9BAF] fixed top-0 left-0 w-full h-full z-50 ${modalLoginState ? 'block' : 'hidden'}`}>
          <FormLogin/>
        </div>

        <div className={`bg-[#BD9BAF] fixed top-0 left-0 w-full h-full z-50 ${modalRegisterState ? 'block' : 'hidden'}`}>
          <FormRegister/>
        </div>
      </Layout>
  );
};

export const getServerSideProps =  wrapper.getServerSideProps( store => async ({req, res}:any) => {

  let token = await verifyJwt(req.cookies.refreshToken)
  let auth = false

  if(token){
      auth = true
  }

  return {
    props: {
      auth : auth
    },
  }
})

export default Home;
