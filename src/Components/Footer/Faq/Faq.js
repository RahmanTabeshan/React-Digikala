import { useEffect, useState } from "react";
import FaqItem from "./Faq-Item/FaqItem";

import img1 from "../../../Image/Faq/express-delivery.svg"
import img2 from "../../../Image/Faq/cash-on-delivery.svg"
import img3 from "../../../Image/Faq/support.svg"
import img4 from "../../../Image/Faq/days-return.svg"
import img5 from "../../../Image/Faq/original-products.svg"
import Skeleton from "react-loading-skeleton";

const Faq = () => {

    const [faqList , setFaqList] = useState(null) ;

    const FaqList = [
        {id:1 , title:"امکان تحویل اکسپرس" , img:img1},
        {id:2 , title:"امکان پرداخت در محل" , img:img2},
        {id:3 , title:"7روز هفته،24 ساعته" , img:img3},
        {id:4 , title:"هفت روز ضمانت بازگشت کالا" , img:img4},
        {id:5 , title:"ضمانت اصل بودن کالا" , img:img5},
    ]

    useEffect(()=>{
        setTimeout(() => {
            setFaqList(FaqList)
        }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            { faqList && faqList.map(faq=>(
                <FaqItem key={faq.id} item={faq} />
            ))}
            {!faqList && Array(5).fill(1).map((item,index)=>(
                <div key={index} className="flex flex-col justify-center items-center w-[150px] grow" >
                    <Skeleton width={56} height={56} />
                    <Skeleton width={130} height={15} containerClassName="mt-2" />
                </div>
            ))}
        </>
    );
}
 
export default Faq;