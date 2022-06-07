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
import { useEffect, useRef, useState } from "react";
import TabListNav from "./TabListNav/TabListNav";
import DigitalLists from "./DigitalLists";
import OtherList from "./OtherList" ;
import TabItem from "./TabItem/TabItem";
import NavItem from "./NavItem/NavItem"

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
                    <NavItem
                        title="کالای دیجیتال"
                        path="/"
                        icon={<AiOutlineLaptop />}
                        className="a-hover"
                    />
                    <NavItem
                        title="خودرو،ابزار و تجهیزات صنعتی"
                        path="/"
                        icon={<TbTool />}
                    />
                    <NavItem
                        title="مد و پوشاک"
                        path="/"
                        icon={<RiTShirt2Line />}
                    />
                    <NavItem
                        title="اسباب بازی،کودک و نوزاد"
                        path="/"
                        icon={<MdChildCare />}
                    />
                    <NavItem
                        title="کالای سوپرمارکتی"
                        path="/"
                        icon={<BsBasket />}
                    />
                    <NavItem
                        title="زیبایی و سلامت"
                        path="/"
                        icon={<TbHeartbeat />}
                    />
                    <NavItem
                        title="خانه و آشپزخانه"
                        path="/"
                        icon={<TbSofa />}
                    />
                    <NavItem
                        title="کتاب،لوازم تحریر و هنر"
                        path="/"
                        icon={<TbNotebook />}
                    />
                    <NavItem
                        title="ورزش و سفر"
                        path="/"
                        icon={<MdOutlineSportsSoccer />}
                    />
                    <NavItem 
                        title="محصولات بومی و محلی"
                        path="/"
                        icon={<MdOutlineLocalFlorist />}
                    />
                </ul>
            </div>
            <div className='mega-nav-tabs' ref={navTab}>
                <TabItem 
                    path="/"
                    title="همه محصولات دیجیتال"
                    tabListNav= {<TabListNav tabList={DigitalLists} />}
                />
                <TabItem
                    path="/"
                    title="همه محصولات دسته خودرو"
                    tabListNav= {<TabListNav tabList={OtherList} />}
                />
                <TabItem
                    path="/"
                    title="همه محصولات دسته پوشاک"
                    tabListNav= {<TabListNav tabList={OtherList} />}
                />
                <TabItem
                    path="/"
                    title="همه محصولات دسته اسباب بازی"
                    tabListNav= {<TabListNav tabList={OtherList} />}
                />
                <TabItem
                    path="/"
                    title="همه محصولات دسته سوپرمارکت"
                    tabListNav= {<TabListNav tabList={OtherList} />}
                />
                <TabItem
                    path="/"
                    title="همه محصولات دسته زیبایی"
                    tabListNav= {<TabListNav tabList={OtherList} />}
                />
                <TabItem
                    path="/"
                    title="همه محصولات دسته خانه"
                    tabListNav= {<TabListNav tabList={OtherList} />}
                />
                <TabItem
                    path="/"
                    title="همه محصولات دسته کتاب"
                    tabListNav= {<TabListNav tabList={OtherList} />}
                />
                <TabItem
                    path="/"
                    title="همه محصولات دسته ورزش"
                    tabListNav= {<TabListNav tabList={OtherList} />}
                />
                <TabItem
                    path="/"
                    title="همه محصولات دسته بومی و محلی"
                    tabListNav= {<TabListNav tabList={OtherList} />}
                />
            </div>
        </div>
    );
};

export default MegaNav;
