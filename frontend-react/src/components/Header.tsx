import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { MenuIcon } from '../assets';

const Header = () => {
  let [ShowSideNav,setSideNav] = useState(true);

  return (
    <header className='w-full'>
        <nav className='w-full h-16 py-10 px-20 flex justify-between flex-row items-center text-white bg-red-600'>
           <div onClick={()=>alert("menu click")}>
            <img src={MenuIcon} alt="MenuIcon" />
           </div>
          <Link to={"/dashboard"} >
            <h1 className='text-2xl font-semibold'>
              TODO's
            </h1>
          </Link>

          <ul className='flex flex-row gap-4'>
            <li><Link to={'/'} className='text-lg font-semibold'>login</Link></li>
            <li><Link to={'/sign-up'} className='text-lg font-semibold'>Sign-up</Link></li>
          </ul>

        </nav>
    </header>
  )
}

export default Header