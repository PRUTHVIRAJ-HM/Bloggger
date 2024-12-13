'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'


const page = () => {
  const [image,setImage] = useState(false);
  const [data,setData]=useState({
    title:"",
    glimpse:"",
    description:"",
    category:"Startup",
    author:"",
    authorImg:"/author_img.png"   //the path of the file might need to change if it doesnt work we just remove the /Assets part from the path
  })
  const onChangeHandler=(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}));
    console.log(data);
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title',data.title);
    formData.append('glimpse',data.glimpse);
    formData.append('description',data.description);
    formData.append('category',data.category);
    formData.append('author',data.author);
    formData.append('authorImg',data.authorImg);
    formData.append('conclusion',data.conclusion);
    formData.append('image',image);
    const response = await axios.post('/api/blog',formData); //API Endpoint 
    if(response.data.success){
      toast.success(response.data.msg);
    }
    else{
      toast.error("Error");
    }
  }
return(
    <>
      <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16 '>
        <p className='text-xl'>Upload the Thumbnail</p>
        <label htmlFor="image">
          <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={70} alt=' '></Image>
        </label>

        {/* Image insertion section */}
        <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />

        {/* Author insertion section */}
        <p className='text-xl mt-4'>Author Name</p>
        <input name='author' onChange={onChangeHandler} value={data.author} type="text"placeholder='Write the name of the author' required  className='w-full sm:w-[500px] mt-4 px-4 py-3 border'/>

        {/* Blog title insertion section */}
        <p className='text-xl mt-4'>Blog Title</p>
        <input name='title' onChange={onChangeHandler} value={data.title} type="text"placeholder='Write the title of the blog' required  className='w-full sm:w-[500px] mt-4 px-4 py-3 border'/>

        {/* Blog glimpse insertion section */}
        <p className='text-xl mt-4'>Blog Glimpse</p>
        <input name='glimpse' onChange={onChangeHandler} value={data.glimpse} type="text"placeholder='Write a short summary of the blog' required  className='w-full sm:w-[500px] mt-4 px-4 py-3 border'/>

        {/* Blog description insertion section */}
        <p className='text-xl mt-4'>Blog Description</p>
        <textarea className='w-full sm:w-[500px] mt-4 px-4 py-3 border text-justify' name='description' onChange={onChangeHandler} value={data.description} type="text" placeholder='Write the content here' required />

        {/* Blog conclusion insertion section */}
        <p className='text-xl mt-4'>Blog Conclusion</p>
        <textarea className='w-full sm:w-[500px] mt-4 px-4 py-3 border' name='conclusion' onChange={onChangeHandler} value={data.conclusion} type="text" placeholder='Write the conclusion here' required/>

        {/* Blog category insertion section */}
        <p className='text-xl mt-4'>Blog Category</p>
        <select name="category" onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500'>
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br/>
        {/* Add button section */}
        <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>Add</button>
      </form>
    </>
  )
}


export default page