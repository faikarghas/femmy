import type { NextPage } from 'next';
import Link from 'next/link';

// import component
import Layout from '../components/layouts/index';

// import hoc
import { withAUth } from '../hoc/withAuth';

const Tentang: NextPage = () => {
  return (
    <Layout page="tentang-kami">
      <main>
        <section className="flex flex-row relative bg-femmy-plight py-8 px-8 lg:px-16">
          <div className="basis-2/5">
            <div className="lg:w-[450px] lg:pt-14">
              <h2 className="font-head text-femmy-pdark text-[30px] mb-6 font-semibold">
                Selalu ada Femmy
              </h2>
              <p className="fonst-sans text-femmy-pdark text-[14px]">
                Femmy hadir sebagai solusi komprehensif bagi para perempuan
                modern Indonesia untuk senantiasa menjaga kesehatan tubuh dan
                merawat kecantikan dari dalam. Bersama Femmy, PT Bintang Toedjoe
                (a Kalbe Company) mempersembahkan rangkaian produk suplemen
                dengan kandungan beragam ekstrak alami berkualitas yang dapat
                menunjang kebutuhan kesehatan perempuan.{' '}
              </p>
              <br />
              <p className="fonst-sans text-femmy-pdark text-[14px]">
                Kami senantiasa berusaha untuk mendengar setiap aspirasi yang
                diutarakan banyak orang, terutama kaum perempuan, untuk
                mengutamakan kesehatan serta kecantikannya. Oleh karena itu,
                kami berdiri bersama untuk memperjuangkan hak serta impian para
                perempuan negeri dalam mengoptimalkan potensi setiap individu
                untuk terus menginspirasi satu sama lain melalui kecantikan dari
                dalam.{' '}
              </p>
            </div>
          </div>
          <div className="basis-3/5 ">
            <picture className="flex justify-end">
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

        <section className="flex flex-wrap flex-row bg-[#FEF7F8] relative">
          <img className="w-full" src="/images/tentang2-img.jpg" />
          <div className="absolute w-[300px] top-[50%] left-16 translate-y-[-50%]">
            <h2 className="font-head text-femmy-pdark text-[30px] mb-4 leading-tight font-semibold">
              Bergabung menjadi Femmy Reseller sekarang!
            </h2>
            <p className="fonst-sans text-femmy-pdark text-[14px] mb-10">
              Dengan melangkah bersama Femmy Reseller, kamu bisa mendapatkan
              banyak keuntungan seperti poin reward, uang tunai, e-wallet, masih
              banyak hadiah lain yang bisa kamu dapatkan!
            </p>
            <a className="block bg-femmy-pdark rounded-[56px] text-femmy-white text-[13px] py-[12px] px-6 leading-[10px] w-[210px] text-center">
              Bergabung sekarang
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Tentang;
