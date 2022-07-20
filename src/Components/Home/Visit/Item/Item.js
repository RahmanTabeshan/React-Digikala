import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link 
            to={`/product/${item.id}/${item.title.split(" ").join("-")}`}
            className="flex justify-center items-center p-2 bg-white w-[49.8%]"
        >
            <div className="w-[125px] h-[125px]">
                <img src={item.img} alt={item.title} className="object-contain" />
            </div>
        </Link>
    );
}
 
export default Item;