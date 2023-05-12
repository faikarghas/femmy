import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

export interface IFormKontak {}

const FormKontak: React.FC<IFormKontak> = () => {
  const [message, setMessage] = useState('tanya sekarang!'); // This will be used to show a message if the submission is successful
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      phone: '',
      email: '',
      question: '',
    },
    onSubmit: async (val) => {
      const data = {
        fullName: val.fullName,
        phone: val.phone,
        email: val.email,
        question: val.question,
      };

      const JSONdata = JSON.stringify(data);
      const endpoint = 'https://api-femmy.owlandfoxes.co.id/question';
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
          className="bg-[#F5E8DF] lg:bg-transparent w-full rounded-2xl lg:rounded-lg placeholder:femmy-pdark placeholder:femmy-pdark placeholder:text-[13px] placeholder:font-sans placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] text-femmy-pdark border-femmy-pdark"
          placeholder="nama"
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="relative z-0 mb-4 md:mb-2  w-full group">
        <input
          className="bg-[#F5E8DF] lg:bg-transparent w-full rounded-2xl lg:rounded-lg placeholder:femmy-pdark placeholder:femmy-pdark placeholder:text-[13px] placeholder:font-sans placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] text-femmy-pdark border-femmy-pdark"
          placeholder="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="relative z-0 mb-4 md:mb-2  w-full group">
        <input
          className="bg-[#F5E8DF] lg:bg-transparent w-full rounded-2xl lg:rounded-lg placeholder:femmy-pdark placeholder:femmy-pdark placeholder:text-[13px] placeholder:font-sans placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] text-femmy-pdark border-femmy-pdark"
          placeholder="no. handphone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="relative z-0 mb-2.5 md:mb-2  w-full group">
        <textarea
          className="bg-[#F5E8DF] lg:bg-transparent w-full rounded-2xl lg:rounded-lg placeholder:femmy-pdark placeholder:femmy-pdark placeholder:text-[13px] placeholder:font-sans placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] text-femmy-pdark border-femmy-pdark"
          placeholder="tulis pertanyaan kamu di sini..."
          rows={5}
          name="question"
          value={formik.values.question}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <button
        type="submit"
        className="mt-0 md:mt-4 w-full text-center rounded-2xl text-femmy-white bg-femmy-pdark tracking-[2px] hover:bg-femmy-white hover:text-femmy-pdark focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 font-sans"
      >
        {message}
      </button>
    </form>
  );
};

export default FormKontak;
