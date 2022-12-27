import Layout from "../Components/Layout/Layout";
import Welcome from "../Components/Welcome/Welcome";

const WelcomePage = () => {
    return (
        <Layout>
            <main className="flex items-center justify-center p-14 pb-10 min-h-max">
                <Welcome />
            </main>
        </Layout>
    );
}
 
export default WelcomePage;