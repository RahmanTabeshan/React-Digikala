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

const Category = () => {

    const [category , setCategory] = useState([]) ;

    useEffect(()=>{

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

        setCategory(cat) ;

    },[])

    return (
        <section className="flex flex-col w-98% lg:w-95% mt-5">
            <div className="w-full text-center py-4">
                <h3 className="text-xl">دسته‌بندی‌های دیجی‌کالا</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-y-8 w-full ">
                {category.length ? (
                    category.map(item => (
                        <Item key={item.id} item={item} />
                    ))
                ) : (
                    <div> Loading ... </div>
                )}
            </div>
        </section>
    );
}
 
export default Category;