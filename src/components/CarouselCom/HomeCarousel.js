import React, { useEffect, useState } from 'react'
import { MdOutlineArrowLeft, MdOutlineArrowRight } from 'react-icons/md'
import { carouselSlides } from '../../lib/carousel'



const slideData = [
    {
        img: "https://i.pinimg.com/736x/75/c0/30/75c0305e538c7cc446f57bb75b16a95a.jpg"
    },
    {
        img: "https://i.pinimg.com/736x/49/f2/88/49f28805aeb3feb0e7a390bc4f8dbacd.jpg"
    },
    {
        img:"https://i.pinimg.com/736x/bd/cf/cd/bdcfcdaf2fc9ec71d4839b849254d445.jpg"
    }
]

export default function HomeCarousel() {  

    const [current, setCurrent] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
            // console.log(current)
        }, 5000);
        return () => clearInterval(interval);
    }, [ carouselSlides ]  )
    
    
    

    function nextSlide() {
        setCurrent((prevIndex) => (prevIndex + 1) % carouselSlides.length)
    }

    
    

  return (
    <div className="  w-full h-full bg-slate-500 relative flex items-center justify-center">
        
        {/* <div className=' w-10 h-10 absolute  left-0 text-3xl ' ><MdOutlineArrowLeft/></div>
        <div className=' w-10 h-10 absolute right-0 text-3xl '   ><MdOutlineArrowRight/></div> */}

        <div className=" w-full h-full flex items-center scroll-smooth  overflow-x-scroll  overflow-y-hidden ">
            {
                carouselSlides.map((e, index) => 
                    current === index && (
                        <div key={index} className="w-full h-full">
                            {e.slide}
                        </div>
                    )
            )}
        </div>

        <div className=" absolute bottom-3 flex items-center justify-center gap-1 md:gap-2 ">
            {
                carouselSlides.map((e, index)=>{
                    return (
                        // <div className={`w-2 h-2 rounded-full ${ current !== index && "bg-slate-300"} ${current === index ? "bg-slate-700" : " bg-slate-300" }    `} ></div>
                        <div className={`w-5 h-1 rounded-full ${current === index ? "bg-slate-700" : " bg-slate-300" } cursor-pointer `}
                        onClick={() => setCurrent(index)}></div>
                    )
                })
            }
        </div>
    </div>
    
  )
}
