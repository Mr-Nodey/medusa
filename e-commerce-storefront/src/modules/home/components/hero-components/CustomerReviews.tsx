import Link from 'next/link';
import React from 'react'
import { IoStar } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from 'next/image';
import Image2 from "../../../../../public/image_2.jpg"
const CustomerReviews = () => {
  return (
    <div className=' max-w-screen-2xl mx-auto'>
           <h1 className=' text-[24px] py-4 md:py-6 text-[#424242] font-semibold md:text-[35px]'>You Said It Best</h1>

           <div className=' w-full grid grid-cols-1 md:grid-cols-2 shadow-sm bg-green-100  gap-x-4  items-center '>
                   <div className=' py-5 px-4   md:px-6  lg:px-10  md:py-0'>
                          <span className='text-[#424242] flex gap-x-[5px] mb-5'>
                                 <IoStar/>
                                 <IoStar/>
                                 <IoStar/>
                                 <IoStar/>
                                 <IoStar/>
                          </span>
                          <p className='text-[14px] mb-4  '>
                            Dad hat are also a go-to for me and the design and the color of this one is super cute!
                          </p>
                          <p className='text-[#424242] font-semibold mb-0 md:mb-9 text-[16px]'>- Carissa Viance | @carissaviance</p>
                          <Link href="/" className='text-[#424242] absolute -bottom-10 md:static uppercase flex items-center gap-x-2 text-[15px] font-medium'>Shop Now
                              <IoIosArrowRoundForward size={24}/>
                          </Link>
                   </div>

                   <div className=' w-full h-[300px] md:h-[400px]'>
                       <div className='  relative w-full h-full'>
                          <Image src={Image2} alt='' fill className=' absolute object-cover'/>

                       </div>
                   </div>
           </div>
    </div>
  )
}

export default CustomerReviews