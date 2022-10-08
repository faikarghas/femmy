import React, {useState} from 'react';
import { useFormik  } from 'formik';
import * as yup from 'yup';

const FormJoin = () => {
  const [message, setMessage] = useState(''); // This will be used to show a message if the submission is successful
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      nama: '',
      nama_femmy_consultant: '',
      pekerjaan: '',
      alamat: '',
      no_wa: '',
      instagram: '',
      email: '',
      tiktok: '',
    },
    onSubmit: (val) => {
      setMessage('Form submitted');
      setSubmitted(true);
      console.log('api call',val);
    },
    validationSchema: yup.object({
      nama: yup.string().trim().required('Name is required'),
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
          name="nama"
          value={formik.values.nama}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="relative z-0 mb-4 md:mb-2  w-full group">
        <input
          className="bg-transparent w-full rounded-lg placeholder:femmy-pdark placeholder:text-[13px] placeholder:font-sans placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark"
          placeholder="nama femmy consultant"
          name='nama_femmy_consultant'
          value={formik.values.nama_femmy_consultant}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="relative z-0 mb-4 md:mb-2  w-full group">
        <input
          className="bg-transparent w-full rounded-lg placeholder:femmy-pdark placeholder:text-[13px] placeholder:font-sans placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark"
          placeholder="pekerjaan"
          name='pekerjaan'
          value={formik.values.pekerjaan}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="relative z-0 mb-4 md:mb-2  w-full group">
        <input
          className="bg-transparent w-full rounded-lg placeholder:femmy-pdark placeholder:text-[13px] placeholder:font-sans placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark"
          placeholder="alamat"
          name='alamat'
          value={formik.values.alamat}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 mb-4 md:mb-2  w-full group">
          <input
            className="bg-transparent w-full rounded-lg placeholder:femmy-pdark placeholder:text-[13px] placeholder:font-sans placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark"
            placeholder="nomor whatsapp"
            type={"tel"}
            name='no_wa'
            value={formik.values.no_wa}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="relative z-0 mb-4 md:mb-2  w-full group">
          <input
            className="bg-transparent w-full rounded-lg placeholder:femmy-pdark placeholder:text-[13px] placeholder:font-sans placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark"
            placeholder="e-mail"
            name='email'
            type={"email"}
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
            name='instagram'
            value={formik.values.instagram}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="relative z-0 mb-4 md:mb-2  w-full group">
          <input
            className="bg-transparent w-full rounded-lg placeholder:femmy-pdark placeholder:text-[13px] placeholder:font-sans placeholder:font-semibold placeholder:tracking-[2px] pt-1 pb-2 pl-6 border-[1px] border-femmy-pdark"
            placeholder="tiktok"
            name='tiktok'
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
        bergabung sekarang!
      </button>
    </form>
  )

};

export default FormJoin;
