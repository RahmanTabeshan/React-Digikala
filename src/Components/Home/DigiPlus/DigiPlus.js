import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import digiplusLogo from "../../../Image/bgDigiplus/digiplus-logo.svg" ;
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
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Skeleton from "react-loading-skeleton";

const DigiPlus = () => {

    const [plus,setPlus] = useState(false) ;

    const list = [
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

    useEffect(()=>{
        setTimeout(() => {
            setPlus(list) ;
        }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <section className="w-rsp flex flex-col gap-2 lg:flex-row bg-purple-700 mt-5 p-4 rounded-lg">
            {plus && 
                <>
                    <div className="w-full lg:w-[33%] h-60 lg:h-auto bg-bgPlus bg-no-repeat bg-contain bg-center lg:bg-bottom lg:pt-5">
                        <div className="flex flex-col">
                            <div className="w-32 h-8">
                                <img src={digiplusLogo} alt="digiplus logo" className="w-full object-contain" />
                            </div>
                            <div className="text-white pt-3 text-sm">
                                <p>خدمات ویژه برای اعضای دیجی پلاس</p>
                            </div>
                            <Link
                                to="/digiplus/"
                                className="flex items-center w-max rounded-md border border-white text-sm text-white py-1 px-2 mt-3"
                            >
                                <p>عضویت</p>
                                <BsArrowLeft className="mr-2" />
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-[67%] bg-white border border-stone-300 rounded-lg p-2">
                        <div className="flex justify-between w-full py-2" >
                            <div>
                                ارسال فوری
                            </div>
                            <Link to="/" className="flex items-center w-max text-sm text-blue-500">
                                <p>مشاهده همه</p>
                                <span className="pr-1">
                                    <IoIosArrowBack />
                                </span>
                            </Link>
                        </div>
                        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 ">
                            {plus.map(item=>(
                                <Link
                                    key={item.id}
                                    to={`/profuct/${item.id}/${item.title.split(" ").join("_")}/`}
                                    className="flex justify-center"

                                >
                                    <div className="w-32 h-32">
                                        <img src={item.img} alt={item.title} className="w-full object-contain" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </>
            }
            {!plus && 
                <>
                    <div className="h-60 lg:h-auto w-full lg:w-[33%]">
                        <Skeleton height="100%" containerClassName="flex w-full h-full" />
                    </div>
                    <div className="w-full lg:w-[67%] bg-white p-2 rounded-lg">
                        <div className="w-full flex justify-between py-2" >
                            <Skeleton width={100} height={20} />
                            <Skeleton width={100} height={20} />
                        </div>
                        <div className="w-full grid justify-center gap-y-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
                            {Array(12).fill(1).map((item,index)=>(
                                <div key={index} className="flex justify-center">
                                    <Skeleton height="100%" containerClassName="flex w-28 h-28" />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            }
        </section>
    );
}
 
export default DigiPlus;