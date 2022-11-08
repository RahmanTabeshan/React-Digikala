import { Link } from "react-router-dom";
import Logo from "../../../Image/logo.svg";
import { IoIosArrowBack } from "react-icons/io";
import { FiArrowRight } from "react-icons/fi";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { useRef, useState } from "react";
import { useEffect } from "react";

const UserPass = ({ userName , setUserName }) => {
    const passInput = useRef();

    const [password,setPassword] = useState("")
    const [error, setError] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const changeHandle = (e)=>{
        setPassword(e.target.value) ;
    }

    const submitHandle = (e)=>{
        e.preventDefault() ;
        if(password){
            const users = JSON.parse(localStorage.getItem("users")) || [] ;
            let user ;
            if(userName.type==="Phone"){
                user = users.find(u=>u.phone === userName.name) ;
            }else{
                user = users.find(u=>u.Email === userName.name) ;
            }
            console.log(user) ;
            setError("") ;
        }
    }

    useEffect(() => {
        passInput.current.focus();
    }, []);

    return (
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
                    رمز عبور را وارد کنید
                </h1>
                <form onSubmit={submitHandle}>
                    <div className="flex items-center w-full relative">
                        <input
                            className={`w-full h-12 border ${
                                error ? "border-red-500" : "border-blue-400"
                            } rounded-lg text-base text-neutral-700 font-normal pr-4 pl-9 py-2 font-sego`}
                            type={showPass ? "text" : "password"}
                            autoComplete="false"
                            onChange={changeHandle}
                            value={password}
                            ref={passInput}
                        />
                        <span
                            className="absolute left-4 cursor-pointer"
                            onClick={() => setShowPass(!showPass)}
                        >
                            {showPass ? (
                                <RiEyeCloseLine className="text-xl font-bold" />
                            ) : (
                                <RiEyeLine className="text-xl font-bold" />
                            )}
                        </span>
                    </div>
                </form>
                <button className="flex items-center text-xs text-blue-500 font-bold py-1 mt-3 leading-[2.17rem]">
                    ورود با رمز یک‌بار‌مصرف
                    <IoIosArrowBack className="mr-1 text-sm" />
                </button>
                <button className="flex items-center text-xs text-blue-500 font-bold py-1 mt-3 leading-[2.17rem]">
                    فراموشی رمز عبور
                    <IoIosArrowBack className="mr-1 text-sm" />
                </button>
                <button
                    className="w-full bg-red-600 text-sm font-bold text-white rounded-lg mt-8 px-4 py-3.5"
                    type="submit"
                    onClick={submitHandle}
                >
                    تایید
                </button>
            </div>
        </div>
    );
};

export default UserPass;
