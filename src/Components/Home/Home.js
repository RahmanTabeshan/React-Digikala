
import Amazing from "./Amazing/Amazing";
import AmazingFresh from "./AmazingFresh/AmazingFresh";
import Brand from "./Brand/Brand";
import Category from "./Category/Category";
import DigiOffer from "./DigiOffer/DigiOffer";
import "./Home.css";
import Partner from "./Partner/Partner";
import Service from "./Service/Service";
import Slider from "./Slider/Slider";

import { partnerList } from "../../Common/Partner";
import { partner2List } from "../../Common/Partner2";
import { partner3List } from "../../Common/Partner3"; 
import Visit from "./Visit/Visit";
import { VisitList } from "../../Common/VisitList";
import DigiPlus from "./DigiPlus/DigiPlus";

const Home = () => {

    return (
        <main className="flex flex-col items-center max-w-[1366px] w-full">
            <Slider />
            <Service />
            <Amazing />
            <AmazingFresh />
            <Partner list={partnerList} />
            <Category />
            <Partner list={partner2List} />
            <DigiOffer />
            <Brand />
            <Partner list={partner3List} />
            <Visit visitList={VisitList.slice(0,4)} />
            <DigiPlus />
            <Visit visitList={VisitList.slice(4,8)} />
        </main>
    );
};

export default Home;
