import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
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
import Item from "../Amazing/item/item";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Auction = () => {

    const [list,setList] = useState(false) ;
    
    const AuctionList = [
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
        {id:13 , title:"محصول نهم" , img:product9 , price:"365000" , percent:"12%"},
        {id:14 , title:"محصول چهارم" , img:product4 , price:"6025300" , percent:"25%"},
        {id:15 , title:"محصول ششم" , img:product6 , price:"458200" , percent:"30%"},
        {id:16 , title:"محصول اول" , img:product1 , price:"3000000" , percent:"14%"},
        {id:17 , title:"محصول یازدهم" , img:product11 , price:"97500" , percent:"17%"},
        {id:18 , title:"محصول پنجم" , img:product5 , price:"96510" , percent:"29%"},
        {id:19 , title:"محصول نهم" , img:product9 , price:"365000" , percent:"12%"},
        {id:20 , title:"محصول دوم" , img:product2 , price:"498000" , percent:"8%"},
    ]

    useEffect(()=>{
        setTimeout(() => {
            setList(AuctionList) ;
        }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) ;

    return (
        <section className="flex flex-col w-rsp border border-stone-300 rounded-lg mt-5 overflow-hidden">
            <div className="relative w-full flex justify-center items-center py-4">
                {list ? (
                    <>
                        <i className="fa-regular fa-badge-percent ml-3 text-2xl text-red-700"></i>
                        <h3 className="text-base md:text-lg">منتخب محصولات تخفیف و حراج</h3>
                    </>
                ) : (
                    <>
                        <Skeleton circle={true} width={30} height={30} containerClassName="ml-3" />
                        <Skeleton width={250} height={25} />
                    </>
                )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-px w-full bg-neutral-200">
                {list ? (
                    list.map(item=>(
                        <Item key={item.id} item={item} />
                    ))
                ) : (
                    Array(20).fill(1).map((item,index) => (
                        <Skeleton key={index} height="100%" containerClassName="flex h-[270px]" />
                    ))
                ) }
            </div>
            <div className="w-full flex justify-center py-2">
                {list && 
                    <Link to="/" className="flex items-center w-max text-sm text-blue-500">
                        <span>مشاهده بیشتر</span>
                        <IoIosArrowBack className="mr-1" />
                    </Link>
                }
                {!list && <Skeleton width={120} height={15} /> }
            </div>
        </section>
    );
}
 
export default Auction;