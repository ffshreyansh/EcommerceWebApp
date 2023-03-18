import React, { useState } from 'react';
import logo from '../img/logoipsum-225.svg'

function Modal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-gray bg-opacity-80 flex items-center justify-center'>
        
      <div className='bg-white p-6 rounded-md w-1/3 h-fit'>
      <i class="fa-regular fa-circle-xmark float-right" onClick={onClose}></i>
        <h2 className='text-xl text-center font-medium mb-4'>Admin Login</h2>
        
        <form onSubmit={(e) => {
          e.preventDefault();
          // handle login
          onClose();
        }}>
          <div className='mb-4'>
            <label htmlFor='email' className='block font-medium mb-2'>Email</label>
            <input type='email' id='email' name='email' required className='border rounded-md px-3 py-2 w-full' />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block font-medium mb-2'>Password</label>
            <input type='password' id='password' name='password' required className='border rounded-md px-3 py-2 w-full' />
          </div>
          <div className='flex mt-10'>
          <button type='submit' className='bg-logoColor px-12 py-2 rounded-md'>Login</button>
          <button type='button' onClick={onClose} className='mr-4 bg-gray text-white px-10 py-2 rounded-md ml-2'>Cancel</button>
            
          </div>
        </form>
      </div>
    </div>
  );
}

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
          <div className=''>
              <header>
                  <nav class="bg-white px-6 sm:px-10 py-2.5 dark:bg-gray-900 fixed w-full z-0 top-0 left-0 dark:border-gray-600">
                      <div class="container flex flex-wrap items-center justify-between mx-auto">
                          <a href="/" class="flex items-center">
                              <img src={logo} class="h-6 mr-3 sm:h-9" alt="logo"/>
                              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PeelipKart</span>
                          </a>
                          <div class="flex md:order-2">
                              <button type='button' onClick={() => setIsModalOpen(true)} class="text-white bg-logoColor hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Admin Login</button>
                              <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                                  <span class="sr-only">Open main menu</span>
                                  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                              </button>
                          </div>
                          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                              <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                  <li>
                                      <a href="/" class="block py-2 pl-3 pr-4  bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">Home</a>
                                  </li>
                                
                                  <li>
                                      <a href="/about" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                                  </li>
                                  <li>
                                      <a href="/contact" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </nav>
              </header>
          </div>

    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default Navbar;
