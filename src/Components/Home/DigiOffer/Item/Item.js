import {Link} from "react-router-dom" ;
const Item = ({items}) => {
    return (
        <div className="flex flex-col">
            {items.map(item=>(
                <Link 
                    key={item.id} 
                    to={item.path}
                    className="flex flex-col offer items-center p-4"
                >
                    <div className="w-max p-3 flex items-center justify-center rounded-full bg-gray-100">
                        <div className="relative w-[60px] h-[60px] after:after">
                            <img src={item.img} alt={item.title} />
                        </div>
                    </div>
                    <div className="text-sm text-444 mt-3">{item.title}</div>
                </Link>
            ))}
        </div>
    );
}
 
export default Item;