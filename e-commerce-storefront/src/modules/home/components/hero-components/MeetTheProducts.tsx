"use client"

import React, { useRef } from 'react'
import { TiArrowForward } from "react-icons/ti";
import { TiArrowBack } from "react-icons/ti";
import { products } from './constant';
import Image from 'next/image';
import { title } from 'process';

const MeetTheProducts = ({title}:{title:string}) => {

        const scrollRef = useRef<HTMLDivElement>(null)

        const scrollLeft = () => {
               if(scrollRef.current){
                    scrollRef.current.scrollLeft -= 200;
               }
        }

        const scrollRight = () => {
          if (scrollRef.current) {
               scrollRef.current.scrollLeft += 200; 
           }
        }

     return (
          <section className=' max-w-screen-2xl mx-auto mt-2 md:mt-5 md:space-y-4'>
               <div className=' flex items-center justify-between px-4'>
                    <h1 className='md:text-2xl text-[20px] lg:text-3xl font-medium'>
                         {title}
                    </h1>
                    <div className='hidden md:flex items-center gap-3 text-white'>
                         <p onClick={scrollLeft} className=' cursor-pointer flex items-center justify-center bg-gray-500 hover:bg-gray-700 rounded-full h-9 w-9'><TiArrowBack /></p>
                         <p  onClick={scrollRight} className='cursor-pointer  bg-gray-500 flex items-center justify-center hover:bg-gray-700 rounded-full h-9 w-9'><TiArrowForward /></p>
                    </div>
               </div>

               <div ref={scrollRef} className=' flex flex-row scroll-smooth  overflow-y-auto gap-x-4'>
                    {products.map((item)=> (
                         <div key={item.id} className=' cursor-pointer' >
                                    <div className='m-2 relative w-72 h-[200px]  md:h-[300px] shadow-md shadow-black  md:w-[300px] lg:w-[400px] lg:h-[400px]'>
                                        <Image src={item.img} fill alt="" className=' absolute object-cover'/>
                                    </div>
                                    <p className=' text-[16px] font-medium'>{item.title}</p>
                                    <p className=' text-[16px]'>{item.cate}</p>
                         </div>

                    ))}
               </div>
          </section>
     )
}

export default MeetTheProducts