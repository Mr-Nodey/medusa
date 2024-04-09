"use client"

import React, { useState } from 'react'
import { BiPlus } from 'react-icons/bi';
import { Features, details } from '../context';


const Details = () => {
    const [open, setOpen] = useState<boolean>(false)
  return (
    <div >
         <h2 className=' flex text-[20px] font-semibold items-center justify-between'> Products details <BiPlus  onClick={()=>setOpen(!open)} className={`cursor-pointer ${open && 'rotate-45'}`}/></h2>


       {open &&  <div className="mt-4 mr-2 text-[#424242] py-2">
                 <h1 className=' text-[16px] font-medium'>Materials</h1>
                {details.map((item)=> (
                      <div key={item.id}>
                          <div className='space-y-2 ml-4 gap-x-2 flex items-center'>
                          <item.logo  size={24}/>
                               <div>
                                     <h3 className='text-[15px] font-medium'>{item.title}</h3>
                                     <p className=' text-[13px] '>{item.desc}</p>
                               </div>
                          </div>
                      </div>
              
                ))}

                <hr className=' my-4' />
                 
                <h1 className=' text-[16px] font-medium'>Features</h1>
                {Features.map((item)=> (
                      <div key={item.id}>
                          <div className='space-y-2 ml-4 gap-x-2 flex items-center'>
                          <item.logo  size={24}/> 
                               <div>
                                     <h3 className='text-[15px] font-medium'>{item.title}</h3>
                                     <p className=' text-[13px] '>{item.desc}</p>
                               </div>
                          </div>
                      </div>
              
                ))}
            
         </div>
         }
    </div>
  )
}

export default Details