import AppDetail from "./App/AppDetail";
import BackToTop from "./BackToTop/BackToTop";
import ContactUs from "./Contact-Us/ContactUs";
import Faq from "./Faq/Faq";
import Info from "./Info/Info";
import Logo from "./Logo/Logo";
import Support from "./Support/Support";

const Footer = () => {

    
    return (
        <footer className="flex flex-col w-full bg-neutral-50 mt-5 py-8 px-4 border-t border-t-stone-300">
            <section className="flex justify-between items-center w-full">
                <Logo />
                <BackToTop />
            </section>
            <ContactUs />
            <Faq />
            <Support />
            <AppDetail />
            <Info />
        </footer>
    );
};

export default Footer;
