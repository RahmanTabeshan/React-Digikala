
import BackToTop from "./BackToTop/BackToTop";
import Logo from "./Logo/Logo";

const Footer = () => {
    return (
        <footer className="flex flex-col w-full bg-neutral-50 mt-5 py-8 px-4 border-t border-t-stone-300">
            <section className="flex justify-between w-full px-4">
                <Logo />
                <BackToTop />
            </section>
            <section>

            </section>
        </footer>
    );
};

export default Footer;
