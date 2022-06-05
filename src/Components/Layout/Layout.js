import DesktopHeader from "../Header/DesktopHeader/DesktopHeader";
import Footer from "../Footer/Footer";
import { useMediaQuery } from "react-responsive";
import TabletHeader from "../Header/TabletHeader/TabletHeader";

const Layout = ({ children }) => {

    const desktop = useMediaQuery({minWidth:1025}) ;
    const tablet = useMediaQuery({minWidth:500,maxWidth:1024}) ;
    const mobile = useMediaQuery({minWidth:0 ,maxWidth:500 }) ;

    return (
        <>
            {desktop?<DesktopHeader /> : tablet ? <TabletHeader/> : mobile ? <h1>mobile</h1>  : ""}
                {children}
            <Footer />
        </>
    );
};

export default Layout;
