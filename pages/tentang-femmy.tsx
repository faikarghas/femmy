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
          <div className="lg:w-[430px] lg:pt-14">
            <h2 className="font-head text-femmy-pdark text-[32px] mb-6 font-semibold leading-[40px]">
              Solusi menyeluruh untuk kebutuhan kesehatan dan kecantikan wanita
              Indonesia.
            </h2>
            <p className="fonst-sans text-femmy-pdark text-[14px]">
              Femmy hadir sebagai solusi komprehensif bagi para perempuan modern
              Indonesia yang aktif dan energik untuk senantiasa menjaga
              kesehatan tubuh sekaligus merawat kecantikan dari dalam. Bersama
              Femmy, PT Bintang Toedjoe (a Kalbe Company) mempersembahkan
              rangkaian produk suplemen kesehatan dengan Natural Superfood
              (beragam ekstrak alami berkualitas) untuk memenuhi segala aspek
              kebutuhan wanita yang berbeda-beda.
            </p>
            <br />
            <p className="fonst-sans text-femmy-pdark text-[14px]">
              Kami senantiasa mendengar setiap aspirasi yang diutarakan kaum
              perempuan, untuk mengutamakan kesehatan serta kecantikannya. Oleh
              karena itu, kami berdiri bersama untuk memperjuangkan impian para
              perempuan negeri dalam mengoptimalkan potensi setiap individu
              untuk terus menginspirasi satu sama lain melalui kecantikan dari
              dalam.
            </p>
          </div>
        </div>
        <div className="basis-full lg:basis-3/5 order-first lg:order-last">
          <picture className="flex justify-end p-0 lg:p-4 xl:p-0">
            <source
              media="(min-width:750px)"
              srcSet="/images/tentang-img-22.png"
            />
            <img
              src="/images/tentang-img-22-m.png"
              className="h-[550px] lg:h-[683px] object-contain"
            ></img>
          </picture>
        </div>
      </section>
      <section className="flex flex-wrap flex-row bg-[#FEF7F8] relative ">
        <picture className="flex justify-end p-0 lg:p-4 xl:p-0">
            <source
              media="(min-width:750px)"
              srcSet="/images/tentang2-img2.png"
            />
            <img
              src="/images/tentang-kami-m.jpg"
              className="w-full  object-cover"
            ></img>
        </picture>
        <div className="relative lg:absolute w-full lg:w-[450px] top-[50%] lg:left-16 lg:translate-y-[-50%] px-8 py-10 bg-[#F6C2C6] xl:bg-[#F6C2C6]/[0]">
          <h2 className="font-head text-femmy-pdark text-[28px] lg:text-[32px] mb-6 font-semibold leading-[40px]">
            Bergabung bersama Femmy untuk saling menginpirasi.
          </h2>
          <p className="fonst-sans text-femmy-pdark text-[14px] mb-8">
            Dengan menjadi bagian dari Femmy Reseller, kamu bisa mendapatkan
            banyak keuntungan seperti poin reward, potongan harga, dan masih
            banyak lagi!
          </p>
          <Link href="/femmy-reseller">
            <a className="block bg-femmy-pdark rounded-[56px] text-femmy-white text-[12px] py-[12px] px-4 leading-[10px] lg:w-[330px] text-center tracking-[2px]">
              Bergabung menjadi{' '}
              <span className="font-semibold">Femmy Reseller</span>
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Tentang;
