import React from 'react'

export default function Topbar() {
  return (
    <div className=' hidden w-full py-4 text-md bg-black relative md:flex items-center '>
      <div className=" w-full flex items-center justify-center gap-2  text-white font-extralight font-poppins ">
        <p  >Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <button className='font-normal border-b'>Shop Now</button>
      </div>

      {/* Languag Button */}
      <div className=" absolute right-16  flex gap-2 items-center justify-center text-white font-extralight font-poppins ">
        <p>English</p>
        <button className=' rotate-90'> &gt; </button>
      </div>
    </div>
  )
}
