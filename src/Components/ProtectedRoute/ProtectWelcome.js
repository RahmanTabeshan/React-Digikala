import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectWelcome = ({path,children}) => {
    const datafrom = useSelector((state) => state.Transfer);
    if (!datafrom) {
        return <Navigate to={path} replace={true} />;
    }
    return children ;
}
 
export default ProtectWelcome;