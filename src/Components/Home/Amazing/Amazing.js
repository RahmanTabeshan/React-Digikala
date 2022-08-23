/* eslint-disable react-hooks/exhaustive-deps */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Styles from "./Amazing.module.css" ;
import "swiper/css";
import "swiper/css/navigation";
import AmazingTypo from "../../../Image/Amazing/amazing-typo.svg";
import General from "../../../Image/Amazing/General.png";
import { Link } from "react-router-dom";
import {IoIosArrowBack, IoIosArrowForward, IoMdArrowBack} from "react-icons/io" ;
import { useEffect, useRef, useState } from "react";
import Item from "./item/item";
import Skeleton from "react-loading-skeleton";
import {useSelector} from "react-redux" ;

const Amazing = () => {

    const [hover , setHover] = useState(false) ;
    const [TopAmazing , setTopAmazing] = useState(false) ;

    const pr = useRef() ;
    const nx = useRef() ;

    const Products = useSelector(state => state.Products) ;

    useEffect(()=>{
        setTimeout(() => {
            setTopAmazing(Products.slice(0,12)) ;
        }, 1000);
    },[]) ;
    
    useEffect(()=>{
        const prev = pr.current ;
        const next = nx.current ;
        if(hover){
            if(prev || next){
                prev.classList.remove("opacity-0") ;
                prev.classList.add("opacity-100") ;
                next.classList.remove("opacity-0") ;
                next.classList.add("opacity-100") ;
            }
        }else{
            if(prev || next){
                prev.classList.remove("opacity-100") ;
                prev.classList.add("opacity-0") ;
                next.classList.remove("opacity-100") ;
                next.classList.add("opacity-0") ;
            }
        }
    },[hover])
    // for prevent error in swiper-button-disabled ;

    return (
        <section 
            className="w-rsp bg-red-600 flex gap-x-0.5 rounded-lg py-4 px-2 mt-6 overflow-hidden"
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
        >
            {!TopAmazing && 
                Array(7).fill(1).map((item,index)=>(
                    <Skeleton key={index} width={178} height={260} containerClassName="w-full z-0 " />
                ))
            }
           {TopAmazing && 
                <Swiper
                    slidesPerView={"auto"}
                    navigation={{
                        nextEl : ".swiper-next" ,
                        prevEl : ".swiper-prev"
                    }}
                    spaceBetween={2}
                    modules={[Navigation]}
                >
                    <SwiperSlide style={{width:"auto"}} className={Styles.SwiperSlide}>
                        <div className="w-[179px] flex flex-col items-center p-4">
                            <div className="w-[92px] h-[77px]">
                                <img src={AmazingTypo} alt="Amazing" className="w-full h-full" />
                            </div>
                            <div className="w-[145px] h-[115px] mt-4">
                                <img src={General} alt="General" className="w-full h-full" />
                            </div>
                            <Link to="/" className="flex items-center w-max text-white text-sm">
                                <span>مشاهده همه</span>
                                <IoIosArrowBack className="mr-1" />
                            </Link>
                        </div>
                    </SwiperSlide>
                    {TopAmazing.map(item=>(
                        <SwiperSlide style={{width:"auto"}} key={item.id} className={`${Styles.Amazing} ${Styles.SwiperSlide} Amazing bg-white overflow-hidden`} >
                            <Item item={item} />
                        </SwiperSlide>
                    ))}
                    <SwiperSlide 
                    style={{width:"auto"}}
                        className={`${Styles.SwiperSlide} bg-white !h-[262px] rounded-tl-lg rounded-bl-lg`}
                    >
                        <div className="w-[179px] h-full flex flex-col justify-center items-center">
                            <Link to="/product/Amazing/" className="p-3 border border-blue-400 rounded-full">
                                <IoMdArrowBack className="text-xl text-blue-600" />
                            </Link>
                            <span className="pt-4 text-sm text-444">مشاهده همه</span>
                        </div>
                    </SwiperSlide>
                    <div ref={pr} className="swiper-prev slider-btn swiper-button-disabled right-1 shadow-md opacity-0" >
                        <IoIosArrowForward className="ml-1" />
                    </div>
                    <div ref={nx} className="swiper-next slider-btn left-1 shadow-md opacity-0" >
                        <IoIosArrowBack className="mr-1" />
                    </div>
                </Swiper>
           }
        </section>
    );
};

export default Amazing;
