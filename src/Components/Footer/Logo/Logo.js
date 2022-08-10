import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import digi from "../../../Image/digi_fa.svg";
const Logo = () => {

    const [loading,setLoading] = useState(true) ;

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false) ;
        }, 2000);
    },[])

    return (
        <div className="h-[30px]">
            {!loading && <img src={digi} alt="لوگو" className="w-full h-full" />}
            {loading && <Skeleton width={114} height="100%" containerClassName="h-full" />}
        </div>
    );
};

export default Logo;
