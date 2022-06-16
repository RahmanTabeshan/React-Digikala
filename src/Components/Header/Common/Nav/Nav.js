import { Link } from "react-router-dom";

const Nav = ({isShow=true , quIcon=false , shop=false}) => {
    return (
        <>
            <li className="nav-item">
                <Link to="/" className="nav-link">
                    <div>
                        <i className="fa-regular fa-basket-shopping"></i>
                    </div>
                    <p>سوپر مارکت</p>
                </Link>
            </li>
            <li className="nav-item" >
                <Link to="/" className="nav-link">
                    <div>
                        <i className="fa-regular fa-fire-flame-curved"></i>
                    </div>
                    <p>پرفروش ترین ها</p>
                </Link>
            </li>
            <li className="nav-item" >
                <Link to="/" className="nav-link">
                    <div>
                        <i className="fa-regular fa-percent"></i>
                    </div>
                    <p>تخفیف ها و پیشنهادها</p>
                </Link>
            </li>
            <li className="nav-item" >
                <Link to="/" className="nav-link">
                    <div>
                        <i className="fa-regular fa-badge-percent"></i>
                    </div>
                    <p>شگفت انگیزها</p>
                </Link>
            </li>
            <li className={` nav-item ${isShow ? "" : "d-none"}`}>
                <Link to="/" className="nav-link">
                    <div>
                        {quIcon && quIcon}
                    </div>
                    <p>سوالی دارید ؟</p>
                </Link>
            </li> 
            <li className="nav-item" >
                <Link to="/" className="nav-link">
                    <div>
                        {shop && shop}
                    </div>
                    <p>فروشنده شوید !</p>
                </Link>
            </li>
        </>
    );
}
 
export default Nav;