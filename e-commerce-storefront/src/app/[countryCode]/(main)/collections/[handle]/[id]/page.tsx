import ProductsDetails from '@modules/ProductsDetails/template/ProductsDetails'
import React from 'react'
import Image1 from "../../../../../../../public/image_3.jpg"
import Image from 'next/image'
const SinglePage = () => {
  return (
    <section className='max-w-screen-2xl mx-auto   grid grid-cols-1 md:grid-cols-2'>
               <div className='relative  flex-1 my-8 h-[350px]  md:h-[400px] lg:h-[500px]'>
                       <Image fill src={Image1} alt="" className="object-cover absolute" />
               </div>

               <div className=' flex-1 my-8 h-full'>
                      <ProductsDetails/>
               </div>
    </section>
  )
}

export default SinglePage