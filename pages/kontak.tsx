import type { NextPage } from 'next';
import Link from 'next/link';

// import component
import Layout from '../components/layouts/index';
import FormJoin from '../components/presentational/FormJoin/FormJoin';

// import hoc
import { withAUth } from '../hoc/withAuth';

const Kontak: NextPage = () => {
  return (
    <Layout page="tentang-kami">
        <section className="bg-[#FBEEE5]/[0.5]">
            <div className='mb-16'>
                <img src='/images/banner-kontak-femmy.jpg' className='mb-12 object-cover h-[300px] lg:h-[427px] w-full'/>
                <h3 className='text-femmy-pdark font-head text-[30px] font-semibold leading-tight text-center mb-4 px-8'>Kontak kami</h3>
                <p className='font=sans text-[14px] lg:text-[16px] text-femmy-pdark text-center mb-4 px-8'>Kontak kami untuk penjelasan lebih lanjut mengenai<br/>produk, member, maupun reseller.</p>
            </div>
            <div className='flex flex-wrap flex-row px-8 lg:px-32 gap-4 justify-between pb-14'>
                <div className='basis-full lg:basis-[32%] border-[1px] border-femmy-pdark rounded-2xl h-[200px] flex flex-col text-center items-center py-10'>
                    <img src='/images/cs.png' className='h-[55px] mb-6'/>
                    <span className='text-femmy-pdark font-sans font-semibold'>Customer Service/<br/>WA Business</span>
                </div>
                <div className='basis-full lg:basis-[32%] border-[1px] border-femmy-pdark rounded-2xl h-[200px] flex flex-col text-center items-center py-10'>
                    <img src='/images/marketplc.png' className='h-[55px] mb-6'/>
                    <span className='text-femmy-pdark font-sans font-semibold'>Marketplace</span>
                </div>
                <div className='basis-full lg:basis-[32%] border-[1px] border-femmy-pdark rounded-2xl h-[200px] flex flex-col text-center items-center py-10'>
                    <img src='/images/sosmed.png' className='h-[55px] mb-6'/>
                    <span className='text-femmy-pdark font-sans font-semibold'>Sosial Media</span>
                </div>
                <div className='basis-full border-[1px] border-femmy-pdark rounded-2xl h-[80px] mt-2 flex justify-center items-center font-semibold'>
                    <span className='text-femmy-pdark font-sans'>Ingin Ajukan Pertanyaan?</span>
                </div>
            </div>
        </section>
    </Layout>
  );
};

export default Kontak;
