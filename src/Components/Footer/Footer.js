import AppDetail from "./App/AppDetail";
import BackToTop from "./BackToTop/BackToTop";
import ContactUs from "./Contact-Us/ContactUs";
import CopyRight from "./CopyRight/CopyRight";
import Faq from "./Faq/Faq";
import Info from "./Info/Info";
import Logo from "./Logo/Logo";
import Services from "./Services/Services";
import Support from "./Support/Support";

const Footer = () => {

    
    return (
        <footer className="flex flex-col w-full bg-neutral-50 mt-5 pt-8 border-t border-t-stone-300">
            <div className="px-4">
                <section className="flex justify-between items-center w-full">
                    <Logo />
                    <BackToTop />
                </section>
                <ContactUs />
                <Faq />
                <Support />
                <AppDetail />
                <Info />
                <CopyRight />
            </div>
            <Services />
        </footer>
    );
};

export default Footer;
