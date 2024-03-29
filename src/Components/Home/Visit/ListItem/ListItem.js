import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
import { useSelector } from "react-redux";

const ListItem = ({item}) => {

    const Products = useSelector(state=>state.Products) ;
    const list = Products.filter(p=>p.type === item.title) ;

    return (
        <div className="flex flex-col bg-white p-4 w-full">
            <div className="flex flex-col items-start">
                <h3 className="text-444 text-base font-bold">{item.title}</h3>
                <p className="text-gray-500 text-xs pt-2">براساس بازدیدهای شما</p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-neutral-300 mt-2">
                {list.map(product => (
                    <Item key={product.id} item={product} />
                ))}
            </div>
            <div className="flex justify-center mt-3">
                    <Link 
                        to="/"
                        className="flex items-center w-max text-sm text-blue-500"
                    >
                        <p>مشاهده همه</p>
                        <span className="pr-1">
                            <IoIosArrowBack />
                        </span>
                    </Link>
            </div>
        </div>
    );
}
 
export default ListItem;