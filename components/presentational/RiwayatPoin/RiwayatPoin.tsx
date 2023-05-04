import React, { useState, useEffect } from 'react';

// import component
import FilterDropdownRPoin from '../FilterDropdownRPoin/FilterDropdownRPoin';
import RiwayatProses from '../RiwayatPoin/proses';
import RiwayatSelesai from '../RiwayatPoin/selesai';

// import utils
import { produk } from '../../../utils/data';

export interface IRiwayatPoin {
  data:any
}

type DataTypes = {
  judul: string;
  slug: string;
  harga: number;
  rating: number;
  image: string;
  imageDetail: string;
  content: string;
};

const RiwayatPoin: React.FC<IRiwayatPoin> = ({data}:any) => {
  // const [data, setData] = useState<DataTypes[]>(produk);
  // const [sort, setSort] = useState('');

  const descOrder = () => {
    // let pr = produk.sort((a, b) => b.harga - a.harga);
    // setData(pr);
    // setSort('desc');
  };

  const ascOrder = () => {
    // let pr = produk.sort((a, b) => a.harga - b.harga);
    // setData(pr);
    // setSort('asc');
  };

  // useEffect(() => {}, []);

  return (
    <>
      <div className="basis-full xl:basis-1/4 pr-0 xl:pr-8">
        <FilterDropdownRPoin
          text="Kategori"
          sortdesc={descOrder}
          sortasc={ascOrder}
        />
        <br />
      </div>
      <div className="basis-full lg:basis-3/4">
        <div className="grid grid-cols-1">
          <RiwayatProses processData={data.data[0].attributes.Status === 'Proses' ? data : []}/>
          <div className='h-[1px] bg-femmy-pdark w-full my-6'></div>
          <RiwayatSelesai processData={data.data[0].attributes.Status === 'Closed' ? data : []}/>
        </div>
      </div>
    </>
  );
};

export default RiwayatPoin;
