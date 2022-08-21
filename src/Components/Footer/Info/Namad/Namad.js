import rezi from "../../../../Image/Footer/Info/rezi.png" ;
import kasb from "../../../../Image/Footer/Info/kasbokar.png" ;
import Enamad from "../../../../Image/Footer/Info/enamad.png" ;
import Skeleton from "react-loading-skeleton" ;

const Namad = ({loading}) => {
    return (
        <div className="flex justify-between md:justify-end w-full h-max">
            {!loading && 
                <>
                    <div className="border border-neutral-300 rounded-lg p-4 mr-2 ">
                        <div className="w-[75px] h-[75px]">
                            <img src={rezi} alt="Logo" width="75" height="75" className="object-contain h-[75px]" />
                        </div>
                    </div>
                    <div className="border border-neutral-300 rounded-lg p-4 mr-2 ">
                        <div className="w-[75px] h-[75px]">
                            <img src={kasb} alt="Logo" width="75" height="75" className="object-contain h-[75px]" />
                        </div>
                    </div>
                    <div className="border border-neutral-300 rounded-lg mr-2 p-4 ">
                        <div className="w-[75px] h-[75px]">
                            <img src={Enamad} alt="Logo" width="75" height="75" className="object-contain h-[75px]" />
                        </div>
                    </div>
                </>
            }
            {loading && 
                Array(3).fill(1).map((item,index)=>(
                    <Skeleton key={index} width={109} height={109} containerClassName="flex mr-2" />
                ))
            }
        </div>
    );
}
 
export default Namad;