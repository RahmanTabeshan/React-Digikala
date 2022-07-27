import { Link } from "react-router-dom";
import digiClub from "../../../Image/DigiClub/digiclub-logo-white.svg" ;
import point from "../../../Image/DigiClub/club-point.svg" ;
import { useEffect, useState } from "react";
import {digiClubList} from "../../../Common/DigiClub" ;
import Skeleton from "react-loading-skeleton";

const DigiClub = () => {

    const [club,setClub] = useState(false) ;

    useEffect(()=>{
        setTimeout(() => {
            setClub(digiClubList) ;
        }, 2000);
    },[])

    return (
        <section className="w-rsp flex flex-col gap-y-4 lg:flex-row rounded-lg mt-5 py-3 px-4 bg-gradient-to-l from-cyan-700 to-cyan-500">
            <div className="flex justify-between items-center w-full lg:w-[35%]">
                <Link to="/digiclub/" className="w-[120px] h-[33px]">
                    {club && <img src={digiClub} alt="digi club" />}
                    {!club && <Skeleton height="100%" />}
                </Link>
                <div className="flex items-center">
                    {club && 
                        <>
                            <p className="text-xs text-white">امتیاز شما</p>
                            <span className="text-xl font-bold text-white px-1">12</span>
                            <div className="w-6 h-6">
                                <img src={point} alt="digiclub point" className="w-full" />
                            </div>
                        </>
                    }
                    {!club && <Skeleton width={100} height={20} />}
                </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-1 w-full lg:w-[65%] pr-4">
                {club && club.map(item =>(
                    <Link
                        key={item.id}
                        to={item.path} 
                        className="flex justify-between items-center bg-white p-1 w-full md:w-[33%] first:rounded-t-lg md:first:rounded-t-none last:rounded-b-lg md:last:rounded-b-none md:first:!rounded-r-lg md:last:!rounded-l-lg"
                    >
                        <div className="text-xs font-bold mr-1 m:mr-2 lg:!mr-3">{item.title}</div>
                        <div className="h-16 overflow-hidden">
                            <img src={item.img} alt={item.title} className="w-40 object-cover" />
                        </div>
                    </Link>
                ))}
                {!club && 
                    Array(3).fill(1).map((item,index)=>(
                        <div key={index} className="flex justify-between h-[70px] items-center p-1 w-full md:w-[33%]" >
                            <Skeleton height="100%" containerClassName="w-full h-full" />
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
 
export default DigiClub;