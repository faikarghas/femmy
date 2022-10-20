import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const FormJoin = () => {
  const [message, setMessage] = useState('tanya sekarang!'); // This will be used to show a message if the submission is successful
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      consultantName: '',
      occupation: '',
      address: '',
      whatsAppNo: '',
      email: '',
      instagram: '',
      tiktok: '',
    },
    onSubmit: async (val) => {
      const data = {
        fullName: val.fullName,
        consultantName: val.consultantName,
        occupation: val.occupation,
        address: val.address,
        whatsAppNo: val.whatsAppNo,
        email: val.email,
        instagram: val.instagram,
        tiktok: val.tiktok,
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
        setMessage('Terkirim');
        setTimeout(() => {
          setMessage('tanya sekarang!');
        }, 3000);
        setSubmitted(true);
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
    <form onSubmit={formik.handleSubmit}>
      <div className="relative z-0 mb-4 md:mb-2  w-full group">
        <input
          className="bg-transparent w-full rounded-lg placeholder:femmy-pdark placeholder:text-[13px] placeholder:font-sans placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark"
          placeholder="nama lengkap"
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="relative z-0 mb-4 md:mb-2  w-full group">
        <input
          className="bg-transparent w-full rounded-lg placeholder:femmy-pdark placeholder:text-[13px] placeholder:font-sans placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark"
          placeholder="nama femmy reseller"
          name="consultantName"
          value={formik.values.consultantName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="relative z-0 mb-4 md:mb-2  w-full group">
        <input
          className="bg-transparent w-full rounded-lg placeholder:femmy-pdark placeholder:text-[13px] placeholder:font-sans placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark"
          placeholder="pekerjaan"
          name="occupation"
          value={formik.values.occupation}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="relative z-0 mb-4 md:mb-2  w-full group">
        <input
          className="bg-transparent w-full rounded-lg placeholder:femmy-pdark placeholder:text-[13px] placeholder:font-sans placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark"
          placeholder="alamat"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 mb-4 md:mb-2  w-full group">
          <input
            className="bg-transparent w-full rounded-lg placeholder:femmy-pdark placeholder:text-[13px] placeholder:font-sans placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark"
            placeholder="nomor whatsapp"
            type={'tel'}
            name="whatsAppNo"
            value={formik.values.whatsAppNo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="relative z-0 mb-4 md:mb-2  w-full group">
          <input
            className="bg-transparent w-full rounded-lg placeholder:femmy-pdark placeholder:text-[13px] placeholder:font-sans placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark"
            placeholder="e-mail"
            name="email"
            type={'email'}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 mb-4 md:mb-2  w-full group">
          <input
            className="bg-transparent w-full rounded-lg placeholder:femmy-pdark placeholder:text-[13px] placeholder:font-sans placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark"
            placeholder="instagram"
            name="instagram"
            value={formik.values.instagram}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="relative z-0 mb-4 md:mb-2  w-full group">
          <input
            className="bg-transparent w-full rounded-lg placeholder:femmy-pdark placeholder:text-[13px] placeholder:font-sans placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark"
            placeholder="tiktok"
            name="tiktok"
            value={formik.values.tiktok}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 w-full text-center text-femmy-white bg-femmy-pdark  focus:ring-4 focus:outline-none tracking-[2px] focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 font-sans"
      >
        {message}
      </button>
    </form>
  );
};

export default FormJoin;
