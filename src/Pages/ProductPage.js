import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import {addToCart, decrement, increment, remove} from "../Components/Redux/Cart/CartActions";
import { money_format, scrollToTop } from "../Lists/Functions";

const ProductPage = () => {
    const params = useParams();
    
    const Products = useSelector((state) => state.Products);
    const Cart = useSelector((state) => state.Cart);
    const dispatch = useDispatch();
    
    const isToCart = Cart.find((item) => item.id === parseInt(params.id));
    const Product = Products.find(
        (p) => p.id === parseInt(params.id)
        );
        
    const numOfProduct = isToCart ? isToCart.quantity : 1 ;
    const percentMoney = Product.price - (Product.price * (parseInt(Product.percent)/100)) 

    const addCart = (id) => {
        const newProduct = { ...Product, quantity: 1 };
        dispatch(addToCart(newProduct));
    };

    const DecrementHandler = (id)=>{
        dispatch(decrement(id))
    }

    const IncrementHandler = (id)=>{
        dispatch(increment(id)) ;
    }

    const RemoveHandler = (id)=>{
        dispatch(remove(id)) ;
    }

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <Layout>
            <main className="flex justify-center">
                <div className="ltr w-max flex flex-col place-items-center shadow-lg shadow-gray-400 rounded-lg py-2 my-4">
                    <div className="full border-b border-b-neutral-200 px-2">
                        <img src={Product.img} alt={Product.title} />
                    </div>
                    <div className="mt-4">
                        {Product.title}
                    </div>
                    <div className="mt-4">
                        {money_format((percentMoney.toFixed()) * parseInt(numOfProduct)+"0")} IR 
                    </div>
                    {isToCart && (
                        <div className="flex justify-between w-full mt-4 px-8">
                            <div className="flex items-center">
                                <button 
                                    className={`${isToCart.quantity===1 ? "btn-disabled" : ""} btn-cart rounded-l-md`}
                                    onClick={()=>DecrementHandler(params.id)}
                                    disabled={isToCart.quantity === 1 ? true : false }
                                >
                                    -
                                </button>
                                <div className="flex items-center justify-center w-7 h-7 border-y border-y-blue-500 text-blue-500">
                                    {isToCart.quantity}
                                </div>
                                <button 
                                    className="btn-cart rounded-r-md"
                                    onClick={()=>IncrementHandler(params.id)}
                                >
                                    +
                                </button>
                            </div>
                            <button 
                                className="btn-cart-remove"
                                onClick={()=>RemoveHandler(params.id)}
                            >
                                Delete
                            </button>
                        </div>
                    )}
                    <button
                        className={` ${isToCart ? "!bg-blue-100 !text-blue-700" : ""} btn-add-cart`}
                        disabled={isToCart ? true : false}
                        onClick={()=>addCart(params.id)}>
                        {isToCart
                            ? "محصول به سبد خرید اضافه شد"
                            : "افزودن به سبد خرید"}
                    </button>
                </div>
            </main>
        </Layout>
    );
};

export default ProductPage;
