import Item from "../Item/Item";

const ListItem = ({item}) => {
    return (
        <div className="flex flex-col bg-white p-4 w-full mobile:w-[49.9%] lg:!w-[24.9%]">
            <div className="flex flex-col items-start">
                <h3 className="text-444 text-base font-bold">{item.title}</h3>
                <p className="text-gray-500 text-xs pt-2">براساس بازدیدهای شما</p>
            </div>
            <div className="flex flex-wrap justify-between gap-y-0.5 bg-gray-200 mt-2">
                {item.list.map(product => (
                    <Item key={product.id} item={product} />
                ))}
            </div>
        </div>
    );
}
 
export default ListItem;