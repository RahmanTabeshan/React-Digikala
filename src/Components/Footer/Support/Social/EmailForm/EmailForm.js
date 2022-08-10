import { useRef, useState } from "react";
import Skeleton from "react-loading-skeleton" ;

const EmailForm = ({loading}) => {

    const [Email,setEmail] = useState("") ;
    const messageRef = useRef() ;

    const submitHandler = (e) => {
        e.preventDefault() ;
        const message = messageRef.current ;
        const EmailRegex = /[a-zA-Z0-9]{6}@(gmail|yahoo|hotmail)(.com)$/ ;

        if(Email===""){
            message.innerHTML = "لطفا ایمیل خود را وارد کنید" ;
            message.classList.add("text-red-600") ;
            setTimeout(() => {
                message.innerHTML = "" ;
                message.classList.remove("text-red-600") ;
            }, 2000 );
        }else{
            if(!EmailRegex.test(Email)){
                message.innerHTML = "لطفا ایمیل خود را به شکل صحیح وارد کنید" ;
                message.classList.add("text-red-600") ;
                setTimeout(() => {
                    message.innerHTML = "" ;
                    message.classList.remove("text-red-600") ;
                }, 2000 );
            }else{
                message.innerHTML = "ایمیل شما با موفقیت ثبت شد" ;
                message.classList.add("text-green-600") ;
                setTimeout(() => {
                    message.innerHTML = "" ;
                    message.classList.remove("text-green-600") ;
                }, 2000 );
                setEmail("") ;
            }
        }
    }

    return (
        <div>
            {!loading && 
                <h3 
                    className="text-xs font-bold sm:font-normal sm:text-sm md:text-base text-444 mt-2 mb-4"
                >
                    با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
                </h3>
            }
            {loading && <Skeleton width={150} height={20} containerClassName="flex mt-2 mb-4" /> }
            <form className="flex text-sm" onSubmit={submitHandler}>
                <div className="grow">
                    {!loading && 
                        <>
                            <input 
                                type="text" 
                                id="Email" 
                                name="Email" 
                                placeholder="ایمیل شما..."
                                value={Email}
                                onChange={(e)=>setEmail(e.target.value)}
                                className="w-full text-stone-500 bg-stone-200 rounded-lg py-3 px-2 focus:outline focus:outline-1 focus:outline-stone-400" 
                            />
                            <div
                                className="mt-2 text-xs font-bold pr-2"
                                ref={messageRef}
                            >
                            </div>
                        </>
                    }
                    {loading && 
                        <Skeleton height={45} containerClassName="flex " />
                    }
                </div>
                {!loading && 
                    <button className="h-max bg-stone-200 transition-all duration-200 hover:bg-stone-300 text-stone-600 py-3 px-4 mr-1 rounded-lg">
                        ثبت
                    </button>
                }
                {loading && 
                    <Skeleton width={55} height={45} containerClassName="flex mr-2" />
                }
            </form>
        </div>
    );
}
 
export default EmailForm;