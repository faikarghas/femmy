import {useState} from 'react'
import type { NextPage } from 'next';
import Link from 'next/link';

// import component
import Layout from '../../components/layouts/index';
import FilterDropdown from '../../components/presentational/FilterDropdown/FilterDropdown';
import CardProduct from '../../components/presentational/CardProduct/CardProduct';
import SearchProduct from '../../components/presentational/SearchProduct/SearchProduct';

// import hoc
import { withAUth } from '../../hoc/withAuth';

const Tentang: NextPage = () => {
    const [tabId,setTabId] = useState(1)

    const onShow = (id:number) => {
        setTabId(id)
    }

    return (
        <Layout page="tentang-kami">
        <main>
            <section className="flex flex-wrap flex-row pb-8 pt:10 lg:pt-16 px-8 lg:px-16 bg-[#FEF7F8]">
                <div className="basis-1/4 mb-12">
                    <h4 className="font-head text-femmy-pdark text-[35px] font-semibold">
                    Produk Femmy
                    </h4>
                </div>
                <div className="basis-3/4 mb-12 flex items-center w-full">
                    <SearchProduct />
                </div>

                <div className="basis-full lg:basis-[30%] pr-8">
                    <div className="bg-femmy-white h-[300px] w-[300px] rounded-xl flex justify-center items-center">
                        <img src="/images/femmy-look-slim.png" className="object-contain w-[200px]"/>
                    </div>
                </div>
                <div className="basis-full lg:basis-[70%]">
                    <h5 className="font-head text-femmy-pdark text-[30px] mb-3 font-semibold">Femmy Vitamin D3</h5>
                    <span className="font-sans text-black text-[20px] font-semibold mb-4 block">RP 22.000.-</span>
                    <div className="border-t-[1px] border-b-[1px] border-femmy-pmedium flex justify-between items-center">
                        <ul className="list-none flex gap-6">
                            <li onClick={() => onShow(1)} className={`${tabId == 1 ? 'border-b-2 border-femmy-pdark':'opacity-50'} py-2 inline-block  font-sans font-bold cursor-pointer w-[120px] text-center`}>Detail</li>
                            <li onClick={() => onShow(2)} className={`${tabId == 2 ? 'border-b-2 border-femmy-pdark':'opacity-50'} py-2 inline-block text-femmy-pdark font-sans font-bold cursor-pointer w-[120px] text-center`}>Info Penting</li>
                        </ul>
                        <span className="inline-block text-black font-sans font-semibold">Bagikan</span>
                    </div>
                    <div>
                        <div className={`${tabId == 1 ? 'flex' : 'hidden'} py-6`}>
                            <div className="basis-3/5">a</div>
                            <div className="basis-2/5 flex justify-end">
                                <div className="bg-femmy-pdark py-6 pl-8 pr-6 rounded-2xl w-[260px]">
                                    <h6 className="text-white font-sans text-[18px] text-center mb-4 leading-tight">Pembelian dari<br/>Official Store kami</h6>
                                    <Link href=""><a><img src="/images/to-tokped.png"/></a></Link>
                                    <Link href=""><a><img src="/images/to-blibli.png"/></a></Link>
                                    <Link href=""><a><img src="/images/to-shopee.png"/></a></Link>
                                </div>
                            </div>
                        </div>
                        <div className={`${tabId == 2 ? 'flex' : 'hidden'} py-6`}>2</div>
                    </div>
                </div>
            </section>
            
            <div className="border-b-[1px] border-femmy-pdark mx-8 lg:mx-16"></div>

            <section className="pb-12 pt-8 px-8 lg:px-16 bg-[#FEF7F8]">
                <h4 className="font-head text-femmy-pdark text-[35px] mb-6 font-semibold">
                    Produk Lainnya
                </h4>
                <div className="flex flex-row gap-6">
                    <div className="basis-1/4"> 
                        <CardProduct data={{ title: 'Femmy Look Slim' }} />
                    </div>
                    <div className="basis-1/4"> 
                        <CardProduct data={{ title: 'Femmy Look Slim' }} />
                    </div>
                    <div className="basis-1/4"> 
                        <CardProduct data={{ title: 'Femmy Look Slim' }} />
                    </div>
                    <div className="basis-1/4"> 
                        <CardProduct data={{ title: 'Femmy Look Slim' }} />
                    </div>
                </div>
            </section>
        </main>
        </Layout>
    );
};

export default Tentang;
