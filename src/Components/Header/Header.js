import { useRef, useState , useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Search from "./Search/Search";
import { RiShoppingCartLine } from "react-icons/ri";
import UserOperation from "./UserOpration/UserOperation";
import Navigation from "./Navigation/Navigation";

const Header = () => {
    
    const [focus, setFocus] = useState(false);

    const handleFocus = () => {
        setFocus(true);
    };

    const searchRef = useRef() ;
    const headClick = (e) => {
        if(e.target.className.includes("header") || e.target.className.includes("logo") ){
            setFocus(false) ;
        }else if(e.target.className.includes("search-box")){
            searchRef.current.focus() ;
        }
    }

    const Nav = useRef() ;
    useEffect(()=>{
        console.log(Nav)
    },[])

    return (
        <>
            <header className="header" onClick={headClick}>
                <div className='top-header'>
                    <div className='top-right-header'>
                        <Link className='logo' to='/'></Link>
                        <Search focus={focus} onFocus={handleFocus} ref={searchRef} />
                    </div>
                    <div className='top-left-header'>
                        <UserOperation />
                        <span></span>
                        <div className="cart">
                            <Link to="/checkout/cart/">
                                <RiShoppingCartLine className="cart-icon" />
                            </Link>
                        </div>
                    </div>
                </div>
                <Navigation ref={Nav}/> 
            </header>
            <div className={`overly ${focus ? "overly-visible" : ""}`} onClick={()=>setFocus(false)}></div>
        </>
    );
};

export default Header;
