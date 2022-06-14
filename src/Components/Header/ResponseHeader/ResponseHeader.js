import { Link } from "react-router-dom";
import Styles from "./ResponseHeader.module.css";
import { FaBars } from "react-icons/fa";
import { BsQuestionSquare } from "react-icons/bs";
import Search from "../Common/Search/Search";
import { TbLogin } from "react-icons/tb";
import { RiShoppingCartLine } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";


const styles = {
    searchBox: Styles.search_box,
    searchResult: Styles.search_result,
    searchResultFocus: Styles.search_result_focus,
};

const ResponseHeader = () => {
    return (
        <header className={`header ${Styles.header}`}>
            <div className='header-child pb-3'>
                <div className='text-xl'>
                    <FaBars className='cursor-pointer' />
                </div>
                <div className='w-[92px] h-[24px]'>
                    <Link
                        className='block bg-logo bg-no-repeat bg-cover h-full w-full'
                        to='/'></Link>
                </div>
                <div className='text-xl'>
                    <BsQuestionSquare className='cursor-pointer' />
                </div>
            </div>
            <div className='header-child py-2'>
                <Search styles={styles} />
                <Link
                    to='/users/login'
                    className='flex items-center text-[14px] mx-[1%]'>
                    <TbLogin className='text-2xl ml-2' />
                    ورود
                </Link>
                <div className='w-max'>
                    <Link to='/checkout/cart/'>
                        <RiShoppingCartLine className='cart-icon' />
                    </Link>
                </div>
            </div>
            <div className='header-child'>
                <div className='location w-full'>
                    <Link to='/' className="w-full flex justify-between py-3">
                        <div className="flex">
                            <div className='icon pl-4'>
                                <GrLocation />
                            </div>
                            <span className="text-sm">لطفا شهر خود را انتخاب کنید</span>
                        </div>
                        <IoIosArrowBack className="text-base" />
                    </Link> 
                </div>
            </div>
        </header>
    );
};

export default ResponseHeader;
