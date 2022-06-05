import { Link } from "react-router-dom";

const TabItem = ({className , path , title }) => {
    return (
        <li className={className}>
            <Link to={path}>
                <span>{title}</span>
            </Link>
        </li>
    );
};

export default TabItem;
