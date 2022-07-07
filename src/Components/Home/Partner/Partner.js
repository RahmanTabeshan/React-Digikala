import { useEffect, useState } from "react";
import number1 from "../../../Image/Partner/number1.jpg" ;
import number2 from "../../../Image/Partner/number2.jpg" ;
import number3 from "../../../Image/Partner/number3.jpg" ;
import number4 from "../../../Image/Partner/number4.jpg" ;

const Partner = () => {

    const [items,setItems] = useState([]) ;

    useEffect(()=>{
        const list = [
            {id:1 , title : "number1" , img:number1},
            {id:2 , title : "number2" , img:number2},
            {id:3 , title : "number3" , img:number3},
            {id:4 , title : "number4" , img:number4},
        ]
        setItems(list) ;
    },[])

    if(!items) return <div>Loading ...</div>
    return (
        <section className="flex flex-wrap lg:flex-nowrap gap-4  justify-center lg:justify-between w-98% lg:w-95% mt-5 " >
            {items.map(item =>(
                <div key={item.id} className="w-[47.5%] lg:w-[24%] rounded-xl overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full" />
                </div>
            ))}
        </section>
    );
}
 
export default Partner;