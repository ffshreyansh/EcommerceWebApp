import React from 'react'
import logo from '../img/logoipsum-225.svg'

function Footer() {
  return (
    
<footer className="bg-white rounded-lg shadow m-4">
    <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0">
                <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PeelipKart</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
                </li>
               
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© <a href="/" className="hover:underline">PeelipKart™</a>. Made with ❤ by <a href='https://shreyanshkr.com' target={'_blank'}>Shreyansh</a>.</span>
    </div>
</footer>


  )
}

export default Footer