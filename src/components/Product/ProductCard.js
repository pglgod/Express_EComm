import React from 'react'
import { FaRegHeart } from 'react-icons/fa'

export default function ProductCard(props) {

    const { productName, price, actualPrice, img, rating, star } = props

  return (

        <div className="  w-40 md:w-56 xl:w-60 flex-1 h-72  md:h-[350px] bg-gray-100 rounded-md overflow-hidden cursor-pointer shadow-md ">
            <div className=" w-full aspect-square relative">
                <img className=' aspect-square' src={img} alt="Iphone" />
                <button className=' absolute top-3 right-3 hover:text-red-600 text-lg ' ><FaRegHeart/></button>
            </div>
            <div className=" px-2 py-2 flex flex-col items-start gap-1 ">
                <p className='text-md font-poppins ' >{productName.length > 30 ? productName.slice(0, 30) + ".." : productName}</p>
                <p className='text-sm font-poppins flex items-center gap-3' >
                    <span className=' text-red-600 ' >${price}</span> <span className='text-gray-500 relative flex items-center ' >${actualPrice} <span className=' absolute  w-full h-[1px] bg-gray-500 ' ></span> </span> 
                </p>
                <div className=" flex items-center gap-3 ">
                    <p className='flex items-center gap-1 text-yellow-600 ' >
                        {
                          "⭐️".repeat(Number(star))  
                        } 
                        {/* <MdStar/> */}
                    </p>
                    <p className='text-gray-500 font-poppins text-sm' >({rating})</p>
                </div>
            </div>
        </div>
  )
}
