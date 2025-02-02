import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { MenuIcon } from '../assets';
import MNCIcon from '../assets/icons/MNUIcon';
const Header = () => {
  let [ShowSideNav,setSideNav] = useState(true);
  function handleClick(){
    alert("menu click")
  }
  return (
    <header className='w-full flex justify-center'>
        <nav className='w-full h-16 bg-zinc-300 flex justify-between items-center p-1'>
          <div className='hover:border-1'>
            <Link to={'/dashboard'} onClick={handleClick}>
              <MNCIcon width='50px' height='50px'/>
            </Link>
          </div>
          <div className=''>
            <h1 className='text-xl font-semibold'>Todo's</h1>
          </div>
          <div className='flex gap-3 items-center'>
          <div className=''>
            <ul className='hidden md:flex gap-3 text-md text-gray-700'>
              <li className='hover:text-black duration-75' ><Link to={"#"}>Product</Link></li>
              <li className='hover:text-black duration-75' ><Link to={"#"}>Carrer</Link></li>
              <li className='hover:text-black duration-75' ><Link to={"#"}>Services</Link></li>
              <li className='hover:text-black duration-75' ><Link to={"#"}>Contact us</Link></li>
            </ul>
          </div>
          <div className=''>
            <button className='bg-blue-600 px-2 py-1 rounded-lg text-white '>
                <h2 className='font-semibold '>Log Out</h2>
            </button>
          </div>
          </div>
        </nav>
    </header>
  )
}

export default Header