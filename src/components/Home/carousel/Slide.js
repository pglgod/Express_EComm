import { FaApple,  } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";



// Slide 01
export const Slide1 =  <div className=" w-full h-full flex bg-black items-center ">
                            <div className=" pl-7 sm:pl-9 md:pl-12 lg:pl-16 w-1/2  text-white ">
                                <div className="  flex items-center gap-1 md:gap-3 font-poppins " >
                                    <p className="text-4xl sm:text-6xl md:text-7xl lg:text-6xl " ><FaApple /> </p>
                                    <p className=" font-light text-xsm sm:textsm md:text-md " >iPhone 14 Series </p>
                                </div>
                                <div className=" my-2 ml-9 sm:ml-14 md:ml-20 lg:ml-16   font-semibold text-[20px] leading-[1.5rem]  sm:text-[2rem] sm:leading-[2.5rem] md:text-[2.5rem] md:leading-[3rem] lg:text-[2.7rem] lg:leading-[3rem] xl:text-6xl ">
                                    <h1>Up to 10%</h1>
                                    <h1>Off Voucher</h1>
                                </div>
                                <button className=" ml-2  flex items-center gap-1" >
                                    <span className="pb-1 text-white text-sm md:text-md font-semibold border-b border-white ">Shop Now</span>
                                    <FiArrowRight/>
                               </button>
                            </div>
                            <div className=" w-1/2 h-full relative ">
                                <img className=" absolute bottom-0" src="https://i.pinimg.com/736x/f8/21/d5/f821d500c6b948e4d32bf0e61eea1b48.jpg" alt="iphone14" />
                            </div>
                        </div>

export const Slide2 =   <div className=" relative flex justify-center w-full h-full bg-slate-200">
                            <img className=" w-full h-full " src={require("../../../assets/img/Slide2.png")} alt="fashion" />
                            <button className=" absolute w-full h-[90%] bg-transparent " ></button>
                        </div>

export const Slide3 =   <div className=" w-full h-full bg-slate-200"> 
                            <img className=" w-full h-full " src={require("../../../assets/img/Slide3.png")} alt="fashion" />
                            <button className=" absolute w-full h-[90%] bg-transparent " ></button>
                        </div>
export const Slide4 =   <div className=" w-full h-full bg-slate-200">
                            <h1 className=" text-6xl font bold text-blue-600 ">Oppo</h1>
                        </div>


