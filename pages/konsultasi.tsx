import type { NextPage } from 'next';
import Link from 'next/link';

import { verifyJwt } from '../utils/verifyJwt';
import {wrapper} from '../store/store';

// import component
import Layout from '../components/layouts/index';
import FormKontak from '../components/presentational/FormKontak/FormKontak';

const Kontak: NextPage = ({auth}:any) => {
  return (
    <Layout page="konsultasi" auth={auth}>
      <section className="flex flex-row flex-wrap relative lg:h-screen">
        <div className="block object-contain basis-full h-full lg:basis-2/4">
          <picture>
            <source
              media="(min-width:750px)"
              srcSet="/images/banner-kontak3.jpg"
            />
            <img
              alt="image-femmy"
              src="/images/kontakm.jpg"
              className="w-full h-full object-cover"
            ></img>
          </picture>
        </div>
        <div className="basis-full h-100 lg:basis-2/4 lg:bg-femmy-pdark p-0">
          <div className="flex items-center mb-14 lg:mb-0 pt-8 px-8 lg:px-10 relative lg:absolute lg:top-[50%] right-[0] lg:right-[calc(0%+48px)] lg:translate-x-[0%] lg:translate-y-[-50%] bg-[#FCF4EE] lg:bg-femmy-plight h-full lg:h-[calc(100%-96px-35px)] w-[100%] lg:w-[64%] rounded-2xl shadow-[16px_17px_16px_rgba(0, 0, 0, 0.17)]">
            <div className="w-full">
              <div className="mb-4 pb-2 xl:pb-2 border-b-[1px] text-center lg:text-left lg:border-femmy-pdark">
                <h2 className="text-femmy-pdark text-[35px] xl:text-[40px] font-head">
                  Tanya Kami
                </h2>
              </div>
              <p className="hidden lg:block mb-6 text-femmy-pdark text-[15px] xl:text-[16px] leading-[15px] xl:leading-[20px] font-sans font-semibold pr-0 lg:pr-[9rem]">
                Pakar Femmy siap menjawab pertanyaan kamu baik seputar masalah
                kesehatan tubuh maupun produk-produk suplemen terkait.
              </p>
              <p className="block lg:hidden text-center mb-12 text-femmy-pdark text-[15px] xl:text-[16px] leading-[15px] xl:leading-[15px] font-sans font-semibold">
                Kami siap menjawab semua pertanyaan kamu, ajukan pertanyaan kamu
                sekarang
              </p>
              <p className="block lg:hidden text-center mb-6 text-femmy-pdark text-[15px] xl:text-[16px] leading-[15px] xl:leading-[15px] font-sans font-semibold">
                Ingin Ajukan Pertanyaan?
              </p>
              <div className="flex flex-row">
                <div className="basis-full">
                  <FormKontak />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="block lg:hidden mx-10 border-femmy-pdark border-b-[2px]"></div>
      <section className="bg-[#FCF4EE]">
        <div className="flex justify-center pt-12 pb-16">
          <p className="text-femmy-pdark font-sans font-semibold px-8 lg:px-[30rem] text-center">
            Hubungi WhatsApp kami untuk konsultasi online atau temukan kami di
            marketplace dan media sosial untuk tetap terhubung!
          </p>
        </div>
        <div className="flex flex-wrap flex-row px-8 lg:px-32 gap-4 justify-between pb-16">
          <Link href="https://wa.me/6282310273126"
              target="blank"
              rel="noopener"
              className="basis-full lg:basis-[32%] border-[1px] border-femmy-pdark rounded-2xl h-[200px] flex flex-col text-center items-center py-10">
              <img
                alt="image-femmy"
                src="/images/cs3.png"
                className="h-[55px] w-[60px] object-contain mb-6"
              />
              <span className="text-femmy-pdark font-sans font-semibold">
                Konsultasi Online Setiap Hari
                <br />
                (15:00 - 16:00 WIB)
              </span>
          </Link>
          <Link href={'/temukan-femmy'}
            className="basis-full lg:basis-[32%] border-[1px] border-femmy-pdark rounded-2xl h-[200px] flex flex-col text-center items-center py-10">
              <img
                alt="image-femmy"
                src="/images/marketplc.png"
                className="h-[55px] w-[60px] object-contain mb-6"
              />
              <span className="text-femmy-pdark font-sans font-semibold">
                Marketplace
              </span>
          </Link>
          <div className="relative group basis-full lg:basis-[32%] border-[1px] border-femmy-pdark rounded-2xl h-[200px] flex flex-col text-center items-center py-10">
            <img
              alt="image-femmy"
              src="/images/sosmed.png"
              className="h-[55px] w-[60px] object-contain mb-6"
            />
            <span className="text-femmy-pdark font-sans font-semibold">
              Sosial Media
            </span>
            <div className="absolute top-0 left-0 w-full h-full rounded-2xl">
              <ul className="group-hover:flex hidden transition-all list-none list rounded-2xl gap-y-2 flex-col justify-center items-center h-full bg-[#FBEEE5] p-4">
                <li className="w-[120px]">
                  <Link href="https://www.tiktok.com/@femmy.daily"
                      target="_blank"
                      rel="noopener"
                      className="flex items-center"
                    >
                      <img
                        alt="image-femmy"
                        className="w-[30px]"
                        src="/images/tiktok.png"
                      />
                      <span className="ml-4 text-[16px] font-sans text-femmy-pdark">
                        Tik Tok
                      </span>
                  </Link>
                </li>
                <li className="w-[120px]">
                  <Link href="https://www.Instagram.com/femmy.daily"
                      target="_blank"
                      rel="noopener"
                      className="flex items-center"
                    >
                      <img
                        alt="image-femmy"
                        className="w-[30px]"
                        src="/images/logo-ig.png"
                      />
                      <span className="ml-4 text-[16px] font-sans text-femmy-pdark">
                        Instagram
                      </span>
                  </Link>
                </li>
                {/* <li className="w-[120px]">
                            <Link href="#">
                                <a className='flex items-center'>
                                <img className="w-[30px]" src="/images/logo-fb.png" />
                                <span className='ml-4 text-[16px] font-sans text-femmy-pdark'>Facebook</span>
                                </a>
                            </Link>
                            </li> */}
                <li className="w-[120px]">
                  <Link href="https://www.youtube.com/channel/UC7Sg8HkaWJItuMLbvNdKvWQ"
                      target="_blank"
                      rel="noopener"
                      className="flex items-center"
                    >
                      <img
                        alt="image-femmy"
                        className="w-[30px]"
                        src="/images/logo-yt.png"
                      />
                      <span className="ml-4 text-[16px] font-sans text-femmy-pdark">
                        Youtube
                      </span>
                  </Link>
                </li>
              </ul>
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

export default Kontak;
