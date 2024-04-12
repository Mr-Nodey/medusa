"use client"

import { ProductCollection } from "@medusajs/medusa"
import { Suspense } from "react"
import { SlEqualizer } from "react-icons/sl";
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import { Category, products } from "./Content";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiHeart } from "react-icons/bi";

export default function CollectionTemplate({
  sortBy,
  collection,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  collection: ProductCollection
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
   const router= useRouter()

   const title= collection.title
  return (
    <>
      {/* <div className="flex flex-col small:flex-row small:items-start py-6 content-container">

<h1>Hello World</h1>
<RefinementList sortBy={sortBy || "created_at"} />
<div className="w-full">
<div className="mb-8 text-2xl-semi">
  <h1>{collection.title}</h1>
</div>
<Suspense fallback={<SkeletonProductGrid />}>
  <PaginatedProducts
    sortBy={sortBy || "created_at"}
    page={pageNumber}
    collectionId={collection.id}
    countryCode={countryCode}
  />
</Suspense>
</div>
</div> */}

      <div className="max-w-screen-2xl px-4 md:mb-10 mx-auto text-[#424242]">
        <h1 className=" text-3xl  md:text-4xl  lg:text-5xl  py-3 md:py-8 font-semibold ">Women&apos;s Clothing</h1>
        <p className=" text-[15px] py-4">Thoughtfully crafted, sustainably made. Shop women&apos;s hoodies, sweatshirts, sweatpants, t-shirts, sweaters, coats, pants and dresses.</p>

        {/* Section For Images */}


        {/* Filter Section */}
        <div className=" flex justify-start gap-x-3 md:gap-x-6 font-medium my-6 text-[15px] md:text-[18px] ">
          <h2 className="border-b gap-x-[4px] flex items-center">All Filter <SlEqualizer /></h2>
          <h2 className="border-b">Size</h2>
          <h2 className="border-b">Gender</h2>
          <h2 className="border-b">Color</h2>
        </div>

        <div className=" flex gap-x-10">
          {/* Sidebar */}
          <div className="md:w-2xl  lg:w-3xl hidden md:block lg:space-y-6  space-y-4">
            {Category.map((item) => (
              <div key={item.id} className=" flex space-y-5   flex-col font-medium text-[15px]">
                <p className="hover:underline cursor-pointer">{item.title}</p>
              </div>
            ))}
          </div>


          <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-3 ">
            {products.map((item) => (
              <div className=" flex flex-col " key={item.id} >
                   <div className="relative w-full h-[250px] cursor-pointer sm:h-[250px] md:h-[400px] group" >
                <Image onClick={()=> router.push(`/collections/${collection.handle}/${title}`)} src={item.img} alt="" className="object-cover absolute" fill />
                <p className="px-4 py-2 backdrop-filter backdrop-blur-sm opacity-0 group-hover:opacity-100 absolute left-0 right-0 bottom-0 md:w-[150px] w-[110px]  h-[20px] md:h-[50px] text-white flex items-center justify-center">
                  <span className="text-[13px] md:text-[16px]"> Quick View</span>
                </p>
              </div>
                  <div className=" flex mt-2 items-center  justify-between gap-x-2">
                      <h1 className=" font-medium text-[14px] md:text-[18px]">{item.title2}</h1>
                       <BiHeart size={24} className=" cursor-pointer"/>
                  </div>
                  <p className=" font-medium">${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
