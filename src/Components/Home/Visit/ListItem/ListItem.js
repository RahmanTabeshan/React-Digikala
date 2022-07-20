import Item from "../Item/Item";

const ListItem = ({item}) => {
    return (
        <div className="flex flex-col bg-white p-4 w-full">
            <div className="flex flex-col items-start">
                <h3 className="text-444 text-base font-bold">{item.title}</h3>
                <p className="text-gray-500 text-xs pt-2">براساس بازدیدهای شما</p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-neutral-300 mt-2">
                {item.list.map(product => (
                    <Item key={product.id} item={product} />
                ))}
            </div>
        </div>
    );
}
 
export default ListItem;