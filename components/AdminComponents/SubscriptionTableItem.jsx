import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'

const SubscriptionTableItem = ({email,mongoId,deleteEmail,date}) => {
  const emailDate = new Date(date);
  return (
    <tr className='bg-white border-b text-left'>
        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            {email?email:"No Email"}
        </th>
        <td className='px-6 py-4 hidden sm:block'>{emailDate.toDateString()}</td>
        <td onClick={()=>deleteEmail(mongoId)} className='px-6 py-4 cursor-pointer'>
          <Image width={20} height={20} alt='delete icon' src={assets.delete_icon} className=' hover:scale-125 transition-all duration-200'/>
        </td>
    </tr>
  )
}

export default SubscriptionTableItem