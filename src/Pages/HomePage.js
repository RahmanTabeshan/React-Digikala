import { useEffect } from "react";
import Layout from "../Components/Layout/Layout";

const HomePage = () => {

    useEffect(()=>{
        document.title = "فروشگاه اینترنتی دیجیکالا"
    },[])
    
    return (
        <Layout>
            <main>This is Home Page</main>
        </Layout>
    );
};

export default HomePage;
