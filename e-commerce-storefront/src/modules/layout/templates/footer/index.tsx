"use client"

import { Input, Text, clx } from "@medusajs/ui"

import { getCategoriesList, getCollectionsList } from "@lib/data"
import { IoIosArrowDown } from "react-icons/io";
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import { footer, paymentMethod } from "./content"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default  function Footer() {
  // const { collections } = await getCollectionsList(0, 6)
  // const { product_categories } = await getCategoriesList(0, 6)

  const [selectedCounter, setSelectedCounter] = useState<string | null>(null);

  const counters = [
    { name: 'Counter 1', imageUrl: '/path/to/counter1-image.png' },
    { name: 'Counter 2', imageUrl: '/path/to/counter2-image.png' },
    { name: 'Counter 3', imageUrl: '/path/to/counter3-image.png' },
    // Add more counters as needed
  ];

  const handleToggleCounter = (name: string) => {
    setSelectedCounter(selectedCounter === name ? null : name);
  };

  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">

          {/* Section 1 */}
          <div className="grid grid-cols-3 my-4 gap-x-6 text-[#424242] ">
                {footer?.map((item)=> (
                    <div key={item.id} className=" ">
                         <h2 className=" text-[22px] py-4">{item.title}</h2>
                         <div className=" border-t border-ui-border-base w-full"></div>
                         {item.link.map((item)=>(
                            <div key={item.id} className=" text-[16px] py-4">
                              <Link href="/" className=" font-medium">{item.title}</Link>
                            </div>
                         ))}
                    </div>
                ))}
          </div>

          {/* Section 2 */}
          
          <div>
            
          </div>


          <div className="mx-w-5xl mx-auto">

                  <div className=" flex items-center mt-3 gap-x-4 justify-center">
                       {paymentMethod.map((pay)=>(
                          <div  key={pay.id} className=" ">
                            <Image src={pay.img} alt="" width={35} height={30} className=" object-contain"/>

                          </div>
                       ))}
                  </div>
          </div>

          <div  className="border-t mb-3 border-ui-border-base w-full"/>

          <div className=" my-3 max-w-md mx-auto flex items-center justify-center text-center">
              <p className="text-[#424242]">
              We acknowledge that our company is based on the traditional, ancestral and unceded territories of the Coast Salish Nations — xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish) and səlil̓ilw̓ətaʔɬ (Tsleil-Waututh).
              </p>
          </div>


          <div  className="border-t mb-3 border-ui-border-base w-full"/>

        {/* Secound section */}
        <div className=" flex-row  flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Medusa Store. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
