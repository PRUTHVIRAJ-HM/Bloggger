import Link from 'next/link';
import Image from 'next/image';
import { assets } from '@/Assets/assets';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center px-4">
        <h1 className='text-[18px] sm:text-[68px] font-bold text-gray-900 mb-4'>4💀4</h1>

        <h1 className="text-[18px] sm:text-[50px] font-bold text-gray-800 mb-4">
        Oops! Page Not Found
        </h1>
        <p className="text-[14px] sm:text-[18px] text-gray-600 mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/">
          <button className="bg-white sm:text-[22px] border-2 border-black  text-black font-medium px-6 py-3 rounded-full">
            Go back to home
          </button>
        </Link>
      </div>
    </div>
  );
}