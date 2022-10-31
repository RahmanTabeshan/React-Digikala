import DesktopHeader from "../Header/DesktopHeader/DesktopHeader";
import Footer from "../Footer/Footer";
import { useMediaQuery } from "react-responsive";
import ResponseHeader from "../Header/ResponseHeader/ResponseHeader";

const Layout = ({ children }) => {

    const desktop = useMediaQuery({ minWidth: 1024 });

    return (
        <>
            {desktop ? <DesktopHeader /> : <ResponseHeader />}
            {children}
            <Footer />
        </>
    );
};

export default Layout;
