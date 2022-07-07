
import Amazing from "./Amazing/Amazing";
import AmazingFresh from "./AmazingFresh/AmazingFresh";
import "./Home.css";
import Partner from "./Partner/Partner";
import Service from "./Service/Service";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <main className="flex flex-col items-center lg:pt-px max-w-[1366px] w-full">
            <Slider/>
            <Service />
            <Amazing />
            <AmazingFresh />
            <Partner />
        </main>
    );
};

export default Home;
