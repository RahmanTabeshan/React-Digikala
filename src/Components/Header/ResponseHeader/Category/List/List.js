import ListItem from "./ListItem/ListItem";

const List = ({List}) => {
    return (
        <>
            {List.map(item =>(
                <ListItem key={item.id} item={item} />
            ))}
        </>
    );
}
 
export default List;