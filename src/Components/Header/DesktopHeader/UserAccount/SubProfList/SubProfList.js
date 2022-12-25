import { Link } from "react-router-dom";
import { BsBasket3 } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import {FaRegComment} from "react-icons/fa";

const SubProfList = () => {
    const list = [
        { id: 1, title: "سفارش ها", path: "/ptofile/orders/", icon: BsBasket3 },
        { id: 2, title: "لیست ها", path: "/ptofile/lists/", icon: BiHeart },
        {
            id: 3,
            title: "دیدگاه ها",
            path: "/ptofile/comments/",
            icon: FaRegComment,
        },
    ];
    return list.map((item) => (
        <li className="px-4" key={item.id}>
            <Link to={item.path} className="flex items-center">
                <div className="w-[24px] h-[24px] mr-1">
                    {<item.icon className="w-full h-3/4" />}
                </div>
                <div className="flex flex-grow justify-start items-center pr-4 py-2">
                    <div className="text-[15px] leading-[2.15]">
                        {item.title}
                    </div>
                </div>
            </Link>
        </li>
    ));
};

export default SubProfList;
