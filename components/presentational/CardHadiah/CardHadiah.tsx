import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

// import component
import Rating from '../Rating/Rating';

// import utils
import { toSlug } from '../../../utils/slug';

export interface ICardK {
  data: any;
}

const CardHadiah: React.FC<ICardK> = ({ data }) =>{

  const [show, setShow] = useState(false)

  const showTukarPoinModal = () => {
    setShow(true)
  }

  const hideTukarPoinModal = () => {
    setShow(false)
  }

  return  (
    <>
      <div onClick={showTukarPoinModal} className='cursor-pointer'>
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
            20.000 poin
          </span>
          <span className="font-sans text-femmy-pdark tracking-wide text-[14px] lg:text-[12px] underline tracking-harga">
            Detail Produk
          </span>
        </span>
        <span className="h-[60px] bg-[#CC3F80] rounded-b-2xl rounded-br-2xl flex justify-center items-center">
          <span className="text-white font-sans tracking-[2px]" >
            Tukar Sekarang
          </span>
        </span>
      </div>

      <div className={` ${show ? 'flex':'hidden'}  bg-[#8F2A64] bg-opacity-80 fixed w-full h-full z-[60] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] items-center justify-center`}>
        <div className='bg-[#F5E8DF] p-12 flex flex-wrap w-[55%] rounded-3xl relative'>
          <div className='absolute top-5 right-5' onClick={hideTukarPoinModal}>
            <img className='cursor-pointer' width={'50px'} src='/images/icon-close.png' alt='close icon' /> 
          </div>

          <div className='basis-[30%]'>
            <div>
              <span className=" bg-femmy-white rounded-t-2xl rounded-r-2xl flex flex-col justify-center items-center">
                <img
                  src={data.image}
                  alt="Picture of the author"
                  className="object-contain w-[300px] lg:w-[200px] h-[300px] lg:h-[180px]"
                />
                <span className="font-sans text-[#8F2A64] font-semibold text-[20px] lg:text-[16px] mb-4 tracking-[2px]">
                  {data.judul}
                </span>
              </span>
              <span className="h-[60px] bg-[#CC3F80] rounded-b-2xl rounded-br-2xl flex justify-center items-center">
                <span className="text-white font-sans tracking-[2px]" >
                  20.000 poin
                </span>
              </span>
            </div>
          </div>

          <div className='basis-[70%] pl-8 mb-10'>
            <h3 className='font-head text-femmy-pdark text-[30px] mb-3'>Tukar Poin</h3>
            <p className='font-sans text-femmy-pdark text-[15px] leading-tight mb-4'>Menyetrika pakaian jadi lebih mudah dengan Philips HD-1173/80! Setrika berukuran 27 x 30 x 16 cm dengan permukaan Tidak Lengket ini memiliki konsumsi daya sebesar 350W. Kamu bisa pakai setrika ini untuk membuat pakaian terlihat rapi dan licin seketika.</p>
            <ul className='flex justify-between mb-2'>
              <li className='font-sans text-femmy-pdark'>total poinmu</li>
              <li className='font-sansBold text-femmy-pdark'>20.000 poin</li>
            </ul>
            <ul className='flex justify-between mb-6 border-b-[1px] border-femmy-pdark pb-4'>
              <li className='font-sans text-femmy-pdark'>poin hadiah</li>
              <li className='font-sansBold text-femmy-pdark'>15.000 poin</li>
            </ul>
            <ul className='flex justify-between'>
              <li className='font-sans text-femmy-pdark'>sisa poinmu</li>
              <li className='font-sansBold text-femmy-pdark'>5.000 poin</li>
            </ul>
          </div>

          <div className='basis-full bg-white rounded-xl p-5 w-full flex flex-wrap mb-6'>
            <div className='basis-[50%]'>
              <h3 className='font-sansBold text-femmy-pdark text-[19px] mb-1.5'>Ruth Eirene</h3>
              <p className='text-femmy-pdark leading-tight font-sans text-[14px]'>08989489400402</p>
              <div className='lg:w-[300px]'>
                  <p className='text-femmy-pdark leading-tight font-sans text-[14px]'>Jl. Layar Permai 8B No.1 A,  Jakarta Utara, Penjaringan, DKI Jakarta 14410</p>
              </div>
            </div>
            <div className='basis-[50%] flex justify-end items-center'>
                <Link href='/akun/alamat'><a className='font-sans text-femmy-pdark border-[1px] border-femmy-pdark bg-white py-1.5 px-16 rounded-xl'>pilih alamat lain</a></Link>
            </div>
          </div>

          <div className='basis-full'>
            <Link href='/'><a className='font-sans leading-tight text-[#F5E8DF] bg-femmy-pdark py-2 px-16 rounded-xl block w-full text-center'>OK. Tukar Sekarang</a></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardHadiah;
