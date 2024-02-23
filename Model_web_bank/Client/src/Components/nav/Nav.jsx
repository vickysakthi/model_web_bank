/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import './nav.css'
const   Nav = () => {
    const[click,setClick]=useState(false);
    const navigation = useNavigate()
    const handelClick=()=>{
        setClick(!click)
    }

  return (
    <div className="header" >
    <a href="https://github.com/vickysakthi" alt="jshcg"> <h1>Model AXIS Bank</h1></a>
         <ul className={click?'nav-menu active':'nav-menu'}>
             <li>
                 <a href="" alt="google" onClick={()=>navigation('/admin/login')} >
                 Administration 
                 </a>
             </li>
             {/* <li>
                 <a href="http://google" alt="google" >
                     home
                 </a>
             </li>
             <li>
                 <a href="http://google" alt="google" >
                     home
                 </a>
             </li> */}
             
         </ul>
         <div className="hamburger" onClick={handelClick} >
             {
                 click?(<FaTimes  size={20} style={{color: 'red'}}  />):( <FaBars size={20} style={{color: '#fff'}}  />)
             }

         </div>
 </div>
  )
}

export default Nav