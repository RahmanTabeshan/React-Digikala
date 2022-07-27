import {Link} from "react-router-dom" ;
import styles from "./Item.module.css";
const Item = ({items}) => {
    return (
        <div className="flex flex-col">
            {items.map(item=>(
                <Link 
                    key={item.id} 
                    to={item.path}
                    className={`flex justify-between p-4 ${styles.link}`}
                >
                    <div className="w-max p-3 flex items-center justify-center rounded-full bg-gray-100">
                        <div className="relative w-[60px] h-[60px] after:after">
                            <img src={item.img} alt={item.title} />
                        </div>
                    </div>
                    <div className="flex items-center text-2xl font-extrabold text-blue-400 px-2">{item.id}</div>
                    <div className={`flex items-center w-[200px] h-[84px] text-xs font-bold text-444 ${styles.container_title}`}>
                        <p>
                            {item.title}،
                            {item.title}،
                            {item.title}،
                            {item.title}،
                            {item.title}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
 
export default Item;