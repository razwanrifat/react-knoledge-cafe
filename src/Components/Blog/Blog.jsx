import { FaRegBookmark } from 'react-icons/fa'; 
import { IoIosCheckmarkCircle } from "react-icons/io";

const Blog = ({blogProp,handleAddBookMark,handleSpandTime}) => {
    const {id, cover,title,author_img,author,posted_date,reading_time,hashtags}=blogProp
    return (
        <div>
            
            <img className="w-full my-2" src={cover} alt="" />
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <div><img className="w-14" src={author_img} alt="" /></div>
                    <div className="my-2">
                        <div>{author}</div>
                        <div>{posted_date}</div>
                    </div>
                </div>

                <div>{reading_time} min read <button onClick={()=>handleAddBookMark(blogProp)} ><FaRegBookmark /></button> </div>
            </div>
            <h3 className="text-4xl font-bold">{title}</h3>

            <p>
                {
                    hashtags.map((hstgs ,index)=><span key={index}> <a href="">#{hstgs}</a> </span>)
                }
            </p>
            <button onClick={()=>handleSpandTime(reading_time,id)} className='text-xs underline'>Mark As Read  </button>
            <div className="my-4"><hr /></div>
            
            
        </div>
    );
};

export default Blog;