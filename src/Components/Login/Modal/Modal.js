const Modal = () => {
    return (
        <div className="fixed flex flex-col left-1/2 bg-black top-0 text-white rounded-xl p-2 -translate-x-1/2">
           <p className="w-60 text-xs leading-6">
           حساب کاربری با مشخصات وارد شده وجود ندارد. لطفا از شماره تلفن همراه
            برای ساخت حساب کاربری استفاده نمایید.
           </p>
           <div className="h-1 bg-white opacity-50 animate-width"></div>
        </div>
    );
}
 
export default Modal;