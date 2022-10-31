import {HiOutlineTrash} from "react-icons/hi" ;
import { useDispatch } from "react-redux";
import { money_format } from "../../../../Lists/Functions";
import { decrement, increment, remove } from "../../../../Redux/Cart/CartActions";

const CartItem = ({item}) => {
    const dispatch = useDispatch() ;
    const percentMoney = item.price - (item.price * (parseInt(item.percent)/100)) ;
    
    const decrementHandler = (item)=>{
        if(item.quantity > 1){
            dispatch(decrement(item.id)) ;
        }else{
            dispatch(remove(item.id)) ;
        }
    }

    return (
        <div className="flex items-center justify-between md:justify-around w-[97%] m:w-95% border-b border-b-blue-500 last:border-none">
            <div className="w-28 h-28">
                <img src={item.img} alt={item.title} />
            </div>
            <div className="flex flex-col items-center gap-y-4 text-xs mobile:text-sm">
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
                        className={`${item.quantity===1?"btn-cart-remove":"btn-cart"} rounded-l-md`}
                        onClick={()=>decrementHandler(item)}
                    >
                        {item.quantity>1 ? "-" : <HiOutlineTrash />}
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default CartItem;