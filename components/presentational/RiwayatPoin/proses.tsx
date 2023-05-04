import React, {useEffect} from 'react';
import {getDate} from '../../../utils/date'

export interface IProses {
    processData :any
}

const Proses: React.FC<IProses> = ({processData}:any) => {
    useEffect(() => {
        console.log(processData,'processData');
    }, [])
    
    return (
        <div>
            <h4 className='font-sansBold text-[20px] text-femmy-pdark mb-4'>Dalam Proses</h4>
            <div className='flex flex-wrap'>
                {processData.data?.map((val:any,i:number)=>{
                    return (
                        <div key={i} className='basis-full bg-[#FDC8CE] border-[1px] border-femmy-pdark px-8 py-4 rounded-xl mb-4'>
                            <p className='text-[#8F2A64] font-sans'>{getDate(val.attributes.createdAt)}</p>
                            <p className='font-sansBold text-[#CC3F80] text-end text-[20px]'>{val.attributes.deficitPoint}</p>
                            <ul className='flex justify-between mb-4'>
                                <li className='text-[#8F2A64] font-sans'>
                                    <p className='font-sans text-[#8F2A64]'>Transfer Poin GO-PAY</p>
                                    <p className='font-sans text-[#8F2A64]'>#68462944920048220</p>
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Proses

