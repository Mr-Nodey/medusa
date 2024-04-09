import React from 'react'
import { productsDetails } from '../context'
import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const ProductsDetails = () => {
    return (
        <main className=' mr-4 space-y-4 pl-4  md:pr-10'>
            {productsDetails.map((item) => (
                <div key={item.id}>
                    <p className=' text-[15px] text-[#989896]'>{item.productsId}</p>
                    <div className=' flex items-center gap-5 justify-between text-[#424242] '>
                        <h2 className=' text-[24px] md:text-[30px] font-semibold'>{item.title}</h2>
                        <p className='text-[15px] text-[#111827] font-medium'>${item.price}</p>
                    </div>
                    <p className='text-[15px] text-[#424242] py-2'>{item.subtitle}</p>
                    <div className=' flex items-center gap-x-2 text-[#424242] '>
                        <span className=' flex items-center gap-x-1'>
                        <FaStar/>    <FaStar/>    <FaStar/>    <FaStar/>    <FaStar/>
                        </span>
                          <span className='text-[15px] text-[#424242]'>{item.reviews}</span>
                        </div>

                    <p className='text-[14px] font-medium text-[#424242] py-2'>{item.colorTitle}</p>
                    <div className='flex items-center gap-x-4'>
                    {item.coreColor.map((color) => (
                          <div
                          key={color.id}
                          className={`cursor-pointer w-[44px] text-[12px] font-medium flex items-center justify-center h-[44px] uppercase border-2 rounded-full`}
                          style={{ backgroundColor: color.color, borderColor: color.color }}
                      />
                    ))}
                    </div>
                     <h3 className='text-[14px] py-2 font-medium text-[#424242]'>Size</h3>
                    <div className='flex items-center gap-x-4'>
                    {item.size.map((size) => (
                        <div key={size.id} className='cursor-pointer'>
                            <p className='w-[44px] text-[12px] bg-[#eeeee9] font-medium flex items-center justify-center h-[44px] uppercase border-2 border-[#424242] rounded-full'>{size.name}</p>
                        </div>
                    ))}
                    </div>
                    
                    <div className=' flex items-center text-[#eeeee9] gap-x-[2px]'>
                         <button className='bg-[#516569]  my-2 flex items-center justify-center gap-x-[2px] w-full h-12'>Add to Bag - $338</button>
                         <span className='bg-[#516569] h-12  flex items-center justify-center px-2 cursor-pointer'><CiHeart  size={28} /></span>
                    </div>
                    <h2 className=' text-[24px] md:text-[30px] font-semibold text-[#424242] my-2'>{item.title2}</h2>
                    <p className='text-[15px] text-[#424242] font-semibold'>{item.desc}</p>

                </div>
            ))}
        </main>
    )
}

export default ProductsDetails