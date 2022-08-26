import {Link} from "react-router-dom" ;
import {money_format} from "../../../../Lists/Functions" ;

const Item = ({item}) => {

    const percentMoney = item.price - (item.price * (parseInt(item.percent)/100))  ;

    return (
        <Link
            to={`/product/${item.id}/${item.title.split(" ").join("_")}/`}
            className="min-w-[179px] flex flex-col items-center px-4 py-6 bg-white"
        >
            <div className="w-[150px] h-[150px]">
                <img src={item.img} alt={item.title} className="w-full h-full" />
            </div>
            <div className="w-full flex justify-between items-center pt-4">
                <span className="percent" >
                    {item.percent}
                </span>
                <div className="relative">
                    <span>{money_format(percentMoney.toFixed())}</span>
                    <span className="relative -left-1 text-[11px]">توما</span>
                    <div className="absolute text-[11px] -top-[6px] -left-1">ن</div>
                </div>
            </div>
            <div className="w-full flex justify-end pl-4 pt-2 text-xs text-stone-500">
                <span className="line-through">{money_format(item.price)}</span>
            </div>
        </Link>
    );
}
 
export default Item;