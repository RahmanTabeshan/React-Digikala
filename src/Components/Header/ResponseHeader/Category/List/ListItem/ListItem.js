
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const ListItem = ({item}) => {
    const {title} = item ;
    const [open , setOpen] = useState(false) ;
    return (
        <li className="relative text-sm font-semibold text-[#444]">
            <div className={`flex items-center justify-between p-4 cursor-pointer ${open?"text-red-600":""} `} onClick={()=>setOpen(!open)}>
                <span>{title}</span>
                <IoIosArrowDown className={`text-base font-black transition-all duration-200 ${open?"rotate-180":""} `} />
            </div>
            <div className={`bg-stone-200 transition-[height] duration-500 ${open?"h-9" : "h-0"}`}>
            </div>
        </li>
    );
}
 
export default ListItem;