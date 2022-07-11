import { useEffect, useRef, useState } from "react";
import {GiStarFormation} from "react-icons/gi" ; 
import { Swiper , SwiperSlide } from "swiper/react";
import Item from "./Item/Item";
import { Navigation } from "swiper";
import styles from  "./Brand.module.css" ;
import img1 from "../../../Image/Brand/pril.png";
import img2 from "../../../Image/Brand/persil.png";
import img3 from "../../../Image/Brand/KingStar.png";
import img4 from "../../../Image/Brand/SiliconPower.png";
import img5 from "../../../Image/Brand/huawei.png";
import img6 from "../../../Image/Brand/pakshoma.png";
import img7 from "../../../Image/Brand/CheshmeNoor.png";
import img8 from "../../../Image/Brand/Samsung.jpg";
import img9 from "../../../Image/Brand/Xiaomi.png";
import img10 from "../../../Image/Brand/Kalleh.png";
import img11 from "../../../Image/Brand/Bioaqua.png";
import img12 from "../../../Image/Brand/My.png";
import img13 from "../../../Image/Brand/fresh by digikala.png";
import img14 from "../../../Image/Brand/ladan.png";
import img15 from "../../../Image/Brand/Tsco.png";
import img16 from "../../../Image/Brand/Bijan.png";
import img17 from "../../../Image/Brand/mahya.png";
import img18 from "../../../Image/Brand/schon.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



const Brand = () => {

    const [hover , setHover] = useState(false) ;
    const [brand,setBrand] = useState(false) ;

    const pr = useRef() ;
    const nx = useRef() ;

    useEffect(()=>{
        const list = [
            {id:1,title:"Pril",img:img1},
            {id:2,title:"Persil",img:img2},
            {id:3,title:"King Star",img:img3},
            {id:4,title:"Silicon Power",img:img4},
            {id:5,title:"Huawei",img:img5},
            {id:6,title:"Pakshoma",img:img6},
            {id:7,title:"Cheshme Noor",img:img7},
            {id:8,title:"Samsung",img:img8},
            {id:9,title:"Xiaomi",img:img9},
            {id:10,title:"Kalleh",img:img10},
            {id:11,title:"Biaqua",img:img11},
            {id:12,title:"My",img:img12},
            {id:13,title:"Fresh by Digikala",img:img13},
            {id:14,title:"Ladan",img:img14},
            {id:15,title:"Tsco",img:img15},
            {id:16,title:"Bijan",img:img16},
            {id:17,title:"Mahya Protein",img:img17},
            {id:18,title:"Schon",img:img18},
        ] ;
        setBrand(list) ;
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

    if(!brand) return(<div> Loading ... </div>)
    return (
        <section 
            className="w-rsp flex flex-col border border-stone-300 rounded-xl mt-5 pb-4"
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
        >
            <div className="w-full flex justify-center items-center  py-4">
                <GiStarFormation className="text-yellow-400 ml-3 text-2xl" />
                <h3 className="text-xl">محبوب‌ترین برندها</h3>
            </div>
            <div className="w-full">
                <Swiper
                    slidesPerView={"auto"}
                    navigation={{
                        nextEl : ".swiper-next" ,
                        prevEl : ".swiper-prev"
                    }}
                    spaceBetween={0}
                    modules={[Navigation]}
                    className="last:border-b-0"
                >
                    {brand.map(item=>(
                        <SwiperSlide key={item.id} style={{width:"auto"}} className={`min-w-[150px] ${styles.swiperSlide}`} >
                            <Item item={item} />
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
        </section>
    );
}
 
export default Brand;