import TabItem from "../TabItem/TabItem";

const TabList = ({ tabList }) => {
    return (
        tabList.map(item=>(
            <TabItem
                key={item.id}
                className={item.className}
                path={item.path}
                title={item.title}
            />
        ))
    );
};

export default TabList;
