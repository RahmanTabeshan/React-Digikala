import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import 'react-loading-skeleton/dist/skeleton.css' ;
import SiteLoading from "./Components/SiteLoading/SiteLoading";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import NotFound from "./Pages/Not-Found";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import { Provider } from "react-redux";
import store from "./Redux/Store";

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const onPageLoad = () => {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
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

    if(loading) return <SiteLoading />;
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/users/login/" element={<LoginPage />} />
                <Route path="/Product/:id/:title/" element={<ProductPage />} />
                <Route path="/checkout/cart/" element={<CartPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Provider>
    );
};

export default App;
