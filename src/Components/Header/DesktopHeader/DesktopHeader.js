
import { Link } from "react-router-dom";
import "./DesktopHeader.css";
import Styles from "./DesktopHeader.module.css"
import Search from "../Common/Search/Search";
import UserOperation from "./UserOpration/UserOperation";
import Navigation from "./Navigation/Navigation";
import { RiShoppingCartLine } from "react-icons/ri";

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
                        <div className='cart'>
                            <Link to='/checkout/cart/'>
                                <RiShoppingCartLine className='cart-icon' />
                            </Link>
                        </div>
                    </div>
                </div>
                <Navigation />
            </header>
        </>
    );
};

export default DesktopHeader;
