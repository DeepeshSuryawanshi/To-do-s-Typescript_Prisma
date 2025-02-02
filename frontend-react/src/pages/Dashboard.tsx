import React, { useState } from 'react';
import { Header, SideNav } from '../components';


function Dashboard() {
  let [show,setShow] = useState(false);
  return (
    <div className='w-full h-screen'>
        <Header/>
        <div>
          <div title='Side navbar div' >
            <SideNav show={show}/>
          </div>
        </div>
    </div>  
  )
}

export default Dashboard