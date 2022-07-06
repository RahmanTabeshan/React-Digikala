
import Amazing from "./Amazing/Amazing";
import AmazingFresh from "./AmazingFresh/AmazingFresh";
import "./Home.css";
import Service from "./Service/Service";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <main className="flex flex-col items-center pt-px max-w-[1366px] w-full">
            <Slider/>
            <Service />
            <Amazing />
            <AmazingFresh />
        </main>
    );
};

export default Home;
