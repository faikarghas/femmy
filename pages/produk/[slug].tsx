import {useState} from 'react'
import type { NextPage } from 'next';
import Link from 'next/link';

// import component
import Layout from '../../components/layouts/index';
import FilterDropdown from '../../components/presentational/FilterDropdown/FilterDropdown';
import CardProduct from '../../components/presentational/CardProduct/CardProduct';
import SearchProduct from '../../components/presentational/SearchProduct/SearchProduct';
import Breadcrumb from '../../components/presentational/Breadcrumb/Breadcrumb';

// import hoc
import { withAUth } from '../../hoc/withAuth';

const Tentang: NextPage = () => {
    const [tabId,setTabId] = useState(1)

    const onShow = (id:number) => {
        setTabId(id)
    }

    return (
        <Layout page="tentang-kami">
            <section className="flex flex-wrap flex-row pb-8 pt-10 lg:pt-10 px-8 lg:px-16 bg-[#FEF7F8]">
                <div className='basis-full'>
                    <Breadcrumb page='produk' detail='Femmy Look Slim'/>
                </div>
                <div className="basis-full xl:basis-1/4 mb-12">
                    <h4 className="font-head text-femmy-pdark text-[35px] font-semibold hidden md:block">Produk Femmy</h4>
                </div>
                <div className="basis-full xl:basis-3/4 mb-12 flex items-center w-full">
                    <SearchProduct />
                </div>

                <div className="basis-full lg:basis-[30%] pr-0 md:pr-8 mb-8">
                    <div className="bg-femmy-white h-[300px] w-full md:w-[300px] rounded-xl flex justify-center items-center">
                        <img src="/images/femmy-look-slim.png" className="object-contain w-full md:w-[200px]"/>
                    </div>
                </div>
                <div className="basis-full lg:basis-[70%]">
                    <h5 className="font-head text-femmy-pdark text-[30px] mb-3 font-semibold text-center md:text-left">Femmy Vitamin D3</h5>
                    <span className="font-sans text-femmy-white md:text-black text-[20px] font-semibold text-center md:text-left p-2 md:p-0 mb-6 md:mb-0 mt-8 md:mt-0 block bg-femmy-pdark md:bg-femmy-pdark rounded-full"><span className='block md:hidder font-sans text-white text-[12px] font-normal'>Beli Sekarang</span>RP 22.000.-</span>
                    <div className="md:border-t-[1px] border-b-[1px] border-femmy-pmedium flex justify-between items-center">
                        <ul className="list-none flex gap-6 w-full">
                            <li onClick={() => onShow(1)} className={`${tabId == 1 ? 'border-b-2 border-femmy-pdark':'opacity-50'} py-2 inline-block  font-sans font-bold cursor-pointer w-full md:w-[120px] text-center`}>Detail</li>
                            <li onClick={() => onShow(2)} className={`${tabId == 2 ? 'border-b-2 border-femmy-pdark':'opacity-50'} py-2 inline-block text-femmy-pdark font-sans font-bold cursor-pointer w-full md:w-[120px] text-center`}>Info Penting</li>
                        </ul>
                        <span className="text-black font-sans font-semibold  hidden md:flex"><img src='/images/share.png' className='mr-[13px] w-[17px] object-contain'/>Bagikan</span>
                    </div>
                    <div>
                        <div className={`${tabId == 1 ? 'flex' : 'hidden'} py-6`}>
                            <div className="basis-3/5">Detail</div>
                            <div className="basis-2/5 justify-end hidden md:flex">
                                <div className="bg-femmy-pdark py-6 pl-8 pr-6 rounded-2xl w-[260px]">
                                    <h6 className="text-white font-sans text-[18px] text-center mb-4 leading-tight">Pembelian dari<br/>Official Store kami</h6>
                                    <Link href=""><a><img src="/images/to-tokped.png"/></a></Link>
                                    <Link href=""><a><img src="/images/to-blibli.png"/></a></Link>
                                    <Link href=""><a><img src="/images/to-shopee.png"/></a></Link>
                                </div>
                            </div>
                        </div>
                        <div className={`${tabId == 2 ? 'flex' : 'hidden'} py-6`}>Info</div>
                    </div>
                </div>
            </section>
            <div className="border-b-[1px] border-femmy-pdark mx-8 lg:mx-16"></div>

            <div className="w-full flex md:hidden">
                <div className="w-full bg-femmy-pdark py-6 pl-8 pr-6 ">
                    <h6 className="text-white font-sans text-[18px] text-center mb-4 leading-tight">Pembelian dari<br/>Official Store kami</h6>
                    <Link href=""><a><img src="/images/to-tokped.png"/></a></Link>
                    <Link href=""><a><img src="/images/to-blibli.png"/></a></Link>
                    <Link href=""><a><img src="/images/to-shopee.png"/></a></Link>
                </div>
            </div>

            <section className="pb-12 pt-8 px-8 lg:px-16 bg-[#FEF7F8]">
                <h4 className="font-head text-femmy-pdark text-[35px] mb-6 font-semibold">
                    Produk Lainnya
                </h4>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
                    <div className=""> 
                        <CardProduct data={{ title: 'Femmy Look Slim' }} />
                    </div>
                    <div className=""> 
                        <CardProduct data={{ title: 'Femmy Look Slim' }} />
                    </div>
                    <div className=""> 
                        <CardProduct data={{ title: 'Femmy Look Slim' }} />
                    </div>
                    <div className=""> 
                        <CardProduct data={{ title: 'Femmy Look Slim' }} />
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Tentang;
