import React from 'react';
import Link from 'next/link';
import { useDispatch } from "react-redux";

import { setModalRegisterState } from "../../../store/modal";

export interface IButtonLoginAndRegister {
    position:string;
    auth: boolean;
}

const ButtonLoginAndRegister: React.FC<IButtonLoginAndRegister> = ({position,auth}) => {
    const dispatch = useDispatch();

    if(position === "header" && auth === false) {
        return (
            <li className="flex items-center group relative cursor-pointer">
                <div className="rounded-[56px] md:w-[130px] lg:w-[210px] text-center bg-femmy-pdark text-femmy-white md:py-1.5 lg:py-2.5 md:px-2 lg:px-4 flex items-center justify-center">
                <Link href="/login" className="font-sans font-semibold block leading-[10px] md:tracking-normal lg:tracking-[2px] md:text-[9px] xl:text-[13px] ">
                    masuk
                </Link>
                <span className='text-white px-2'>|</span>
                <Link href="/daftar" className="font-sans font-semibold block leading-[10px] md:tracking-normal lg:tracking-[2px] md:text-[9px] xl:text-[13px] ">
                    daftar
                </Link>
                </div>
            </li>
        )
    } else {
        return (<></>)
    }


}

export default ButtonLoginAndRegister;
