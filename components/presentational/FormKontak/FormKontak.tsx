import React from 'react';

export interface IFormKontak {
 
}

const FormKontak: React.FC<IFormKontak> = () => (
  <form>
    <div className="relative z-0 mb-4 md:mb-2  w-full group">
      <input
        className="bg-[#F5E8DF] lg:bg-transparent w-full rounded-2xl lg:rounded-lg placeholder:femmy-pdark pt-1 pb-2 pl-6 border-[1px] text-femmy-pdark border-femmy-pdark"
        placeholder="nama"
      />
    </div>
    <div className="relative z-0 mb-4 md:mb-2  w-full group">
      <input
        className="bg-[#F5E8DF] lg:bg-transparent w-full rounded-2xl lg:rounded-lg placeholder:femmy-pdark pt-1 pb-2 pl-6 border-[1px] text-femmy-pdark border-femmy-pdark"
        placeholder="email"
      />
    </div>
    <div className="relative z-0 mb-4 md:mb-2  w-full group">
      <input
        className="bg-[#F5E8DF] lg:bg-transparent w-full rounded-2xl lg:rounded-lg placeholder:femmy-pdark pt-1 pb-2 pl-6 border-[1px] text-femmy-pdark border-femmy-pdark"
        placeholder="no. handphone"
      />
    </div>
    <div className="relative z-0 mb-2.5 md:mb-2  w-full group">
      <textarea
        className="bg-[#F5E8DF] lg:bg-transparent w-full rounded-2xl lg:rounded-lg placeholder:femmy-pdark pt-1 pb-2 pl-6 border-[1px] text-femmy-pdark border-femmy-pdark"
        placeholder="tulis pertanyaan kamu di sini..."
        rows={5}
      />
    </div>
    <button
      type="submit"
      className="mt-0 md:mt-4 w-full text-center rounded-2xl lg:rounded-2xl text-femmy-white bg-femmy-pdark hover:bg-femmy-white hover:text-femmy-pdark focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 font-sans"
    >
      tanya sekarang!
    </button>
  </form>
);

export default FormKontak

