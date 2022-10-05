import React from 'react';
import Link from 'next/link';

export interface ICardN {
  data: any;
  type: string;
  paragraph: Boolean;
  height: string;
  model?: Boolean
}

const CardNews: React.FC<ICardN> = ({ data, type, paragraph, height, model = false }) => (
  <div className={`h-[100%] shadow-[0_0_30px_rgba(0,0,0,0.25)] rounded-2xl  ${model && 'flex flex-row lg:flex-col'}`}>
    <div
    // 'h-full lg:h-[490px] w-[30%]' : 
    className={`${
      type == 'big' ? 'h-[250px] lg:h-[490px]' : `${model ? 'rounded-bl-2xl w-[35%] lg:w-full' : 'h-[200px]'} lg:h-[192px]`
    } bg-femmy-white rounded-tl-2xl lg:rounded-r-2xl flex flex-col justify-center items-center overflow-hidden`}
    >
      <img src="/images/news1.jpg" className="object-cover w-[100%] h-[100%]" />
    </div>
    <div className={`${height} ${model && 'w-[65%] lg:w-full'} bg-femmy-white rounded-tr-2xl lg:rounded-b-2xl rounded-br-2xl flex flex-col justify-center px-6 pt-2 pb-5`}>
      <span className="font-sans text-[#8B8B8B] text-[13px] mb-1.5">23 Juli 2022</span>
      <h5
        className={`${
          type == 'big' ? 'text-[20px]' : 'text-[17px]'
        } leading-tight font-head text-femmy-pdark mb-4 ]`}
      >
        Lorem ipsum dolor sit amet siana motel.
      </h5>
      {paragraph && (
        <p className="font-sans text-femmy-pdark leading-4 font-medium text-[15px] mb-6 line-clamp-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at
          porttitor massa. Proin pretium, quam ac venenatis convallis, leo
          ligula porta arcu, euismod rhoncus tortor nibh eu lacus. Aliquam erat
          volutpat.
        </p>
      )}
      <Link href={`/tips-dan-trik/contoh`}>
        <a
          className={`${
            type == 'big' ? 'w-[60%]' : 'w-[100%]'
          } py-1.5 text-white text-center bg-femmy-pdark font-sans rounded-lg`}
        >
          baca selengkapnya
        </a>
      </Link>
    </div>
  </div>
);

export default CardNews;