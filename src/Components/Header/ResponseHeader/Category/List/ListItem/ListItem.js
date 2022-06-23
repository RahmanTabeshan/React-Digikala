
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom" ;
import SubItem from "./SubItem/SubItem";

const ListItem = ({item}) => {
    const { title , path , subList } = item ;

    const items = subList.filter(item => item.className === "category-link" ) ;
    const subItem = subList.filter(item => item.className === "sub-category-link") ;

    const [open , setOpen] = useState(false) ;

    return (
        <li className="text-sm font-semibold text-[#444]">
            <div
                className={`flex items-center justify-between p-4 cursor-pointer transition-all duration-300 ${open?"text-red-600":""} `}
                onClick={()=>setOpen(!open)}
            >
                <span>{title}</span>
                <IoIosArrowDown 
                    className={`text-base font-black transition-all duration-300 ${open?"rotate-180":""} `}
                />
            </div>
            <div 
                className={`bg-stone-200 overflow-hidden transition-all duration-300 ${open?"max-h-[1999px]" : "max-h-0"}`}
            >
                <div className="w-full py-[18px] pr-8 pb-2">
                    <Link to={path} className="flex items-center w-max text-gray-500 hover:text-red-600">
                        <span className="text-xs">همه محصولات این دسته</span>
                        <IoIosArrowBack />
                    </Link>
                </div>
                <div className="w-full">
                    <ul>
                        {items.map(item =>(
                            <SubItem key={item.id} item={item} subItem={subItem} />
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    );
}
 
export default ListItem;