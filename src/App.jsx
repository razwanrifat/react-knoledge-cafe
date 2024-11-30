
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/BookMarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [SpandTime, setSpandTime]=useState(0)
  const handleSpandTime=(readingTime, id)=>{
    console.log('handleSpandTime is clicked. readingTime: ', readingTime,'id: ',id);
    const newReadingTime=SpandTime+readingTime;
    setSpandTime(newReadingTime);

    //remove that Book Marks from list ,If "Marke as read" is clicked. 
    const reamainBookMarks=addBookMark.filter(bkmark=>bkmark.id!==id)
    setaddBookMark(reamainBookMarks)
  }
  // console.log('total sapan: ',SpandTime);
  
  
  const [addBookMark, setaddBookMark]=useState([]);
  const handleAddBookMark=(AddedBlog)=>{
    // console.log(AddedBlog);
    const newAddedBookMark=[...addBookMark,AddedBlog]
    setaddBookMark(newAddedBookMark);
    
  }
  // console.log('Added At Set',addBookMark);
  

  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddBookMark={handleAddBookMark} handleSpandTime={handleSpandTime}></Blogs>
        <Bookmarks addBookMark={addBookMark} SpandTime={SpandTime} ></Bookmarks>
      </div>
      
     
    </>
  )
}

export default App
