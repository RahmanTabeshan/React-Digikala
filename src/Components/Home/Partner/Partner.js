
const Partner = ({list}) => {

    return (
        <section className="flex gap-y-4 gap-x-3 flex-wrap lg:flex-nowrap justify-center lg:justify-between w-rsp mt-5">
            {list.length ? (list.length >= 4 ? (
                list.map(item =>(
                    <div key={item.id} className="w-[47.5%] lg:w-[24%] rounded-xl overflow-hidden">
                        <img src={item.img} alt={item.title} className="w-full h-full" />
                    </div>
                ))
            ) : (
                list.map(item => (
                    <div key={item.id} className="w-full m:w-[49%] rounded-2xl overflow-hidden" >
                        <img src={item.img} alt={item.title} className="w-full" />
                    </div>
                ))
            )): (
                <div>Loading ...</div>
            )}
        </section>
    );
}
 
export default Partner;