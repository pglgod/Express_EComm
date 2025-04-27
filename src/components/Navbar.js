import React from 'react';
import { bottom_nav } from '../lib/navigationLinks';
import { Link, useLocation } from 'react-router-dom';
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";


export default function Navbar() {

    const location = useLocation()

  return (
    <nav className=' sticky top-0 z-50 bg-white border-b border-slate-200  '>

      <div className=" px-5 md:px-16 lg:px-24 py-3 md:py-5   flex items-center justify-between">
        
        <div className=" ">
          <div className="  p-1 w-8 aspect-square md:hidden flex items-center justify-center text-center  rounded-full bg-black">
            <p className='    text-white  ' >Ex.</p>
          </div>
          <p className=' hidden md:flex  text-xl md:text-2xl font-bold'>Exclusive</p>
        </div>

        <div className=" hidden lg:flex items-center justify-center gap-6">
            {
                bottom_nav.map((e) => {
                    return (
                        <button className={` font-poppins font-normal ${location.pathname === e.path ? "border-b border-b-black" : " border-b border-transparent "} `} >
                            <Link to={e.path} >{e.Lable}</Link>
                        </button>
                    )
                })
            }
        </div>

        <div className="flex gap-3 md:gap-6 ">
                <div className=" w-60 sm:w-64 h-9 relative flex items-center bg-secondary ">

                  <input type="search" name="search" id="" placeholder='Whtat are you looking for?' className=' px-3 w-full h-full text-md font-light placeholder:text-sm placeholder:font-light font-poppins bg-transparent outline-none border-0  ' />
                  <button className=' absolute h-full aspect-square right-0 top-0 bg-secondary text-2xl text-black  ' ><CiSearch/></button>
                </div>

                <div className=" flex gap-1 md:gap-4 text-3xl md:text-4xl">
                  <button><Link to="/wishlist"> <CiHeart/> </Link></button>
                  <button><Link to="/wishlist"> <CiShoppingCart/> </Link></button>
                </div>
        </div>
      </div>
      



    </nav>
  )
}
