import {useParams} from "react-router-dom" ;
import Layout from "../Components/Layout/Layout";

const ProductPage = () => {

    const params = useParams() ;
    return (
        <Layout>
            <main>this is product page</main>
            <div className="ltr">
                <div>Product id is : {params.id}</div>
                <div>Product title is : {params.title.split("_").join(" ")}</div>
            </div>
        </Layout>
    );
}
 
export default ProductPage;