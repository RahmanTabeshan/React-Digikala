import digitalList from "../CategoryList/digitalList";
import List from "./List/List" ;

const CatList = [
    {id:1 , title:"کالای دیجیتال" , subList:{digitalList}},
    {id:2 , title:"خودرو،ابزار و تجهیزات صنعتی", subList:{digitalList}},
    {id:3 , title:"مد و پوشاک", subList:{digitalList}},
    {id:4 , title:"اسباب بازی،کودک و نوزاد", subList:{digitalList}},
    {id:5 , title:"کالای سوپرمارکتی", subList:{digitalList}},
    {id:6 , title:"زیبایی و سلامت", subList:{digitalList}},
    {id:7 , title:"خانه و آشپزخانه", subList:{digitalList}},
    {id:8 , title:"کتاب،لوازم تحریر و هنر", subList:{digitalList}},
    {id:9 , title:"ورزش و سفر", subList:{digitalList}},
    {id:10 , title:"محصولات بومی و محلی", subList:{digitalList}},
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