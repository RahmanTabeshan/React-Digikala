import { useEffect, useState } from "react";
import Social from "./Social/Social";
import SupportList from "./SupportList/SupportList";

const Support = () => {
    
    const supportList1 = [
        {id:1 , title:"اتاق خبر دیجی‌کالا" , path:"/newsroom/"},
        {id:2 , title:"فروش در دیجی‌کالا" , path:"/"},
        {id:3 , title:"فرصت های شغلی" , path:"/"},
        {id:4 , title:"گزارش تخلف دیجی‌کالا" , path:"/"},
        {id:5 , title:"تماس با دیجی‌کالا" , path:"/"},
        {id:6 , title:"درباره دیجی‌کالا" , path:"/"},
    ]
    const supportList2 = [
        {id:1 , title:"پاسخ پرسش های متداول" , path:"/"},
        {id:2 , title:"رویه های بازگرداندن کالا" , path:"/"},
        {id:3 , title:"شرایط استفاده" , path:"/"},
        {id:4 , title:"حریم خصوصی" , path:"/"},
        {id:5 , title:"گزارش باگ" , path:"/"},
    ]
    const supportList3 = [
        {id:1 , title:"نحوه ثبت سفارش" , path:"/"},
        {id:2 , title:"رویه ارسال سفارش" , path:"/"},
        {id:3 , title:"شیوه های پرداخت" , path:"/"},
    ]

    const [support1,setSupport1] = useState(false) ;
    const [support2,setSupport2] = useState(false) ;
    const [support3,setSupport3] = useState(false) ;

    useEffect(()=>{
        setTimeout(() => {
            setSupport1(supportList1) ;
            setSupport2(supportList2) ;
            setSupport3(supportList3) ;
        }, 2000);  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            <SupportList title="با دیجی‌کالا" items={support1} NumSkeleton="6" className="grow" />
            <SupportList title="خدمات مشتریان" items={support2} NumSkeleton="5" className="grow" />
            <SupportList title="راهنمای خرید از دیجی‌کالا" items={support3} NumSkeleton="3" className="md:grow grow-0" />
            <Social />
        </>
    );
}
 
export default Support;