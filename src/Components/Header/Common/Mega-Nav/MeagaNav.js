import { Link } from "react-router-dom";
import "./MegaNav.css";
import { AiOutlineLaptop } from "react-icons/ai";
import { TbTool } from "react-icons/tb";
import { RiTShirt2Line } from "react-icons/ri";
import { MdChildCare } from "react-icons/md";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { MdOutlineLocalFlorist } from "react-icons/md";
import { BsBasket } from "react-icons/bs";
import { TbHeartbeat } from "react-icons/tb";
import { TbSofa } from "react-icons/tb";
import { TbNotebook } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import TabList from "./TabList/TabList";
import DigitalLists from "./DigitalLists";
import OtherList from "./OtherList" ;

const MegaNav = ({ megaNav }) => {
    const navList = useRef();
    const navTab = useRef();
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        const navItem = [...navList.current.childNodes];
        const tabItem = [...navTab.current.childNodes];

        navItem.forEach((item, index) => {
            const itemClass = item.classList;
            itemClass.remove("a-hover");
            item.className = `${
                display === index ? "a-hover" : ""
            } ${itemClass}`;

            item.addEventListener("mouseenter", (e) => {
                setDisplay(index);
            });

            item.addEventListener("mouseleave", (e) => {
                setDisplay(index);
            });
        });

        tabItem.forEach((item, index) => {
            const itemClass = item.classList;
            itemClass.remove("d-none");
            itemClass.remove("d-flex");
            item.className = `${
                display === index ? "d-flex" : "d-none"
            } ${itemClass}`;
        });
    }, [display]);

    return (
        <div className={`${megaNav ? "mega-nav-visible" : ""}  mega-nav`}>
            <div className='mega-nav-menu'>
                <ul ref={navList}>
                    <li className='a-hover'>
                        <Link to='/'>
                            <div className='icon'>
                                <AiOutlineLaptop />
                            </div>
                            کالای دیجتال
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <div className='icon'>
                                <TbTool />
                            </div>
                            خودرو،ابزار و تجهیزات صنعتی
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <div className='icon'>
                                <RiTShirt2Line />
                            </div>
                            مد و پوشاک
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <div className='icon'>
                                <MdChildCare />
                            </div>
                            اسباب بازی،کودک و نوزاد
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <div className='icon'>
                                <BsBasket />
                            </div>
                            کالاهای سوپرمارکتی
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <div className='icon'>
                                <TbHeartbeat />
                            </div>
                            زیبایی و سلامت
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <div className='icon'>
                                <TbSofa />
                            </div>
                            خانه و آشپزخانه
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <div className='icon'>
                                <TbNotebook />
                            </div>
                            کتاب،لوازم تحریر و هنر
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <div className='icon'>
                                <MdOutlineSportsSoccer />
                            </div>
                            ورزش و سفر
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <div className='icon'>
                                <MdOutlineLocalFlorist />
                            </div>
                            محصولات بومی و محلی
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='mega-nav-tabs' ref={navTab}>
                <div className="tab-item">
                    <div>
                        <Link to="/">
                            همه محصولات کالاهای دیجیتال 
                            <span className="icon">
                                <IoIosArrowBack />
                            </span>
                        </Link>
                    </div>
                    <ul>
                        <TabList tabList={DigitalLists} />
                    </ul>
                </div>
                <div className="tab-item">
                    <div>
                        <Link to="/">
                            همه محصولات دسته خودرو
                            <span className="icon">
                                <IoIosArrowBack />
                            </span>
                        </Link>
                    </div>
                    <ul>
                        <TabList tabList={OtherList} />
                    </ul>
                </div>
                <div className="tab-item">
                    <div>
                        <Link to="/">
                            همه محصولات دسته پوشاک
                            <span className="icon">
                                <IoIosArrowBack />
                            </span>
                        </Link>
                    </div>
                    <ul>
                        <TabList tabList={OtherList} />
                    </ul>
                </div>
                <div className="tab-item">
                    <div>
                        <Link to="/">
                            همه محصولات دسته اسباب بازی
                            <span className="icon">
                                <IoIosArrowBack />
                            </span>
                        </Link>
                    </div>
                    <ul>
                        <TabList tabList={OtherList} />
                    </ul>
                </div>
                <div className="tab-item">
                    <div>
                        <Link to="/">
                            همه محصولات دسته سوپر مارکت
                            <span className="icon">
                                <IoIosArrowBack />
                            </span>
                        </Link>
                    </div>
                    <ul>
                        <TabList tabList={OtherList} />
                    </ul>
                </div>
                <div className="tab-item">
                    <div>
                        <Link to="/">
                            همه محصولات دسته زیبایی
                            <span className="icon">
                                <IoIosArrowBack />
                            </span>
                        </Link>
                    </div>
                    <ul>
                        <TabList tabList={OtherList} />
                    </ul>
                </div>
                <div className="tab-item">
                    <div>
                        <Link to="/">
                            همه محصولات دسته خانه
                            <span className="icon">
                                <IoIosArrowBack />
                            </span>
                        </Link>
                    </div>
                    <ul>
                        <TabList tabList={OtherList} />
                    </ul>
                </div>
                <div className="tab-item">
                    <div>
                        <Link to="/">
                            همه محصولات دسته کتاب
                            <span className="icon">
                                <IoIosArrowBack />
                            </span>
                        </Link>
                    </div>
                    <ul>
                        <TabList tabList={OtherList} />
                    </ul>
                </div>
                <div className="tab-item">
                    <div>
                        <Link to="/">
                            همه محصولات دسته ورزش
                            <span className="icon">
                                <IoIosArrowBack />
                            </span>
                        </Link>
                    </div>
                    <ul>
                        <TabList tabList={OtherList} />
                    </ul>
                </div>
                <div className="tab-item">
                    <div>
                        <Link to="/">
                            همه محصولات دسته بومی
                            <span className="icon">
                                <IoIosArrowBack />
                            </span>
                        </Link>
                    </div>
                    <ul>
                        <TabList tabList={OtherList} />
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default MegaNav;
