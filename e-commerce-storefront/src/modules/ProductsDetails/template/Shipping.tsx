"use client"

import React, { useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import { shipping } from '../context'
import { IoIosArrowRoundForward } from "react-icons/io";
const Shipping = () => {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <div>
            <h2 className='text-[20px] font-semibold flex items-center justify-between'> Shipping & Return <BiPlus
                onClick={() => setOpen(!open)} className={`cursor-pointer ${open && 'rotate-45'}`} /></h2>

            {open && <div className="mt-4 mr-2 text-[#424242] py-2">
                {shipping.map((item) => (
               
                           <div key={item.id} className=' text-[#424242] py-2'>
                        <h1 className='text-[15px] font-medium' >{item.title}</h1>
                        <p className='text-[14px] ml-4'>{item.desc}</p>
                        
                    </div>

                ))}
            <button className='flex items-center gap-x-2 border mt-2 border-[#424242] font-medium px-5 py-2 uppercase text-[13px]'> Get Started
               <IoIosArrowRoundForward size={26}/></button>
            </div>
            }

        </div>
    )
}

export default Shipping