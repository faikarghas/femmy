import type { NextPage } from 'next';
import Link from 'next/link';

// import component
import Layout from '../../components/layouts/index';
import CardNews from '../../components/presentational/CardNews/CardNews';

// import hoc
import { withAUth } from '../../hoc/withAuth';

const Tips: NextPage = () => {
  return (
    <Layout page="tentang-kami">
        <section className="relative bg-femmy-plight py-8 px-8 lg:px-16">
          <h2 className="font-head text-femmy-pdark text-[40px] mb-10 font-semibold">Tips & Trik</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 mb-8 gap-0 lg:gap-10">
            <div className="lg:col-span-1 shadow-[0_0_30px_rgba(0,0,0,0.25)] rounded-2xl">
              <img src="/images/news1.jpg" className="rounded-2xl"/>
            </div>
            <div className="col-span-2 px-0 lg:px-6 pt-4 pb-12">
              <span className="font-sans text-[#8B8B8B] text-[13px] mb-2 lg:mb-1.5 block">23 Juli 2022</span>
              <h5 className="leading-tight font-head text-femmy-pdark mb-4 text-[24px] font-semibold">
                Lorem ipsum dolor sit amet siana motel.
              </h5>
              <p className="font-sans text-femmy-pdark leading-4 font-medium text-[15px] mb-10 xl:mb-20 line-clamp-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at
                porttitor massa. Proin pretium, quam ac venenatis convallis, leo
                ligula porta arcu, euismod rhoncus tortor nibh eu lacus. Aliquam erat
                volutpat.
              </p>
              <Link href="#">
                <a className="py-1.5 px-12 text-white text-center bg-femmy-pdark font-sans rounded-2xl">
                  baca selengkapnya
                </a>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="">
                <CardNews
                  type="small"
                  height="h-[250px]"
                  paragraph={true}
                  model={true}
                  data={{ title: 'lorem', short: 'lorem ipsu olor sit amet' }}
                />
              </div>
              <div className="">
                <CardNews
                  type="small"
                  height="h-[250px]"
                  paragraph={true}
                  model={true}
                  data={{ title: 'lorem', short: 'lorem ipsu olor sit amet' }}
                />
              </div>
              <div className="">
                <CardNews
                  type="small"
                  height="h-[250px]"
                  paragraph={true}
                  model={true}
                  data={{ title: 'lorem', short: 'lorem ipsu olor sit amet' }}
                />
              </div>
            </div>
        </section>
    </Layout>
  );
};

export default Tips;
