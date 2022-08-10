import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {AiOutlineInstagram,AiOutlineTwitter} from "react-icons/ai";
import {FaLinkedin} from "react-icons/fa" ;
import {SiAparat} from "react-icons/si" ;
import Skeleton from "react-loading-skeleton" ;
import EmailForm from "./EmailForm/EmailForm";

const Social = () => {

    const [loading , setLoading] = useState(true) ;

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false) ;
        }, 2000);
    },[])

    return (
        <div className="flex flex-col min-w-[323px] grow">
            {!loading && 
                <>
                    <h2 className="text-444">همراه ما باشید!</h2>
                    <div className="flex justify-around text-stone-400 my-3">
                        <Link to="/" className="w-8 h-8 transition-all duration-300 hover:text-stone-700">
                            <AiOutlineInstagram className="w-full h-full" />
                        </Link>
                        <Link to="/" className="w-8 h-8 transition-all duration-300 hover:text-stone-700">
                            <AiOutlineTwitter className="w-full h-full" />
                        </Link>
                        <Link to="/" className="w-8 h-8 transition-all duration-300 hover:text-stone-700">
                            <FaLinkedin className="w-full h-full" />
                        </Link>
                        <Link to="/" className="w-8 h-8 transition-all duration-300 hover:text-stone-700">
                            <SiAparat className="w-full h-full" />
                        </Link>
                    </div>
                </>
            }
            {loading &&
            <>
                <Skeleton width={100} height={20} />
                <div className="flex justify-around my-3">
                    <Skeleton width={32} height={32} />
                    <Skeleton width={32} height={32} />
                    <Skeleton width={32} height={32} />
                    <Skeleton width={32} height={32} />
                </div>
            </> 
            }
            
            <EmailForm loading={loading} />
        </div>
    );
}
 
export default Social;