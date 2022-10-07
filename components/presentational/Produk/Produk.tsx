import React, { useState, useEffect } from 'react';

// import component
import FilterDropdown from '../../../components/presentational/FilterDropdown/FilterDropdown';
import CardProduct from '../../../components/presentational/CardProduct/CardProduct';

// import utils
import { produk } from '../../../utils/data';

export interface IProduk {}

type DataTypes = {
  judul: string;
  slug: string;
  harga: number;
  rating: number;
  image: string;
  imageDetail: string;
  content: string;
};

const ProdukWrap: React.FC<IProduk> = () => {
  const [data, setData] = useState<DataTypes[]>(produk);
  const [sort, setSort] = useState('');

  const descOrder = () => {
    let pr = produk.sort((a, b) => b.harga - a.harga);
    setData(pr);
    setSort('desc');
  };

  const ascOrder = () => {
    let pr = produk.sort((a, b) => a.harga - b.harga);
    setData(pr);
    setSort('asc');
  };

  useEffect(() => {}, [sort]);

  return (
    <>
      <div className="basis-full xl:basis-1/4 pr-0 xl:pr-8">
        <FilterDropdown
          text="Kategori"
          sortdesc={descOrder}
          sortasc={ascOrder}
        />
        <br />
      </div>
      <div className="basis-full lg:basis-3/4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
          {produk.map((val, i) => (
            <CardProduct
              key={i}
              data={{
                judul: val.judul,
                harga: val.harga,
                rating: 4,
                image: val.image,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProdukWrap;
