/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";
import SiteLoading from "./Components/SiteLoading/SiteLoading";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import NotFound from "./Pages/Not-Found";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import { AuthUser } from "./Redux/User/UserAction";
import ForgotPage from "./Pages/ForgotPage";
import useCookie from "./Components/Common/useCookies/useCookies";
import ResetPage from "./Pages/ResetPasswordPage";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [cookies] = useCookie();

    const dispatch = useDispatch();

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

        if (cookies.user) {
            const userId = cookies.user;
            const users = JSON.parse(localStorage.getItem("users"));
            const user = users.find((user) => user.id === userId);
            dispatch(AuthUser(user));
        }
    }, []);

    if (loading) return <SiteLoading />;
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
                path="/users/login/"
                element={
                    <ProtectedRoute path="/">
                        <LoginPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/users/password/forgot/"
                element={
                    <ProtectedRoute path="/">
                        <ForgotPage />
                    </ProtectedRoute>
                }
            />
            <Route path="/users/password/reset/" element={<ResetPage />} />
            <Route path="/Product/:id/:title/" element={<ProductPage />} />
            <Route path="/checkout/cart/" element={<CartPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
