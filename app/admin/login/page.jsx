'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import { toast } from 'react-toastify'

const Login = () => {
  const router = useRouter()
  const [pin, setPin] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // You can change this PIN to whatever you want
    const ADMIN_PIN = '561209'

    if (pin === ADMIN_PIN) {
      router.push('/admin/addProduct')
      toast.success('Access granted!')
    } else {
      toast.error('Invalid PIN')
      setPin('')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="text-center mb-8">
          <Image src={assets.logo} width={180} height={180} alt="Logo" className="mx-auto"/>
          <h2 className="mt-6 text-2xl font-bold">Enter Admin PIN</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Enter PIN"
              className="w-full p-2 border rounded text-center text-2xl tracking-widest"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              maxLength={6}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login