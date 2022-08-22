import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton" ;
import DesList from "./DesList/DesList";
import Namad from "./Namad/Namad";
import {IoIosArrowBack} from "react-icons/io" ;

const Info = () => {

    const [display,setDisplay] = useState(false) ;
    const [loading,setLoading] = useState(true) ;

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false) ;
        }, 2000);
    },[])

    return (
        <section className="flex flex-col md:flex-row gap-y-8 border-y border-y-neutral-200 mt-7 py-8">
            <div className="ml-5 lg:ml-10">
                { !loading &&
                    <>
                        <h1 className="text-sm font-bold mb-2">فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین</h1>
                        <p className="text-xs text-neutral-500 mb-3 leading-8">یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.
                        </p>
                        <DesList display={display} />
                        <div 
                            className="flex items-center w-max text-sm text-blue-500 cursor-pointer mt-6"
                            onClick={()=>setDisplay(!display)}
                        >
                            {display ? "بستن" : "مشاهده بیشتر"}
                            <IoIosArrowBack className="mr-1" />
                        </div>
                    </>
                }
                {loading && 
                    <>
                        <Skeleton height={20} containerClassName="flex mb-4 w-[200px] lg:w-[300px]" />
                        <Skeleton height={15} containerClassName="flex mb-1 w-[360px] lg:w-[500px]" />
                        <Skeleton height={15} containerClassName="flex mb-1 w-[340px] lg:w-[480px] " />
                        <Skeleton height={15} containerClassName="flex mb-1 w-[320px] lg:w-[360px]" />
                        <Skeleton width={100} height={20} containerClassName="flex mt-8" />
                    </>
                }
            </div>
            <Namad loading={loading} />
        </section>
    );
}
 
export default Info;