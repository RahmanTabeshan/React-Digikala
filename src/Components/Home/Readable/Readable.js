import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import img1 from "../../../Image/Readable/img1.jpg"
import img2 from "../../../Image/Readable/img2.jpg"
import img3 from "../../../Image/Readable/img3.jpg"
import img4 from "../../../Image/Readable/img4.jpg"
import Item from "./Item/Item";

const Readable = () => {

    const [list,setList] = useState(false) ;

    const mag = [
        {id:1 , title:"بررسی اسباب بازی ساختنی مدل پارک،جذاب و رنگارنگ" , img:img1},
        {id:2 , title:"قیمت احتمالی گلکسی بادز2 پرو مشخص شد" , img:img2},
        {id:3 , title:"اپل یکی از مدیران با سابقه لامبورگینی رابرای پروژه Apple car استخدام کرد" , img:img3},
        {id:4 , title:"جیمیل با ظاهر جدید و امکانات جذاب به روزرسانی شد" , img:img4}
    ]

    useEffect(()=>{
        setTimeout(() => {
            setList(mag)
        }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <section className="flex flex-col w-rsp mt-5">
            <div className="flex justify-between items-center">
                {list && 
                    <>
                        <h3 className="text-444 text-lg">خواندنی‌ها</h3>
                        <Link to="/mag/" className="text-blue-500 text-sm font-bold">
                            مطالب بیشتر در دیجیکالا مگ
                        </Link>
                    </>
                }
                {!list &&
                    <>
                        <Skeleton width={130} height={20} />
                        <Skeleton width={200} height={15} />
                    </>
                }
            </div>
            <div className="grid gap-3 grid-cols-1 mobile:grid-cols-2 lg:!grid-cols-4 mt-2">
                {list && 
                    list.map(item => (
                        <Item key={item.id} item={item} />
                    ))
                }
                {!list && 
                    Array(4).fill(1).map((item,index)=>(
                        <div key={index} className="flex flex-col">
                            <Skeleton height="100%" containerClassName="aspect-[610/380]" />
                            <div className="my-6 mobile:my-4 px-2">
                                <Skeleton height={15}  />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
 
export default Readable;