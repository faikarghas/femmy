import type { NextPage } from 'next';
import Link from 'next/link';

// import component
import Layout from '../components/layouts/index';

// import hoc
import { withAUth } from '../hoc/withAuth';

const Temukan: NextPage = () => {
  return (
    <Layout page="tentang-kami">
      <section className="flex flex-row relative bg-femmy-plight">
        <div className="">
          <picture>
            <source
              media="(min-width:750px)"
              srcSet="/images/temukan-femmy-os.jpg"
            />
            <img
              alt="image-femmy"
              src="/images/temukan-femmy-os.jpg"
              className="object-cover h-[300px] lg:h-[100%] w-full"
            ></img>
          </picture>
        </div>
      </section>
      <section className="bg-[#FEC8CE] pt-8 pb-16 lg:pb-24">
        <div className="mb-12 px-8">
          <h1 className="text-femmy-pdark font-head text-center text-[30px] lg:text-[35px] font-medium lg:mb-2.5s">
            Temukan Femmy
          </h1>
          <span className="text-femmy-pdark font-sans text-center text-[14px] font-medium block">
            Temukan kami di marketplace kesayanganmu!
          </span>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-6 px-8">
          <Link
            href="https://www.tokopedia.com/b7official/product?q=femmy&srp_component_id=02.01.00.00&srp_page_id=2611073&srp_page_title=Bintang%20Toedjoe%20Official&navsource=shop"
            target="_blank"
            rel="noopener"
          >
            <a className="bg-femmy-white w-[100%] lg:w-[250px] h-[100px] lg:h-[150px] rounded-full lg:rounded-2xl p-4 flex flex-row lg:flex-col justify-center items-center shadow-[7px_10px_18px_rgba(0,0,0,0.25)]">
              <div className="w-[180px] flex flex-row lg:flex-col justify-left items-center">
                <img
                  alt="image-femmy"
                  className="w-[60px] h-[59px] object-contain mb-3 mr-4 lg:mr-0"
                  src="/images/tokped-logo.png"
                />
                <span className="font-sans text-femmy-pdark">Tokopedia</span>
              </div>
            </a>
          </Link>
          <Link
            href="https://www.lazada.co.id/bintang-toedjoe-official-store/?spm=a2o4j.8553159.0.0.37a86b15OCW3a8&q=All-Products&shop_category_ids=1092591&from=wangpu&sc=KVUG"
            target="_blank"
            rel="noopener"
          >
            <a className="bg-femmy-white w-[100%] lg:w-[250px] h-[100px] lg:h-[150px] rounded-full lg:rounded-2xl p-4 flex flex-row lg:flex-col justify-center items-center shadow-[7px_10px_18px_rgba(0,0,0,0.25)]">
              <div className="w-[180px] flex flex-row lg:flex-col justify-left items-center">
                <img
                  alt="image-femmy"
                  className="w-[60px] h-[59px] object-contain mb-3 mr-4 lg:mr-0"
                  src="/images/lazadaa.png"
                />
                <span className="font-sans text-femmy-pdark">Lazada</span>
              </div>
            </a>
          </Link>
          <Link
            href="https://shopee.co.id/universal-link/bintangtoedjoe_officialstore?shopCollection=157600359&deep_and_web=1&utm_campaign=s156508041"
            target="_blank"
            rel="noopener"
          >
            <a className="bg-femmy-white w-[100%] lg:w-[250px] h-[100px] lg:h-[150px] rounded-full lg:rounded-2xl p-4 flex flex-row lg:flex-col justify-center items-center shadow-[7px_10px_18px_rgba(0,0,0,0.25)]">
              <div className="w-[180px] flex flex-row lg:flex-col justify-left items-center">
                <img
                  alt="image-femmy"
                  className="w-[60px] h-[59px] object-contain mb-3 mr-4 lg:mr-0"
                  src="/images/shopee-logo.png"
                />
                <span className="font-sans text-femmy-pdark">Shopee</span>
              </div>
            </a>
          </Link>
          <Link href="/" target="_blank" rel="noopener">
            <a className="bg-femmy-white w-[100%] lg:w-[250px] h-[100px] lg:h-[150px] rounded-full lg:rounded-2xl p-4 flex flex-row lg:flex-col justify-center items-center shadow-[7px_10px_18px_rgba(0,0,0,0.25)]">
              <div className="w-[180px] flex flex-row lg:flex-col justify-left items-center">
                <img
                  alt="image-femmy"
                  className="w-[60px] h-[59px] object-contain mb-3 mr-4 lg:mr-0"
                  src="/images/tiktok-logo.png"
                />
                <span className="font-sans text-femmy-pdark">Tik Tok Shop</span>
              </div>
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Temukan;
