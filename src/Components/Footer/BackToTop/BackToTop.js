import { Fragment, useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import Skeleton from "react-loading-skeleton";

const BackToTop = () => {

    const [loading,setLoading] = useState(true) ;

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    },[])

    const topHandler = () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        document.body.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    
    return (
        <Fragment>
            {!loading && 
                <button
                    className="btn-back-to-top"
                    onClick={() => topHandler()}
                >
                    <span className="text-sm">بازگشت به بالا</span>
                    <IoIosArrowUp className="mr-2" />
                </button>
            }
            {loading && <Skeleton width={150} height={45} />}
        </Fragment>
    );
};

export default BackToTop;
