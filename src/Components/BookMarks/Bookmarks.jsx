import Bookmark from "../BookMark/Bookmark";


const Bookmarks = ({addBookMark,SpandTime}) => {
    console.log('Bk Marks',addBookMark);
    console.log('SpandTime bk marks : ',{SpandTime});
    
    
    return (
        <div className="md:w-1/3 my-3 mx-3">
            <h1 className="text-4xl font-bold bg-slate-200 rounded-2xl">Spand Time : {SpandTime}</h1>
            <div className="border-2 rounded-md my-3">
            <h1 className="text-4xl font-bold ">Book-Mark :{addBookMark.length} </h1>
            <hr />
            {
                addBookMark.map(blg=><Bookmark key={blg.id} addedBookmark={blg} ></Bookmark>)
                
            }
            </div>
        </div>
    );
};

export default Bookmarks;