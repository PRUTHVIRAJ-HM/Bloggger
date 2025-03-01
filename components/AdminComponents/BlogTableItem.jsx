import React from 'react'
import Image from 'next/image'
import { assets } from "@/Assets/assets";

const BlogTableItem = ({authorImg,title,author,date,deleteBlog,mongoId}) => {
    const BlogDate=new Date(date);
  return (
    <tr className='bg-white border-b text-left'>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap '>
            <Image width={40} height={40} alt='author image' src={authorImg?authorImg:assets.profile_icon}/>
            <p>{author?author:"No Author"}</p>
        </th>
        <td className='px-6 py-4'>
            {title?title:"No Title"}
        </td>
        <td className='px-6 py-4'>
            {BlogDate.toDateString()}
        </td>
        <td  onClick={()=>deleteBlog(mongoId)} className='px-6 py-4 font-xl text-red-600 font-bold cursor-pointer'>
            <Image width={20} height={20} alt='delete icon' src={assets.delete_icon} className=' hover:scale-125 transition-all duration-200'/>
        </td>

    </tr>
  )
}

export default BlogTableItem