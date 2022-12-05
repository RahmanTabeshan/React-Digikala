/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Modal from "../../Login/Modal/Modal";
import Logo from "../../../Image/logo.svg";
import { useState } from "react";
import CountDown from "../CountDown/CountDown";
import {getAllCookies, random} from "../../../Lists/Functions";
import useCookie from "../useCookies/useCookies";

const Code = ({ userName, setUserName}) => {
    const [timer, setTimer] = useState(true);
    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const [cookies,setCookie,removeCookie] = useCookie() ;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
        (u) => u.phone === userName.name || u.Email === userName.name
    );
    const codes = JSON.parse(localStorage.getItem("code")) || [];
    const userCode = codes.find((c) => c.user_id === user.id);

    let randomCode;
    if (!cookies.code) {
        randomCode = random(10000, 99999);
    } else {
        // randomCode = userCode ? userCode.code : "" ;
        randomCode = cookies.code ;
    }

    const changeHandle = (e) => {
        setCode(e.target.value);
    };

    const onStart = (expireTime) => {
        const codes = JSON.parse(localStorage.getItem("code")) || [];
        const userCodeIndex = codes.findIndex((c) => c.user_id === user.id);

        const date = new Date();
        date.setTime(expireTime + 1000);

        if (userCodeIndex === -1) {
            const userCode = [
                {
                    id: random(0, 1000),
                    user_id: user.id,
                    code: randomCode,
                },
            ];
            localStorage.setItem("code", JSON.stringify(userCode));
        }

        if (!cookies.code) {
            setCookie("code", randomCode, {
                expire: 2*60*1000,
                sameSite: "lax",
                path: "/",
            });
        }
    };

    const onEnded = () => {
        const codes = JSON.parse(localStorage.getItem("code")) || [];
        const userCodeIndex = codes.findIndex((c) => c.user_id === user.id);
        codes.splice(userCodeIndex, 1);
        localStorage.setItem("code", JSON.stringify(codes));

        removeCookie("code", { sameSite: "lax", path: "/" });
        
        setTimer(false);
    };

    const submitHandle = (e)=>{
        e.preventDefault() ;
        console.log(cookies)
    }

    return (
        <Fragment>
            {timer ? (
                <Modal message={`کد ورود یکبار مصرف شما ${randomCode}`} />
            ) : (
                ""
            )}
            <div className="flex flex-col w-[400px] border border-neutral-200 rounded-lg m-5 p-5 lg:p-8">
                <div className="relative flex justify-center items-center">
                    <Link to="/" className="w-[150px] h-[40px]">
                        <img
                            src={Logo}
                            alt="digikala logo"
                            className="w-full object-contain"
                        />
                    </Link>
                    <button
                        className="absolute right-0"
                        onClick={() => setUserName("")}
                    >
                        <FiArrowRight className="text-2xl" />
                    </button>
                </div>
                <div className="w-full">
                    <h1 className="text-[19px] font-bold leading-[2.12] my-4">
                        کد تایید را وارد کنید
                    </h1>
                    <p className="text-xs text-neutral-600 my-4 leading-[2.17]">
                        {userName.type === "Phone"
                            ? `کد تایید برای شماره ${userName.name} ارسال شد`
                            : `کد تایید به ایمیل ${userName.name} ارسال شد`}
                    </p>
                    <form onSubmit={(e) => submitHandle(e)}>
                        <div className="flex flex-col justify-center items-center w-full relative">
                            <input
                                className="w-full h-12 border border-blue-400 rounded-lg text-base text-neutral-700 text-center tracking-[1em] font-normal pr-4 pl-9 py-2 font-sego"
                                type="text"
                                autoComplete="false"
                                onChange={changeHandle}
                                maxLength="9"
                                value={code
                                    .replaceAll("-", "")
                                    .split("")
                                    .join("-")}
                            />
                            {error ? (
                                <span className="text-xs text-red-700 mt-2 self-start">
                                    {error}
                                </span>
                            ) : (
                                ""
                            )}
                        </div>
                    </form>
                    <div className="flex justify-center items-center text-xs text-neutral-600 mt-4 ">
                        {!timer ? (
                            <div
                                className="text-blue-500 font-bold cursor-pointer leading-[2.17]"
                                onClick={() => setTimer(true)}
                            >
                                دریافت مجدد کد تایید
                            </div>
                        ) : (
                            <>
                                <CountDown
                                    minutes="1"
                                    seconds="59"
                                    onStart={onStart}
                                    onEnded={onEnded}
                                />
                                <span className="mr-1 leading-[2.17]">
                                    مانده تا دریافت مجدد کد
                                </span>
                            </>
                        )}
                    </div>
                    <button
                        className="w-full bg-red-600 text-sm font-bold text-white rounded-lg mt-8 px-4 py-3.5"
                        type="submit"
                        onClick={(e) => submitHandle(e)}
                    >
                        تایید
                    </button>
                </div>
            </div>
        </Fragment>
    );
};

export default Code;
