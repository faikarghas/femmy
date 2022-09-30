import type { NextPage } from 'next';
import Link from 'next/link';

// import component
import Layout from '../components/layouts/index';
import FormJoin from '../components/presentational/FormJoin/FormJoin';

// import hoc
import { withAUth } from '../hoc/withAuth';

const Reseller: NextPage = () => {
  return (
    <Layout page="tentang-kami">
        <section className="bg-[#F9EFE6] py-16 px-8 md:px-60">
            <div className="flex justify-center items-center flex-col mb-12">
                <h1 className='text-femmy-pdark font-head text-[40px] font-semibold leading-tight'>Femmy Reseller</h1>
                <span className='text-[#EA92A7] text-[20px] font-head leading-tight'>Melangkah bersama</span>
            </div>
            <div className='mb-28'>
                <picture>
                    <source
                        media="(min-width:750px)"
                        srcSet="/images/femmy-reseller.png"
                    />
                    <img
                        src="/images/femmy-reseller-m.png"
                        className="mb-12"
                    ></img>
                </picture>
                {/* <img src='/images/femmy-reseller.png' className='mb-12'/> */}
              <h3 className='text-femmy-pdark font-head text-[30px] font-semibold leading-tight text-center mb-6'>Bergabung bersama<br/>Keluarga Femmy</h3>
              <p className='font=sans text-[16px] text-femmy-pdark text-center mb-4'>Bersama kamu, Femmy ingin menciptakan wadah bagi setiap orang yang ingin meningkatkan potensi dalam dirinya melalui berbagai program kesehatan, kecantikan, dan program unggulan Femmy Reseller.</p>
              <p className='font=sans text-[16px] text-femmy-pdark text-center'>Dengan melangkah bersama Femmy Reseller, kamu bisa mendapatkan banyak keuntungan seperti poin reward, uang tunai, e-wallet, masih banyak hadiah lain yang bisa kamu dapatkan!</p>
            </div>
            <div className="flex flex-row flex-wrap">
                <div className='basis-full'>
                  <h4 className='px-6 text-femmy-pdark font-head text-[30px] font-semibold leading-tight mb-8 pb-6 border-b-[1px] border-femmy-pdark'>Daftar Sekarang</h4>
                </div>
                <div className="basis-full md:basis-[55%] lg:pl-6">
                  <FormJoin />
                </div>
                <div className="hidden md:flex basis-[45%] items-center justify-end">
                  <img
                    src="/images/draft.png"
                    className="object-contain w-[345px]"
                  />
                </div>
            </div>
        </section>
    </Layout>
  );
};

export default Reseller;
