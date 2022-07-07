import { Link } from "react-router-dom";

const Item = ({item}) => {

    const {path,title,img} = item ;

    return (
        <Link
            className="flex flex-col items-center w-1/3 md:w-1/4 lg:w-1/5" 
            to={path} >
            <div className="w-[120px] md:w-[140px] lg:w-[170px] h-[120px] md:h-[140px] lg:h-[170px]">
                <img src={img} alt={title} />
            </div>
            <div className="text-xs font-bold mt-2 py-1">
                {title}
            </div>
        </Link>
    );
}
 
export default Item;