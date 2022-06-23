import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const SubItem = ({item,subItem}) => {

    const navItems = subItem.filter( i => i.dataParentId === item.dataId ) ;

    return (
        <>
            {navItems.length ? (
                List(item , navItems) 
            ) : (
                <li>
                    <Link className="py-4 pr-8 transition-all duration-200 hover:text-red-600" to={item.path}>
                        {item.title}
                    </Link>
                </li>
            ) }
        </>
    );
}
 
export default SubItem;

const List = (item , navItems)=>{

    const [open,setOpen] = useState(false) ;
    const slide = useRef() ;
    useEffect(()=>{
        const height = slide.current.scrollHeight ;
        if(open) slide.current.style.height = height+"px" ;
        else slide.current.style.height = "0px" ;
    },[open])

    return(
        <li className="p-4 pr-8 cursor-pointer">
            <div className={`flex justify-between transition-all duration-300 ${open?"text-red-600" : ""}`} onClick={()=>setOpen(!open)}>
                <span>{item.title}</span>
                <IoIosArrowDown className={`transition-all duration-300 ${open?"rotate-180":""}`} />
            </div>
            <div className={`overflow-hidden transition-[height] duration-300 `} ref={slide}>
                <div className="w-full py-4 pr-8 pb-2">
                    <Link to={item.path} className="flex items-center w-max text-gray-500 hover:text-red-600">
                        <span className="text-xs">همه محصولات این دسته</span>
                        <IoIosArrowBack />
                    </Link>
                </div>
                <div>
                    {navItems.map(item => (
                        <Link key={item.id} to={item.path} className="p-2 pr-8 text-[13px] hover:text-red-600">
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
        </li>
    );
}