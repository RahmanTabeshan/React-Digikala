/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../Image/logo.svg";
import { Fragment, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useEffect } from "react";
import Modal from "../../Login/Modal/Modal";
import { EmailRegex, PhoneRegex} from "../../../Lists/Functions";
import { useCookies } from "react-cookie";

const ForgotUser = ({ setUserName}) => {

    const navigate = useNavigate();
    const location = useLocation();
    const username = location.state ? location.state.userName : "";

    const [user, setUser] = useState("");
    const [error, setError] = useState("");
    const [modal, setModal] = useState(false);
    const [message,setMessage] = useState("") ;
    const [cookies] = useCookies([]) ;

    const changeHandle = (e) => {
        setUser(e.target.value);
    };

    const submitHandle = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const existUser = users.find(
            (u) => u.phone === user || u.Email === user
        );
        const code = JSON.parse(localStorage.getItem("code")) || [] ;
        if (!user) {
            setError("شماره موبایل یا ایمیل خود را وارد کنید");
        } else if (!PhoneRegex.test(user) && !EmailRegex.test(user)) {
            setError("شماره موبایل یا ایمیل خود را به درستی وارد کنید");
        } else {
            setError("");
            if(existUser){
                const existCode = code.find(c => c.user_id === existUser.id) ; 
                if(!existCode && cookies.code){
                    setMessage("تعداد درخواست بیش از حد مجاز است.") ;
                    setModal(true);
                    setTimeout(() => {
                        setModal(false) ;
                    }, 5100);
                }else{
                    let type ;
                    if(EmailRegex.test(user)){
                        type = "Email" ;
                    }else{
                        type = "Phone" ;
                    }
                    setUserName({name:user , type:type , code:true}) ;
                    
                }
            }else{
                setModal(true) ;
                setMessage("حساب کاربری با این نام وجود ندارد.") ;
                setTimeout(() => {
                    setModal(false) ;
                }, 5100);
            }
        }
    };

    useEffect(() => {
        setUser(username.name || "");
    }, []);

    return (
        <Fragment>
            {modal ? (
                <Modal message={message} />
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
                        onClick={() => navigate("/users/login/")}
                    >
                        <FiArrowRight className="text-2xl" />
                    </button>
                </div>
                <div className="w-full">
                    <h1 className="text-[19px] font-bold leading-[2.12] my-4">
                        تغییر رمز عبور
                    </h1>
                    <p className="text-xs text-neutral-600 my-4 leading-[2.17]">
                        برای تغییر رمز عبور، شماره موبایل یا ایمیل خود را وارد
                        کنید
                    </p>
                    <form onSubmit={submitHandle}>
                        <div className="flex flex-col justify-center items-center w-full relative">
                            <input
                                className="w-full h-12 border border-blue-400 rounded-lg text-base text-neutral-700 font-normal pr-4 pl-9 py-2 font-sego"
                                type="text"
                                autoComplete="false"
                                onChange={changeHandle}
                                value={user}
                            />
                            {error ? (
                                <span className="text-xs text-red-700 mt-2 self-start">
                                    {error}
                                </span>
                            ) : (
                                ""
                            )}
                        </div>
                        <button
                            className="w-full bg-red-600 text-sm font-bold text-white rounded-lg mt-8 px-4 py-3.5"
                            type="submit"
                            disabled={modal ? true : false}
                        >
                            تایید
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default ForgotUser;