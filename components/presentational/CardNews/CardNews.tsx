import React from 'react';
import Link from 'next/link';

export interface ICardN {
  data: any;
  type: string;
  paragraph: Boolean;
  height: string;
  model?: Boolean;
}

const CardNews: React.FC<ICardN> = ({
  data,
  type,
  paragraph,
  height,
  model = false,
}) => {
  return (
    <div
      className={`h-[100%] shadow-[0_0_30px_rgba(0,0,0,0.25)] rounded-2xl  ${
        model && 'flex flex-row lg:flex-col'
      }`}
    >
      <div
        // 'h-full lg:h-[490px] w-[30%]' :
        className={`${
          type == 'big'
            ? 'h-[250px] lg:h-[490px]'
            : `${
                model ? 'rounded-bl-2xl w-[35%] lg:w-full' : 'h-[200px]'
              } lg:h-[192px]`
        } bg-femmy-white rounded-tl-2xl rounded-tr-2xl flex flex-col justify-center items-center overflow-hidden`}
      >
        <img
          src={`/images/news/${data.image}`}
          className="object-cover w-[100%] h-[100%]"
        />
      </div>
      <div
        className={`${height} ${
          model && 'w-[65%] lg:w-full rounded-br-2xl'
        } bg-femmy-white rounded-tr-2xl lg:rounded-tr-none  lg:rounded-b-2xl flex flex-col justify-center px-8 pt-2 pb-5`}
      >
        <span className="font-sans text-[#8B8B8B] text-[13px] mb-1.5">
          23 Juli 2022
        </span>
        <h5
          className={`${
            type == 'big' ? 'text-[20px]' : 'text-[17px]'
          } leading-tight font-head text-femmy-pdark mb-4 ]`}
        >
          {data.title}
        </h5>
        {paragraph && (
          <p className="font-sans text-femmy-pdark leading-4 font-medium text-[13px] mb-6 line-clamp-3">
            {data.short}
          </p>
        )}
        <Link href={`/artikel/${data.link}`}>
          <a
            className={`${
              type == 'big' ? 'w-[100%] lg:w-[60%]' : 'w-[100%]'
            } py-2 text-white text-center bg-femmy-pdark font-sans rounded-3xl text-[13px] lg:tracking-[2px]`}
          >
            baca selengkapnya
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CardNews;
