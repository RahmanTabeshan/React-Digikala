import digitalList from "../CategoryList/digitalList";
import List from "./List/List" ;

const CatList = [
    {id:1 , title:"کالای دیجیتال", path:"/" , subList:digitalList},
    {id:2 , title:"خودرو،ابزار و تجهیزات صنعتی", path:"/" , subList:digitalList},
    {id:3 , title:"مد و پوشاک", path:"/", subList:digitalList},
    {id:4 , title:"اسباب بازی،کودک و نوزاد",path:"/", subList:digitalList},
    {id:5 , title:"کالای سوپرمارکتی", path:"/" , subList:digitalList},
    {id:6 , title:"زیبایی و سلامت", path:"/" , subList:digitalList},
    {id:7 , title:"خانه و آشپزخانه", path:"/" , subList:digitalList},
    {id:8 , title:"کتاب،لوازم تحریر و هنر", path:"/" , subList:digitalList},
    {id:9 , title:"ورزش و سفر", path:"/" , subList:digitalList},
    {id:10 , title:"محصولات بومی و محلی", path:"/" , subList:digitalList},
]

const Category = () => {
    return (
        <>
            <div className="w-90% text-sm font-bold py-3">
                دسته بندی کالاها
            </div>
            <div className="w-full">
                <ul>
                    <List List={CatList} />
                </ul>
            </div>
        </>
    );
}
 
export default Category;