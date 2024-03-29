
import Amazing from "./Amazing/Amazing";
import AmazingFresh from "./AmazingFresh/AmazingFresh";
import Brand from "./Brand/Brand";
import Category from "./Category/Category";
import DigiOffer from "./DigiOffer/DigiOffer";
import "./Home.css";
import Partner from "./Partner/Partner";
import Service from "./Service/Service";
import Slider from "./Slider/Slider";

import { partnerList } from "../../Lists/Partner";
import { partner2List } from "../../Lists/Partner2";
import { partner3List } from "../../Lists/Partner3"; 
import { partner4List } from "../../Lists/partner4"; 
import Visit from "./Visit/Visit";
import { VisitList } from "../../Lists/VisitList";
import DigiPlus from "./DigiPlus/DigiPlus";
import DigiClub from "./DigiClub/DigiClub";
import BestSelling from "./BestSelling/BestSelling";
import Auction from "./Auction/Auction";
import Readable from "./Readable/Readable";

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
            <DigiClub />
            <Visit visitList={VisitList.slice(0,4)} />
            <BestSelling />
            <Partner list={partner4List} />
            <Auction />
            <Readable />
        </main>
    );
};

export default Home;
