import { Link } from "react-router-dom";

const NavItem = ({title , path , icon , className=""}) => {
    return (
        <li className={className}>
            <Link to={path}>
                <div className='icon'>
                    {icon}
                </div>
                {title}
            </Link>
        </li>
    );
}
 
export default NavItem;