import React from 'react'
import { Comments } from '../context'
import { IoIosStar } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
const CommentSection = () => {
  return (
    <div className="">
           {Comments.map((item)=>(
                <div key={item.id} className=' space-y-3'>
                          <div className=' flex text-[#424242] items-center justify-between'>
                                <h1 className=' text-[16px] font-medium  md:text-[20px] '>{item.name}</h1>
                                <p className='text-[13px]'>{item.date}</p>
                          </div>
                          <div className=' flex items-center gap-x-2'>
                                <div className=' flex items-center text-[#424242] gap-x-1'>
                                    <IoIosStar/>  <IoIosStar/>   <IoIosStar/>   <IoIosStar/>   <IoIosStar/>
                                </div>
                                <h3 className=' text-[14px] font-medium'>{item.tag}</h3>
                          </div>
                          <p>{item.desc}</p>

                          <div className=' flex items-center justify-between'>
                          <div className=' flex items-center gap-x-1'>
                               <IoShareSocial size={18}/>   Share
                          </div>
                             <div className=' flex items-center text-[13px]  md:text-[16px] gap-x-2 text-[#424242]'>
                                   <p>Was it helpful? </p>
                                   <BiSolidLike />
                                   <span>2</span>
                                   <BiSolidDislike />
                                   <span>1</span>

                             </div>
                          </div>

                          <hr />

                </div>
           ))}
           <button className=' px-4 text-[#424242] py-[6px] text-[14px] md:text-[16px] max-w-[200px] mx-auto font-medium my-4 border border-[#424242] rounded-sm uppercase w-full flex items-center justify-center hover:bg-gray-100'>Load More</button>
    </div>
  )
}

export default CommentSection