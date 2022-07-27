import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const Partner = ({list}) => {

    const [partner,setPartner] = useState(false) ;

    useEffect(()=>{

        setTimeout(() => {
            setPartner(list) ;
        }, 1000);

    },[list])

    return (
        <section className="flex gap-y-4 gap-x-3 flex-wrap lg:flex-nowrap justify-center lg:justify-between w-rsp mt-5">
            {partner ? (partner.length >= 4 ? (
                list.map(item =>(
                    <div key={item.id} className="w-[47.5%] lg:w-[24%] rounded-xl overflow-hidden">
                        <img src={item.img} alt={item.title} className="w-full h-full" />
                    </div>
                ))
            ) : (
                list.map(item => (
                    <div key={item.id} className={`w-full ${list.length===2 && "m:w-[49%]"} rounded-2xl overflow-hidden`} >
                        <img src={item.img} alt={item.title} className="w-full" />
                    </div>
                ))
            )): (
                Array(list.length).fill(1).map((item,index)=>(
                    <div key={index} className={`${list.length > 3 ? "w-[45%] aspect-[1/.75]" : list.length === 2 ? " w-[49%] aspect-[1/.5]" : "w-full aspect-[1/.1]" }`}>
                        <Skeleton height="100%" containerClassName="flex h-full"/>
                    </div>
                ))
            )}
        </section>
    );
}
 
export default Partner;