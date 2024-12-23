'use client'
import React ,{ useEffect, useState } from 'react';
import {assets} from '@/Assets/assets';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

const page = ({params}) => {

    const [data,setData]=useState(null);


    const fetchBlogData = async ()=> {
        const response = await axios.get('/api/blog',{
            params:{
                id:params.id
            }
        })
        setData(response.data);

    }



    useEffect(()=>{
        fetchBlogData();
    },[])

  return ( data?<>
    <div className='bg-stone-200 py-5 px-5 md:px-12 lg:px28'>
        <div className='flex justify-between items-center'>
            <Link href={'/'}>
                <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'/>
            </Link>
            <Link href='/admin/login'>
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Write Blog<Image src={assets.arrow} alt=''/></button>
      </Link>
        </div>
        <div className='text-center my-24'>
            <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
            <Image className='mx-auto mt-6 border border-color-white rounded-full' src={data.authorImg} width={60} height={60} alt=' '/>
            <p className='mt-1 pb-2 text-[22px] max-w-[740px] mx-auto'>{data.author}</p>
        </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image className='border-4 border-slate-500 rounded' src={data.image} width={1280} height={720} alt=''/>
        <h1 className='my-5 text-[24px] font-semibold'>Summary</h1>
        <p className='text-[18px] text-justify'>{data.glimpse}</p>
  
        
        <div className='blog-content' dangerouslySetInnerHTML={{__html:data.description}}></div>

        <h3 className='my-5 text-[26px] font-semibold'>Conclusion</h3>
        <p className='text-[18px] text-justify'>{data.conclusion}</p>

        <div className='my-24 text-center'>
            <p className='text-black font-semibold my-4'>Share it on Social Media</p>
            <div className='flex gap-2 justify-center'>
                <Image src={assets.facebook_icon} width={50} alt=''/>
                <Image src={assets.twitter_icon} width={50} alt=''/>
                <Image src={assets.googleplus_icon} width={50} alt=''/>
            </div>
        </div>
    </div>
    <Footer/>
    </>:<> </>
  )
}


export default page