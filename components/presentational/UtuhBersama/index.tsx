import React from 'react';
import Link from 'next/link';

import FormJoin from '../FormJoin/FormJoin';


export interface IUtuhBersama {

}

const UtuhBersama: React.FC<IUtuhBersama> = () => {

  return(
    <section className="flex flex-row relative lg:h-screen">
    <div className="hidden lg:block object-contain basis-2/4">
      <img
        alt="image-femmy"
        src="/images/jadi_home.jpg"
        className="h-full w-full object-cover"
      />
    </div>
    <div className="basis-full lg:basis-2/4 bg-femmy-pdark p-8 lg:p-0">
      <div className="flex items-center py-6 px-6 lg:px-8 relative lg:absolute lg:top-[50%] right-[0] lg:right-[calc(0%+48px)] lg:translate-x-[0%] lg:translate-y-[-50%] bg-femmy-plight h-full lg:h-[calc(100%-96px-35px)] w-[100%] lg:w-[64%] rounded-2xl shadow-[16px_17px_16px_rgba(0, 0, 0, 0.17)]">
        <div className="w-full">
          <div className="pb-4 xl:pb-2 mb-4 border-b-[1px] border-femmy-pdark">
            <h2 className="text-femmy-pdark text-[35px] xl:text-[40px] font-head font-semibold leading-tight">
              Jadi Utuh Bersama
            </h2>
          </div>
          <h4 className="mb-6 text-femmy-pdark text-[18px] xl:text-[22px] leading-[22px] xl:leading-[30px] font-head">
            Bergabung menjadi
            <br />
            Femmy Reseller sekarang!
          </h4>
          <div className="flex flex-row">
            <div className="basis-full md:basis-3/5">
              <FormJoin />
            </div>
            <div className="hidden md:flex basis-2/5 items-center justify-center">
              <img
                alt="image-femmy"
                src="/images/draft.png"
                className="object-contain w-[245px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default UtuhBersama

