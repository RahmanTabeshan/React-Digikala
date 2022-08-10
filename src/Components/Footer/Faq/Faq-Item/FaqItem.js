import { Link } from "react-router-dom";

const FaqItem = ({item}) => {
    const {id,title,img} = item ;

    return (
        <Link 
            to={`/faq/question/${id}/`}
            className="flex flex-col justify-center items-center w-[150px] grow"
        >
            <div>
                <img src={img} alt={title} />
            </div>
            <div className="text-xs mt-2">
                <p>{title}</p>
            </div>
        </Link>
    );
}
 
export default FaqItem;