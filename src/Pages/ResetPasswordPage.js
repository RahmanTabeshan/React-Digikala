import { useLocation } from "react-router-dom";

const ResetPage = () => {
    const location = useLocation() ;
    console.log(location) ;
    return (
        <div>password reset</div>
    );
}
 
export default ResetPage;