import { useEffect } from "react";
import {useParams} from "react-router-dom" ;
import Layout from "../Components/Layout/Layout";

const ProductPage = () => {

    useEffect(()=>{
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        document.body.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    },[])

    const params = useParams() ;
    return (
        <Layout>
            <main>
                <h1 className="text-2xl">This is Product Page </h1>
                <div className="ltr">
                    <div>Product id is : {params.id}</div>
                    <div>Product title is : {params.title.split("_").join(" ")}</div>
                    <button>افزودن به سبد خرید</button>
                </div>
            </main>
        </Layout>
    );
}
 
export default ProductPage;