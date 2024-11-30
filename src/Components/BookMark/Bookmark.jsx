

const Bookmark = ({addedBookmark}) => {
    const{title}=addedBookmark
    
    
    return (
        <div>
            
            <h1 className="text-2xl font-bold bg-slate-300 m-4 p-4">{title}</h1>
        </div>
    );
};

export default Bookmark;