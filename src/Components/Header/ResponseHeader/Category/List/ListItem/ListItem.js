
import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom" ;
import SubItem from "./SubItem/SubItem";

const ListItem = ({item}) => {
    const { title , path , subList } = item ;

    
    const items = subList.filter(item => item.className === "category-link" ) ;
    const subItem = subList.filter(item => item.className === "sub-category-link") ;

    const [open , setOpen] = useState(false) ;
    const slide = useRef() ;

    useEffect(()=>{
        const height = slide.current.scrollHeight ;
        if(open) slide.current.style.height = height+"px" ;
        else slide.current.style.height = "0px" ;
    },[open])

    return (
        <li className="text-sm font-semibold text-[#444]">
            <div
                className={`flex items-center justify-between p-4 cursor-pointer ${open?"text-red-600":""} `}
                onClick={()=>setOpen(!open)}
            >
                <span>{title}</span>
                <IoIosArrowDown 
                    className={`text-base font-black transition-all duration-200 ${open?"rotate-180":""} `}
                />
            </div>
            <div 
                className={`bg-stone-200 overflow-hidden transition-[height] duration-300`}
                ref={slide}
            >
                <div className="w-full py-[18px] pr-8">
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