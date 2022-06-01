import { TbLogin } from "react-icons/tb";
import { Link } from "react-router-dom";

const UserOperation = () => {
    return (
        <div className='users-operation'>
            <div className='icon'>
                <TbLogin className='login-icon' />
            </div>
            <Link to='/users/login/'>ورود</Link>
            <span></span>
            <Link to='/users/sign-up/'>ثبت نام</Link>
        </div>
    );
};

export default UserOperation;
