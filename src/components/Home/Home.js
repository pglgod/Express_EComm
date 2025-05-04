import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { category, home_links } from '../../lib/navigationLinks'
import HomeCarousel from './carousel/HomeCarousel'
import { MdArrowBack, MdArrowForward,  } from 'react-icons/md'
import { product } from '../../lib/product'
import { FaRegHeart } from 'react-icons/fa'

export default function Home() {

    const scrollRef1 = useRef(null)
    const scrollRef2 = useRef(null)

    const scrollToLeft1 = ()=>{
        scrollRef1.current.scrollLeft -= 500; 
        
    }

    const scrollToRight1 = ()=>{
        scrollRef1.current.scrollLeft += 500;
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

                {/* ToDay Sale */}
        <section className=' my-6 lg:my-10 px-2 md:px-5 lg:px-24 ' >
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
                            <button onClick={scrollToLeft1} className=' p-2 aspect-square rounded-full bg-slate-300 text-lg hover:bg-slate-200 ' > <MdArrowBack/> </button>
                            <button onClick={scrollToRight1} className=' p-2 aspect-square rounded-full bg-slate-300 text-lg hover:bg-slate-200' > <MdArrowForward/> </button>
                    </div>
                </div>

                <div ref={scrollRef1}  className=" py-3 lg:py-5  w-full flex  overflow-scroll scroll-smooth ">

                    <div className=" flex flex-row gap-5 ">
                        {
                            
                            product.filter(product => product.saleType.includes("today")).map((e, index) =>{
                                return(
                                    <div className="  w-40 md:w-56 lg:w-60 flex-1 h-72  md:h-[350px] bg-gray-100 rounded-md overflow-hidden cursor-pointer shadow-md ">
                                        <div className=" w-full aspect-square relative">
                                            <img className=' aspect-square' src={e.img} alt="Iphone" />

                                            <button className=' absolute top-3 right-3 hover:text-red-600 text-lg ' ><FaRegHeart/></button>

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

                <div className=" my-2 px-3 flex items-center justify-end md:justify-center ">
                    <button className=' md:px-6 py-1 md:py-2 border-b-2 border-red-600 md:bg-red-600 text-red-600 md:text-white text-md font-poppins font-medium md:rounded-md ' >View All Products</button>
                </div>
        </section>

                    {/* Category */}
        <section className='my-3 lg:my-10 px-2 md:px-5 lg:px-24 ' >
            <div className=" flex items-center gap-3 ">
                <span className='w-5 h-8 bg-red-600 rounded-md' ></span>
                <h1 className=' text-red-600 font-poppins text-lg font-semibold' >Categoties</h1>
            </div>

            <div className=" md:flex items-center justify-between">
                <h1 className=' text-xl sm:text-2xl font-poppins font-semibold' >Browse By Category</h1>
                
                <div className=" hidden  md:flex items-center gap-3">
                        <button  className=' p-2 aspect-square rounded-full bg-slate-300 text-lg hover:bg-slate-200 ' > <MdArrowBack/> </button>
                        <button  className=' p-2 aspect-square rounded-full bg-slate-300 text-lg hover:bg-slate-200' > <MdArrowForward/> </button>
                </div>
            </div>
            
            <div ref={scrollRef2}  className=" py-3 lg:py-5  w-full flex  overflow-scroll scroll-smooth ">

                <div className=" flex flex-row gap-5 ">
                    
                    {
                        category.map((e)=>{
                            return (
                                <div className=" w-44 h-36 flex flex-col items-center justify-center border bg-white hover:bg-red-600 hover:text-white border-gray-300 rounded-sm">
                                    <p className='text-7xl'>
                                        {e.icon}
                                    </p>
                                    <p className=' font-poppins text-lg font-light' >{e.name}</p>
                                </div>
                            )
                        })
                    }

                    

                </div>
            </div>

        </section>

                    {/* This Month */}
        <section className='my-3 lg:my-10 px-2 md:px-5 lg:px-24 ' >
            <div className=" flex items-center gap-3 ">
                <span className='w-5 h-8 bg-red-600 rounded-md' ></span>
                <h1 className=' text-red-600 font-poppins text-lg font-semibold' >This Month</h1>
            </div>

            <div className=" flex items-center justify-between">
                <h1 className=' text-xl sm:text-2xl font-poppins font-semibold' >Best selling Products</h1>
                
                <div className=" flex items-center gap-3">
                    <button className=' px-4 py-1 rounded-sm bg-red-600 hover:bg-white hover:text-red-600 hover:border-red-600 hover:border  text-white text-md font-light font-poppins'  >View All</button>
                    <div className=" hidden md:flex items-center justify-center gap-3">
                        <button  className=' p-2 aspect-square rounded-full bg-slate-300 text-lg hover:bg-slate-200 ' > <MdArrowBack/> </button>
                        <button  className=' p-2 aspect-square rounded-full bg-slate-300 text-lg hover:bg-slate-200' > <MdArrowForward/> </button>
                    </div>
                </div>
            </div>
            
            <div ref={scrollRef2}  className=" py-3 lg:py-5  w-full flex  overflow-scroll scroll-smooth ">

                <div className=" flex flex-row gap-5 ">
                    
                    {
                        product.filter(product => product.saleType.includes("this month") ).map((e)=>{
                            return (
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

        </section>


            {/* Explore Products */}
        <section className='my-3 lg:my-10 px-2 md:px-5 lg:px-24 ' >
            <div className=" flex items-center gap-3 ">
                <span className='w-5 h-8 bg-red-600 rounded-md' ></span>
                <h1 className=' text-red-600 font-poppins text-lg font-semibold' >Our Products</h1>
            </div>

            <div className=" flex items-center justify-between">
                <h1 className=' text-xl sm:text-2xl font-poppins font-semibold' >Explore our Products</h1>
                
                <div className=" flex items-center gap-3">
                    <button className=' px-4 py-1 rounded-sm bg-red-600 hover:bg-white hover:text-red-600 hover:border-red-600 hover:border  text-white text-md font-light font-poppins'  >View All</button>
                </div>
            </div>
            
            <div  className=" py-3 lg:py-5  w-full  ">

                <div className=" h-full  grid place-items-center place-content-center grid-cols-[auto_auto]  md:grid-cols-[auto_auto_auto]  lg:grid-cols-[auto_auto_auto_auto] gap-5 ">
                    
                    {
                        [...product].sort(() => 0.5 - Math.random()).slice(0, 8).map((e)=>{
                            return (
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

        </section>

    </div>
  )
}
