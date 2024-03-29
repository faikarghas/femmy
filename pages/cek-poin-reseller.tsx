import type { NextPage } from 'next';
import Link from 'next/link';
import Slider from 'react-slick';

import { verifyJwt } from '../utils/verifyJwt';
import {wrapper} from '../store/store';

// import component
import Layout from '../components/layouts/index';
import FormJoin from '../components/presentational/FormJoin/FormJoin';

const CekPoin: NextPage = ({auth}:any) => {
  return (
    <Layout page="tentang-kami" auth={auth}>
        <section className='py-20 px-16 bg-[#F3AAB5] bg-opacity-10'>
          <div className='text-center'>
            <h1 className='text-femmy-pdark text-[35px] font-head'>Cek Poin Anda</h1>
          </div>
          <div className='px-24'>
            <div className='h-[1px] bg-femmy-pdark mt-5 mb-8'></div>
          </div>
          <div className='text-center'>
            <p className='font-sans text-femmy-pdark font-semibold text-[18px]'>No. ID Femmy Bestie</p>
            <p className='font-sansExtra text-femmy-pdark font-extrabold text-[40px] leading-[33px] tracking-[0.08em] mb-20'>F800090</p>
            <img className='mx-auto w-[300px] mb-6' src='/images/cekpoin.png'/>
            <p className='font-sans text-femmy-pdark font-semibold text-[18px] mb-4'>Total Poin Rewards Kamu : </p>
            <p className='font-sansExtra text-femmy-pdark font-extrabold text-[40px] leading-[33px] tracking-[0.08em] mb-14 '>20.000</p>
            <div>
              <Link href="/cek-riwayat-poin" className='bg-femmy-pdark text-[#FDC8CE] py-3 px-16 rounded-lg font-sansSemi'>Cek riwayat penukaran poin</Link>
            </div>
          </div>
          <div>
          </div>
        </section>
        <section className='relative'>
            <div className='flex'>
              <div className='relative overflow-hidden'>
                <img className='mix-blend-screen h-full absolute top-0 left-0 z-20' src='/images/bg-cekpoin.png' />
                <img className='z-10' src='/images/cash-reward.png'/>

                <div className='absolute top-[50%] translate-y-[-50%] left-0 w-full z-30 text-center'>
                  <h3 className='font-head text-femmy-pdark text-[33px] mb-6'>Cash Reward</h3>
                  <Link href='/tukar-emoney' className='font-sans text-[#FDC8CE] bg-femmy-pdark py-2 px-20 rounded-lg '>tukar poin dengan e-money</Link>
                </div>
                <div className='absolute bottom-8 left-0 w-full z-30 text-center'>
                  <img className='w-[220px] object-contain mx-auto' src='/images/pay.png' />
                </div>

              </div>
              <div className='relative'>
                <img className='mix-blend-screen h-full absolute top-0 left-0 z-20' src='/images/bg-cekpoin.png' />
                <img className='' src='/images/gift-reward.png'/>

                <div className='absolute top-[50%] translate-y-[-50%] left-0 w-full z-30 text-center'>
                  <h3 className='font-head text-femmy-pdark text-[33px] mb-6'>Gift Reward</h3>
                  <Link href='/katalog-hadiah' className='font-sans text-[#FDC8CE] bg-femmy-pdark py-2 px-20 rounded-lg '>tukar poin dengan hadiah</Link>
                </div>

              </div>
            </div>
        </section>
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

export default CekPoin;