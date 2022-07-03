import { Link } from "react-router-dom";

const Item = ({path , title , img}) => {
    return (
        <Link to={path} className="flex flex-col w-1/4 lg:w-max items-center">
            <div className="w-[52px] h-[52px]">
                <img src={img} alt={title} className="object-cover w-full h-full" />
            </div>
            <span className="text-[12px] pt-2" >{title}</span>
        </Link>
    );
}
 
export default Item;