import type { NextPage } from 'next';
import Link from 'next/link';

// import component
import Layout from '../components/layouts/index';
import CardKeranjang from '../components/presentational/CardKeranjang/CardKeranjang';

// import hoc
import { withAUth } from '../hoc/withAuth';

const Keranjang: NextPage = () => {
  return (
    <Layout page="keranjang">
      <section className="pb-8 pt-10 lg:pt-16 px-8 lg:px-16 bg-[#FEF7F8]">
        <nav className="flex mb-12 basis-full" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3 list-none">
                <li className="inline-flex items-center">
                    <Link href="/" ><a className="inline-flex items-center text-sm font-medium font-sans text-femmy-pdark">Beranda</a></Link>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg aria-hidden="true" className="w-6 h-6 text-femmy-pdark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                        <Link href="#"><a className="ml-1 text-sm font-bold font-sans text-femmy-pdark">Keranjang</a></Link>
                    </div>
                </li>
            </ol>
        </nav>

        <div className='text-center'>
            <h1 className='text-femmy-pdark text-[35px] font-head'>Keranjangmu</h1>
        </div>

        <div className='flex flex-wrap'>
            <div className='basis-full lg:basis-[70%] mb-4'>
                <h6 className='text-femmy-pdark font-sans text-[20px] border-b-[1px] border-femmy-pdark pb-4 pl-6'>produk (15)</h6>

                <div className=''>
                    <CardKeranjang />
                    <CardKeranjang />
                    <CardKeranjang />
                </div>
            </div>

            <div className='basis-full lg:basis-[30%] pl-8'>
                <div>
                    <div className='bg-femmy-pdark px-10 pt-8 pb-10 rounded-t-3xl'>
                        <h3 className='text-white text-[20px] font-sansSemi border-b-[1px] border-[#FEF7F8] pb-4 mb-6'>Ringkasan Pesanan</h3>
                        <ul className='flex justify-between mb-2'>
                            <li className='font-sans text-[#FEF7F8]'>subtotal</li>
                            <li className='font-sansBold text-[#FEF7F8]'>Rp 319.000</li>
                        </ul>
                        <ul className='flex justify-between'>
                            <li className='font-sans text-[#FEF7F8]'>pengiriman</li>
                            <li className='font-sansBold text-[#FEF7F8]'>-</li>
                        </ul>
                    </div>
                    <div className='bg-[#FDC8CE] py-6 px-10 rounded-b-3xl'>
                        <ul className='flex justify-between'>
                            <li className='font-sansBold text-femmy-pdark text-[20px]'>TOTAL</li>
                            <li className='font-sansBold text-femmy-pdark flex items-center'>Rp 319.000</li>
                        </ul>
                    </div>
                </div>

                <div className='mt-6'>
                    <Link href='/metode-pembayaran'><a className='font-sansSemi text-white bg-femmy-pdark w-full block py-3 text-center rounded-3xl'>lanjut ke checkout</a></Link>
                </div>
            </div>
        </div>
      </section>
    </Layout>
  );
};

export default Keranjang;
