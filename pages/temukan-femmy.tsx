import type { NextPage } from 'next';
import Link from 'next/link';

// import component
import Layout from '../components/layouts/index';

// import hoc
import { withAUth } from '../hoc/withAuth';

const Temukan: NextPage = () => {
  return (
    <Layout page="tentang-kami">
      <main>
        <section className="flex flex-row relative bg-femmy-plight">
            <div className="">
                <img src="/images/temukan-femmy-os.jpg" className='w-full object-cover'/>
            </div>
        </section>
        <section className="bg-[#FEC8CE] pt-8 pb-24">
            <div className='mb-12'>
                <h1 className='text-femmy-pdark font-head text-center text-[35px] font-semibold mb-2.5'>Temukan Femmy</h1>
                <span className='text-femmy-pdark font-head text-center text-[14px] font-medium block'>Temukan kami di marketplace kesayangan kamu!</span>
            </div>
            <div className='flex justify-center gap-6'>
                <Link href='/'>
                    <a className='bg-femmy-white w-[250px] h-[150px] rounded-2xl p-4 flex flex-col justify-center items-center shadow-[7px_10px_18px_rgba(0,0,0,0.25)]'>
                        <img className='w-[60px] mb-3' src="/images/tokped-logo.png"/>
                        <span className='font-sans text-femmy-pdark'>Tokopedia</span>
                    </a>
                </Link>
                <Link href='/'>
                    <a className='bg-femmy-white w-[250px] h-[150px] rounded-2xl p-4 flex flex-col justify-center items-center shadow-[7px_10px_18px_rgba(0,0,0,0.25)]'>
                        <img className='w-[60px] mb-3' src="/images/blibli-logo.png"/>
                        <span className='font-sans text-femmy-pdark'>Blibli</span>
                    </a>
                </Link>
                <Link href='/'>
                    <a className='bg-femmy-white w-[250px] h-[150px] rounded-2xl p-4 flex flex-col justify-center items-center shadow-[7px_10px_18px_rgba(0,0,0,0.25)]'>
                        <img className='w-[60px] mb-3' src="/images/shopee-logo.png"/>
                        <span className='font-sans text-femmy-pdark'>Shopee</span>
                    </a>
                </Link>
            </div>
        </section>
      </main>
    </Layout>
  );
};

export default Temukan;
