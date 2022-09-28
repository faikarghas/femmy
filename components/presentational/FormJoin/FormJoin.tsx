import React from 'react';

const FormJoin = () => (
  <form>
    <div className="relative z-0 mb-4 md:mb-2  w-full group">
      <input
        className="bg-transparent w-full rounded-lg placeholder:femmy-pdark pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark"
        placeholder="nama lengkap"
      />
    </div>
    <div className="relative z-0 mb-4 md:mb-2  w-full group">
      <input
        className="bg-transparent w-full rounded-lg placeholder:femmy-pdark pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark"
        placeholder="nama femmy consultant"
      />
    </div>
    <div className="relative z-0 mb-4 md:mb-2  w-full group">
      <input
        className="bg-transparent w-full rounded-lg placeholder:femmy-pdark pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark"
        placeholder="pekerjaan"
      />
    </div>
    <div className="relative z-0 mb-4 md:mb-2  w-full group">
      <input
        className="bg-transparent w-full rounded-lg placeholder:femmy-pdark pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark"
        placeholder="alamat"
      />
    </div>
    <div className="grid md:grid-cols-2 md:gap-6">
      <div className="relative z-0 mb-4 md:mb-2  w-full group">
        <input
          className="bg-transparent w-full rounded-lg placeholder:femmy-pdark pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark"
          placeholder="nomor whatsapp"
        />
      </div>
      <div className="relative z-0 mb-4 md:mb-2  w-full group">
        <input
          className="bg-transparent w-full rounded-lg placeholder:femmy-pdark pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark"
          placeholder="e-mail"
        />
      </div>
    </div>
    <div className="grid md:grid-cols-2 md:gap-6">
      <div className="relative z-0 mb-4 md:mb-2  w-full group">
        <input
          className="bg-transparent w-full rounded-lg placeholder:femmy-pdark pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark"
          placeholder="instagram"
        />
      </div>
      <div className="relative z-0 mb-4 md:mb-2  w-full group">
        <input
          className="bg-transparent w-full rounded-lg placeholder:femmy-pdark pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark"
          placeholder="tiktok"
        />
      </div>
    </div>
    <button
      type="submit"
      className="mt-4 w-full text-center text-femmy-white bg-femmy-pdark hover:bg-femmy-white hover:text-femmy-pdark focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 font-sans"
    >
      bergabung sekarang!
    </button>
  </form>
);

export default FormJoin;
