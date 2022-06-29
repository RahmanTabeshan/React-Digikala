
import Styles from "./Home.module.css";
import "./Home.css";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <main className="max-w-[1366px] w-full h-[2000px]">
            <Slider Styles={Styles} />
        </main>
    );
};

export default Home;
