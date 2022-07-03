
import Amazing from "./Amazing/Amazing";
import "./Home.css";
import Service from "./Service/Service";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <main className="flex flex-col items-center pt-px max-w-[1366px] w-full h-[2000px]">
            <Slider/>
            <Service />
            <Amazing />
        </main>
    );
};

export default Home;
