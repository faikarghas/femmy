import type { NextPage } from 'next';
import Link from 'next/link';

// import component
import Layout from '../../components/layouts/index';
import CardKeranjang from '../../components/presentational/CardKeranjang/CardKeranjang';
import FormKontak from '../../components/presentational/FormKontak/FormKontak';

// import hoc
import { withAUth } from '../../hoc/withAuth';

const Pembayaran: NextPage = () => {
  return (
    <Layout page="tentang-kami">
      <section className="pb-8 pt-10 lg:pt-16 px-8 lg:px-16 bg-[#FEF7F8]">
        <nav className="flex mb-12 basis-full" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3 list-none">
                <li className="inline-flex items-center">
                    <Link href="/"><a className="inline-flex items-center text-sm font-medium font-sans text-femmy-pdark">Beranda</a></Link>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg aria-hidden="true" className="w-6 h-6 text-femmy-pdark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                        <Link href="/keranjang"><a className="ml-1 text-sm font-medium font-sans text-femmy-pdark">Keranjang</a></Link>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg aria-hidden="true" className="w-6 h-6 text-femmy-pdark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                        <Link href="/metode-pembayaran"><a className="ml-1 text-sm font-medium font-sans text-femmy-pdark">Pilih Metode Pembayaran</a></Link>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg aria-hidden="true" className="w-6 h-6 text-femmy-pdark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                        <Link href="/pilih-kurir" ><a className="ml-1 text-sm font-medium font-sans text-femmy-pdark">Pilihan Pengiriman</a></Link>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg aria-hidden="true" className="w-6 h-6 text-femmy-pdark" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                        <Link href="#" ><a className="ml-1 text-sm font-bold font-sans text-femmy-pdark">Pembayaran</a></Link>
                    </div>
                </li>
            </ol>
        </nav>

        <div className='text-center mb-14'>
            <h1 className='text-femmy-pdark text-[35px] font-head'>Checkout</h1>
        </div>

        <div className='flex flex-wrap'>
            <div className='basis-full lg:basis-[70%] mb-4'>
                <h6 className='text-femmy-pdark font-sansBold text-[20px] border-b-[1px] border-femmy-pdark pb-6 pl-6'>pastikan alamat pengiriman kamu sudah benar:</h6>

                <div className='px-6 pt-6 pb-16'>
                    <h3 className='font-sansBold text-femmy-pdark text-[20px] mb-2'>Ruth Eirene</h3>
                    <p className='text-femmy-pdark leading-tight font-sans mb-4'>08989489400402</p>
                    <div className='mb-6 lg:w-[300px]'>
                        <p className='text-femmy-pdark leading-tight font-sans'>Jl. Layar Permai 8B No.1 A,  Jakarta Utara, Penjaringan, DKI Jakarta 14410</p>
                    </div>
                    <Link href='/akun/alamat'><a className='font-sans text-[#FDC8CE] bg-femmy-pdark py-2 px-14 rounded-xl inline-block'>pilih alamat lain</a></Link>
                </div>

                <h6 className='text-femmy-pdark font-sans text-[20px] border-b-[1px] border-t-[1px] border-femmy-pdark py-4 pl-6 mb-4'>produk (15)</h6>
                <h6 className='text-femmy-pdark font-sans text-[20px] pb-4 pl-6 mb-4'>pengiriman : Reguler menggunakan JNE (5-7 Oktober)</h6>

                {/* list product */}
                <div>
                    <div className='flex flex-wrap checkout-card'>
                        <div className='basis-[22%] py-4 px-6'>
                            <div className='bg-white p-4 flex justify-center items-center rounded-xl'>
                                <img className='w-[100px]' src='/images/produk/estrocal 1.png' />
                            </div>
                        </div>
                        <div className='basis-[78%] p-8 flex flex-warp'>
                            <div className='basis-[70%] flex items-center'>
                                <div>
                                    <h5 className='text-femmy-pdark font-sansBold mb-2'>Femmy Trimune</h5>
                                    <span className='block font-sansSemi text-femmy-pdark'>RP 25.000,-</span>
                                </div>
                            </div>
                            <div className='basis-[40%] flex flex-col justify-between items-end'>
                                <div>
                                    <img className='w-[18px]' src='/images/icon-close-tr.png'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-wrap checkout-card'>
                        <div className='basis-[22%] py-4 px-6'>
                            <div className='bg-white p-4 flex justify-center items-center rounded-xl'>
                                <img className='w-[100px]' src='/images/produk/estrocal 1.png' />
                            </div>
                        </div>
                        <div className='basis-[78%] p-8 flex flex-warp'>
                            <div className='basis-[70%] flex items-center'>
                                <div>
                                    <h5 className='text-femmy-pdark font-sansBold mb-2'>Femmy Trimune</h5>
                                    <span className='block font-sansSemi text-femmy-pdark'>RP 25.000,-</span>
                                </div>
                            </div>
                            <div className='basis-[40%] flex flex-col justify-between items-end'>
                                <div>
                                    <img className='w-[18px]' src='/images/icon-close-tr.png'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-wrap checkout-card'>
                        <div className='basis-[22%] py-4 px-6'>
                            <div className='bg-white p-4 flex justify-center items-center rounded-xl'>
                                <img className='w-[100px]' src='/images/produk/estrocal 1.png' />
                            </div>
                        </div>
                        <div className='basis-[78%] p-8 flex flex-warp'>
                            <div className='basis-[70%] flex items-center'>
                                <div>
                                    <h5 className='text-femmy-pdark font-sansBold mb-2'>Femmy Trimune</h5>
                                    <span className='block font-sansSemi text-femmy-pdark'>RP 25.000,-</span>
                                </div>
                            </div>
                            <div className='basis-[40%] flex flex-col justify-between items-end'>
                                <div>
                                    <img className='w-[18px]' src='/images/icon-close-tr.png'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='basis-full lg:basis-[30%] pl-8'>
                <div>
                    <div className='bg-femmy-pdark px-10 pt-8 pb-10 rounded-t-3xl'>
                        <h3 className='text-white text-[20px] font-sansSemi border-b-[1px] border-[#FEF7F8] pb-4 mb-6'>Ringkasan Pesanan</h3>
                        <ul className='flex justify-between mb-2'>
                            <li className='font-sans text-[#FEF7F8] text-[14px]'>subtotal</li>
                            <li className='font-sansBold text-[#FEF7F8]'>Rp 319.000</li>
                        </ul>
                        <ul className='flex justify-between'>
                            <li className='font-sans text-[#FEF7F8] text-[14px]'>pengiriman</li>
                            <li className='font-sansBold text-[#FEF7F8]'>-</li>
                        </ul>
                        <div className='h-[1px] bg-[#FEF7F8] my-6'></div>
                        <ul className='flex justify-between'>
                            <li className='font-sans text-[#FEF7F8] text-[14px]'>poin yang diperoleh</li>
                            <li className='font-sansBold text-[#FEF7F8]'>Rp 319.000</li>
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
                    <Link href='/pembayaran/0015'><a className='font-sansSemi text-white bg-femmy-pdark w-full block py-3 text-center rounded-3xl'>pesan</a></Link>
                </div>
            </div>
        </div>
      </section>

      <div className='modal-gopay fixed top-0 left-0 w-full h-full bg-femmy-pdark z-[60] hidden'>
            <div className='bg-[#F5E8DF] py-16 px-20 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-3xl text-center'>
                <div className='absolute top-3 right-3'>
                    <img src='/images/icon-close.png' width={55} className='mb-8 mx-auto'/>
                </div>
                <img src='/images/logo-gojek.png' width={180} className='mb-8 mx-auto'/>
                <img src='/images/barcode.png' width={280}/>
            </div>
      </div>
    </Layout>
  );
};

export default Pembayaran;
