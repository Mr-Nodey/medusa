"use client"
import React, { useState } from 'react'
import { BiPlus } from 'react-icons/bi'

const MoreFilter = () => {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <div className=' space-y-4'>
           {open  && <div className=' space-y-2 md:space-y-0 flex-row w-full md:flex-col items-center gap-x-4'> 
                <select name="" id="" className='w-full md:w-[250px] px-5 rounded-sm border py-1 border-[#424242]'>
                    <option value="fit">Fit</option>
                    <option value="A Little Small">A Littel Small</option>
                </select>
                <select name="" id="" className='w-full md:w-[250px] px-5 border rounded-sm py-1 border-[#424242]'>
                    <option value="Size Purchase">size </option>
                    <option value="l">L</option>
                </select>
                <select name="" id="" className=' w-full md:w-[250px] px-5 border py-1 rounded-sm border-[#424242]'>
                    <option value="short">short</option>
                    <option value="Most Recent">Most Recent</option>
                    <option value="Highest Rating ">Highest Rating </option>
                    <option value="Lowest Rating">Lowest Rating</option>
                </select>

            </div>}

            <div className=' flex items-center justify-between  text-[#424242]'>
                <h1 className=' text-[16px]  font-medium'>More Filters</h1>
                <BiPlus size={24} className={` ${open && 'rotate-45'} cursor-pointer`} onClick={()=>setOpen(!open)}/>
            </div>
        </div>
    )
}

export default MoreFilter