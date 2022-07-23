import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import ListItem from "./ListItem/ListItem";

const Visit = ({visitList}) => {

    const [visit,setVisit] = useState(false) ;

    useEffect(()=>{
        setTimeout(() => {
            setVisit(visitList) ;
        }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <section className="grid grid-cols-1 mobile:grid-cols-2 lg:!grid-cols-4 justify-center gap-px w-rsp rounded-xl border border-stone-300 bg-neutral-300 overflow-hidden mt-5">
            {!visit && 
                Array(4).fill(1).map((item,index)=>(
                    <div key={index} className="flex flex-col bg-white p-4 w-full">
                        <div className="flex flex-col items-start">
                            <Skeleton width={140} height={20} />
                            <Skeleton width={100} height={10} />
                        </div>
                        <div className="w-full">
                            <Skeleton height={250} />
                        </div>
                        <div className="flex justify-center mt-3">
                            <Skeleton width={120} height={15} />
                        </div>
                    </div>
                ))
            }
            {visit && visitList.map(item => (
                <ListItem key={item.id} item={item} />
            ))}
        </section>
    );
}
 
export default Visit;