import type { NextPage } from 'next';
import Link from 'next/link';

// import component
import Layout from '../components/layouts/index';

// import hoc
import { withAUth } from '../hoc/withAuth';

const Tentang: NextPage = () => {
  return (
    <Layout page="tentang-kami">
        <section className="flex flex-col lg:flex-row relative bg-femmy-plight pt-0 lg:pt-4 pb-12 px-8 lg:px-16">
          <div className="basis-full lg:basis-2/5 order-last lg:order-first">
            <div className="lg:w-[450px] lg:pt-14">
              <h2 className="font-head text-femmy-pdark text-[30px] mb-6 font-semibold">
                Selalu ada Femmy
              </h2>
              <p className="fonst-sans text-femmy-pdark text-[14px]">
              Femmy hadir sebagai solusi komprehensif bagi para perempuan modern Indonesia untuk senantiasa menjaga kesehatan tubuh dan merawat kecantikan dari dalam. Bersama Femmy, PT Bintang Toedjoe (a Kalbe Company) mempersembahkan rangkaian produk suplemen dengan kandungan beragam ekstrak alami berkualitas yang dapat menunjang kebutuhan kesehatan perempuan.
              </p>
              <br />
              <p className="fonst-sans text-femmy-pdark text-[14px]">
              Kami senantiasa mendengar setiap aspirasi yang diutarakan kaum perempuan, untuk mengutamakan kesehatan serta kecantikannya. Oleh karena itu, kami berdiri bersama untuk memperjuangkan impian para perempuan negeri dalam mengoptimalkan potensi setiap individu untuk terus menginspirasi satu sama lain melalui kecantikan dari dalam. 
              </p>
            </div>
          </div>
          <div className="basis-full lg:basis-3/5 order-first lg:order-last">
            <picture className="flex justify-end p-0 lg:p-4 xl:p-0">
              <source
                media="(min-width:750px)"
                srcSet="/images/tentang-img.png"
              />
              <img
                src="/images/tentang-m-img.png"
                className="h-[600px] object-contain"
              ></img>
            </picture>
          </div>
        </section>
        <section className="flex flex-wrap flex-row bg-[#FEF7F8] relative ">
          <img className="w-full  object-cover" src="/images/tentang2-img.jpg" />
          <div className="relative lg:absolute w-full lg:w-[400px] top-[50%] lg:left-16 lg:translate-y-[-50%] px-8 py-10 bg-[#F6C2C6] xl:bg-[#F6C2C6]/[0]">
            <h2 className="font-head text-femmy-pdark text-[30px] mb-4 leading-tight font-semibold">
              Bergabung menjadi Femmy Reseller sekarang!
            </h2>
            <p className="fonst-sans text-femmy-pdark text-[14px] mb-10">
            Jadi sempurna bersama Femmy Reseller dan kamu bisa mendapatkan banyak keuntungan seperti poin reward, uang tunai, e-wallet dan banyak hadiah lain yang bisa kamu dapatkan!
            </p>
            <a className="block bg-femmy-pdark rounded-[56px] text-femmy-white text-[13px] py-[12px] px-6 leading-[10px] w-full lg:w-[210px] text-center">
              Bergabung sekarang
            </a>
          </div>
        </section>
    </Layout>
  );
};

export default Tentang;
