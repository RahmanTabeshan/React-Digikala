import Item from "./Item/Item";
import Mehr from "../../../../Image/Footer/Services/digiMehr.svg" ;
import Magnet from "../../../../Image/Footer/Services/magnet.svg" ;
import Jet from "../../../../Image/Footer/Services/jet.svg" ;
import Style from "../../../../Image/Footer/Services/digistyle.svg" ;
import Pay from "../../../../Image/Footer/Services/digipay.svg" ;
import Mag from "../../../../Image/Footer/Services/digimag.svg" ;
import Bus from "../../../../Image/Footer/Services/digikala-business.svg" ;
import Fid from "../../../../Image/Footer/Services/fidibo.svg" ;
import Club from "../../../../Image/Footer/Services/digiclub.svg" ;
import Plus from "../../../../Image/Footer/Services/digiplus.svg" ;
import Com from "../../../../Image/Footer/Services/komoda.svg" ;
import Pin from "../../../../Image/Footer/Services/pindo.svg" ;
import Next from "../../../../Image/Footer/Services/diginext.svg" ;
import Gan from "../../../../Image/Footer/Services/ganjeh.svg" ;
import Exp from "../../../../Image/Footer/Services/digiexpress.svg" ;
import Aff from "../../../../Image/Footer/Services/digiaffiliate.svg" ;

const ServicesList = () => {
    const list = [
        {id:1,title:"digimehr",img:Mehr},
        {id:2,title:"magnet",img:Magnet},
        {id:3,title:"digijet",img:Jet},
        {id:4,title:"digistyle",img:Style},
        {id:5,title:"digipay",img:Pay},
        {id:6,title:"digimag",img:Mag},
        {id:7,title:"digibusiness",img:Bus},
        {id:8,title:"fidibo",img:Fid},
        {id:9,title:"digiclub",img:Club},
        {id:19,title:"digiplus",img:Plus},
        {id:11,title:"komoda",img:Com},
        {id:12,title:"pindo",img:Pin},
        {id:13,title:"diginext",img:Next},
        {id:14,title:"ganje",img:Gan},
        {id:15,title:"digiexpress",img:Exp},
        {id:16,title:"digiaffiliate",img:Aff},
    ]

    return (
        list.map(item=>(
            <Item key={item.id} item={item} />
        ))
    );
}
 
export default ServicesList;