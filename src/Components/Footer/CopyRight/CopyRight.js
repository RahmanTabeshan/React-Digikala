import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const CopyRight = () => {

    const [loading,setLoading] = useState(true) ;

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false) ;
        }, 2000);
    },[])

    return (
        <section className="flex justify-center py-8 px-10 text-[11px] text-neutral-500 leading-8">
            {!loading &&
                <>
                    برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.
                </>
            }
            {loading && 
                <Skeleton width={300} height={15} containerClassName="flex" />
            }
        </section>
    );
}
 
export default CopyRight;