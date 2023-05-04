import React, { useState } from 'react';

import { useFormik } from 'formik';
import {getCookie} from '../../../utils/cookie'
import * as yup from 'yup';

export interface IAkunInformasi {
    userData:any
}

const AkunInformasi: React.FC<IAkunInformasi> = ({userData}) => {
    const [message, setMessage] = useState('simpan'); // This will be used to show a message if the submission is successful
    const [submitted, setSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: {
            fullname: userData.fullname ?  userData.fullname : '',
            address: userData.address ?  userData.address : '',
            phoneNumber: userData.phoneNumber ?  userData.phoneNumber : '',
            email: userData.email ?  userData.email : '',
            instagram: userData.instagram ?  userData.instagram : '',
            birthday: userData.birthday ?  userData.birthday : ''
        },
        onSubmit: async (val) => {
        setMessage('Loading...');
        setSubmitted(true)

        const data = {
            fullname: val.fullname,
            address: val.address,
            phoneNumber: val.phoneNumber,
            email: val.email,
            instagram: val.instagram,
            ttl:val.birthday
        };

        const token = getCookie('refreshToken',{})
        const JSONdata = JSON.stringify(data);
        const endpoint = `http://localhost:1337/api/users/${userData.id}`;
        const options = {
            method: 'PUT',
            headers:{
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        };
        const response = await fetch(endpoint, options);
        const result = await response.json();

        setMessage('Terkirim');

        },

    });

    return (
        <form className='mb-4' onSubmit={formik.handleSubmit}>
            <div className="grid md:grid-cols-1">
                <div className="relative z-0 mb-4 md:mb-3  w-full group">
                    <input
                    className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] py-1.5 pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                    placeholder="nama lengkap"
                    name="fullname"
                    value={formik.values.fullname}
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
                    name="birthday"
                    value={formik.values.birthday}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                </div>
                <div className="relative z-0 mb-4 md:mb-3  w-full group">
                    <input
                    className="bg-transparent w-full rounded-lg placeholder:text-femmy-pdark placeholder:text-[13px] placeholder:font-semibold placeholder:tracking-[2px] py-1.5 pl-6 border-[1px] border-femmy-pdark text-femmy-pdark"
                    placeholder="nomor telepon"
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
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
