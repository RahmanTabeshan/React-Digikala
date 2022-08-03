import { IoIosArrowUp } from "react-icons/io";

const BackToTop = () => {
    const topHandler = () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        document.body.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    
    return (
        <button
            className="flex items-center border text-stone-500 border-stone-300 rounded-lg p-3 transition-all duration-500 hover:bg-stone-300 hover:text-white"
            onClick={() => topHandler()}>
            <span className="text-sm">بازگشت به بالا</span>
            <IoIosArrowUp className="mr-2" />
        </button>
    );
};

export default BackToTop;
