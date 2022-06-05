import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DesktopHeader.css";
import Search from "../Common/Search/Search";
import { RiShoppingCartLine } from "react-icons/ri";
import UserOperation from "../Common/UserOpration/UserOperation";
import Navigation from "../Common/Navigation/Navigation";

const DesktopHeader = () => {
    const [focus, setFocus] = useState(false);

    const handleFocus = () => {
        setFocus(true);
    };

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
        }
    }, [focus]);

    return (
        <>
            <header className='header' onClick={headClick}>
                <div className='top-header'>
                    <div className='top-right-header'>
                        <Link className='logo' to='/'></Link>
                        <Search
                            focus={focus}
                            onFocus={handleFocus}
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
            <div
                className={`overly ${focus ? "overly-visible" : ""}`}
                onClick={() => setFocus(false)}></div>
        </>
    );
};

export default DesktopHeader;
