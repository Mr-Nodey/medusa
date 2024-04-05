import Link from 'next/link'
import React from 'react'
import Image3 from "../../../../../public/image_3.jpg"
import Image from 'next/image'
import { IoIosArrowRoundForward } from "react-icons/io";

const TalkTrash = () => {
    return (
        <div className='  bg-slate-100 py-10 my-5'>
            <div className=' max-w-screen-2xl  gap-x-4 justify-center mx-auto flex-row md:flex items-center '>
                <div className=' flex-1 space-y-3 px-3 md:px-1 lg:px-0 text-[#424242]'>
                    <h1 className=' font-semibold text-[25px] lg:text-[40px] '>Sustainability = Transparency</h1>
                    <Link href="/" className=' uppercase  flex items-center gap-x-1'>Learn More <IoIosArrowRoundForward size={24} /></Link>
                    <p className=' md:text-[16px] text-[14px] '>The apparel industry creates a lot of trash—10.5 million tonnes per year, to be exact. We&apos;re helping divert some of it from landfills, while conserving water and important resources, too. By planting trees for every item purchased, we prove to the world that sustainability can and should be as easy as putting on a t-shirt. Here&apos;s a snapshot of the impact you&apos;ve helped create so far this year:</p>

                    <div className='flex  items-center justify-center py-5 space-x-6'>
                        <div className='space-y-2'>
                            <h2 className='font-semibold text-[18px]'>200 MM g</h2>
                            <p className='text-[13px]'>waste saved</p>
                        </div>
                        <div className='space-y-2'>
                            <h2 className='font-semibold text-[18px]'>200 MM g</h2>
                            <p className='text-[13px]'>waste saved</p>
                        </div>
                        <div className='space-y-2'>
                            <h2 className='font-semibold text-[18px]'>1 MM kg</h2>
                            <p className='text-[13px]'>CO2 saved</p>
                        </div>
                    </div>
                </div>
                <div className=' relative w-full h-[400px] md:h-[500px] px-4  flex-1'>
                    <Image src={Image3} alt="" fill className=" absolute" />
                </div>
            </div>
        </div>
    )
}

export default TalkTrash