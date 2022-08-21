import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import MoreSvg from "../../../../Image/Footer/App/More.svg" ;

const More = ({className=""}) => {
    const [loading,setLoading] = useState(true) ;

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false) ;
        }, 2000);
    },[])
    return (
        <>
            {!loading && 
                <Link
                    to="/app-landing/"
                    target="_blank"
                    className={`bg-white rounded-md h-11 ${className}`}>
                    <div className="w-11 h-11">
                        <img src={MoreSvg} alt="More App" className="w-full" />
                    </div>
                </Link>
            }
            {loading && 
                <Skeleton width={44} height={44} containerClassName={`flex ${className?"mr-3" : ""}`} />
            }
        </>
    );
};

export default More;
