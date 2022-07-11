
import Amazing from "./Amazing/Amazing";
import AmazingFresh from "./AmazingFresh/AmazingFresh";
import Brand from "./Brand/Brand";
import Category from "./Category/Category";
import DigiOffer from "./DigiOffer/DigiOffer";
import "./Home.css";
import Partner2 from "./Partner2/Partner2";
import Service from "./Service/Service";
import Slider from "./Slider/Slider";
import { useEffect, useState } from "react";

import { partnerList } from "../../Common/Partner";
import { partner2List } from "../../Common/Partner2";
import { partner3List } from "../../Common/Partner3";

const Home = () => {

    const [partner1,setPartner1] = useState(false);
    const [partner2,setPartner2] = useState(false);
    const [partner3,setPartner3] = useState(false);
    useEffect(()=>{
        setPartner1(partnerList);
        setPartner2(partner2List) ;
        setPartner3(partner3List) ;
    },[])

    return (
        <main className="flex flex-col items-center max-w-[1366px] w-full">
            <Slider />
            <Service />
            <Amazing />
            <AmazingFresh />
            <Partner2 list={partner1} />
            <Category />
            <Partner2 list={partner2} />
            <DigiOffer />
            <Brand />
            <Partner2 list={partner3} />
        </main>
    );
};

export default Home;
