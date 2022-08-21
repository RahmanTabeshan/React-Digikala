import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const ContactUs = () => {

    const [loading,setLoading] = useState(true) ;

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false) ;
        }, 2000);
    },[])

    return (
        <section className="flex flex-wrap gap-y-2 text-xs bold mt-2">
            {!loading && <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>}
            {loading && <Skeleton width={155} height={10} />}
            <span className="border-l border-l-444 mx-4"></span>
            {!loading && <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>}
            {loading && <Skeleton width={230} height={10} />}
        </section>
    );
}
 
export default ContactUs;