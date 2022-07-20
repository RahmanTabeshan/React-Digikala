
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

    const [partner1,setPartner1] = useState(false);
    const [partner2,setPartner2] = useState(false);
    const [partner3,setPartner3] = useState(false);
    const [visitList , setVisitList] = useState(false);
    useEffect(()=>{
        setPartner1(partnerList) ;
        setPartner2(partner2List) ;
        setPartner3(partner3List) ;
        setVisitList(VisitList.slice(0,4)) ;
    },[])

    return (
        <main className="flex flex-col items-center max-w-[1366px] w-full">
            <Slider />
            <Service />
            <Amazing />
            <AmazingFresh />
            <Partner list={partner1} />
            <Category />
            <Partner list={partner2} />
            <DigiOffer />
            <Brand />
            <Partner list={partner3} />
            <Visit visitList={visitList} />
        </main>
    );
};

export default Home;
