// import React from 'react';

import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddBookMark,handleSpandTime}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('Blogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    },[])
    console.log(blogs);
    
    return (
        <div className="md:w-2/3">
            
               <h2 className="text-4xl font-bold"> Blogs : {blogs.length}</h2>
               {
                blogs.map(blg=><Blog key={blg.id} blogProp={blg} handleAddBookMark={handleAddBookMark} handleSpandTime={handleSpandTime}></Blog>)
               }
            
        </div>
    );
};

export default Blogs;