import { Link } from "react-router-dom";

const Item = ({item}) => {

    const { title , img } = item ;

    return (
        <Link
            to={`/brand-landing/${title.split(" ").join("-")}/`}
            className="px-4 py-1 border-l border-l-stone-200"
        >
            <div className="flex items-center w-[110px] h-[110px] ">
                <img src={img} alt={title} className="object-contain" />
            </div>
        </Link>
    );
}
 
export default Item;