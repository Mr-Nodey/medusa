import ProductsDetails from '@modules/ProductsDetails/template/ProductsDetails'
import React from 'react'
import Image1 from "../../../../../../../public/image_1.jpg"
import Image from 'next/image'
import { BiPlus, BiSearch } from 'react-icons/bi'
import MoreFilter from '@modules/ProductsDetails/template/MoreFilter'
import CommentSection from '@modules/ProductsDetails/template/CommentSection'
import MeetTheProducts from '@modules/home/components/hero-components/MeetTheProducts'
const SinglePage = () => {
  return (
    <>
         <section className='max-w-screen-2xl mx-auto   grid grid-cols-1 md:grid-cols-2'>
               <div className='relative  flex-1 md:my-8 h-[350px]  md:h-[400px] lg:h-[500px]'>
                       <Image fill src={Image1} alt="" className="object-cover absolute" />
               </div>
               <div className=' flex-1 my-8 h-full'>
                      <ProductsDetails/>
               </div>
    </section>

      <section className='my-3 max-w-screen-2xl mx-auto'>
             
      <div>
                   <MeetTheProducts title='Related Products'/>
             </div>
      </section>

    <section className='max-w-screen-2xl mx-auto   md:mt-0 space-y-3'>
                  
                   <h1 className=' py-2 border-b-4 w-max px-2  mx-2 border-[#424242]'>Reviews 1</h1>

                   <hr />

                   <h1 className='text-[#424242] mx-2 md:mx-0 text-[16px] font-medium'>Filter Reviews:</h1>

                    <div className='mx-2 md:mx-0 flex mb-2 items-center max-w-lg  bg-white gap-x-1 px-4 py-1 border border-[#424242] rounded-md'>
                        <BiSearch size={20}/>   <input type="text" placeholder='Search Reviews  ' className=' placeholder:text-[#424242] outline-none' /> 
                    </div>

                    <div className='my-2 mx-2 md:mx-0'>
                         <MoreFilter/>
                    </div>
                    
                     <hr className='my-2' />
                    
                    <div className='mx-2 md:mx-0'>
                           <CommentSection/>
                    </div>
    </section>
    </>
  )
}

export default SinglePage