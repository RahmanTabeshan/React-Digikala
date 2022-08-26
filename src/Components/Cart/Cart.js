import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartList from "./CartLis/CartList";
import CartResult from "./CartResult/CartResult";

const Cart = () => {
    const Cart = useSelector(state => state.Cart) ;

    return (
        <section className={`w-full flex ${Cart.length===0?"":"flex-col md:flex-row"} gap-3 items-center md:items-start md:justify-between py-8 px-4`}>
            {Cart.length !==0  &&
                <>
                    <CartList Cart={Cart} />
                    <CartResult  Cart={Cart} />
                </>
            }
            {Cart.length === 0 &&
                <div className="flex flex-col w-[40rem] items-center border border-red-500 bg-red-100 mx-5 sm:mx-auto py-10 my-20 rounded-lg">
                    <div className="text-red-500">
                        محصولی در سبد خرید شما وجود ندارد!!!
                    </div>
                    <Link to="/" className="mt-10 text-green-600 transition-all duration-200 hover:text-green-700">
                        افزودن محصول به سبد خرید
                    </Link>
                </div>
            }
        </section>
    );
}
 
export default Cart;