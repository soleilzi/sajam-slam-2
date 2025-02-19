import React, { useState, useRef, useEffect } from 'react'
import slamPic from '../assets/slam2.png'
import SpButton from './SpButton'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOpen = () => {
    setOpen(!open);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if(dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if(open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }

  }, [open]);

  return (
    <div className='bg-white border-b-[3px] border-slamBlue-50'>
      <div className='p-4 flex items-center justify-center'>

        <div className='max-sm:hidden'>
          <Link to={'/about'}>
            <SpButton label="About" />
          </Link>
        </div>

        <Link to={'/'}>
          <img src={slamPic} className='h-20 mx-6 hover:scale-125 transition duration-200' />
        </Link>

        <div className='max-sm:hidden'>
          <Link to={'/teams'}>
            <SpButton label="Teams" />
          </Link>
        </div>

        <div className='sm:hidden relative ml-4' ref={dropdownRef}>
          <button className='py-2 px-4 ml-4 bg-orange-400 rounded-md hover:bg-orange-300 transition duration-150'
            onClick={handleOpen}
          >
            ☰
          </button>
          {open && (
            <div className='absolute top-full left-0 w-32 bg-white border border-slamBlue-50 rounded-md shadow-lg z-50'>
              <ul className='flex flex-col'>
              <Link to="/" onClick={() => setOpen(false)}>
                <li className="block w-full px-4 py-2 hover:bg-gray-200">
                  Home
                </li>
              </Link>

              <Link to="/" onClick={() => setOpen(false)}>
                <li className="block w-full px-4 py-2 hover:bg-gray-200">
                  Teams
                </li>
              </Link>

              <Link to="/" onClick={() => setOpen(false)}>
                <li className="block w-full px-4 py-2 hover:bg-gray-200">
                  About
                </li>
              </Link>
              </ul>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default Navbar