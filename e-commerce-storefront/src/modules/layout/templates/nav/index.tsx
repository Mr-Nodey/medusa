import { Suspense } from "react"
import { RiMenu4Line } from "react-icons/ri";
import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Link from "next/link"
import {BiSearch} from "react-icons/bi"
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
              <div className="  md:flex    flex-none bg-cloud-gray-50 md:px-8  md:py-4">
                      <ul className=" text-[16px]  flex items-center gap-x-6  my-2">
                          <Link href={"/"}>Logo</Link>
                          <Link href="/" className="hidden md:block">WOMENS</Link>
                          <Link href="/" className="hidden md:block" >MENS</Link>
                          <Link href="/"  className="hidden md:block">KIDS</Link>
                          <Link href="/" className="hidden md:block ">ACCESSORIES</Link>
                          <Link href="/" className="hidden md:block">CLIMET</Link>
                          <Link href="/" className="hidden md:block">IMPACT</Link>
                      </ul>
              </div>

              <div className="flex items-center justify-center">
                      <ul className=" flex items-center gap-x-6">
                          <Link href={"/"} > 
                               <BiSearch size={24} />
                          </Link>
                          <Link href={"/"} className="relative inline-block">
                               <HiOutlineShoppingBag className=""  size={24}/>
                               <p className=" abdolute items-center -mt-3 flex text-white top-0 left-1 justify-center w-4 h-4 rounded-full bg-gray-800 ">0</p>
                          </Link>
                          <Link href={"/"}>
                               <CiHeart   size={25}/>
                          </Link>
                          <Link href="/">
                               <RiMenu4Line size={24} />
                          </Link>
                      </ul>
              </div>
        </nav>
      </header>
    </div>
  )
}
