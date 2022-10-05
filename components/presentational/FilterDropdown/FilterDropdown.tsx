import React, { MouseEventHandler, useState } from 'react';
import Link from 'next/link';

export interface IFilterDropdown {
  text: string;
  sortdesc: MouseEventHandler;
  sortasc: MouseEventHandler;
}

const FilterDropdown: React.FC<IFilterDropdown> = ({ text, sortdesc, sortasc }) => {
  const [open, setopen] = useState(true);

  const openFilter = () => {
    setopen((prevState) => !prevState);
  };

  return (
    <div>
      <div
        onClick={openFilter}
        className="cursor-pointer text-femmy-pdark border-b-[1px] border-femmy-pdark pb-2 font-medium"
      >
        <h6>{text}</h6>
      </div>
      <div
        className={`${
          open ? 'open max-h-[250px]' : 'close max-h-0'
        } overflow-hidden transition-all`}
      >
        <ul className="pl-4 py-4">
            <li className={`cursor-pointer mb-2 px-6 py-[2px] rounded-xl hover:bg-[#CC3F80]/[0.08] text-femmy-pdark font-medium text-[12px]`} onClick={sortdesc}>
                Harga Tertinggi
            </li>
            <li className={`cursor-pointer mb-2 px-6 py-[2px] rounded-xl hover:bg-[#CC3F80]/[0.08] text-femmy-pdark font-medium text-[12px]`} onClick={sortasc}>
                Harga Terendah
            </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterDropdown;
