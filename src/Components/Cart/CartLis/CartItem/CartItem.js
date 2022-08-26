import { useDispatch } from "react-redux";
import { money_format } from "../../../../Lists/Functions";
import { decrement, increment, remove } from "../../../Redux/Cart/CartActions";

const CartItem = ({item}) => {
    const dispatch = useDispatch() ;
    const percentMoney = item.price - (item.price * (parseInt(item.percent)/100)) 

    return (
        <div className="flex items-center justify-between md:justify-around w-[97%] m:w-95% border-b border-b-blue-500 last:border-none">
            <div className="w-28 h-28">
                <img src={item.img} alt={item.title} />
            </div>
            <div className="flex flex-col gap-y-4 text-sm">
                <div>{item.title}</div>
                <div className="ltr">{money_format((percentMoney.toFixed())*item.quantity + "0")} IR</div>
            </div>
            <div>
                <div className="flex items-center">
                    <button 
                        className="btn-cart rounded-r-md"
                        onClick={()=>dispatch(increment(item.id))}
                    >
                        +
                    </button>
                    <div className="flex items-center justify-center w-7 h-7 border-y border-y-blue-500 text-blue-500">
                        {item.quantity}
                    </div>
                    <button 
                        className={`${item.quantity===1 ? "btn-disabled" : ""} btn-cart rounded-l-md`}
                        onClick={()=>dispatch(decrement(item.id))}
                        disabled={item.quantity === 1 ? true : false }
                    >
                        -
                    </button>
                </div>
            </div>
            <button 
                className="btn-cart-remove text-sm"
                onClick={()=>dispatch(remove(item.id))}
            >
                Delete
            </button>
        </div>
    );
}
 
export default CartItem;