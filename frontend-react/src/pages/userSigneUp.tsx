import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { userIcon,loginUser, cloesEyeIcon , eyeIcon } from '../assets';
import api from '../config/axios.config';
import { useNavigate } from 'react-router-dom';

function SigneUp() {
    const [username,setUsername] = useState('');
    const [email,setEamil] = useState('');
    const [password,setPassword] = useState('');
    const [showPassword,setShowPassword] = useState(false)
    let navigate = useNavigate();

    async function Login() {
        let status = await api.patch('user/',{username,email,password});
        if (status) {
            navigate('/login');
        }
        else{
            alert("something went wrong");
        }
    }
  return (
    <div className='bg-[url(https://img.freepik.com/free-vector/flat-design-people-business-training-illustrated_23-2148909671.jpg?t=st=1737824171~exp=1737827771~hmac=0f94c982928d70f8b428fbf1a3b684e27e590bc66294a0479879bea7c11c0214&w=996)] h-screen flex w-full justify-center items-center'>
        <div className='flex flex-col items-center bg-blue-100 px-7 py-6 rounded '>
            <div className='flex items-center text-center'>
                <h1 className='text-2xl font-semibold flex gap-2'> <img src={userIcon} alt="user icon" /> User Signe Up </h1>
            </div>
            <div title='Login form' className=''>
                <div className='py-1' >
                    <div>
                        <label htmlFor="Username">Username</label>
                        <div className='flex gap-1 py-2 px-1.5 rounded-md border-2 bg-white border-blue-700'>
                            <img src={loginUser} alt="user icon" />
                            <input  type="text" 
                            value={username} 
                            onChange={(e)=>setUsername(e.target.value)} 
                            placeholder='Enter Username' 
                            className='outline-none w-full' />
                        </div>
                    </div>
                </div>     
                <div className='py-1' >
                    <div>
                        <label htmlFor="Username">Eamil</label>
                        <div className='flex gap-1 py-2 px-1.5 rounded-md border-2 bg-white border-blue-700'>
                            <img src={loginUser} alt="user icon" />
                            <input  type="text" 
                            value={email} 
                            onChange={(e)=>setEamil(e.target.value)} 
                            placeholder='Enter Username' 
                            className='outline-none w-full' />
                        </div>
                    </div>
                </div> 
                <div className='py-1'>
                     <div>
                        <label htmlFor="Username">Passaword</label>
                        <div className='flex gap-1 py-2 px-1.5 rounded-md border-2 bg-white border-blue-700'>
                            <img src={showPassword? eyeIcon :cloesEyeIcon} alt="user icon" onClick={()=>setShowPassword(!showPassword)} />
                            <input  
                            type={showPassword?"text":"password"}
                            value={password} 
                            onChange={(e)=>setPassword(e.target.value)} 
                            placeholder='Enter Username' 
                            className='outline-none w-full' />
                        </div>
                    </div>
                </div>
                <div className='py-0.5'>
                    <Link to={'/login'} className='text-[10px] text-blue-600 underline '>Already have Account | <span className='text-blue-800 font-semibold'>Login</span>.</Link>
                    <button type="button"
                    onClick={()=>Login()} 
                    className='flex items-center justify-center text-white p-1 rounded-md w-full bg-blue-700 hover:bg-blue-800 transition delay-150 duration-300 ease-in-out'>
                        Create new Account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SigneUp