import { Link } from "react-router-dom";

const Item = ({item}) => {

    const {id,title,img,percent} = item ;

    return (
        <Link 
            to={`product/${id}/${title.split(" ").join("_")}`}
            className="relative rounded-full bg-white p-2 ml-2"
        >
            <div className="w-[58px] h-[58px] rounded-full overflow-hidden">
                <img src={img} alt={title} className="object-contain" />
            </div>
            <span className="absolute text-center leading-5 bottom-0 -right-3 text-xs text-white bg-red-600 rounded-lg w-[34px] h-5 px-1">
                {percent}
            </span>
        </Link>
    );
}
 
export default Item;