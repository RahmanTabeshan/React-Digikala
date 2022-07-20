import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link 
            to={`/product/${item.id}/${item.title.split(" ").join("_")}`}
            className="flex justify-center items-center p-2 bg-white w-full"
        >
            <div className="w-[125px] h-[125px]">
                <img src={item.img} alt={item.title} className="object-contain w-full" />
            </div>
        </Link>
    );
}
 
export default Item;