
import BackToTop from "./BackToTop/BackToTop";
import ContactUs from "./Contact-Us/ContactUs";
import Faq from "./Faq/Faq";
import Logo from "./Logo/Logo";
import Support from "./Support/Support";

const Footer = () => {
    return (
        <footer className="flex flex-col w-full bg-neutral-50 mt-5 p-8 border-t border-t-stone-300">
            <section className="flex justify-between items-center w-full">
                <Logo />
                <BackToTop />
            </section>
            <section className="flex flex-wrap gap-y-2 text-xs bold mt-2">
                <ContactUs />
            </section>
            <section className="flex flex-wrap justify-center gap-x-3 gap-y-4 my-8">
                <Faq />
            </section>
            <section className="flex flex-wrap gap-y-8 gap-x-4 md:gap-x-[63.3px] w-full justify-center">
                <Support />
            </section>
        </footer>
    );
};

export default Footer;
