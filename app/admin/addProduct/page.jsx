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
    description:"",
    category:"Startup",
    author:"Alex Bennet",
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
    formData.append('description',data.description);
    formData.append('category',data.category);
    formData.append('author',data.author);
    formData.append('authorImg',data.authorImg);
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
      <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl'>Upload the Thumbnail</p>
        <label htmlFor="image">
          <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={70} alt=' '></Image>
        </label>
        <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
        <p className='text-xl mt-4'>Blog Title</p>
        <input name='title' onChange={onChangeHandler} value={data.title} type="text"placeholder='Type here' required  className='w-full sm:w-[500px] mt-4 px-4 py-3 border'/>
 
        <p className='text-xl mt-4'>Blog Description</p>
        <textarea className='w-full sm:w-[500px] mt-4 px-4 py-3 border' name='description' onChange={onChangeHandler} value={data.description} type="text" placeholder='Write the content here' required />

        <p className='text-xl mt-4'>Blog category</p>
        <select name="category" onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500'>
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br/>
        <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>Add</button>
      </form>
    </>
  )
}


export default page