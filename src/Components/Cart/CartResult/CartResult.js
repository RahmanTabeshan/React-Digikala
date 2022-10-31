import { money_format } from "../../../Lists/Functions";

const CartResult = ({Cart}) => {

    const sumProducts = Cart.reduce((sum,item)=>{
        return sum+item.quantity ;
    },0)

    const sumPrice = Cart.reduce((sum,item)=>{
        return sum+(item.price*item.quantity) ;
    },0);

    const percentPrice = Cart.reduce((sum,item)=>{
        return sum+((item.price - (item.price*(parseInt(item.percent)/100)))*item.quantity) ;
    },0)

    return (
        <div className="w-95% md:w-[25%] md:min-w-[295px] border border-blue-500 rounded-lg px-2 py-4 h-max">
            <div className="flex justify-between px-4 text-sm">
                <div>تعداد محصولات :</div>
                <div>{sumProducts}</div>
            </div>
            <div className="flex justify-between px-4 mt-5 text-sm">
                <div>قیمت اصلی محصولات : </div>
                <div className="ltr">{money_format(sumPrice+"0")} IR</div>
            </div>
            <div className="flex justify-between px-4 mt-5 text-sm">
                <div>سود شما از این خرید : </div>
                <div className="ltr">{money_format((sumPrice - percentPrice).toFixed()+"0")} IR</div>
            </div>
            <span className="block m-auto w-95% border-t border-t-blue-500 my-5"></span>
            <div className="flex justify-between px-4 mt-5 text-sm">
                <div>مبلغ پرداختی : </div>
                <div className="ltr">{money_format(percentPrice+"0")} IR</div>
            </div>
        </div>
    );
}
 
export default CartResult;