import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import {addToCart, decrement, increment, remove} from "../Components/Redux/Cart/CartActions";
import { money_format, scrollToTop } from "../Lists/Functions";
import {HiOutlineTrash} from "react-icons/hi" ;

const ProductPage = () => {
    const params = useParams();
    
    const Products = useSelector((state) => state.Products);
    const Cart = useSelector((state) => state.Cart);
    const dispatch = useDispatch();
    
    const ProductInCart = Cart.find((item) => item.id === parseInt(params.id));
    const Product = Products.find(
        (p) => p.id === parseInt(params.id)
        );
        
    const numOfProduct = ProductInCart ? ProductInCart.quantity : 1 ;
    const percentMoney = Product.price - (Product.price * (parseInt(Product.percent)/100)) 

    const addCart = (id) => {
        const newProduct = { ...Product, quantity: 1 };
        dispatch(addToCart(newProduct));
    };

    const DecrementHandler = (ProductInCart)=>{
        if(ProductInCart.quantity > 1){
            dispatch(decrement(ProductInCart.id))
        }else{
            dispatch(remove(ProductInCart.id))
        }
    }

    const IncrementHandler = (id)=>{
        dispatch(increment(id)) ;
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
                    {ProductInCart && (
                        <div className="flex justify-center w-full mt-4 px-8">
                            <div className="flex items-center">
                                <button 
                                    className={`${ProductInCart.quantity===1 ? "btn-cart-remove" : "btn-cart"}  rounded-l-md`}
                                    onClick={()=>DecrementHandler(ProductInCart)}
                                >
                                    {ProductInCart.quantity>1 ? "-":<HiOutlineTrash />}
                                </button>
                                <div className="flex items-center justify-center w-7 h-7 border-y border-y-blue-500 text-blue-500">
                                    {ProductInCart.quantity}
                                </div>
                                <button 
                                    className="btn-cart rounded-r-md"
                                    onClick={()=>IncrementHandler(params.id)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    )}
                    <button
                        className={` ${ProductInCart ? "!bg-blue-100 !text-blue-700" : ""} btn-add-cart`}
                        disabled={ProductInCart ? true : false}
                        onClick={()=>addCart(params.id)}>
                        {ProductInCart
                            ? "محصول به سبد خرید اضافه شد"
                            : "افزودن به سبد خرید"}
                    </button>
                </div>
            </main>
        </Layout>
    );
};

export default ProductPage;
