import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const Item = ({item}) => {

    const [loading,setLoading] = useState(true) ;

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false) ;
        }, 2000);
    },[])

    return (
        <Link
            to={`/${item.title}/`}
            className="flex items-center justify-center bg-neutral-200 w-[167px] px-5 h-20 grow"
            target="_blank"
        >
            {!loading && 
                <div className="h-5">
                    <img src={item.img} alt={item.title} className="object-contain w-full h-full" height="20" />
                </div>
            }
            {loading && 
                <Skeleton width={100} height={20} containerClassName="flex" />
            }
        </Link>
    );
};

export default Item;
