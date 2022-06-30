
import "./Home.css";
import Service from "./Service/Service";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <main className="pt-[1px] max-w-[1366px] w-full h-[2000px]">
            <Slider/>
            <Service />
        </main>
    );
};

export default Home;
