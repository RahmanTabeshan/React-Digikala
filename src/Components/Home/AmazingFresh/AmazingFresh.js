import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import Fresh from "../../../Image/Amazing-Fresh/fresh.png" ;
import FreshTypo from "../../../Image/Amazing-Fresh/fresh.svg" ;
import Item from "./Item/Item";
import product100 from "../../../Image/Amazing-Fresh/product/محصول شماره صد.jpg" ;
import product101 from "../../../Image/Amazing-Fresh/product/محصول شماره صد و یک.jpg" ;
import product102 from "../../../Image/Amazing-Fresh/product/محصول شماره صد و دو.jpg" ;
import product103 from "../../../Image/Amazing-Fresh/product/محصول شماره صد و سه.jpg" ;
import product104 from "../../../Image/Amazing-Fresh/product/محصول شماره صد و چهار.jpg" ;
import product105 from "../../../Image/Amazing-Fresh/product/محصول شماره صد و پنج.jpg" ;
import { IoMdArrowBack } from "react-icons/io"
import Skeleton from "react-loading-skeleton";

const AmazingFresh = () => {

    const xl = useMediaQuery({minWidth:1210})
    const l = useMediaQuery({minWidth:1120})
    const lg = useMediaQuery({minWidth:1024})
    const md = useMediaQuery({minWidth:650})
    const sm = useMediaQuery({minWidth:568})
    const xs = useMediaQuery({minWidth:500})
    const xss = useMediaQuery({minWidth:451})

    const end = xl ? 6 : l ? 5 : lg ? 4 : md ? 6 : sm ? 5 : xs ? 4 :3 ;

    const [freshList,setFreshList] = useState(false) ;

    const fresh = [
        {id:100,title:"محصول شماره صد" , img:product100 , percent:"18%"},
        {id:101,title:"محصول شماره صد و یک" , img:product101 , percent:"11%"},
        {id:102,title:"محصول شماره صد و دو" , img:product102 , percent:"28%"},
        {id:103,title:"محصول شماره صد و سه" , img:product103 , percent:"15%"},
        {id:104,title:"محصول شماره صد و چهار" , img:product104 , percent:"14%"},
        {id:105,title:"محصول شماره صد و پنج" , img:product105 , percent:"9%"},
    ]
    useEffect(()=>{
        setTimeout(() => {
            setFreshList(fresh) ;
        }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <section className="relative w-rsp rounded-lg mt-6 overflow-hidden">
            {!freshList && 
                <Skeleton width="100%" height={110} containerClassName="flex rounded-lg" />
            }
            {freshList && 
                <Link 
                    to="/product/Amazing-Fresh/"
                    className="flex flex-col lg:flex-row lg:justify-between px-2 md:px-6 lg:px-8 xl:px-10 py-4 bg-gradient-to-l from-neutral-200 to-neutral-100 "
                >
                    <div className="absolute inset-0 bg-fresh bg-no-repeat z-0"></div>
                    <div className="relative flex justify-between lg:justify-around items-center z-[5]">
                        <div className="w-[66px] h-[62px]">
                            <img src={Fresh} alt="Amazing-fresh" className="w-full" />
                        </div>
                        <div className="w-[250px] h-[28px] mx-1 mobile:mx-5">
                            <img src={FreshTypo} alt="Fresh Typo" className="w-full" />
                        </div>
                        <div className={`${xss ? "block" : "hidden"} w-max px-2 py-1 rounded-xl bg-green-600 text-xs text-white`} >
                            تا %29 تخفیف
                        </div>
                    </div>
                    <div className="flex items-center justify-center z-[5]" >
                        <div className="flex">
                            {freshList.slice(0,end).map(item => (
                                <Item key={item.id} item={item} />
                            ))}
                        </div>
                        <div className="flex items-center bg-white text-green-600 rounded-3xl py-3 px-2">
                            <span className="text-xs ml-2">بیش از 90 کالا</span>
                            <IoMdArrowBack />
                        </div>
                    </div>
                </Link>
            }
        </section>
    );
}
 
export default AmazingFresh;