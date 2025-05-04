import React, { useEffect, useState } from 'react'
import { carouselSlides } from '../../../lib/carousel'





export default function HomeCarousel() {  

    const [current, setCurrent] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
            // console.log(current)
        }, 5000);
        return () => clearInterval(interval);
        // eslint-disable-next-line
    }, [ carouselSlides ]  )
    
    
    

    function nextSlide() {
        setCurrent((prevIndex) => (prevIndex + 1) % carouselSlides.length)
    }

    
    

  return (
    <div className="  w-full h-full bg-slate-500 relative flex items-center justify-center">
        

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
