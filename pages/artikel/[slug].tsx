import { useState, useRef, useEffect } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';

// import component
import Layout from '../../components/layouts/index';
import CardNews from '../../components/presentational/CardNews/CardNews';

// import hoc
import { withAUth } from '../../hoc/withAuth';

//import utils
import { tips } from '../../utils/data';

type DataTypes = {
  slug: string;
  judul: string;
  shortDesc: string;
  content: string;
  image: string;
};

const TipsDetail: NextPage = () => {
  const [data, setData] = useState<DataTypes[]>([]);
  const router = useRouter();

  const tipsLain = () => {
    let tl = tips.filter((val) => {
      return val.slug !== router.query.slug;
    });
    return tl;
  };

  useEffect(() => {
    let tl = tips.filter((val) => {
      return val.slug == router.query.slug;
    });
    setData(tl);
  }, [router.isReady, router.query.slug]);

  return (
    <Layout page="tentang-kami">
      <section className="relative bg-[#FCF4EE] pt-0 lg:pt-8 lg:pb-8 px-0 md:px-16">
        <h2 className="hidden md:block font-head text-femmy-pdark text-[40px] mb-10 font-semibold">
          Tips & Trik
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:mb-8 gap-0 lg:gap-10">
          <div className="col-span-1 mb-4">
            <div className="lg:shadow-[0_0_30px_rgba(0,0,0,0.25)] md:rounded-2xl">
              <img
                src={`/images/news/${data[0]?.image}`}
                className="md:rounded-2xl"
              />
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
                {data[0]?.judul}
              </h5>
              <div className="tips font-sansMedium text-femmy-pdark font-medium text-[15px] mb-20 leading-normal">
                {parse(data[0]?.content ? data[0]?.content : '')}
              </div>
            </div>
            <div className="basis-full lg:basis-1/3 bg-[#F6C2C6] pt-8 lg:pt-0 lg:bg-transparent px-8 lg:px-0">
              <h6 className="font-head text-femmy-pdark text-[20px] pb-4 mb-6 border-femmy-pdark lg:border-b-[1px] text-center lg:text-left">
                Rekomendasi Artikel
              </h6>
              {tipsLain().map((val, i) => {
                if (i < 3) {
                    return (
                    <div key={i} className="mb-8">
                      <CardNews
                        type="small"
                        height="h-[200px] lg:h-[180px]"
                        paragraph={false}
                        model={true}
                        data={{
                          title: val.judul,
                          short: val.shortDesc,
                          link: val.slug,
                          image: val.image,
                        }}
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TipsDetail;
