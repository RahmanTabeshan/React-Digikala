
import Amazing from "./Amazing/Amazing";
import AmazingFresh from "./AmazingFresh/AmazingFresh";
import Brand from "./Brand/Brand";
import Category from "./Category/Category";
import DigiOffer from "./DigiOffer/DigiOffer";
import "./Home.css";
import Partner from "./Partner/Partner";
import Service from "./Service/Service";
import Slider from "./Slider/Slider";
import { useEffect, useState } from "react";

import { partnerList } from "../../Common/Partner";
import { partner2List } from "../../Common/Partner2";
import { partner3List } from "../../Common/Partner3"; 
import Visit from "./Visit/Visit";
import { VisitList } from "../../Common/VisitList";

const Home = () => {
    const [visitList , setVisitList] = useState(false);
    useEffect(()=>{
        setVisitList(VisitList.slice(0,4)) ;
    },[])

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
            <Visit visitList={visitList} />
        </main>
    );
};

export default Home;
