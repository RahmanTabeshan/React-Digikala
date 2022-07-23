import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io" ;
import { useEffect, useRef, useState } from "react";
import product1 from "../../../Image/digiOffer/mobile.jpg";
import product2 from "../../../Image/digiOffer/mobile cover.jpg";
import product3 from "../../../Image/digiOffer/headphone.jpg";
import product4 from "../../../Image/digiOffer/watch.jpg";
import product5 from "../../../Image/digiOffer/laptop.jpg";
import product6 from "../../../Image/digiOffer/socks.jpg";
import product7 from "../../../Image/digiOffer/cable.jpg";
import product8 from "../../../Image/digiOffer/charger.jpg";
import product9 from "../../../Image/digiOffer/console.jpg";
import product10 from "../../../Image/digiOffer/smartbandjpg.jpg";
import product11 from "../../../Image/digiOffer/power bank.jpg";
import product12 from "../../../Image/digiOffer/tablet.jpg";
import product13 from "../../../Image/digiOffer/cooler.jpg";
import product14 from "../../../Image/digiOffer/cooler wat.jpg";
import { sortArray } from "../../../Common/Functions";
import Item from "./Item/Item";
import Skeleton from "react-loading-skeleton";

const DigiOffer = () => {

    const [hover , setHover] = useState(false) ;
    const [list , setList] = useState(false) ;

    const pr = useRef() ;
    const nx = useRef() ;

    useEffect(()=>{
        const newList = [
            {id:1 , title:"گوشی موبایل" , img:product1 , path:"/search/category-mobile-phone/"},
            {id:2 , title:"کیف و کاور گوشی" , img:product2 , path:"/search/category-cell-phone-pouch-cover/"},
            {id:3 , title:"هدفون،هدست و ..." , img:product3 , path:"/search/category-headphone/"},
            {id:4 , title:"ساعت هوشمند" , img:product4 , path:"/search/category-smart-watch/"},
            {id:5 , title:"لپ تاپ و الترابوک" , img:product5 , path:"/search/category-notebook-netbook-ultrabook/"},
            {id:6 , title:"جوراب و ساق مردانه" , img:product6 , path:"/search/category-men-socks-tight/"},
            {id:7 , title:"کابل شارژ و مبدل" , img:product7 , path:"/search/category-cell-phone-data-cable/"},
            {id:8 , title:"شارژر تبلت و موبایل" , img:product8 , path:"/search/category-car-charger/"},
            {id:9 , title:"کنسول خانگی" , img:product9 , path:"/search/category-stations-gaming-consols/"},
            {id:10 , title:"مچ بند هوشمند" , img:product10 , path:"/search/category-smart-band/"},
            {id:11 , title:"پاوربانک" , img:product11 , path:"/search/category-power-bank/"},
            {id:12 , title:"تبلت" , img:product12 , path:"/search/category-tablet/"},
            {id:13 , title:"کولرگازی" , img:product13 , path:"/search/category-air-conditioner/"},
            {id:14 , title:"کولرآبی" , img:product14 , path:"/search/category-iranian-cooler/"},
            {id:15 , title:"محصول تست" , img:product14 , path:"/search/category-iranian-cooler/"},
            {id:16 , title:"محصول تست" , img:product14 , path:"/search/category-iranian-cooler/"},
        ]
        setTimeout(() => {
            setList(sortArray(newList)) ;
        }, 1000);
    },[])

    useEffect(()=>{
        const prev = pr.current ;
        const next = nx.current ;
        if(hover){
            if(prev || next){
                prev.classList.remove("-right-10") ;
                prev.classList.add("right-1") ;
                next.classList.remove("-left-10") ;
                next.classList.add("left-1") ;
            }
        }else{
            if(prev || next){
                prev.classList.remove("right-1") ;
                prev.classList.add("-right-10") ;
                next.classList.remove("left-1") ;
                next.classList.add("-left-10") ;
            }
        }
    },[hover])
    // for prevent error in swiper-button-disabled ;

    return (
        <section className="w-rsp mt-5">
            {!list && 
                <>
                    <div className="w-full flex justify-center items-center py-4">
                        <Skeleton width={150} height={25} />
                    </div>
                    <div className="w-full">
                        <Skeleton height={300} />
                    </div>
                </>
            }
            {list && 
                <>
                    <div className="w-full text-center py-4">
                        <h3 className="text-xl">پیشنهاد دیجی‌کالا</h3>
                    </div>
                    <div
                        className="border border-stone-300 rounded-xl"
                        onMouseEnter={()=>setHover(true)}
                        onMouseLeave={()=>setHover(false)}
                    >
                        <Swiper
                            slidesPerView={"auto"}
                            navigation={{
                                nextEl : ".swiper-next" ,
                                prevEl : ".swiper-prev"
                            }}
                            spaceBetween={0}
                            modules={[Navigation]}
                        >
                            {list.map((item,index) => (
                                <SwiperSlide key={index} className="swiper-offer min-w-[180px]" style={{width:"auto"}} >
                                    <Item items={item} />
                                </SwiperSlide>
                            ))}
                            <div ref={pr} className="swiper-prev slider-btn shadow-md -right-10" >
                                <IoIosArrowForward className="ml-1" />
                            </div>
                            <div ref={nx} className="swiper-next slider-btn shadow-md -left-10" >
                                <IoIosArrowBack className="mr-1" />
                            </div>
                        </Swiper>
                    </div>
                </>
            }
        </section>
    );
}
 
export default DigiOffer;