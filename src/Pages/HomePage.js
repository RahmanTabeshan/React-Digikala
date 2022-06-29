
import { useEffect, useState } from "react";
import Home from "../Components/Home/Home";
import Layout from "../Components/Layout/Layout";

const HomePage = () => {
    const [loading , setLoading] = useState(true) ;

    useEffect(() => {
        const onPageLoad = () => {
          setLoading(false);
        };
    
        // Check if the page has already loaded
        if (document.readyState === "complete") {
          onPageLoad();
        } else {
          window.addEventListener("load", onPageLoad);
          // Remove the event listener when component unmounts
          return () => window.removeEventListener("load", onPageLoad);
        }
      }, []);

    document.title = "فروشگاه اینترنتی دیجیکالا" ;
    if(loading) return <div>loading...</div>
    return (
        <Layout>
            <Home />
        </Layout>
    );
};

export default HomePage;
