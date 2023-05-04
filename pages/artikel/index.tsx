import type { NextPage } from 'next';
import Link from 'next/link';

import { verifyJwt } from '../../utils/verifyJwt';
import {wrapper} from '../../store/store';

// import component
import Layout from '../../components/layouts/index';
import CardNews from '../../components/presentational/CardNews/CardNews';

//import utils
import { tips } from '../../utils/data';

const Tips: NextPage = ({auth}:any) => {
  return (
    <Layout page="tentang-kami" auth={auth}>
      <section className="relative bg-femmy-plight pt-20 pb-28 px-8 lg:px-16">
        <h2 className="font-head text-femmy-pdark text-[40px] mb-10">Tips & Trik</h2>
        {tips.map((val, i) => {
          if (i === 0) {
            return (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-3 mb-8 gap-0 lg:gap-10 bg-white lg:bg-transparent rounded-tr-2xl rounded-tl-2xl"
              >
                <div className="lg:col-span-1 lg:rounded-2xl">
                  <img
                    src={`/images/news/${val.image}`}
                    className="rounded-tr-2xl rounded-tl-2xl lg:rounded-2xl"
                  />
                </div>
                <div className="col-span-2 px-8 lg:px-6 pt-4 pb-12 flex items-center">
                  <div className="w-full">
                    <span className="font-sans text-[#8B8B8B] text-[13px] mb-2 lg:mb-1.5 block">
                      23 Juli 2022
                    </span>
                    <h5 className="leading-tight font-head text-femmy-pdark mb-4 text-[24px] font-semibold">
                      {val.judul}
                    </h5>
                    <p className="font-sans text-femmy-pdark leading-4 font-medium text-[15px] mb-10 xl:mb-10 line-clamp-4">
                      {val.shortDesc}
                    </p>
                    <Link href={`/artikel/${val.slug}`} className="py-2.5 px-8 text-white text-center bg-femmy-pdark font-sans rounded-2xl">
                        baca selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        })}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {tips.map((val, i) => {
            if (i !== 0) {
              return (
                <div key={i} className="">
                  <CardNews
                    type="small"
                    height="h-[250px]"
                    paragraph={true}
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
      </section>
    </Layout>
  );
};

export const getServerSideProps =  wrapper.getServerSideProps( store => async ({req, res}:any) => {

  let token = await verifyJwt(req.cookies.refreshToken)
  let user = []
  let auth = false

  if(token){
      const fetchData = await fetch(`${process.env.NEXT_PUBLIC_API}/api/users/${token.id}`,{
          method:"GET",
          headers:{
              'Authorization': 'Bearer ' + req.cookies.refreshToken,
          }
      })
      user = await fetchData.json()
      auth = true
  }

  return {
    props: {
      user,
      auth : auth
    },
  }
})

export default Tips;
