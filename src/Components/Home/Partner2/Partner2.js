import { useEffect, useState } from "react";
import img1 from "../../../Image/Partner2/محصولات دسته اول.jpg";
import img2 from "../../../Image/Partner2/محصولات دسته دوم.jpg";

const Partner2 = () => {

    const [list,setList] = useState([]) ;

    useEffect(()=>{
        const newList = [
            {id:1 , title:"product1" , img:img1},
            {id:2 , title:"product1" , img:img2},
        ]
        setList(newList) ;
    },[])

    return (
        <section className="flex gap-y-4 gap-x-3 flex-wrap justify-center lg:justify-between w-98% lg:w-95% mt-5">
            {list.length ? (
                list.map(item => (
                    <div key={item.id} className="w-full md:w-[49%] rounded-2xl overflow-hidden" >
                        <img src={item.img} alt={item.title} />
                    </div>
                ))
            ) : (
                <div>Loading ...</div>
            )}
        </section>
    );
}
 
export default Partner2;