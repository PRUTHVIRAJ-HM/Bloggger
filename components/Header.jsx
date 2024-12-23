import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { assets } from '@/Assets/assets';
import Link from 'next/link';
import { toast } from 'react-toastify';



const Header = () => {
  const [email,setEmail] = useState("");
  const onSubmitHandler =  async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("email",email);
    const response = await axios.post('/api/email',formData);
    if(response.data.success){
      toast.success(response.data.msg);
      setEmail("");
    }
    else{
      toast.error("Subscription Failed !")
    }

  }


  return(
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        <Image src={assets.logo} width={180} height={180} alt='' className='w-[130px] sm:w-auto'/>
        
        <Link href='/admin/login'>
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Write Blog<Image src={assets.arrow} alt=''/></button>
        </Link>
      </div>
      <div className='text-center my-8 bg-stone-200 py-8 px-2 rounded-xl'>
        <h1 className='text-3xl sm:text-5xl font-medium'>Hey There!</h1>
        <p className='mt-10 max-w-[740px] m-auto text-sm sm:text-[20px] leading-8 font-medium text-slate-700'>Discover insights, stories, and practical advice to stay ahead in your niche. Start exploring and level up your knowledge today!</p>
        <form onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border bg-white rounded-sm border-black shadow-[-7px_7px_0px_#000000]'>
          <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email"  placeholder='Enter your e-mail' className='pl-4 outline-none'/>
          <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Header