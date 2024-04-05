import Link from 'next/link'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

const SomeDesigns = () => {
    return (
        <div className='my-12 grid grid-cols-1 md:grid-cols-3 '>
            <div className='bg-[#58804D] text-[#EEEEE9] shadow-inner p-8 space-y-2  flex flex-col  h-[400px] md:h-[500px]'>
                <h2 className='mb-[16px] font-semibold text-[1.5rem]'>Get your own intractive virtual forest</h2>

                <p className='mb-[16px] text-[16px]'>Register trees and get your own virtual forest isaland that will change as you plant </p>

                <Link href="/" className='mt-4 uppercase font-semibold flex items-center gap-x-2'>Learn More  <IoIosArrowRoundForward size={24} /></Link>
            </div>
            <div className='bg-[#669966] shadow-inner text-[#EEEEE9] p-8 space-y-2  flex flex-col h-[400px] md:h-[500px]'>
                <h2 className='mb-[16px] font-semibold text-[1.5rem]'>Get rewards for doing good</h2>

                <p className='mb-[16px] text-[16px]'>Get 20 point for creating an account todat  </p>

                <Link href="/" className='mt-4 uppercase font-semibold flex items-center gap-x-2'>Create an Account <IoIosArrowRoundForward size={24} /></Link>
            </div>
            <div className='bg-[#4D805C] shadow-inner text-[#EEEEE9] p-8 space-y-2  flex flex-col h-[400px] md:h-[500px]'>
                <h2 className='mb-[16px] font-semibold text-[1.5rem]'>Tree Planting on Autopilot</h2>

                <p className='mb-[16px] text-[16px]'>Plant trees monthly to offer your lifestyle or just help your plant cool off. </p>

                <Link href="/" className='mt-4 uppercase font-semibold flex items-center gap-x-2'>Subscribe Now<IoIosArrowRoundForward size={24} /></Link>
            </div>
        </div>
    )
}

export default SomeDesigns