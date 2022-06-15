import { Link } from "react-router-dom";

const Nav = ({isShow=true}) => {
    return (
        <>
            <li>
                <Link to="/">
                    <div>
                        <i className="fa-regular fa-basket-shopping"></i>
                    </div>
                    <p>سوپر مارکت</p>
                </Link>
            </li>
            <li>
                <Link to="/">
                    <div>
                        <i className="fa-regular fa-fire-flame-curved"></i>
                    </div>
                    <p>پرفروش ترین ها</p>
                </Link>
            </li>
            <li>
                <Link to="/">
                    <div>
                        <i className="fa-regular fa-percent"></i>
                    </div>
                    <p>تخفیف ها و پیشنهادها</p>
                </Link>
            </li>
            <li>
                <Link to="/">
                    <div>
                        <i className="fa-regular fa-badge-percent"></i>
                    </div>
                    <p>شگفت انگیزها</p>
                </Link>
            </li>
            <li className={isShow ? "" : "d-none"}>
                <Link to="/">
                    سوالی دارید؟
                </Link>
            </li> 
            <li>
                <Link to="/">
                    فروشنده شوید!
                </Link>
            </li>
        </>
    );
}
 
export default Nav;