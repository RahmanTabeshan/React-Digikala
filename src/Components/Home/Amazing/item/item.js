import {Link} from "react-router-dom" ;
import {money_format} from "../../../../Common/Functions" ;

const Item = ({item}) => {

    return (
        <Link
            to={`/product/${item.id}/${item.title.split(" ").join("_")}/`}
            className="w-[179px] flex flex-col items-center px-4 py-6"
        >
            <div className="w-[150px] h-[150px]">
                <img src={item.img} alt={item.title} className="w-full h-full" />
            </div>
            <div className="w-full flex justify-between items-center pt-4">
                <span className="percent" >
                    {item.percent}
                </span>
                <div>
                    <span>{money_format(item.price)}</span>
                </div>
            </div>
            <div className="w-full flex justify-end pl-4 pt-2 text-xs text-stone-500">
                <span className="line-through">{money_format(item.price)}</span>
            </div>
        </Link>
    );
}
 
export default Item;