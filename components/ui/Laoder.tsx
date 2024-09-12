const Loader = () => {
    return (
        <div className="animate-pulse flex gap-12 flex-col justify-start items-start">

            <div className="h-4 bg-neutral-700 rounded w-1/4 mt-12"/>

            <div className="h-10 bg-neutral-700 rounded w-1/3"/>
            <div className="h-40 bg-neutral-700 rounded w-5/6"/>
        </div>
    );
};

export default Loader;