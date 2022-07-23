import { useEffect, useState } from "react";
import img1 from "../../../Image/Category/کالای دیجیتال.png" ;
import img2 from "../../../Image/Category/ابزار.png" ;
import img3 from "../../../Image/Category/پوشاک.png" ;
import img4 from "../../../Image/Category/اسباب بازی.png" ;
import img5 from "../../../Image/Category/کالاهای سوپر مارکتی.png" ;
import img6 from "../../../Image/Category/سلامت.png" ;
import img7 from "../../../Image/Category/خانه.png" ;
import img8 from "../../../Image/Category/لوازم تحریر.png" ;
import img9 from "../../../Image/Category/ورزش.png" ;
import img10 from "../../../Image/Category/محصولات بومی و محلی.png" ;
import Item from "./Item/Item";
import Skeleton from "react-loading-skeleton";

const Category = () => {

    const [category , setCategory] = useState(false) ;

    const cat = [
        {id:1 , title:"کالای دیجیتال", img:img1 , path:"/main/electronic-device/"},
        {id:2 , title:"خودرو،ابزار و تجهیزات صنعتی", img:img2 , path:"/main/vehicle/"},
        {id:3 , title:"مد و پوشاک", img:img3 , path:"/main/apparel/"},
        {id:4 , title:"اسباب بازی،کودک و نوزاد", img:img4 , path:"/main/mother-and-child/"},
        {id:5 , title:"کالاهای سوپرمارکتی", img:img5 , path:"/main/food-beverage/"},
        {id:6 , title:"زیبایی و سلامت", img:img6 , path:"/main/personal-appliance/"},
        {id:7 , title:"خانه و آشپزخانه", img:img7 , path:"/main/home-and-kitchen/"},
        {id:8 , title:"کتاب،لوازم تحریر و هنر", img:img8 , path:"/main/book-and-media/"},
        {id:9 , title:"ورزش و سفر", img:img9 , path:"/main/sport-entertainment/"},
        {id:10 , title:"محصولات بومی و محلی", img:img10 , path:"/main/rural-products/"},
    ]

    useEffect(()=>{
        setTimeout(() => {
            setCategory(cat) ;
        }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <section className="flex flex-col w-rsp mt-5">
            {category && 
                <>
                    <div className="w-full text-center py-4">
                        <h3 className="text-xl">دسته‌بندی‌های دیجی‌کالا</h3>
                    </div>
                    <div className="flex flex-wrap justify-center gap-y-8 w-full ">
                        {category.map(item => (
                            <Item key={item.id} item={item} />
                        ))}
                    </div>
                </>
            }
            {!category && 
                <>
                    <div className="w-full flex justify-center items-center py-4">
                        <Skeleton height={25} width={150} />
                    </div>
                    <div className="flex flex-wrap justify-center gap-y-8 w-full ">
                        {Array(cat.length).fill(1).map((item,index)=>(
                            <div key={index} className="flex flex-col items-center w-1/3 md:w-1/4 lg:w-1/5" >
                                <Skeleton height="100%" containerClassName="w-[120px] md:w-[140px] lg:w-[170px] h-[120px] md:h-[140px] lg:h-[170px]" />
                                <Skeleton width={100} height={20} containerClassName="pt-2" />
                            </div>
                        ))}
                    </div>
                </>
            }
        </section>
    );
}
 
export default Category;