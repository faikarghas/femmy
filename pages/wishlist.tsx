import type { NextPage } from 'next';
import Link from 'next/link';

import { verifyJwt } from '../utils/verifyJwt';
import {wrapper} from '../store/store';

// import component
import Layout from '../components/layouts/index';

const Wishlist: NextPage = ({auth}:any) => {
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
                        <Link href="#" className="ml-1 text-sm font-bold font-sans text-femmy-pdark">Wishlist</Link>
                    </div>
                </li>
            </ol>
        </nav>

        <div className='w-full'>
            <div className='bg-[#951B66] bg-opacity-10 p-4 w-full'>
                <h4 className='font-sans text-femmy-pdark text-[27px] font-medium'>Wishlist</h4>
            </div>

            <div className='flex flex-wrap wishlist-card'>
                <div className='basis-[15%] py-4 px-6'>
                    <div className='bg-white p-4 flex justify-center items-center rounded-xl'>
                        <img className='w-[80px]' src='/images/produk/estrocal 1.png' />
                    </div>
                </div>
                <div className='basis-[85%] p-8 flex flex-warp'>
                    <div className='basis-[70%]'>
                        <h5 className='text-femmy-pdark font-sansBold'>Femmy Trimune</h5>
                        <p className='text-femmy-pdark font-sans'>Femmy Trimune adalah suplemen kesehatan yang memenuhi kebutuhan vitamin C dan Zinc.</p>
                        <span className='block font-sansSemi text-femmy-pdark'>RP 25.000,-</span>
                    </div>
                    <div className='basis-[40%] flex flex-col justify-between items-end'>
                        <div>
                            <img className='w-[18px]' src='/images/icon-close-tr.png'/>
                        </div>
                        <div>
                            <Link href='/' className='bg-femmy-pdark py-2 px-16 rounded-3xl text-[#F9EFE6]'>Pesan</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap wishlist-card'>
                <div className='basis-[15%] py-4 px-6'>
                    <div className='bg-white p-4 flex justify-center items-center rounded-xl'>
                        <img className='w-[80px]' src='/images/produk/estrocal 1.png' />
                    </div>
                </div>
                <div className='basis-[85%] p-8 flex flex-warp'>
                    <div className='basis-[70%]'>
                        <h5 className='text-femmy-pdark font-sansBold'>Femmy Trimune</h5>
                        <p className='text-femmy-pdark font-sans'>Femmy Trimune adalah suplemen kesehatan yang memenuhi kebutuhan vitamin C dan Zinc.</p>
                        <span className='block font-sansSemi text-femmy-pdark'>RP 25.000,-</span>
                    </div>
                    <div className='basis-[40%] flex flex-col justify-between items-end'>
                        <div>
                            <img className='w-[18px]' src='/images/icon-close-tr.png'/>
                        </div>
                        <div>
                            <Link href='/' className='bg-femmy-pdark py-2 px-16 rounded-3xl text-[#F9EFE6]'>Pesan</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap wishlist-card'>
                <div className='basis-[15%] py-4 px-6'>
                    <div className='bg-white p-4 flex justify-center items-center rounded-xl'>
                        <img className='w-[80px]' src='/images/produk/estrocal 1.png' />
                    </div>
                </div>
                <div className='basis-[85%] p-8 flex flex-warp'>
                    <div className='basis-[70%]'>
                        <h5 className='text-femmy-pdark font-sansBold'>Femmy Trimune</h5>
                        <p className='text-femmy-pdark font-sans'>Femmy Trimune adalah suplemen kesehatan yang memenuhi kebutuhan vitamin C dan Zinc.</p>
                        <span className='block font-sansSemi text-femmy-pdark'>RP 25.000,-</span>
                    </div>
                    <div className='basis-[40%] flex flex-col justify-between items-end'>
                        <div>
                            <img className='w-[18px]' src='/images/icon-close-tr.png'/>
                        </div>
                        <div>
                            <Link href='/' className='bg-femmy-pdark py-2 px-16 rounded-3xl text-[#F9EFE6]'>Pesan</Link>
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

export default Wishlist;
