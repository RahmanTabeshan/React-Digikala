import ListItem from "./ListItem/ListItem";

const Visit = ({visitList}) => {

    if(!visitList) return(<div>Loading...</div>)
    return (
        <section className="flex flex-wrap justify-between gap-y-0.5 w-rsp rounded-xl border border-stone-300 bg-neutral-200 overflow-hidden mt-5">
            {visitList.map(item => (
                <ListItem key={item.id} item={item} />
            ))}
        </section>
    );
}
 
export default Visit;