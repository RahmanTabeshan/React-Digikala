import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import Item from "./item/item";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";

const Auction = () => {

    const [list,setList] = useState(false) ;
    
    const Products = useSelector(state=>state.Products) ;
    const AuctionList = Products.slice(0,20)

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