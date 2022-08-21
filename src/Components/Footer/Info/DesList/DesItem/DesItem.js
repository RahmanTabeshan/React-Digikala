const DesItem = ({title,des,display}) => {
    return (
        <>
            <h1 className={`text-sm mb-2 font-bold ${display ? "flex" : "hidden"} `}>{title}</h1>
            <p  className={`text-xs text-neutral-500 leading-6 mb-3 ${display ? "flex" : "hidden"} `}>{des}</p>
        </>
    );
}
 
export default DesItem;