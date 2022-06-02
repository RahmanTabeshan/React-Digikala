import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import NotFound from "./Pages/Not-Found";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users/login" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
