import React from 'react';
import Link from 'next/link';

import Nav from '../Nav/Nav';

const Footer = () => (
  <footer>
    <div
      className={`flex flex-wrap flex-row pb-4 pt:10 lg:pt-8 px-8 lg:px-16 bg-femmy-white`}
    >
      <div className="border-b-2 border-femmy-pdark w-full">
        <Nav position="footer" page="" auth/>
        <div className="pb-4">
          <ul className="list-none list flex items-center gap-2 justify-end">
            <li className="font-sans text-[#8B8B8B] text-[12px] mr-2 hidden xl:inline-block">
              Bergabung bersama kami
            </li>
            <li className="inline-block">
              <Link href="https://www.tiktok.com/@femmy.daily" target="_blank" rel="noopener">
                  <img className="w-[30px]" src="/images/tiktok.png" />
              </Link>
            </li>
            <li className="inline-block">
              <Link href="https://www.Instagram.com/femmy.daily" target="_blank" rel="noopener">
                  <img className="w-[30px]" src="/images/logo-ig.png" />
              </Link>
            </li>
            <li className="inline-block">
              <Link href="https://www.youtube.com/channel/UC7Sg8HkaWJItuMLbvNdKvWQ" target="_blank" rel="noopener">
                  <img className="w-[30px]" src="/images/logo-yt.png" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-end w-full pt-4">
        <span className="font-sans text-femmy-pdark text-[14px] font-medium">
          &copy; 2023 femmy all rights reserved
        </span>
        <div className="hidden xl:block">
          <ul className="list-none list flex items-center gap-2 justify-end">
            <li className="inline-block font-sans text-femmy-pdark text-[14px] font-medium mr-2">
              <Link href="#">
                Kebijakan Privasi
              </Link>
            </li>
            <li className="inline-block font-sans text-femmy-pdark text-[14px] font-medium mr-2">
              <Link href="#">
                Syarat & Ketentuan
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="bg-femmy-pdark h-[50px] w-full"></div>
  </footer>
);

export default Footer;
