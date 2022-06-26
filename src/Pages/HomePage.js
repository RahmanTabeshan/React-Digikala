
import Home from "../Components/Home/Home";
import Layout from "../Components/Layout/Layout";

const HomePage = () => {

    document.title = "فروشگاه اینترنتی دیجیکالا" ;
    
    return (
        <Layout>
            <Home />
        </Layout>
    );
};

export default HomePage;
