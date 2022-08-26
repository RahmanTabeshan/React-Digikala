import CartItem from "./CartItem/CartItem";

const CartList = ({Cart}) => {
    return (
        <div className="flex flex-col items-center w-95% md:w-[70%] h-max border border-blue-500 rounded-lg overflow-hidden py-2">
            {Cart.map(product=>(
                <CartItem key={product.id} item={product} />
            ))}
        </div>
    );
}
 
export default CartList;