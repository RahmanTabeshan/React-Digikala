import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link to="/mag/" className="flex flex-col border border-stone-300 rounded-lg overflow-hidden">
            <div>
                <img src={item.img} alt={item.title} className="w-full object-cover aspect-[610/380]" />
            </div>
            <div className="text-444 text-sm mobile:text-xs md:!text-sm lg:!text-xs font-bold my-6 mobile:my-4 px-2">
                {item.title}
            </div>
        </Link>
    );
}
 
export default Item;