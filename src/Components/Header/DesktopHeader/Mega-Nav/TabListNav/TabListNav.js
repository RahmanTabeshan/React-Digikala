import TabNavItem from "./TabNavItem/TabNavItem";

const TabListNav = ({ tabList }) => {
    return (
        tabList.map(item=>(
            <TabNavItem
                key={item.id}
                className={item.className}
                path={item.path}
                title={item.title}
            />
        ))
    );
};

export default TabListNav;
