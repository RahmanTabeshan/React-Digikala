
import Amazing from "./Amazing/Amazing";
import AmazingFresh from "./AmazingFresh/AmazingFresh";
import Category from "./Category/Category";
import DigiOffer from "./DigiOffer/DigiOffer";
import "./Home.css";
import Partner from "./Partner/Partner";
import Partner2 from "./Partner2/Partner2";
import Service from "./Service/Service";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <main className="flex flex-col items-center max-w-[1366px] w-full">
            <Slider />
            <Service />
            <Amazing />
            <AmazingFresh />
            <Partner />
            <Category />
            <Partner2 />
            <DigiOffer />
        </main>
    );
};

export default Home;
