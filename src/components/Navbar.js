import React from 'react'
import logo from '../img/logoipsum-225.svg';

function Navbar() {
  return (
    <div className='bg-white'>
        <header>
            <nav className='flex items-center justify-between p-6  lg:px-20'>
                <div>
                    <a href="#">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className='flex font-medium'>
                    <a href="" className='px-10'>
                        Products
                    </a>
                    <a href="" className='px-10'>
                        About
                    </a>
                    <a href="" className='px-10'>
                        Contact
                    </a>
                    
                </div>
                <a href='#' className='flex items-center rounded-md hover:text-logoColor'>
                    <p className='pr-2 font-regular'>Admin</p>
                    <i className="fa fa-arrow-right"></i>
                </a>
            </nav>
        </header>
    </div>
  )
}

export default Navbar