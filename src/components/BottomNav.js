import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { bottom_nav } from '../lib/navigationLinks'

export default function BottomNav() {
    const location = useLocation();
  return (
    <>
      <div className="   pt-3 w-full fixed  bottom-0 flex lg:hidden items-center justify-around sm:justify-center sm:gap-14 bg-slate-50 ">

        {
            bottom_nav.map((e)=>{
                return(  
                    <Link to={e.path} className={`flex flex-col items-center justify-center `}>
                        <p className=' text-xl '>{e.icon}</p>
                        <p className='text-sm font-extralight '>{e.Lable}</p>
                        <span className={` w-full h-1   ${location.pathname === e.path ? "border-t-4  rounded-t border-black" : ""} `} ></span>
                    </Link>
                )
            })
        }
      </div>
    </>
  )
}
