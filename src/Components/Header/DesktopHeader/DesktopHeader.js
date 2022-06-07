import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DesktopHeader.css";
import Styles from "./DesktopHeader.module.css"
import Search from "./Search/Search";
import UserOperation from "./UserOpration/UserOperation";
import Navigation from "./Navigation/Navigation";
import { RiShoppingCartLine } from "react-icons/ri";

const DesktopHeader = () => {

    const [focus, setFocus] = useState(false);

    const searchRef = useRef();
    const headClick = (e) => {
        if (
            e.target.className.includes("header") ||
            e.target.className.includes("logo") ||
            e.target.className.includes("navigation")
        ) {
            setFocus(false);
        } else if (e.target.className.includes("search-box")) {
            searchRef.current.focus();
        }
    };
    useEffect(() => {
        if (!focus) {
            searchRef.current.blur();
            document.body.style.overflow = "" ;
        }else{
            document.body.style.overflow = "hidden" ;
        }
    }, [focus]);

    return (
        <>
            <div
                className={`overly ${focus ? "overly-visible" : ""}`}
                onClick={() => setFocus(false)}
            >
            </div>
            <header className={`header ${Styles.header}`} onClick={headClick}>
                <div className='top-header'>
                    <div className='top-right-header'>
                        <Link className='logo' to='/'></Link>
                        <Search
                            focus={focus}
                            setFocus={setFocus}
                            ref={searchRef}
                        />
                    </div>
                    <div className='top-left-header'>
                        <UserOperation />
                        <span></span>
                        <div className='cart'>
                            <Link to='/checkout/cart/'>
                                <RiShoppingCartLine className='cart-icon' />
                            </Link>
                        </div>
                    </div>
                </div>
                <Navigation setFocus={setFocus} />
            </header>
        </>
    );
};

export default DesktopHeader;
