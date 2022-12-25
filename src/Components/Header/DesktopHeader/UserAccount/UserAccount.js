import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { IoIosArrowBack, IoMdArrowDropup } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Styles from "./UserAccount.module.css";
import ServiceList from "./serviceList/serviceList";
import SubProfList from "./SubProfList/SubProfList";
import { IoLogOutOutline } from "react-icons/io5";
import { logoutUser } from "../../../../Redux/User/UserAction";
import useCookie from "../../../Common/useCookies/useCookies"

const UserAccount = () => {
    const [active, setActive] = useState(false);
    const acc = useRef();
    const user = useSelector((state) => state.User);
    const dispatch = useDispatch() ;
    // eslint-disable-next-line no-unused-vars
    const [cookies,setCookie,removeCookie] = useCookie() ;

    const ClickHandle = (e)=>{
        dispatch(logoutUser()) ;
        removeCookie("user", { sameSite: "lax", path: "/" });
    }

    useEffect(() => {
        document.onclick = (e) => {
            if (e.target !== acc.current) {
                setActive(false);
            }
        };
    }, []);
    return (
        <div className="relative">
            <div
                className={`flex relative items-center p-2 rounded-lg cursor-pointer transition-all duration-150 ${
                    active ? "bg-neutral-200" : ""
                }`}
                onClick={() => setActive(!active)}
            >
                <BiUser className="text-2xl " />
                <IoMdArrowDropup
                    className={`text-lg transition-all duration-150 mr-1 ${
                        active ? "rotate-0" : "-rotate-180"
                    }`}
                />
                <div
                    ref={acc}
                    className="absolute w-full h-full top-0 left-0 rounded-lg z-10 "
                ></div>
            </div>
            <div
                className={`${
                    active ? "flex flex-col" : "hidden"
                } absolute top-full left-0 w-64 rounded-lg shadow-lg border bg-white`}
            >
                <Link
                    to="/profile/"
                    className="flex justify-between items-center w-full p-4 hover:bg-neutral-200 transition-all duration-100"
                >
                    <FaUserCircle className="text-neutral-300 w-8 h-8" />
                    <div className="-mr-14">{user.name || user.phone}</div>
                    <IoIosArrowBack className="text-neutral-500 font-bold" />
                </Link>
                <ul className={Styles.list}>
                    <ServiceList />
                    <SubProfList />
                    <li className="cursor-pointer px-4 mb-1 border-t border-t-neutral-300" onClick={(e)=>ClickHandle(e)}>
                        <div className="flex items-center">
                            <div className="w-[24px] h-[24px] mr-1">
                                <IoLogOutOutline className="w-full h-full" />
                            </div>
                            <div className="flex flex-grow justify-start items-center pr-4 py-2">
                                <div className="text-[15px] leading-[2.15]">
                                    خروج از حساب کاربری
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserAccount;
