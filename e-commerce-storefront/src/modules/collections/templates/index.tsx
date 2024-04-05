import { ProductCollection } from "@medusajs/medusa"
import { Suspense } from "react"
import { SlEqualizer } from "react-icons/sl";
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import { Category, products } from "./Content";
import Image from "next/image";

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

<div className="max-w-screen-2xl px-4  mb-10 mx-auto text-[#424242]">
         <h1 className="text-5xl py-8 font-semibold ">Women&apos;s Clothing</h1>
         <p className=" text-[15px] py-4">Thoughtfully crafted, sustainably made. Shop women&apos;s hoodies, sweatshirts, sweatpants, t-shirts, sweaters, coats, pants and dresses.</p>

         {/* Section For Images */}


         {/* Filter Section */}
         <div className=" flex justify-start gap-x-6 font-medium my-6 text-[18px] ">
               <h2 className="border-b gap-x-[4px] flex items-center">All Filter <SlEqualizer/></h2>
               <h2 className="border-b">Size</h2>
               <h2 className="border-b">Gender</h2>
               <h2 className="border-b">Color</h2>
         </div>

         <div className=" flex gap-x-10">
                {/* Sidebar */}
                <div className="md:w-2xl  lg:w-3xl hidden md:block lg:space-y-6  space-y-4">
                      {Category.map((item)=>(
                           <div key={item.id}  className=" flex space-y-5   flex-col font-medium text-[15px]">
                              <p className="hover:underline cursor-pointer">{item.title}</p>
                           </div>
                      ))} 
                </div>


               <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-3">
                     {products.map((item)=> (
                        <div className=" relative  w-full h-[250px] sm:h-[300px] md:h-[400px] group" key={item.id}>
                             <Image src={item.img} alt="" className="object-cover absolute" fill />
                             <p className="px-4 py-2 bg-transparent blur-md opacity-0 group-hover:opacity-100 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            Quick View
          </p>
                        </div>
                     ))}
               </div>
         </div>
</div>
   </>
  )
}
