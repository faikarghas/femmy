import type { NextPage } from 'next';
import React,{useState} from 'react';
import Link from 'next/link';

const EmailConfirmation: NextPage = () => {
  return (
    <div className='w-full h-full p-8 lg:p-24 flex flex-col justify-center'>
        <div className='mb-8 lg:px-16'>
          <div className='mb-8 flex justify-between'>
            <Link href="/">
              <img src='/images/logo-femmy.png' className='w-[150px]'/>
            </Link>
            <ul className="list-none list flex items-center gap-2 justify-end">
              <li className="hidden lg:block font-sansSemi text-femmy-pdark text-[12px] mr-2">
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

          <img src='/images/reg-conf.jpg' className='w-full'/>
        </div>

        <div className='mb-8 lg:py-20 lg:px-32'>
          <h1 className='text-femmy-pdark font-sansMedium text-[18px]'>Hai,</h1>
          <br/>
          <p className='text-femmy-pdark font-sansMedium text-[18px]'>Terima kasih telah bergabung bersama www.femmy.co.id. Dengan menjadi bagian dari Femmy Bestie, kamu dapat:</p>
          <br/>
          <ul className='pl-6'>
            <li className='text-femmy-pdark font-sansMedium text-[18px] list-disc mb-2'> Memperoleh Rewards untuk setiap pemesanan produk melalui e-commerce yang melampirkan struk belanja.</li>
            <li className='text-femmy-pdark font-sansMedium text-[18px] list-disc'>Memperoleh informasi seputar kesehatan dan tips perawatan kecantikan.</li>
          </ul>
          <br/>
          <p className='text-femmy-pdark font-sansMedium text-[18px]'>Silakan kunjungi situs kami untuk mencari tahu lebih lanjut tentang  informasi seputar produk dan kegiatan yang akan datang.</p>
          <br/>
          <p className='text-femmy-pdark font-sansMedium text-[18px]'>Yuk, jaga semangatmu untuk terus merawat kesehatan dan kecantikan diri bersama Femmy!</p>
        </div>

        <div className='text-center'>
          <p className='text-femmy-pdark font-sansMedium text-[14px]'>2023 femmy all rights reserved</p>
        </div>
    </div>
  );
};

export default EmailConfirmation;
