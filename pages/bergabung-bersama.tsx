import type { NextPage } from 'next';
import Link from 'next/link';
import Slider from 'react-slick';

import { verifyJwt } from '../utils/verifyJwt';
import {wrapper} from '../store/store';

// import component
import Layout from '../components/layouts/index';
import FormJoin from '../components/presentational/FormJoin/FormJoin';



const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  // slidesToShow: 3,
  // slidesToScroll: 1,
  centerMode: true,
  arrows: false,
  variableWidth: true,
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


const Reseller: NextPage = ({auth}:any) => {
  return (
    <Layout page="tentang-kami" auth={auth}>
      <section className="bg-[#F9EFE6] py-20 px-8 md:px-60">
        <div className="flex justify-center items-center flex-col mb-12">
          <h1 className="text-femmy-pdark font-head text-[35px] lg:text-[40px] text-center font-semibold leading-tight mb-4">
            Jadilah bagian dari<br/>Keluarga Femmy
          </h1>
          <span className="text-[#EA92A7] text-[20px] lg:text-[25px] text-center block lg:text-left font-head leading-tight">
            Mari bersama Menginspirasi
          </span>
        </div>
        <div className="mb-18">
          <picture>
            <source
              media="(min-width:750px)"
              srcSet="/images/femmy-reseller2.png"
            />
            <img
              alt="femmy-reseller"
              src="/images/femmy-reseller-m-2.png"
              className="mb-20"
            ></img>
          </picture>
          {/* <img src='/images/femmy-reseller.png' className='mb-12'/> */}
          <div className="px-0 lg:px-[6rem]">
            <p className="font=sans text-[16px] text-femmy-pdark text-center mb-4">
              Bersama kamu, Femmy ingin menciptakan wadah bagi setiap orang yang
              ingin meningkatkan potensi dalam dirinya melalui berbagai program
              kesehatan, kecantikan, dan program unggulan Femmy Reseller.
            </p>
            <p className="font=sans text-[16px] text-femmy-pdark text-center">
              Jadi bagian dari Femmy Reseller dan kamu bisa mendapatkan banyak
              keuntungan seperti poin reward, potongan harga, dan masih banyak
              lagi!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F9EFE6] flex justify-center">

        <table className="border-collapse table-manfaat">
          <thead>
            <tr>
              <th className="text-[25px] text-[#9C1B66] font-head w-[350px] pb-6 flex">Manfaat</th>
              <th className="text-[25px] text-[#9C1B66] border-r-[1px] border-l-[1px] border-[#9C1B66] border-dashed font-head px-4 pb-6">Femmy Reseller</th>
              <th className="text-[25px] text-[#9C1B66] font-head pl-4 pb-6">Femmy Bestie</th>
            </tr>
          </thead>

          <tbody className='border-t-[1px] border-[#9C1B66] pt-10'>
            <tr>
              <td className="font-sans font-medium py-4 pr-8 w-[250px]">Dapatkan disc. 25% untuk setiap pembelian produk Femmy.</td>
              <td className="font-sans">Ya</td>
              <td className="font-sans">Tidak</td>
            </tr>
            <tr className=''>
              <td className="font-sans font-medium py-4 pr-8 w-[250px]">Dapatkan Point Reward disetiap pembelanjaan produk Femmy.</td>
              <td className="font-sans">Ya</td>
              <td className="font-sans">Ya</td>
            </tr>
            <tr>
              <td className="font-sans font-medium py-4 pr-8 w-[250px]">Point Reward bisa ditukarkan dengan berbagai hadiah menarik melalui website.</td>
              <td className="font-sans">Ya</td>
              <td className="font-sans">Ya</td>
            </tr>
            <tr>
              <td className="font-sans font-medium py-4 pr-8 w-[250px]">Free Pass untuk event kegiatan yang diadakan oleh Femmy.</td>
              <td className="font-sans">Ya</td>
              <td className="font-sans">Ya</td>
            </tr>
            <tr>
              <td className="font-sans font-medium py-4 pr-8 w-[250px]">Dapatkan promo menarik pada pembelanjaan produk Femmy di marketplace.</td>
              <td className="font-sans">Ya</td>
              <td className="font-sans">Tidak</td>
            </tr>
            <tr>
              <td className="font-sans font-medium py-4 pr-8 w-[250px]">Dapatkan kesempatan undian untuk Grand Prizes (Trip ke Korea, Umroh, dll).</td>
              <td className="font-sans">Ya</td>
              <td className="font-sans">Tidak</td>
            </tr>
          </tbody>
        </table>

      </section>

      <section className='bg-[#F9EFE6] py-20 px-8 md:px-60 text-center'>
        <h4 className='text-femmy-pdark font-head text-[22px] mb-9'>Bergabung menjadi keluarga Femmy sekarang!</h4>

        <ul className='flex items-center justify-center mb-9'>
          <li className='bg-[#8F2A64] rounded-2xl text-center w-[290px]'>
              <Link href="/form-reseller" className='px-16 py-8 block'>
                  <p className='text-[#DDC4B3] font-sans'>Daftar menjadi</p>
                  <p className='text-white font-sans text-[19px]'>Femmy Reseller</p>
              </Link>
          </li>
          <li className='font-sans text-femmy-pdark mx-5'>atau</li>
          <li className='bg-[#8F2A64] rounded-2xl text-center w-[290px]'>
            <Link href="/form-bestie" className='px-16 py-8 block'>
                <p className='text-[#DDC4B3] font-sans'>Daftar menjadi</p>
                <p className='text-white font-sans text-[19px]'>Femmy Bestie</p>
            </Link>
          </li>
        </ul>

      </section>
      <section className='bg-[#F9EFE6] text-center'>
        <h3 className='text-femmy-pdark font-head text-[26px] mb-6'>Cerita Mereka</h3>
        <div className='slider-ceritaKami'>
          <Slider
              {...settings}
          >

            <div className='h-[450px] w-[600px] relative'>
              <div className='h-full'>
                <img className='h-full w-[600px] object-cover opacity-40' src='/images/cerita-kami-slider-2.png' />
                <img className='vid-play absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100px] cursor-pointer hidden' src='/images/play-button.png' />
              </div>
            </div>

            <div className='h-[450px] w-[600px] relative'>
              <div className='h-full'>
                <img className='h-full w-[600px] object-cover opacity-40' src='/images/cerita-kami-slider-2.png' />
                <img className='vid-play absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100px] cursor-pointer hidden' src='/images/play-button.png' />
              </div>
            </div>

            <div className='h-[450px] w-[600px] relative'>
              <div className='h-full'>
                <img className='h-full w-[600px] object-cover opacity-40' src='/images/cerita-kami-slider-2.png' />
                <img className='vid-play absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100px] cursor-pointer hidden' src='/images/play-button.png' />
              </div>
            </div>

            <div className='h-[450px] w-[600px] relative'>
              <div className='h-full'>
                <img className='h-full w-[600px] object-cover opacity-40' src='/images/cerita-kami-slider-2.png' />
                <img className='vid-play absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100px] cursor-pointer hidden' src='/images/play-button.png' />
              </div>
            </div>

          </Slider>
        </div>
      </section>

      <section className='bg-[#F9EFE6] py-20 px-8 md:px-60'>
          <h4 className='text-femmy-pdark font-head border-b-[1px] border-femmy-pdark text-[27px] pb-6 mb-6 px-4'>Perhitungan Point</h4>
          <div className='p-4'>
            <p className='text-femmy-pdark font-sans mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus purus, ultricies nec odio quis, feugiat rutrum ipsum. Cras erat urna, dapibus et luctus sed, ullamcorper in diam. Cras commodo dapibus urna vitae vestibulum. Donec bibendum sagittis ultrices. Morbi sit amet bibendum est. Sed massa massa, iaculis non vestibulum vel, cursus nec leo. In ut magna augue. Vestibulum ultricies lacus turpis, et lacinia quam efficitur nec. Quisque iaculis ac mauris a ultricies. Nulla et lacus ligula. Ut nec metus sit amet odio euismod pulvinar in ut dui. Suspendisse posuere pharetra lorem nec finibus. Aenean gravida, ligula sed maximus sollicitudin, massa nibh consectetur felis, facilisis pharetra neque neque a magna. Mauris efficitur ornare tortor vitae posuere. Morbi posuere accumsan neque vitae accumsan.</p>
            <p className='text-femmy-pdark font-sans mb-6'>Suspendisse posuere pharetra lorem nec finibus. Aenean gravida, ligula sed maximus sollicitudin, massa nibh consectetur felis, facilisis pharetra neque neque.</p>
            <img className='w-[100px] mb-4' src='/images/gopay.png' alt='logo gopay' />
            <p className='text-femmy-pdark font-sans text-[12px] w-[70%] mb-8'>Suspendisse posuere pharetra lorem nec finibus. Aenean gravida, ligula sed maximus sollicitudin, massa nibh consectetur felis, facilisis pharetra neque neque.</p>
            <Link href="/" className='text-[#F9EFE6] bg-femmy-pdark px-16 py-2 rounded-xl inline-block font-sans'>tukar poinmu sekarang!</Link>
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

export default Reseller;