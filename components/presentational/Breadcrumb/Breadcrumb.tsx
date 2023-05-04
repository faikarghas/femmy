import React from 'react';
import Link from 'next/link';

export interface IBread {
  page: string;
  detail: string;
}

const Breadcrumb: React.FC<IBread> = ({ page, detail }) => (
  <nav className="flex mb-14" aria-label="Breadcrumb">
    <ul className="inline-flex items-center space-x-1">
      <li className="inline-flex items-center">
        <Link href="" className="inline-flex items-center text-sm font-sans text-femmy-pdark">
            {' '}
            Beranda
        </Link>
      </li>
      <li>
        <div className="flex items-center">
          <svg
            className="w-6 h-6 text-femmy-pdark"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <Link href="/produk" className="ml-1 text-sm font-sans text-femmy-pdark  md:ml-1 ">
              {page}
          </Link>
        </div>
      </li>
      <li aria-current="page">
        <div className="flex items-center">
          <svg
            className="w-6 h-6 text-femmy-pdark"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="ml-1 text-sm font-sans text-femmy-pdark md:ml-1 font-semibold">
            {detail}
          </span>
        </div>
      </li>
    </ul>
  </nav>
);

export default Breadcrumb;
