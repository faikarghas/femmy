import React, { useState } from 'react';
import Link from 'next/link';

export interface IFilterDropdown {
  text: string;
  data: string[];
}

const FilterDropdown: React.FC<IFilterDropdown> = ({ text, data }) => {
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
          {data.map((val, i) => (
            <li
              className={`mb-2 px-6 py-[2px] rounded-xl hover:bg-[#CC3F80]/[0.08]`}
              key={i}
            >
              <Link href="#">
                <a className="text-femmy-pdark font-medium text-[12px]">
                  {val}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterDropdown;
