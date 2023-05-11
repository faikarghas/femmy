import React, { useState, useEffect } from 'react';
import Link from 'next/link';


export interface INav {
  page: string;
  position: string;
}
const MediaSocial: React.FC<INav> = () => {
  return (
    <li className="flex items-center group relative cursor-pointer">
        <div className="rounded-[56px] md:w-[130px] lg:w-[210px] text-center bg-femmy-pdark text-femmy-white md:py-1.5 lg:py-2.5 md:px-2 lg:px-4 flex items-center justify-center">
        <span className="font-sans font-semibold block leading-[10px] md:tracking-normal lg:tracking-[2px] md:text-[9px] xl:text-[13px] ">
            media sosial kami
        </span>
        </div>
        <div className="group-hover:block hidden transition-all  absolute top-full w-full pt-0">
        <ul className="list-none list rounded-2xl gap-y-2 flex flex-col justify-end bg-white p-4">
            <li className="">
            <Link href="https://www.tiktok.com/@femmy.daily"
             className="flex items-center"
             target="_blank"
             rel="noopener"
            >
                <img
                    className="w-[30px]"
                    src="/images/tiktok.png"
                />
                <span className="ml-4 text-[16px] font-sans text-femmy-pdark">
                    Tik Tok
                </span>
            </Link>
            </li>
            <li className="">
            <Link href="https://www.Instagram.com/femmy.daily"
            className="flex items-center"
            target="_blank"
            rel="noopener"
            >
                <img
                    className="w-[30px]"
                    src="/images/logo-ig.png"
                />
                <span className="ml-4 text-[16px] font-sans text-femmy-pdark">
                    Instagram
                </span>
            </Link>
            </li>
            <li className="">
            <Link href="https://www.youtube.com/channel/UC7Sg8HkaWJItuMLbvNdKvWQ"
            className="flex items-center"
            target="_blank"
            rel="noopener"
            >
                <img
                    className="w-[30px]"
                    src="/images/logo-yt.png"
                />
                <span className="ml-4 text-[16px] font-sans text-femmy-pdark">
                    Youtube
                </span>
            </Link>
            </li>
        </ul>
        </div>
    </li>
  );
};

export default MediaSocial;
