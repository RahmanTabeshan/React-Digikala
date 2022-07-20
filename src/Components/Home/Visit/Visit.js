import ListItem from "./ListItem/ListItem";

const Visit = ({visitList}) => {

    if(!visitList) return(<div>Loading...</div>)
    return (
        <section className="grid grid-cols-1 mobile:grid-cols-2 lg:!grid-cols-4 justify-center gap-px w-rsp rounded-xl border border-stone-300 bg-neutral-300 overflow-hidden mt-5">
            {visitList.map(item => (
                <ListItem key={item.id} item={item} />
            ))}
        </section>
    );
}
 
export default Visit;