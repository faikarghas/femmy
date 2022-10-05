import {useState,useEffect} from 'react'
import type { NextPage } from 'next';
import Link from 'next/link';

// import component
import Layout from '../../components/layouts/index';
import FilterDropdown from '../../components/presentational/FilterDropdown/FilterDropdown';
import CardProduct from '../../components/presentational/CardProduct/CardProduct';
import SearchProduct from '../../components/presentational/SearchProduct/SearchProduct';

// import hoc
import { withAUth } from '../../hoc/withAuth';

// import utils
import { produk } from '../../utils/data';

type DataTypes = {
  judul: string, slug: string, harga: number, rating: number, image: string, imageDetail: string,content:string
}

const Produk: NextPage = () => {
  const [data, setData] = useState<DataTypes[]>(produk);
  const [sort, setSort] = useState('asc');

  const descOrder = () => {
    let pr = produk.sort((a, b) => b.harga - a.harga)
    setData(pr)
    setSort('desc')
  }

  const ascOrder = () => {
    let pr = produk.sort((a, b) => a.harga - b.harga)
    setData(pr)
    setSort('asc')
  }

  useEffect(() => {
  }, [sort])
  
  return (
    <Layout page="tentang-kami">
        <section className="flex flex-wrap flex-row pb-8 pt-10 lg:pt-16 px-8 lg:px-16 bg-[#FEF7F8]">
          <div className="basis-full xl:basis-1/4 mb-12">
            <h4 className="font-head text-femmy-pdark text-[35px] font-semibold">
              Produk Femmy
            </h4>
          </div>
          <div className="basis-full xl:basis-3/4 mb-12 flex items-center w-full">
            <SearchProduct />
          </div>

          <div className="basis-full lg:basis-1/4 pr-0 xl:pr-8">
            <FilterDropdown
              text="Kategori"
              sortdesc={descOrder}
              sortasc={ascOrder}
            />
            <br />
          </div>
          <div className="basis-full lg:basis-3/4">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
              {data.map((val, i) => (
                <CardProduct key={i} data={{ judul: val.judul, harga: val.harga, rating: 4, image: val.image }} />
              ))}
            </div>
          </div>
        </section>
    </Layout>
  );
};

export default Produk;
