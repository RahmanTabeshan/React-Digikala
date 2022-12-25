import { TbLogin } from "react-icons/tb";
import { Link } from "react-router-dom";

const UserOperation = () => {
    return (
        <div className="users-operation">
            <Link to="/users/login/">
                <div className="icon">
                    <TbLogin className="login-icon" />
                </div>
                <div>ورود</div>
                <span></span>
                <div>ثبت نام</div>
            </Link>
        </div>
    );
};

export default UserOperation;
