import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link} from "react-router-dom";
import welcome from "../../Image/welcome/welcome-to-dk.png";
import { removeData } from "../../Redux/TransferData/TransferReducer";
import useCookie from "../Common/useCookies/useCookies";

const Welcome = () => {
    const dispatch = useDispatch() ;
    // eslint-disable-next-line no-unused-vars
    const [cookies,setCookie,removeCookie] = useCookie() ;
    useEffect(()=>{
        return ()=>{
            removeCookie("welcome",{sameSite:"lax"}) ;
            dispatch(removeData()) ;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div className="flex flex-col items-center w-full lg:max-w-[400px] border border-neutral-300 rounded-lg p-5 lg:p-8">
            <div className="w-[200px] h-[150px]">
                <img src={welcome} alt="welcome" />
            </div>
            <h1 className="text-[19px] font-bold leading-[2.12] mt-4">
                به دیجی‌کالا خوش آمدید
            </h1>
            <p className="text-neutral-500 text-xs leading-[2.17] text-center mt-4">
                حالا شما عضو دیجی‌کالا هستید و بیش از ۸ میلیون کالای مختلف در
                دسترس شماست
            </p>
            <Link
                to="/"
                className="bg-red-600 w-full text-sm text-center text-white rounded-lg leading-[2.15] py-3 mt-8"
            >
                بازگشت به دیجی‌کالا
            </Link>
            <Link
                to="/profile/personal-info/"
                className="text-xs text-red-600 leading-[2.17] mt-4"
            >
                تکمیل مشخصات
            </Link>
        </div>
    );
};

export default Welcome;
