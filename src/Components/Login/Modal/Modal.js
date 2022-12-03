const Modal = ({message}) => {
    return (
        <div className="fixed flex flex-col left-1/2 bg-black top-0 text-white rounded-xl p-2 -translate-x-1/2 z-[1]">
            <p className="max-w-60 text-xs leading-6 my-2">
                {message}
            </p>
            <div className="h-1 bg-white opacity-70 my-2 animate-width"></div>
        </div>
    );
};

export default Modal;
