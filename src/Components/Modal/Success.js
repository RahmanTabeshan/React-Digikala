const Success = ({ message }) => {
    return (
        <div className="flex flex-col max-w-[250px] w-full absolute top-4 left-1/2 -translate-x-1/2 bg-green-400 p-2 rounded-lg z-10">
            <div className="text-sm text-green-900 text-center my-2">
                {message}
            </div>
            <span className="h-1 bg-green-700 animate-width"></span>
        </div>
    );
};

export default Success;
