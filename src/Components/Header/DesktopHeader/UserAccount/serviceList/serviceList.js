import Wallet from "../../../../../Image/Profile/profile-wallet.svg";
import Coin from "../../../../../Image/DigiClub/club-point.svg";
import { Link } from "react-router-dom";

const serviceList = () => {
    const service = [
        { id: 1, title: "Wallet", des:"کیف پول" , point:"تومان" , img: Wallet, path: "/profile/" },
        { id: 2, title: "digi club", des:"دیجی کلاب" , point:"امتیاز" , img: Coin, path: "/digiClub/" },
    ];
    return service.map((item) => (
        <li className="px-4" key={item.id}>
            <Link to={item.path} className="flex items-center">
                <div className="w-[24px] h-[24px] mr-1">
                    <img src={item.img} alt={item.title} className="object-cover w-full" />
                </div>
                <div className="flex flex-grow justify-between items-center pr-4 py-2">
                    <div className="text-[15px] leading-[2.15]">{item.des}</div>
                    <div className="flex items-center">
                        <span className="pl-1">0</span>
                        <span className="text-xs text-neutral-500">{item.point}</span>
                    </div>
                </div>
            </Link>
        </li>
    ));
};

export default serviceList;
