const SiteLoading = () => {
    return (
        <div className="flex items-center justify-center gap-1 fixed inset-0 w-full h-screen z-50 ltr" > 
            <span className="w-2 h-2 rounded-full animate-fade" ></span>
            <span className="w-2 h-2 rounded-full animate-fade2" ></span>
            <span className="w-2 h-2 rounded-full animate-fade3" ></span>
        </div>
    );
}
 
export default SiteLoading;