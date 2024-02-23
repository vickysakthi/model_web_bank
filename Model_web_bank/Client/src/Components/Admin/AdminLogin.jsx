import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsFillPersonLinesFill ,BsFileZipFill} from "react-icons/bs";
//import admin from '../assets/admin.png'

const Login = () => {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate()
    var url="http://localhost:4578"
    const userLog = () => {
        // alert("cknjkcn")
        axios.post(url+'/api/admin/Login',{
            Email:email,
            Password:password
        },[])
        .then(res=>{
            console.log(res);
           if (res.data) {
            localStorage.setItem('Admin',res.data)
           
            setTimeout(function(){
        navigate('/admin/user/profile')
                    }, 2000);

                    toast.success('Successfully login', {
                        className:"toast-success",
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
           }
        })
        .catch(err => {
            console.log(err.message);
            toast.error("email & password not matching")
        })
    }
    const acc=()=>{
        navigate('/user/register')
    }
  return (
    <div className="limiter">
    <div className="container-login100">
        <div className="wrap-login100">
            <div className="login100-pic js-tilt" >
                <img className="AdminLog" src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-administration-flat-icon-png-image_3700207.jpg" alt="IMG" />
            </div>

            <form className="login100-form validate-form">
                <span className="login100-form-title">
                  <h2>Admin Login</h2>  
                </span>

                <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                    <input className="input100" type="text" name="email" placeholder="Email" onChange={e=>setEmail(e.target.value)} required/>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                        <BsFillPersonLinesFill className="fa fa-envelope" aria-hidden="true"></BsFillPersonLinesFill>
                    </span>
                </div>

                <div className="wrap-input100 validate-input" data-validate = "Password is required">
                    <input className="input100" type="password" name="pass" placeholder="Password"  onChange={e=>setPassword(e.target.value)} required />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                        {/* <i className="fa fa-lock" aria-hidden="true"></i> */}
                        <BsFileZipFill className="fa fa-lock" />
                    </span>
                </div>
                
                <div className="container-login100-form-btn">
                    <button type="button" className="login100-form-btn" onClick={userLog} >
                        Login 
                    </button>
                </div>

          
                <div className="container-login100-form-btn">
                    <button onClick={acc} className="login100-form-btn">
                        Create  Account
                    </button>
                </div>
            </form>
        </div>
    </div>
    <ToastContainer ></ToastContainer>
</div>
  )
}

export default Login