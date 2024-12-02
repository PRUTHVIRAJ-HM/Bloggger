'use client'
import BlogTableItem from '@/components/AdminComponents/BlogTableItem'
import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
const page = () => {


  const [blogs,setBlogs] = useState([]);
  const fetchBlogs = async()=>{
    const response = await axios.get(`/api/blog`);
    setBlogs(response.data.blogs);
  }

  const deleteBlog = async(mongoId)=>{
    const response = await axios.delete(`/api/blog`,{
      params:{
        id:mongoId
      }
    })
    toast.success(response.data.msg);
    fetchBlogs();
  }

  useEffect(()=>{
    fetchBlogs();
  },[]);
  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16' >
      <h1>All Blogs</h1>
      <div className='realtive h-[80vh] max-w[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
        <table className='w-full test-sm text-gray-500'>
          <thead className='text-sm text-gray-700 uppercase text-center bg-gray-50'>
            <tr>
              <th scope='col' className='hidden sm:block px-6 py-3'>
                Author Name
                </th>
              <th scope='col' className=' px-6 py-3'>
                Blog Title
              </th>
              <th scope='col' className='px-6 py-3'>
                Date
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>

            </tr>
          </thead>
          <tbody>
            {blogs.map((item,index)=>{
              return <BlogTableItem key={index} mongoId={item._id} title={item.title} author={item.author} authorImg={item.authorImg} date={item.date} deleteBlog={deleteBlog}/>
            })} 
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default page