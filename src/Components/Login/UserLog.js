/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Image/logo.svg";

const UserLog = ({setUserName }) => {

    const [user, setUser] = useState("");
    const [error,setError]=useState("");

    const validateInput = ()=>{
        if(user === ""){
            setError("شماره یا ایمیل خود را وارد کنید") ;
        }
    }

    const clickHandle = (e)=>{
        e.preventDefault() ;
        setUserName(user) ;
    }

    useEffect(()=>{
        validateInput() ;
    },[])

    return (
        <div className="flex flex-col border border-neutral-200 rounded-lg m-5 p-5 lg:p-8">
            <div className="flex justify-center">
                <Link to="/" className="w-[150px] h-[40px]">
                    <img
                        src={Logo}
                        alt="digikala logo"
                        className="w-full object-contain"
                    />
                </Link>
            </div>
            <div className="mt-5">
                <p className="w-max font-bold text-xl">ورود | ثبت‌نام</p>
            </div>
            <div className="mt-6 mb-5 text-xs text-neutral-600">
                <p>سلام!</p>
                <p className="mt-3">
                    لطفا شماره موبایل یا ایمیل خود را وارد کنید
                </p>
            </div>
            <div className="w-full">
                <form className="flex flex-col items-center">
                    <div className="w-full flex flex-col">
                        <input
                            type="text"
                            className="w-full h-12 border border-blue-300 rounded-lg text-base text-neutral-700 font-normal px-4 py-2 font-sego"
                            autoComplete="false"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                        />
                        {error ? <span className="text-xs text-red-700 mt-2">{error}</span> : ""}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-600 text-sm font-bold text-white rounded-lg mt-8 px-4 py-3.5"
                        onClick={clickHandle}
                    >
                        ورود
                    </button>
                </form>
            </div>
            <p className="flex text-[11px] text-neutral-700 mt-5">
                ورود شما به معنای پذیرش
                <Link to="/" className="mx-1 text-blue-500">
                    شرایط دیجی‌کالا
                </Link>
                و
                <Link to="/" className="mx-1 text-blue-500">
                    قوانین حریم‌خصوصی
                </Link>
                است
            </p>
        </div>
    );
};

export default UserLog;
