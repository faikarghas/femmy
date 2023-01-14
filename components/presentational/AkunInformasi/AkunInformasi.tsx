import React, { useState } from 'react';
import Link from 'next/link';

import { useFormik } from 'formik';
import * as yup from 'yup';

export interface IAkunInformasi {
}

const AkunInformasi: React.FC<IAkunInformasi> = () => {
    const [message, setMessage] = useState('simpan'); // This will be used to show a message if the submission is successful

    const formik = useFormik({
        initialValues: {
          fullName: '',
          address: '',
          whatsAppNo: '',
          email: '',
          instagram: '',
        },
        onSubmit: async (val) => {
          const data = {
            fullName: val.fullName,
            address: val.address,
            whatsAppNo: val.whatsAppNo,
            email: val.email,
            instagram: val.instagram,
          };
    
          const JSONdata = JSON.stringify(data);
          const endpoint = 'https://api-femmy.owlandfoxes.id/reseller';
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSONdata,
          };
          const response = await fetch(endpoint, options);
          const result = await response.json();
    
          if (result.status == 200) {
          }
        },
        validationSchema: yup.object({
          fullName: yup.string().trim().required('Name is required'),
          email: yup
            .string()
            .email('Must be a valid email')
            .required('Email is required'),
        }),
    });

    return (
        <form className='mb-4' onSubmit={formik.handleSubmit}>
            <div className="grid md:grid-cols-1">
                <div className="relative z-0 mb-4 md:mb-3  w-full group">
                    <input
                    className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] py-1.5 pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                    placeholder="nama lengkap"
                    name="fullName"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                <div className="relative z-0 mb-4 md:mb-3  w-full group">
                    <input
                    className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] py-1.5 pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                    placeholder="alamat e-mail"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                <div className="relative z-0 mb-4 md:mb-3  w-full group">
                    <input
                    className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] py-1.5 pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                    placeholder="tanggal lahir"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                <div className="relative z-0 mb-4 md:mb-3  w-full group">
                    <input
                    className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] py-1.5 pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                    placeholder="nomor telepon"
                    name="whatsAppNo"
                    value={formik.values.whatsAppNo}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                <div className="relative z-0 mb-4 md:mb-3  w-full group">
                    <input
                    className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] py-1.5 pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                    placeholder="instagram"
                    name="instagram"
                    value={formik.values.instagram}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
            </div>
            <div className='text-right'>
                <button
                    type="submit"
                    className="mt-4 w-1/2 text-center text-femmy-white bg-femmy-pdark  focus:ring-4 focus:outline-none tracking-[2px] focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 font-sans">
                    {message}
                </button>
            </div>
        </form>
    )
}

export default AkunInformasi;
