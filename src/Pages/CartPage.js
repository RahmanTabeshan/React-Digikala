import Layout from "../Components/Layout/Layout";
import Cart from "../Components/Cart/Cart"
import { useEffect } from "react";
import { scrollToTop } from "../Lists/Functions";

const CartPage = () => {

    useEffect(()=>{
        scrollToTop() ;
    },[])

    return (
        <Layout>
            <main >
                <Cart />
            </main>
        </Layout>
    );
}
 
export default CartPage;