import { useState } from "react";
import { BsThreeDots } from "react-icons/bs" ;
import digi_jet from "../../../Image/digi_jet.png" ;
import digi_style from "../../../Image/digi_Style.png" ;
import digi_pay from "../../../Image/digi_pay.png" ;
import digi_mehr from "../../../Image/digi_mehr.png" ;
import mission from "../../../Image/mission.png" ;
import digi_plus from "../../../Image/digi_plus.png" ;
import digi_club from "../../../Image/digi_club.png" ;
import Item from "./Item/Item";

const Service = () => {

    const [Service , setService] = useState([
        {id:1 , title:"دیجیکالا جت" , path:"/" , img:digi_jet} ,
        {id:2 , title:"دیجی استایل" , path:"/" , img:digi_style} ,
        {id:3 , title:"دیجی پی" , path:"/" , img:digi_pay} ,
        {id:4 , title:"دیجیکالا مهر" , path:"/" , img:digi_mehr} ,
        {id:5 , title:"ماموریت ها" , path:"/" , img:mission} ,
        {id:6 , title:"دیجی پلاس" , path:"/" , img:digi_plus} ,
        {id:7 , title:"دیجی کلاب" , path:"/" , img:digi_club} ,
    ])

    const hello = ()=>{
        const newService = [...Service] ;
        console.log(setService(newService)) ;
    } /// for pervent error in netlify 

    return (
        <section 
            onClick={()=>hello()} 
            className="flex flex-wrap gap-y-4 justify-around w-full mt-4 px-4 lg:px-8 py-2"
        >
            {Service.map( item =>(
                <Item key={item.id} title={item.title} path={item.path} img={item.img} />
            ))}
            <div className="flex flex-col items-center w-1/4 lg:w-max cursor-pointer">
                <div className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-gray-200">
                    <BsThreeDots className="text-[26px]" />
                </div>
                <span className="text-sm pt-2">بیشتر</span>
            </div>
        </section>
    );
}
 
export default Service;