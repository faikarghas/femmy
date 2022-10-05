import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// import component
import Rating from '../Rating/Rating';

// import utils
import { toSlug } from '../../../utils/slug';

export interface ICardP {
  data: any;
}

const CardProduct: React.FC<ICardP> = ({ data }) => (
  <div className="">
    <div className="h-[300px] lg:h-[340px] bg-femmy-white rounded-t-2xl rounded-r-2xl flex flex-col justify-center items-center">
      <Image
          src={data.image}
          alt="Picture of the author"
          className="object-contain w-[200px]"
          width={200}
          height={200}
      />
      <span className="font-sans text-[#8F2A64] font-semibold tracking-wide text-[12px] lg:text-[16px] mb-1">
        {data.judul}
      </span>
      <span className="font-sans text-black font-semibold tracking-wide text-[11px] lg:text-[14px] mb-2.5">
        RP {data.harga},-
      </span>
      <div className="flex items-center">
        <Rating count={data.rating} />
      </div>
    </div>
    <div className="h-[70px] bg-[#CC3F80] rounded-b-2xl rounded-br-2xl flex justify-center items-center">
      <Link href={`/produk/${toSlug(data.judul)}`} >
        <a className="text-white font-sans">Beli Sekarang</a>
      </Link>
    </div>
  </div>
);

export default CardProduct;
