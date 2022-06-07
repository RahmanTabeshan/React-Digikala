import { Link } from "react-router-dom";

const TabNavItem = ({className , path , title }) => {
    return (
        <li className={className}>
            <Link to={path}>
                <span>{title}</span>
            </Link>
        </li>
    );
};

export default TabNavItem;
