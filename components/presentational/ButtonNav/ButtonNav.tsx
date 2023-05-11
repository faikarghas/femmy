import React from 'react';
import Link from 'next/link';
import {  useSelector } from "react-redux";

import { selectAuthState } from "../../../store/authSlice";

export interface IButtonNav {
}

const ButtonNav: React.FC<IButtonNav> = () =>{
  const authIdentifier = useSelector(selectAuthState);

  return  (
    <>
      <li className='relative usr'>
        <div className='cursor-pointer'><img className='h-[25px]' src='/images/user-icon.png'/></div>
        {/* modal user */}
        <div className='min-w-[240px] absolute pt-4 left-[50%] translate-x-[-50%] hidden musr'>
          <div className='flex bg-femmy-pdark p-4 rounded-tr-[2rem] rounded-tl-[2rem]'>
            <img className='w-[60px] object-contain' src='/images/user-avatar.png' />
            <div className='pl-4'>
              <h6 className='text-white font-sans text-[20px] mb-2'>ID F599999</h6>
              <h6 className='text-white font-sans mb-1 text-[16px]'>Hi, reseller,</h6>
              <h5 className='text-white font-sans font-bold text-[17px]'>Ruth!</h5>
            </div>
          </div>
          <div className='bg-[#FBEEE5] rounded-br-[2rem] rounded-bl-[2rem] shadow-[3px_4px_6px_rgba(136,37,94,0.25);]'>
            <ul className='p-4'>
              <li className='mb-3'><Link href='/akun' className='font-sansMedium text-femmy-pdark text-[16px]'>akun saya</Link></li>
              <li><Link href='/akun/riwayat-transaksi' className='font-sansMedium text-femmy-pdark text-[16px]'>cek status pesanan</Link></li>
            </ul>

            <ul className='p-4 border-t-[1px] border-[#8F2A64]'>
              <li className='font-sansMedium text-femmy-pdark text-[16px] cursor-pointer' >keluar</li>
            </ul>
          </div>
        </div>
      </li>
      <li className='relative point'>
        <div className='cursor-pointer'><img className='h-[25px]' src='/images/gift-icon.png'/></div>
        {/* modal point */}
        <div className='min-w-[300px] absolute pt-4 right-[0px] hidden mpoint'>
          <div className='bg-[#FBEEE5] rounded-[2rem] shadow-[3px_4px_6px_rgba(136,37,94,0.25);]'>
            <ul className='px-7 py-7'>
              <li className='mb-3'><Link href='/cek-poin-reseller' className='font-sansMedium text-femmy-pdark text-[16px]'>cek poin-mu</Link></li>
              <li className='mb-3'><Link href='/katalog-hadiah' className='font-sansMedium text-femmy-pdark text-[16px]'>tukar poin dengan hadiah</Link></li>
              <li className='mb-3'><Link href='/tukar-emoney' className='font-sansMedium text-femmy-pdark text-[16px]'>tukar poin dengan e-money</Link></li>
              <li className='mb-3'><Link href='/cek-riwayat-poin' className='font-sansMedium text-femmy-pdark text-[16px]'>cek riwayat penukaran poin</Link></li>
            </ul>
          </div>
        </div>
      </li>
      {authIdentifier.role === "Reseller" ? 
      (
        <>
        <li>
          <Link href="/wishlist"><img className='h-[25px]' src='/images/love-icon.png'/></Link>
        </li>
        <li>
          <Link href="/keranjang"><img className='h-[25px]' src='/images/cart-icon.png'/></Link>
        </li>
        </>
      ) : (<></>) }
    </>
  );
}

export default ButtonNav;
