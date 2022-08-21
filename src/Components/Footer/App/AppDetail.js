import { Link } from "react-router-dom";
import {useMediaQuery} from "react-responsive" ;
import AppLogo from "../../../Image/Footer/App/footerlogo2.png" ;
import GooglePlay from "../../../Image/Footer/App/google-play.svg" ;
import Bazzar from "../../../Image/Footer/App/coffe-bazzar.svg" ;
import Myket from "../../../Image/Footer/App/myket.svg" ;
import SibApp from "../../../Image/Footer/App/sib-app.svg" ;
import More from "./More/More";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
const AppDetail = ()=>{

    const lg = useMediaQuery({minWidth:1024}) ;
    const [loading,setLoading] = useState(true) ;
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false) ; 
        }, 2000);
    },[])

    return(
        <section className={`flex flex-col lg:flex-row gap-y-4 w-full ${loading ? "bg-neutral-300" :  "bg-cyan-900"} px-5 py-2 rounded-lg mt-7`}>
            <div className="flex justify-between lg:justify-start items-center">
                {!loading && 
                    <>
                         <div className="w-11 h-11" >
                            <img src={AppLogo} alt="App Logo" className="w-full" />
                        </div>
                        <h1 className="text-lg md:text-xl lg:text-base BreakPoint:text-xl text-white lg:mr-3">دانلود اپلیکیشن دیجی‌کالا</h1>
                    </>
                }
                {loading && 
                    <>
                        <Skeleton width={44} height={44} containerClassName="flex" />
                        <Skeleton width={150} height={20} containerClassName="flex lg:mr-3" />
                    </>
                }
                {!lg && <More />}
            </div>
            <div className="flex items-center grow">
                <div className="flex flex-wrap justify-around lg:justify-end grow">
                    {!loading && 
                        <>
                            <Link to="/" className="max-w-[142px] h-11 m-2" title="دریافت از گوگل پلی">
                                <img src={GooglePlay} alt="play store App" className="w-full h-11" />
                            </Link>
                            <Link to="/" className="max-w-[142px] h-11 m-2" title="دریافت از کافه بازار">
                                <img src={Bazzar} alt="Bazzar App" className="w-full h-11" />
                            </Link>
                            <Link to="/" className="max-w-[142px] h-11 m-2" title="دریافت از مایکت">
                                <img src={Myket} alt="Myket App" className="w-full h-11" />
                            </Link>
                            <Link to="/" className="max-w-[142px] h-11 m-2" title="دریافت از سیب اپ">
                                <img src={SibApp} alt="Sib App" className="w-full h-11" />
                            </Link>
                        </>
                    }
                    {loading && 
                        Array(4).fill(1).map((item,index)=>(
                            <Skeleton key={index} width={142} height={44} containerClassName="flex m-2" />
                        ))
                    }
                </div>
                {lg && <More className="mr-3" />}
            </div>
        </section>
    );
}

export default AppDetail