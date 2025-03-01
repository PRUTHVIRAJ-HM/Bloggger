import React from 'react'
import Image from 'next/image'
import {assets} from '@/Assets/assets'
import Link from 'next/link'


{/* if we want to display any thing in this card of the hero page we need to add the call to them in the BlogList.jsx file*/}

const BlogItem = ({title,glimpse,description,category,image,id}) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px]  bg-stone-100 border hover:shadow-[-7px_7px_0px_#000000]'>
      <Link href={`/blogs/${id}`}>
        <Image src={image} alt='' width={400} height={400} className='border-b border-black'/>
      </Link>
      <p className='ml-5 mt-5 px-2 py-1 inline-block bg-black text-white text-small rounded'>{category}</p>
      <div className="p-5">
        <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
        <p className='mb-3 text-sm tracking-tight text-gray-700' dangerouslySetInnerHTML={{__html:glimpse.slice(0,120)}}></p>                           
        <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center '>
          Read more<Image src={assets.arrow} alt='' width={12} className='ml-2'/>
        </Link>
      </div>
    </div>
  )
}


export default BlogItem