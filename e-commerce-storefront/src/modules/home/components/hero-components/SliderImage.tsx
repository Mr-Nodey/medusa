"use client"

import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { slider } from './constant';



const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 5000,
    className: "w-full mx-auto cursor-pointer center-mode",
  };

const SliderImage = () => {
  return (
    <main className=' w-full'>
             <Slider {...settings}>
        {slider.map((item) => (
          <div key={item.id} className='relative flex flex-col items-center justify-center gap-x-6 group shadow-lg text-white rounded-xl px-6 py-8 h-[250px] lg:h-[608px]'>
            <div className='absolute inset-0 bg-cover bg-center' style={{backgroundImage:`url(${item.img})`}} />
            <div className='absolute inset-0 bg-black/30 opacity-30 ' />
            <div className='relative z-10 text-center'>
              {item.subtitle && <div className='text-sm font-semibold mb-1'>{item.subtitle}</div>}
              <div className='text-lg font-bold mb-2'>{item.title}</div>
              <div className='text-sm'>{item.discription}</div>
              <button className='mt-4 bg-white text-black px-4 py-2 rounded-lg'>{item.button}</button>
            </div>
          </div>
        ))}
      </Slider>
    </main>
  )
}

export default SliderImage