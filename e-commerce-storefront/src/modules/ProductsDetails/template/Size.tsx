"use client"

import React, { useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import { Fit } from '../context'
import { LuDot } from "react-icons/lu";
const Size = () => {
    const [open, setOpen] = useState<boolean>(false)
  return (
    <div>
             <h2 className='text-[20px] font-semibold flex items-center justify-between'> Size <BiPlus
              onClick={()=>setOpen(!open)} className={`cursor-pointer ${open && 'rotate-45'}`}/></h2>

             {open &&  <div className="mt-4 mr-2 text-[#424242] py-2">
                 <h1 className=' text-[16px] font-medium'>Models</h1>
                 <p >Model is 5&apos;7&quot;, Bust 31, Waist 24, Hips 35, wearing size S</p>
                 <h1 className='mt-3 text-[15px] font-medium'>Fit</h1>
                {Fit.map((item)=> (
                      <div key={item.id} className=' space-y-2'>
                          <p className='text-[14px] ml-4 flex items-center gap-x-1'><LuDot size={14}/>{item.title}</p>
                      </div>
              
                ))}

         </div>
         }
    </div>
  )
}

export default Size