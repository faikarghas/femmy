import type { NextPage } from 'next';
import Link from 'next/link';

// import component
import Layout from '../../components/layouts/index';
import CardNews from '../../components/presentational/CardNews/CardNews';

// import hoc
import { withAUth } from '../../hoc/withAuth';

const TipsDetail: NextPage = () => {
  return (
    <Layout page="tentang-kami">
      <section className="relative bg-[#FBEEE5]/[0.5] pt-0 lg:pt-8 lg:pb-8 px-0 md:px-16">
        <h2 className="hidden md:block font-head text-femmy-pdark text-[40px] mb-10 font-semibold">
          Tips & Trik
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:mb-8 gap-0 lg:gap-10">
          <div className="col-span-1 mb-4">
            <div className="lg:shadow-[0_0_30px_rgba(0,0,0,0.25)] md:rounded-2xl">
              <img src="/images/news1.jpg" className="md:rounded-2xl" />
            </div>
          </div>
          <div className="col-span-2 lg:pb-12 flex flex-wrap flex-row">
            <div className="basis-full lg:basis-2/3 lg:pl-8 lg:pr-16 mb-20 lg:mb-0 px-8 lg:px-0">
              <h2 className="block lg:hidden font-head text-femmy-pdark text-[40px] mb-10 font-semibold">
                Tips & Trik
              </h2>
              <span className="font-sans text-[#000000]/[0.65] text-[14px] lg:text-[12px] mb-2 block">
                23 Juli 2022
              </span>
              <h5 className="leading-tight font-head text-femmy-pdark mb-8 text-[24px] font-semibold">
                Bila sehat adalah sebuah hak untuk semua Wanita
              </h5>
              <p className="font-sans text-femmy-pdark leading-4 font-medium text-[15px] mb-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at
                porttitor massa. Proin pretium, quam ac venenatis convallis, leo
                ligula porta arcu, euismod rhoncus tortor nibh eu lacus. Aliquam
                erat volutpat. Nunc feugiat ligula erat, quis commodo mi
                dignissim rhoncus. Morbi vel risus risus. Praesent purus orci,
                volutpat at semper vulputate, sagittis ut nisl. Donec ac nulla
                ac elit dignissim egestas eget non libero. Curabitur sagittis,
                quam eu vehicula auctor, ipsum eros tempus felis. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Nunc at porttitor
                massa. Proin pretium, quam ac venenatis convallis, leo ligula
                porta arcu, euismod rhoncus tortor nibh eu lacus. Aliquam erat
                volutpat. Nunc feugiat ligula erat, quis commodo mi dignissim
                rhoncus. Morbi vel risus risus. Praesent purus orci, volutpat at
                semper vulputate, sagittis ut nisl. Donec ac nulla ac elit
                dignissim egestas eget non libero. Nunc feugiat ligula erat,
                quis commodo mi dignissim rhoncus. Morbi vel risus risus.
                Praesent purus orci, volutpat at semper vulputate, sagittis ut
                nisl. Donec ac nulla ac elit dignissim egestas eget non libero.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at
                porttitor massa. Proin pretium, quam ac venenatis convallis, leo
                ligula porta arcu, euismod rhoncus tortor nibh eu lacus. Aliquam
                erat volutpat. Nunc feugiat ligula erat, quis commodo mi
                dignissim rhoncus. Morbi vel risus risus. Praesent purus orci,
                volutpat at semper vulputate, sagittis ut nisl. Donec ac nulla
                ac elit dignissim egestas eget non libero. Curabitur sagittis,
                quam eu vehicula auctor, ipsum eros tempus felis. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Nunc at porttitor
                massa. Proin pretium, quam ac venenatis convallis, leo ligula
                porta arcu, euismod rhoncus tortor nibh eu lacus. Aliquam erat
                volutpat. Nunc feugiat ligula erat, quis commodo mi dignissim
                rhoncus. Morbi vel risus risus. Praesent purus orci, volutpat at
                semper vulputate, sagittis ut nisl. Donec ac nulla ac elit
                dignissim egestas eget non libero. Nunc feugiat ligula erat,
                quis commodo mi dignissim rhoncus. Morbi vel risus risus.
                Praesent purus orci, volutpat at semper vulputate, sagittis ut
                nisl. Donec ac nulla ac elit dignissim egestas eget non libero.
              </p>
            </div>
            <div className="basis-full lg:basis-1/3 bg-[#F6C2C6] pt-8 lg:pt-0 lg:bg-transparent px-8 lg:px-0">
              <h6 className="font-head text-femmy-pdark text-[20px] pb-4 mb-6 border-femmy-pdark lg:border-b-[1px] text-center lg:text-left">
                Rekomendasi Artikel
              </h6>
              <div className="mb-8">
                <CardNews
                  type="small"
                  height="h-[200px] lg:h-[150px]"
                  paragraph={false}
                  model={true}
                  data={{ title: 'lorem', short: 'lorem ipsu olor sit amet' }}
                />
              </div>
              <div className="mb-8">
                <CardNews
                  type="small"
                  height="h-[200px] lg:h-[150px]"
                  paragraph={false}
                  model={true}
                  data={{ title: 'lorem', short: 'lorem ipsu olor sit amet' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TipsDetail;
