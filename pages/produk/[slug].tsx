import { useState, useRef, useEffect } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Slider from 'react-slick';
import Image from 'next/image';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import { Link as LinkTo } from 'react-scroll';

import { verifyJwt } from '../../utils/verifyJwt';
import {wrapper} from '../../store/store';

// import component
import Layout from '../../components/layouts/index';
import FilterDropdown from '../../components/presentational/FilterDropdown/FilterDropdown';
import CardProduct from '../../components/presentational/CardProduct/CardProduct';
import SearchProduct from '../../components/presentational/SearchProduct/SearchProduct';
import Breadcrumb from '../../components/presentational/Breadcrumb/Breadcrumb';


// import utils
import { produk } from '../../utils/data';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,

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

type DataTypes = {
  judul: string;
  slug: string;
  harga: number;
  rating: number;
  image: string;
  imageDetail: string;
  content: string;
  tokped: string;
  shopee: string;
  tiktokshop: string;
};

const ProdukDetail: NextPage = ({auth}:any) => {
  const [tabId, setTabId] = useState(1);
  const [data, setData] = useState<DataTypes[]>([]);

  const router = useRouter();

  const produkSlider = useRef<any>(null);

  const onShow = (id: number) => {
    setTabId(id);
  };

  const nextSlider = () => {
    produkSlider.current.slickNext();
  };

  const prevSlider = () => {
    produkSlider.current.slickPrev();
  };

  const produkLain = () => {
    let fl = produk.filter((val) => {
      return val.slug !== router.query.slug;
    });
    return fl;
  };

  useEffect(() => {
    let fl = produk.filter((val) => {
      return val.slug == router.query.slug;
    });
    setData(fl);
  }, [router.isReady, router.query.slug]);

  return (
    <Layout page="produk" auth={auth}>
      <section className="flex flex-wrap flex-row pb-8 pt-10 lg:pt-10 px-8 lg:px-16 bg-[#FEF7F8]">
        <div className="basis-full">
          <Breadcrumb page="produk" detail="Femmy Look Slim" />
        </div>
        <div className="basis-full xl:basis-1/4 mb-12">
          <h4 className="font-head text-femmy-pdark text-[35px] font-semibold hidden md:block">
            Produk Femmy
          </h4>
        </div>
        <div className="basis-full xl:basis-3/4 mb-12 flex items-center w-full pr-10">
          <SearchProduct />
        </div>

        <div className="basis-full lg:basis-[30%] pr-0 md:pr-8 mb-8 pt-0 lg:pt-0">
          <div className="bg-femmy-white h-[300px] w-full md:w-[300px] rounded-xl flex justify-center items-center">
            <img
              src={data[0]?.imageDetail}
              className="object-contain w-full h-full md:w-[200px]"
            />
          </div>
        </div>
        <div className="basis-full lg:basis-[70%] pr-10">
          <h5 className="font-head text-femmy-pdark text-[30px] mb-3 font-semibold text-center md:text-left">
            {data[0]?.judul}
          </h5>
          <span className="font-sans text-femmy-white md:text-black text-[20px] font-semibold text-center md:text-left p-2 md:pl-0 md:pb-4 mb-6 md:mb-0 mt-8 md:mt-0 block bg-femmy-pdark md:bg-transparent rounded-full">
            <LinkTo
              to={'pembelian'}
              smooth={true}
              duration={500}
              offset={-85}
              className="block md:hidden font-sans text-white text-[12px] font-normal"
            >
              Beli Sekarang
            </LinkTo>
            RP {data[0]?.harga.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}.-
          </span>
          <div className="md:border-t-[1px] border-b-[1px] border-femmy-pmedium flex justify-between items-center">
            <ul className="list-none flex gap-6 w-full">
              <li
                onClick={() => onShow(1)}
                className={`${
                  tabId == 1 ? 'border-b-2 border-femmy-pdark' : 'opacity-50'
                } py-2 inline-block  font-sans cursor-pointer w-full md:w-[120px] text-femmy-pdark font-black text-left lg:text-center`}
              >
                Detail
              </li>
              {/* <li onClick={() => onShow(2)} className={`${tabId == 2 ? 'border-b-2 border-femmy-pdark':'opacity-50'} py-2 inline-block text-femmy-pdark font-sans font-bold cursor-pointer w-full md:w-[120px] text-center`}>Info Penting</li> */}
            </ul>
            <ul className="list-none flex gap-6 w-full justify-end">
              <li className="text-femmy-pdark font-sans font-semibold hidden md:flex"><img src='/images/wishtlist.png' className='mr-[13px] w-[17px] object-contain'/>Masukan ke Wishlist</li>
              <li className="text-femmy-pdark font-sans font-semibold hidden md:flex"><img src='/images/share-color.png' className='mr-[13px] w-[17px] object-contain'/>Bagikan</li>
            </ul>
          </div>
          <div>
            <div className={`${tabId == 1 ? 'flex' : 'hidden'} py-6`}>
              <div className="basis-full lg:basis-3/5 font-sansMedium">
                {parse(data[0]?.content ? data[0]?.content : '')}
              </div>
              <div className="basis-full lg:basis-2/5 justify-end hidden md:flex">
                {true && 
                  <div className="bg-femmy-pdark py-6 pl-8 pr-6 rounded-2xl w-[260px]">
                    <h6 className="text-white font-sans text-[24px] lg:text-[18px] text-center mb-4 leading-tight">
                      Pembelian dari
                      <br />
                      Official Store kami
                    </h6>
                    <Link href={data[0]?.tokped || ''} target={'_blank'} rel={'noopener'}>
                        <img src="/images/to-tokped.png" />
                    </Link>
                    <Link href="https://www.lazada.co.id/bintang-toedjoe-official-store/?spm=a2o4j.8553159.0.0.37a86b15OCW3a8&q=All-Products&shop_category_ids=1092591&from=wangpu&sc=KVUG" target={'_blank'} rel={'noopener'}>
                        <img src="/images/lazada.png" />
                    </Link>
                    <Link href={data[0]?.shopee || ''} target={'_blank'} rel={'noopener'}>
                        <img src="/images/to-shopee.png" />
                    </Link>
                    <Link href={data[0]?.tiktokshop || ''} target={'_blank'} rel={'noopener'}>
                        <img src="/images/to-tiktok.png" />
                    </Link>
                  </div>
                }
                {false &&
                  <div className='w-[75%]'>
                    <div className='bg-femmy-pdark px-8 pt-6 pb-6 rounded-t-3xl'>
                        <h3 className='text-white text-[16px] font-sansMedium  mb-3 text-center'>Kuantitas</h3>
                        <div className='flex justify-center'>
                            <div  className='cursor-pointer bg-white w-[50px] flex justify-center items-center rounded-tl-lg rounded-bl-lg'><p className='text-femmy-pmedium font-sansSemi text-[24px]'>-</p></div>
                            <input className='w-[95px] cs-input-1 text-center bg-white border-none focus:border-none text-femmy-pmedium text-[20px] focus:shadow-none focus:outline-none font-sans' value={8} type={'number'}/>
                            <div  className='cursor-pointer bg-white w-[50px] flex justify-center items-center rounded-tr-lg rounded-br-lg'><p className='text-femmy-pmedium font-sansSemi text-[24px]'>+</p></div>
                      </div>
                    </div>
                    <div className='bg-[#FDC8CE] py-3 px-10 rounded-b-3xl'>
                        <Link href='/keranjang'><img className='w-[40px] mx-auto' src='/images/cart-shop.png' alt='icon shop'/></Link>
                    </div>
                </div>
                }
              </div>
            </div>
            {/*  tab 2 */}
            {/* <div className={`${tabId == 2 ? 'flex' : 'hidden'} py-6`}>Info</div> */}
          </div>
        </div>
      </section>
      <div className="hidden lg:block border-b-[1px] border-femmy-pdark mx-8 lg:mx-16"></div>

      <div className="w-full flex md:hidden" id="pembelian">
        <div className="w-full bg-femmy-pdark py-6 pl-8 pr-6 ">
          <h6 className="text-white font-sans text-[18px] text-center mb-4 leading-tight">
            Pembelian dari
            <br />
            Official Store kami
          </h6>
          <Link href={data[0]?.tokped || ''} target={'_blank'} rel={'noopener'}>
              <img src="/images/to-tokped.png" />
          </Link>
          <Link href="https://www.lazada.co.id/bintang-toedjoe-official-store/?spm=a2o4j.8553159.0.0.37a86b15OCW3a8&q=All-Products&shop_category_ids=1092591&from=wangpu&sc=KVUG" target={'_blank'} rel={'noopener'}>
              <img src="/images/lazada.png" />
          </Link>
          <Link href={data[0]?.shopee || ''} target={'_blank'} rel={'noopener'}>
              <img src="/images/to-shopee.png" />
          </Link>
          <Link href={data[0]?.tiktokshop || ''} target={'_blank'} rel={'noopener'}>
              <img src="/images/to-tiktok.png" />
          </Link>
        </div>
      </div>

      <section className="pb-12 pt-8 px-8 lg:px-16 bg-[#FEF7F8] produk_lainnya">
        <h4 className="font-head text-femmy-pdark text-[35px] mb-6 font-semibold">
          Produk Lainnya
        </h4>
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10"> */}
        <div className="relative">
          <button
            className="absolute top-[50%] left-[-20px] translate-y-[-50%] z-10"
            onClick={prevSlider}
          >
            <Image src="/images/prev-button.png" width={40} height={40} alt=""/>
          </button>

          <Slider
            {...settings}
            ref={(slider) => (produkSlider.current = slider)}
          >
            {produkLain().map((val, i) => (
              <CardProduct
                key={i}
                data={{
                  judul: val.judul,
                  harga: val.harga,
                  rating: 4,
                  image: val.image,
                }}
              />
            ))}
          </Slider>

          <button
            className="absolute top-[50%] right-[-20px] translate-y-[-50%] z-10"
            onClick={nextSlider}
          >
            <Image src="/images/next-button.png" width={40} height={40} alt=""/>
          </button>
        </div>
      </section>
    </Layout>
  );
};

export const getServerSideProps =  wrapper.getServerSideProps( store => async ({req, res}:any) => {

  let token = await verifyJwt(req.cookies.refreshToken)
  let user = []
  let auth = false

  if(token){
      const fetchData = await fetch(`${process.env.NEXT_PUBLIC_API}/api/users/${token.id}`,{
          method:"GET",
          headers:{
              'Authorization': 'Bearer ' + req.cookies.refreshToken,
          }
      })
      user = await fetchData.json()
      auth = true
  }

  return {
    props: {
      user,
      auth : auth
    },
  }
})

export default ProdukDetail;
