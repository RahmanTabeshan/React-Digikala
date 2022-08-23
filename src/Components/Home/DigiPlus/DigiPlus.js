import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import digiplusLogo from "../../../Image/bgDigiplus/digiplus-logo.svg" ;
import {useSelector} from "react-redux" ;
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Skeleton from "react-loading-skeleton";

const DigiPlus = () => {

    const [plus,setPlus] = useState(false) ;

    const Products = useSelector(state=>state.Products) ;


    useEffect(()=>{
        setTimeout(() => {
            setPlus(Products.slice(0,12)) ;
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
                                    to={`/product/${item.id}/${item.title.split(" ").join("_")}/`}
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