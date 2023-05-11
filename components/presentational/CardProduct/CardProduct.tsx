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
  <Link href={`/produk/${toSlug(data.judul)}`}>
      <span className="h-[430px] lg:h-[340px] bg-femmy-white rounded-t-2xl rounded-r-2xl flex flex-col justify-center items-center">
        <img
          src={data.image}
          alt="Picture of the author"
          className="object-contain w-[300px] lg:w-[200px] h-[300px] lg:h-[200px]"
        />
        <span className="font-sans text-[#8F2A64] font-semibold text-[20px] lg:text-[16px] mb-1 tracking-[2px]">
          {data.judul}
        </span>
        <span className="font-sans text-black font-semibold tracking-wide text-[16px] lg:text-[14px] mb-2.5 tracking-harga">
          RP {data.harga.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')},-
        </span>
        <div className="flex items-center">
          <Rating count={data.rating} />
        </div>
      </span>
      <span className="h-[60px] bg-[#CC3F80] rounded-b-2xl rounded-br-2xl flex justify-center items-center hover:bg-[#F6C2C6] text-white hover:text-femmy-pdark font-sans tracking-[2px]">
       + Keranjang
      </span>
  </Link>
);

export default CardProduct;
