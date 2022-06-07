import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const TabItem = ({path , title , tabListNav}) => {
    return (
        <div className='tab-item'>
            <div>
                <Link to={path}>
                    {title}
                    <span className='icon'>
                        <IoIosArrowBack />
                    </span>
                </Link>
            </div>
            <ul>
                {tabListNav}
            </ul>
        </div>
    );
};

export default TabItem;
