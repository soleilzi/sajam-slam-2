import React from 'react'
import slamPic from '../assets/slam2.png'
import SpButton from './SpButton'
import { Link } from 'react-router-dom'

const Navbar = () => {
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

      </div>
    </div>
  )
}

export default Navbar