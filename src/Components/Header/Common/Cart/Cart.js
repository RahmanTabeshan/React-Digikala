import { RiShoppingCartLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = ({ className = "" }) => {
    const Cart = useSelector((state) => state.Cart);

    const CartSum = Cart.reduce((sum,item)=>{
        return sum+parseInt(item.quantity) ;
    },0)

    return (
        <div className={className}>
            <Link to="/checkout/cart/" className="relative">
                <RiShoppingCartLine className="cart-icon transition-all duration-200 hover:text-stone-500" />
                {Cart.length !== 0 && (
                    <span className="absolute flex justify-center items-center h-6 w-6 rounded-full -right-1 -top-3 bg-red-500 text-xs text-white aspect-square">
                        {CartSum}
                    </span>
                )}
            </Link>
        </div>
    );
};

export default Cart;
