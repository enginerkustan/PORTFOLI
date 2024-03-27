import React from 'react'
import { FaArrowAltCircleDown} from 'react-icons/fa'
// import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import Logo from '../assets/Profile.png'

const ABOUT = () => {

    return (
        <div name='home' className='h-100 bg-[#0a192f] w-screen object-cover pt-20' style={{width:'100%'}}>
<div>
                <img src={Logo} alt="logo" style={{ width: '350px' ,height:'325px', margin:'auto', marginTop:'30px'}} className='rounded-full' />
            </div>
            {/* Container */}
            <div className='max-w[1000px] mx-auto px-8 pt-20 flex flex-col justify-center h-full '>
                <p className='text-3xl sm:text-4xl  text-amber-100 px-10'>Hi, My name is Engin Erkustan</p>
                <p className='text-3xl sm:text-3xl py-4 px-10  text-white'>

                    ....
                </p>
                <div>
                <Link to='work' className='flex text-white border-2 items-center px-4 py-3 ml-10 hover:bg-blue-600 hover:border-blue-600 min-w-32 cursor-pointer rounded-xl  border-indigo-500 float-end shadow-xl shadow-indigo-500/40' smooth={true} duration={500} style={{maxWidth:'13%'}} >View Works
                   
                        <FaArrowAltCircleDown className='ml-3 group  ' />                  
                </Link>
             
                </div>
            </div>
        </div>
    )
}
export default ABOUT