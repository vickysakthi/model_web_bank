import React,{useState,useEffect} from 'react'
// import './Register.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
const Register = () => {
        const [token,setToken]=useState('')
        const[name,setName]=useState();
        const [dob,setDob]=useState();
        const [phoneNumber,setPhoneNumber]=useState();
        const [Occupation,setOccupation]=useState();
        const [idtype,setIdtype]=useState();
        const[idNumber,setIdnumber]=useState();
        const[address,setAddress]=useState();
        const[state,setState]=useState();
        const navigate=useNavigate()
        var url="http://localhost:4578"
useEffect(()=>{
    setToken( localStorage.getItem('UserToken'))

    if(! localStorage.getItem('UserToken')){
        navigate('/')
    }

},[navigate, token]


)
// console.log(token);
        const Reg=()=>{
             axios({
                method:"put",
                url:url+"/api/user/update",
                data:{
                    Name:name,
                        Dob:dob,
                        PhoneNumber:phoneNumber,
                        Occupation:Occupation,
                        idtype:idtype,
                        idNumber:idNumber,
                        Address:address,
                        State:state
                }, 
                      headers:{
                            accept: 'application/json',
                            token:token
                        }
             })
             
             .then(res=>{
                // console.log(res.data);
                if (res.data) {
                    toast.success('🦄 successfully Updated!!!', {
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
             }).catch(err=>{
                toast.error("server Slow Please try latter")
             })
          
        };
        // console.log(token);
  return (
    // <center>
<div className="main">

    <div className="container">
      <center>

    <header>Profile-Update</header>
      </center>
    <form action="#">
        <div className="form first">
            <div className="details personal">
              <span className="title">Personal Details</span>

                <div className="fields">
                    <div className="input-field">
                        <label>Full Name </label>
                        <input type="text" placeholder="Enter your name" onChange={e=>setName(e.target.value)}   />
                    </div>

                    <div className="input-field">
                        <label>Date of Birth</label>
                        <input type="date" placeholder="Enter birth date"  onChange={e=>setDob(e.target.value)} />
                    </div>
                    <div className="input-field">
                        <label>Mobile Number </label>
                        <input type="number" placeholder="Enter mobile number" onChange={e=>setPhoneNumber(e.target.value)}   />
                    </div>

                    <div className="input-field">
                        <label>Occupation</label>
                        <input type="text" placeholder="Enter your occupation" onChange={e=>setOccupation(e.target.value)}   />
                    </div>
                </div>
            </div>

            <div className="details ID">
                <span className="title">Identity Details</span>

                <div className="fields">
                    <div className="input-field">
                        <label>ID Type </label>
                        <input type="text" placeholder="Enter ID type" onChange={e=>setIdtype(e.target.value)}   />
                    </div>

                    <div className="input-field">
                        <label>ID Number </label>
                        <input type="number" placeholder="Enter ID number" onChange={e=>setIdnumber(e.target.value)}   />
                    </div>

                    <div className="input-field">
                        <label>Address </label>
                        <input type="text" placeholder="Enter your Address" onChange={e=>setAddress(e.target.value)}   />
                    </div>

                    <div className="input-field">
                        <label>State </label>
                        <input type="text" placeholder="Enter your state" onChange={e=>setState(e.target.value)}   />
                    </div>

                    {/* <div className="input-field">
                        <label>Password <span style={{color: 'red'}} >*</span></label>
                        <input type="Password" placeholder="Enter your Password" onChange={e=>setPassword(e.target.value)}  required />
                    </div>

                    <div className="input-field">
                        <label>Conform Password <span style={{color: 'red'}} >*</span></label>
                        <input type="Password" placeholder="Conform your Password" onChange={e=>setConformPassword(e.target.value)}  required />
                    </div> */}
                </div>

                <button type="button" className="nextBtn" onClick={Reg} >
                    <span className="btnText">Update 🍁</span>
                    {/* <i class="uil uil-navigator"></i> */}
                </button>
             
            </div> 
        </div>

       
            
    
    </form>
</div>
<ToastContainer />
    </div>
    // </center>
  )
}

export default Register