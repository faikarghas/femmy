import React, {useState} from 'react';
import Link from 'next/link';

// import utils
import { getCookie } from '../../../utils/cookie'

export interface ICardK {
  dataReward: any;
}

const CardHadiah: React.FC<ICardK> = ({ dataReward }) =>{

  const [show, setShow] = useState(false)

  const showTukarPoinModal = () => {
    setShow(true)
  }

  const hideTukarPoinModal = () => {
    setShow(false)
  }

  const tukarPoin = async () =>{
    // update reward transaction
    const token = getCookie('refreshToken',{})
    const data =  {
      data:{
        users_permissions_user : {
          connect : [dataReward.userId]
        },
        reward_product : {
          connect : [dataReward.rewardId]
        },
        Status: 'Open'
      }
    }
    const JSONdata = JSON.stringify(data);
    if (dataReward.point >= dataReward.rewardPoint) {
      const endpoint = 'http://localhost:1337/api/reward-transactions';
      const options = {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
        body: JSONdata,
      };
      const response = await fetch(endpoint, options);
      // if success then update user point
      if (response.status === 200) {
        const endpoint = `http://localhost:1337/api/users/${dataReward.userId}`;
        const options = {
          method: 'PUT',
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({point:`${dataReward.point-dataReward.rewardPoint}`}),
        };
        const responseUpPoint = await fetch(endpoint, options);

        if (responseUpPoint.status === 200) {
            console.log('oke',responseUpPoint);
        }
      }
    }

  }

  return  (
    <>
      <div onClick={showTukarPoinModal} className='cursor-pointer'>
        <span className="h-[430px] lg:h-[340px] bg-femmy-white rounded-t-2xl rounded-r-2xl flex flex-col justify-center items-center">
          <img
            src={dataReward.image}
            alt="Picture of the author"
            className="object-contain w-[300px] lg:w-[180px] h-[300px] lg:h-[200px]"
          />
          <span className="font-sans text-[#8F2A64] font-semibold text-[20px] lg:text-[16px] mb-1 tracking-[2px]">
            {dataReward.judul}
          </span>
          <span className="font-sans text-black font-semibold tracking-wide text-[16px] lg:text-[14px] mb-2.5 tracking-harga">
          {dataReward.rewardPoint} poin
          </span>
          {/* <span className="font-sans text-femmy-pdark tracking-wide text-[14px] lg:text-[12px] underline tracking-harga">
            Detail Produk
          </span> */}
        </span>
        <span className="h-[60px] bg-[#CC3F80] rounded-b-2xl rounded-br-2xl flex justify-center items-center">
          <span className="text-white font-sans tracking-[2px]" >
            Tukar Sekarang
          </span>
        </span>
      </div>

      <div className={` ${show ? 'flex':'hidden'}  bg-[#8F2A64] bg-opacity-80 fixed w-full h-full z-[60] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] items-center justify-center`}>
        <div className='bg-[#F5E8DF] p-8 lg:p-12 flex flex-wrap w-[80%] lg:w-[55%] overflow-auto h-[90%] rounded-3xl relative'>
          <div className='absolute top-5 right-5' onClick={hideTukarPoinModal}>
            <img className='cursor-pointer' width={'50px'} src='/images/icon-close.png' alt='close icon' />
          </div>

          <div className='basis-full lg:basis-[30%]'>
            <div className='mb-8 lg:mb-0'>
              <span className=" bg-femmy-white rounded-t-2xl rounded-r-2xl flex flex-col justify-center items-center ">
                <img
                  src={dataReward.image}
                  alt="Picture of the author"
                  className="object-contain w-[200px] lg:w-[150px] h-[300px] lg:h-[180px]"
                />
                <span className="font-sans text-[#8F2A64] font-semibold text-[20px] lg:text-[16px] mb-4 tracking-[2px]">
                  {dataReward.judul}
                </span>
              </span>
              <span className="h-[60px] bg-[#CC3F80] rounded-b-2xl rounded-br-2xl flex justify-center items-center">
                <span className="text-white font-sans tracking-[2px]" > {dataReward.rewardPoint} poin</span>
              </span>
            </div>
          </div>

          <div className='basis-full lg:basis-[70%] lg:pl-8 mb-10'>
            <h3 className='font-head text-femmy-pdark text-[30px] mb-3'>Tukar Poin</h3>
            <p className='font-sans text-femmy-pdark text-[15px] leading-tight mb-4'>{dataReward.description}</p>
            <ul className='flex justify-between mb-2'>
              <li className='font-sans text-femmy-pdark'>total poinmu</li>
              <li className='font-sansBold text-femmy-pdark'>{dataReward.point} poin</li>
            </ul>
            <ul className='flex justify-between mb-6 border-b-[1px] border-femmy-pdark pb-4'>
              <li className='font-sans text-femmy-pdark'>poin hadiah</li>
              <li className='font-sansBold text-femmy-pdark'>{dataReward.rewardPoint} poin</li>
            </ul>
            <ul className='flex justify-between'>
              <li className='font-sans text-femmy-pdark'>sisa poinmu</li>
              <li className='font-sansBold text-femmy-pdark'>{dataReward.point >= dataReward.rewardPoint ? `${dataReward.point - dataReward.rewardPoint} poin` : 'poin anda belum cukup'} </li>
            </ul>
          </div>

          <div className='basis-full bg-white rounded-xl p-5 w-full flex flex-wrap mb-6'>
            <div className='basis-full lg:basis-[50%] mb-4 lg:mb-4'>
              <h3 className='font-sansBold text-femmy-pdark text-[19px] mb-1.5'>{dataReward.fullname}</h3>
              <div className='lg:w-[300px]'>
                  <p className='text-femmy-pdark leading-tight font-sans text-[14px]'>{dataReward.address}</p>
              </div>
            </div>
            <div className='basis-full lg:basis-[50%] flex justify-center lg:justify-end items-center'>
                <Link href='/akun/alamat' className='font-sans text-femmy-pdark border-[1px] border-femmy-pdark bg-white py-1.5 p-6 lg:px-16 rounded-xl '>pilih alamat lain</Link>
            </div>
          </div>

          <div className='basis-full'>
            <p onClick={tukarPoin} className='cursor-pointer font-sans leading-tight text-[#F5E8DF] bg-femmy-pdark py-2 px-16 rounded-xl block w-full text-center'>OK. Tukar Sekarang</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardHadiah;
