import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const SubItem = ({item,subItem}) => {

    const navItems = subItem.filter( i => i.dataParentId === item.dataId ) ;

    return (
        <>
            {navItems.length ? (
                List(item , navItems) 
            ) : (
                <li>
                    <Link className="py-4 pr-8" to={item.path}>
                        {item.title}
                    </Link>
                </li>
            ) }
        </>
    );
}
 
export default SubItem;

const List = (item , navItems)=>{
    return(
        <li className="p-4 pr-8 cursor-pointer">
            <div className="flex justify-between">
                <span>{item.title}</span>
                <IoIosArrowDown />
            </div>
        </li>
    );
}