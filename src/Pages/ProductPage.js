import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import {addToCart, decrement, increment, remove} from "../Components/Redux/Cart/CartActions";
import { scrollToTop } from "../Lists/Functions";

const ProductPage = () => {
    const params = useParams();

    const Products = useSelector((state) => state.Products);
    const Cart = useSelector((state) => state.Cart);
    const dispatch = useDispatch();

    const isToCart = Cart.find((item) => item.id === parseInt(params.id));

    const clickHandler = (id) => {
        const newProducts = [...Products];
        const ProductIndex = Products.findIndex(
            (p) => p.id === parseInt(id)
        );
        const Product = { ...newProducts[ProductIndex], quantity: 1 };

        dispatch(addToCart(Product));
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
            <main>
                <h1 className="text-2xl">This is Product Page </h1>
                <div className="ltr">
                    <div>Product id is : {params.id}</div>
                    <div>
                        Product title is : {params.title.split("_").join(" ")}
                    </div>
                    {isToCart && (
                        <div className="flex justify-between mt-5">
                            <div className="flex items-center">
                                <button 
                                    className={`${isToCart.quantity===1 ? "btn-disabled" : ""} btn-cart rounded-l-md`}
                                    onClick={()=>DecrementHandler(params.id)}
                                    disabled={isToCart.quantity === 1 ? true : false }
                                >
                                    -
                                </button>
                                <div className="flex items-center justify-center w-7 h-7 border-y-2 border-y-blue-500 text-blue-500">
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
                        onClick={()=>clickHandler(params.id)}>
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
