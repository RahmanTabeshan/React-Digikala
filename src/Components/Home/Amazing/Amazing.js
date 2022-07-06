import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Styles from "./Amazing.module.css" ;
import "swiper/css";
import "swiper/css/navigation";
import AmazingTypo from "../../../Image/Amazing/amazing-typo.svg";
import General from "../../../Image/Amazing/General.png";
import { Link } from "react-router-dom";
import {IoIosArrowBack, IoIosArrowForward, IoMdArrowBack} from "react-icons/io" ;
import { useEffect, useState } from "react";
import product1 from "../../../Image/Amazing/Product/محصول اول.jpg" ;
import product2 from "../../../Image/Amazing/Product/محصول دوم.jpg";
import product3 from "../../../Image/Amazing/Product/محصول سوم.jpg" ;
import product4 from "../../../Image/Amazing/Product/محصول چهارم.jpg" ;
import product5 from "../../../Image/Amazing/Product/محصول پنجم.jpg" ;
import product6 from "../../../Image/Amazing/Product/محصول ششم.jpg" ;
import product7 from "../../../Image/Amazing/Product/محصول هفتم.jpg" ;
import product8 from "../../../Image/Amazing/Product/محصول هشتم.jpg" ;
import product9 from "../../../Image/Amazing/Product/محصول نهم.jpg" ;
import product10 from "../../../Image/Amazing/Product/محصول دهم.jpg" ;
import product11 from "../../../Image/Amazing/Product/محصول یازدهم.jpg" ;
import product12 from "../../../Image/Amazing/Product/محصول دوازدهم.jpg" ;
import Item from "./item/item";

const Amazing = () => {

    const [hover , setHover] = useState(false) ;
    const [TopAmazing , setTopAmazing] = useState([]) ;

    useEffect(()=>{
        const Amazing = [
            {id:1 , title:"محصول اول" , img:product1 , price:"3000000" , percent:"14%"},
            {id:2 , title:"محصول دوم" , img:product2 , price:"498000" , percent:"8%"},
            {id:3 , title:"محصول سوم" , img:product3 , price:"2598000" , percent:"15%"},
            {id:4 , title:"محصول چهارم" , img:product4 , price:"6025300" , percent:"25%"},
            {id:5 , title:"محصول پنجم" , img:product5 , price:"96510" , percent:"29%"},
            {id:6 , title:"محصول ششم" , img:product6 , price:"458200" , percent:"30%"},
            {id:7 , title:"محصول هفتم" , img:product7 , price:"5145836" , percent:"13%"},
            {id:8 , title:"محصول هشتم" , img:product8 , price:"217000" , percent:"5%"},
            {id:9 , title:"محصول نهم" , img:product9 , price:"365000" , percent:"12%"},
            {id:10 , title:"محصول دهم" , img:product10 , price:"938000" , percent:"27%"},
            {id:11 , title:"محصول یازدهم" , img:product11 , price:"97500" , percent:"17%"},
            {id:12 , title:"محصول دوازدهم" , img:product12 , price:"389000" , percent:"6%"},
        ]
        setTopAmazing(Amazing) ;
    },[]) ;

    if(!TopAmazing.length) return <div>Loading...</div> 
    return (
        <section 
            className="w-98% lg:w-95% bg-red-600 rounded-lg py-4 px-2 mt-6"
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
        >
            <Swiper
                slidesPerView={"auto"}
                navigation={{
                    nextEl : ".swiper-next" ,
                    prevEl : ".swiper-prev"
                }}
                spaceBetween={2}
                modules={[Navigation]}
                className=""
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
                    <SwiperSlide style={{width:"auto"}} key={item.id} className={`${Styles.Amazing} ${Styles.SwiperSlide} Amazing bg-white`} >
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
                <div className={`swiper-prev slider-btn right-0 shadow-md ${hover ? "opacity-100" : "opacity-0" }`} >
                    <IoIosArrowForward className="ml-1" />
                </div>
                <div className={`swiper-next slider-btn left-1 shadow-md ${hover ? "opacity-100" : "opacity-0" }`} >
                    <IoIosArrowBack className="mr-1" />
                </div>
            </Swiper>
        </section>
    );
};

export default Amazing;
