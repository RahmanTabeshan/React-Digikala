
import { Link } from "react-router-dom";
import "./DesktopHeader.css";
import Styles from "./DesktopHeader.module.css";
import Search from "../Common/Search/Search";
import UserOperation from "./UserOpration/UserOperation";
import Navigation from "./Navigation/Navigation";
import Cart from "../Common/Cart/Cart";

const DesktopHeader = () => {

    const styles = {
        searchBox:Styles.search_box ,
        searchResult : Styles.search_result,
        searchResultFocus:Styles.search_result_focus,
    }

    return (
        <>
            <header className={`header ${Styles.header}`} >
                <div className='top-header'>
                    <div className='top-right-header'>
                        <Link className='logo' to='/'></Link>
                        <Search styles={styles} />
                    </div>
                    <div className='top-left-header'>
                        <UserOperation />
                        <span></span>
                        <Cart className="cart" />
                    </div>
                </div>
                <Navigation />
            </header>
        </>
    );
};

export default DesktopHeader;
