import { Link } from "react-router-dom";

const Item = ({path , title , img}) => {
    return (
        <Link to={path} className="flex flex-col items-center">
            <div className="w-[52px] h-[52px]">
                <img src={img} alt={title} className="object-cover" />
            </div>
            <span className="text-[12px]" >{title}</span>
        </Link>
    );
}
 
export default Item;