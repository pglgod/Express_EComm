import React, { useRef } from 'react'
import { home_links } from '../lib/navigationLinks'
import { Link } from 'react-router-dom'
import HomeCarousel from './CarouselCom/HomeCarousel'
import { MdArrowBack, MdArrowForward, } from 'react-icons/md'
import { toDaySale } from '../lib/product'

export default function Home() {

    const scrollRef = useRef(null)

    const scrollToLeft = ()=>{
        scrollRef.current.scrollLeft -= 500; 
        
    }

    const scrollToRight = ()=>{
        scrollRef.current.scrollLeft += 500;
    }

  return (
    <div>
      
        <section className='  px-2 md:px-5 lg:px-24 flex ' >
            <div className=" pt-7 w-1/5 xl:w-1/6 gap-2  hidden lg:flex flex-col border-r border-slate-300">
                {
                    home_links.map((e)=>{
                        return (
                            <Link to={`/home/${e.path}`} className=' text-md font-light font-poppins' >{e.Lable}</Link>
                        )
                    })
                }
            </div>

                {/* Carousel */}
            <div className="  mt-3 md:mt-7  lg:ml-7 w-full h-auto aspect-[18/7] lg:w-11/12 flex items-center justify-center ">
                <HomeCarousel/>
            </div>
        </section>

        <section className=' py-6 lg:py-10 px-2 md:px-5 lg:px-24 ' >
                <div className=" flex items-center gap-3 ">
                    <span className='w-5 h-8 bg-red-600 rounded-md' ></span>
                    <h1 className=' text-red-600 font-poppins text-lg font-semibold' >Today's</h1>
                </div>

                <div className=" md:flex items-center justify-between">
                    <div className="flex items-end justify-between gap-5 md:gap-14 lg:gap-20">
                        <h1 className=' text-xl sm:text-2xl font-poppins font-semibold' >Flash Sales</h1>
                        <div className=" flex items-center justify-center gap-1 md:gap-2 lg:gap-3 ">
                            <div className="flex flex-col  items-center text-black ">
                                <p className='text-xs font-poppins ' >Day's</p>
                                <p className='text-xl md:text-2xl font-bold font-poppins ' >02</p>
                            </div>
                            <div className="text-2xl text-red-600 font-semibold">:</div>
                            <div className="flex flex-col  items-center text-black ">
                                <p className='text-xs font-poppins ' >Hours</p>
                                <p className='text-xl md:text-2xl font-bold font-poppins ' >13</p>
                            </div>
                            <div className="text-2xl text-red-600 font-semibold">:</div>
                            <div className="flex flex-col  items-center text-black ">
                                <p className='text-xs font-poppins ' >Minuts</p>
                                <p className='text-xl md:text-2xl font-bold font-poppins ' >26</p>
                            </div>
                            <div className="text-2xl text-red-600 font-semibold">:</div>
                            <div className="flex flex-col  items-center text-black ">
                                <p className='text-xs font-poppins ' >Seconds</p>
                                <p className='text-xl md:text-2xl font-bold font-poppins ' >59</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className=" hidden  md:flex items-center gap-3">
                            <button onClick={scrollToLeft} className=' p-2 aspect-square rounded-full bg-slate-300 text-lg hover:bg-slate-200 ' > <MdArrowBack/> </button>
                            <button onClick={scrollToRight} className=' p-2 aspect-square rounded-full bg-slate-300 text-lg hover:bg-slate-200' > <MdArrowForward/> </button>
                    </div>
                </div>

                <div ref={scrollRef}  className=" py-3 lg:py-5  w-full flex  overflow-scroll scroll-smooth ">

                    <div className=" flex flex-row gap-5 ">
                        {
                            toDaySale.map((e, index) =>{
                                return(
                                    <div className=" w-40 md:w-56 lg:w-60 flex-1 h-72  md:h-[350px] bg-gray-100 rounded-md overflow-hidden cursor-pointer shadow-md ">
                                        <div className=" w-full aspect-square">
                                            <img className=' aspect-square' src={e.img} alt="Iphone" />
                                        </div>
                                        <div className=" px-2 py-2 flex flex-col items-start gap-1 ">
                                            <p className='text-md font-poppins ' >{e.productName.length > 30 ? e.productName.slice(0, 30) + ".." : e.productName}</p>
                                            <p className='text-sm font-poppins flex items-center gap-3' >
                                                <span className=' text-red-600 ' >${e.price}</span> <span className='text-gray-500 relative flex items-center ' >${e.actualPrice} <span className=' absolute  w-full h-[1px] bg-gray-500 ' ></span> </span> 
                                            </p>
                                            <div className=" flex items-center gap-3 ">
                                                <p className='flex items-center gap-1 text-yellow-600 ' >
                                                    {
                                                      "⭐️".repeat(Number(e.star))  
                                                    } 
                                                    {/* <MdStar/> */}
                                                </p>
                                                <p className='text-gray-500 font-poppins text-sm' >({e.rating})</p>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className=" my-2 flex items-center justify-center ">
                    <button className=' px-6 py-2 bg-red-600 text-white text-md font-poppins font-medium rounded-md ' >View All Products</button>
                </div>
        </section>

    </div>
  )
}
