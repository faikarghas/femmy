import React, { MouseEventHandler, useState } from 'react';
import Link from 'next/link';

export interface IDaftarSekarang {
 
}

const FilterDropdown: React.FC<IDaftarSekarang> = () => {
    return (
    <div className="flex flex-row flex-wrap">
        <div className="basis-full">
        <h4 className="px-0 lg:px-6 text-femmy-pdark text-center font-head text-[30px] font-semibold leading-tight mb-8 pb-6 border-b-[1px] border-femmy-pdark">
            Daftar Sekarang
        </h4>
        </div>
        <div className="basis-full md:basis-[55%] lg:pl-6">
        {/* <FormJoin /> */}
        </div>
        <div className="hidden md:flex basis-[45%] items-center justify-end">
        <img
            alt="draft"
            src="/images/draft.png"
            className="object-contain w-[345px]"
        />
        </div>
    </div>
    );
};

export default FilterDropdown;
