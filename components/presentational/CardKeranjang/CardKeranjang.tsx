import React, { useState } from 'react'

const CardKeranjang = ({}) => {
    const [count, setCount] = useState(1)

    const maxGuests = 1000
    const minGuests = 1

    const handleCount = (e:any) => {
        if (e > maxGuests) {
        setCount(maxGuests)
        } else if (e < minGuests) {
        setCount(minGuests)
        } else setCount(e)
    }

    const decrementCount = () => {
        if (count > minGuests) setCount(count - 1)
    }

    const incrementCount = () => {
        if (count < maxGuests) setCount(count + 1)
        else if (count > maxGuests) setCount(maxGuests)
    }

    return (
        <div className='flex flex-wrap keranjang-card'>
            <div className='basis-[20%] py-8 px-6'>
                <div className='bg-white p-4 flex justify-center items-center rounded-xl'>
                    <img className='w-[80px]' src='/images/produk/estrocal 1.png' />
                </div>
            </div>
            <div className='basis-[80%] py-8 px-4 flex flex-warp'>
                <div className='basis-[30%] flex flex-col justify-center'>
                    <h5 className='text-femmy-pdark font-sansBold mb-3'>Femmy Trimune</h5>
                    <div className='flex'>
                        <div onClick={decrementCount} className='cursor-pointer bg-femmy-pdark w-[35px] flex justify-center items-center rounded-tl-3xl rounded-bl-3xl'><p className='text-white font-sans'>-</p></div>
                        <input value={count} className='w-[40px] cs-input-1 text-center bg-femmy-pdark border-l-[#FEF7F8] border-r-[#FEF7F8] border-[1px] text-white' type={'number'}/>
                        <div onClick={incrementCount} className='cursor-pointer bg-femmy-pdark w-[35px] flex justify-center items-center rounded-tr-3xl rounded-br-3xl'><p className='text-white font-sans'>+</p></div>
                    </div>
                </div>
                <div className='basis-[45%] flex flex-col justify-center'>
                    <div>
                        <p className='text-femmy-pdark font-sans mb-4 text-[14px]'>Jabodetabek 2-4 hari kerja, luar Jabodetabek 4-8 hari kerja.</p>
                        <p className='text-femmy-pdark font-sans text-[14px]'>Kode promo tidak dapat diaplikasikan 30 hari Pertukaran/pengembalian</p>
                    </div>
                </div>
                <div className='basis-[25%] flex flex-col justify-between items-end'>
                    <div>
                        <p className='text-femmy-pdark font-sansSemi'>RP 44.000,-</p>
                    </div>
                    <div>
                        <img className='w-[18px]' src='/images/icon-close-tr.png'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardKeranjang