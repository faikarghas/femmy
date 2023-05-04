import React, { useState, useEffect } from 'react';

// import component
import FilterDropdown from '../FilterDropdown/FilterDropdown';
import CardHadiah from '../CardHadiah/CardHadiah';

// import utils
import { produk } from '../../../utils/data';

export interface IKatalog {
  rewardProduct: any;
  point: number;
  fullname: string;
  address: string;
  userId: number;
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


const KatalogWrap: React.FC<IKatalog> = ({rewardProduct,userId,fullname,point,address}:any) => {
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
          {rewardProduct.data.map((val:any, i:number) => {
            return (
              <CardHadiah
                key={i}
                dataReward={{
                  rewardId: val.id,
                  judul: val.attributes.name,
                  image: val.attributes.images.data[0].attributes.url,
                  rewardPoint: val.attributes.point,
                  description: val.attributes.Description,
                  fullname: fullname,
                  point: point,
                  address,
                  userId
                }}
              />
            )
          } )}
        </div>
      </div>
    </>
  );
};

export default KatalogWrap;
