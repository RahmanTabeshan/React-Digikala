import { Link } from "react-router-dom";
import Styles from "./ResponseHeader.module.css";
import { FaBars } from "react-icons/fa";
import { BsQuestionSquare } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import Search from "../Common/Search/Search";
import { TbLogin } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import Nav from "../Common/Nav/Nav";
import Category from "./Category/Category";
import Cart from "../Common/Cart/Cart";

const styles = {
    searchBox: Styles.search_box,
    searchResult: Styles.search_result,
    searchResultFocus: Styles.search_result_focus,
};
const ResponseHeader = () => {
    const [navModal, setNavModal] = useState(false);

    return (
        <header className={`header ${Styles.header}`}>
            <div className="header-child pb-3">
                <div className="text-xl" onClick={() => setNavModal(true)}>
                    <FaBars className="cursor-pointer transition-all duration-200 hover:text-stone-500" />
                </div>
                <div className="w-[92px] h-[24px]">
                    <Link
                        className="block bg-logo bg-no-repeat bg-cover h-full w-full"
                        to="/"></Link>
                </div>
                <div className="text-xl">
                    <BsQuestionSquare className="cursor-pointer transition-all duration-200 hover:text-stone-500" />
                </div>
            </div>
            <div className="header-child py-2">
                <Search styles={styles} />
                <Link
                    to="/users/login"
                    className="flex items-center text-[14px] mx-[1%] transition-all duration-200 hover:text-stone-500">
                    <TbLogin className="text-2xl ml-2" />
                    ورود
                </Link>
                <Cart className="w-max" />
            </div>
            <div className="header-child border-none">
                <div className="location w-full">
                    <Link to="/" className="w-full flex justify-between py-3">
                        <div className="flex">
                            <div className="icon pl-4">
                                <GrLocation />
                            </div>
                            <span className="text-sm">
                                لطفا شهر خود را انتخاب کنید
                            </span>
                        </div>
                        <IoIosArrowBack className="text-base" />
                    </Link>
                </div>
            </div>
            <div
                className={` modal-nav ${
                    navModal ? "right-0" : "right-[-300px]"
                }`}>
                <div className="w-full flex justify-center">
                    <Link to="/" className="digi-logo"></Link>
                </div>
                <div className="flex justify-center">
                    <ul className={`w-90% pb-2 border-b  ${Styles.ul}`}>
                        <Nav quIcon={<BsQuestionSquare />} shop={<BsShop />} />
                    </ul>
                </div>
                <div className="flex flex-col h-[580px] items-center pb-4">
                    <Category />
                </div>
            </div>
            <div
                className={`back-drop ${
                    navModal ? "opacity-20 visible" : "invisible opacity-0"
                }`}
                onClick={() => setNavModal(false)}></div>
        </header>
    );
};

export default ResponseHeader;
