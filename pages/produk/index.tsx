import type { NextPage } from 'next';
import Link from 'next/link';

// import component
import Layout from '../../components/layouts/index';
import FilterDropdown from '../../components/presentational/FilterDropdown/FilterDropdown';
import CardProduct from '../../components/presentational/CardProduct/CardProduct';
import SearchProduct from '../../components/presentational/SearchProduct/SearchProduct';

// import hoc
import { withAUth } from '../../hoc/withAuth';

const Tentang: NextPage = () => {
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
              data={[
                'Tampilkan semua produk',
                'Paket Femmy Consultant',
                'Vitamin',
                'Suplemen Nutrisi',
                'Lainnya',
              ]}
            />
            <br />
          </div>
          <div className="basis-full lg:basis-3/4">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
              {[1, 2, 3, 4, 5].map((val, i) => (
                <CardProduct key={i} data={{ title: 'Femmy Look Slim' }} />
              ))}
            </div>
          </div>
        </section>
    </Layout>
  );
};

export default Tentang;
