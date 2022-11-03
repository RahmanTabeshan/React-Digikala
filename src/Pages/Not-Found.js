import { useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import { scrollToTop } from "../Lists/Functions";

const NotFound = () => {

    useEffect(() => {
        scrollToTop();
    }, []);
    
    return (
        <Layout>
            <main>
                <h1>صفحه مورد نظر وجود ندارد </h1>
            </main>
        </Layout>
    );
};

export default NotFound;
