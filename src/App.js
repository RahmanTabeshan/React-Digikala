import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import NotFound from "./Pages/Not-Found";
import ProductPage from "./Pages/ProductPage";

const App = () => {

    const [loading , setLoading] = useState(true) ;

    useEffect(() => {
        const onPageLoad = () => {
          setTimeout( ()=>{
            setLoading(false) ;
          } ,500)
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

      if(loading) return <div>loading ... </div>

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users/login/" element={<LoginPage />} />
            <Route path="/Product/:id/:title/" element={<ProductPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
