import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
const SupportList = ({ title, items , NumSkeleton ,className="" }) => {
    return (
        <div className={`flex flex-col ${className} `} >
            {items && <h2 className="text-444">{title}</h2> }
            {!items && <Skeleton width={149} height={20} />}
            <ul>
                {items &&
                    items.map((item) => (
                        <li key={item.id}>
                            <Link
                                to={item.path}
                                className="w-max text-sm text-stone-500 transition-all duration-300 hover:text-stone-700 py-2"
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))
                }
                {!items && 
                    Array(+NumSkeleton).fill(1).map((item,index)=>(
                        <Skeleton key={index} width={100} height={10} containerClassName="flex pt-4" />
                    ))
                }
            </ul>
        </div>
    );
};

export default SupportList;
