import React,{useState} from 'react'
import './Register.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
const Register = () => {
   
        const[name,setName]=useState();
        const [dob,setDob]=useState();
        const[email,setEmail]=useState();
        const [phoneNumber,setPhoneNumber]=useState();
        const [gender,setGender]=useState();
        const [Occupation,setOccupation]=useState();
        const [idtype,setIdtype]=useState();
        const[idNumber,setIdnumber]=useState();
        const[address,setAddress]=useState();
        const[state,setState]=useState();
        const[password,setPassword]=useState();
        const[conformPassword,setConformPassword]=useState();

        var url="http://localhost:4578"
        const navigate=useNavigate();
        const Reg=()=>{
          if(!name || !dob || !email || !phoneNumber ||!gender  ||!idtype ||!idNumber ||!address ||!state ||!password ||!conformPassword){
            toast.error("Fill the required fields")
          }else{
            if(password !==conformPassword ){
                toast.error(" password not maching")
            }else{
                axios.post(url+'/api/user/createAccount',{
                    Name:name,
                    Dob:dob,
                    Email:email,
                    PhoneNumber:phoneNumber,
                    Gender:gender,
                    Occupation:Occupation,
                    Password:password,
                    idtype:idtype,
                    idNumber:idNumber,
                    Address:address,
                    State:state
                 }).then(res=>{
                    console.log(res.data);
                    toast.success('🦄 successfully Registered!!!', {
                        className:"toast-success",
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                        navigate('/user/login')


                 }).catch(err=>{
                    console.log(err.message);
                    toast.error("Email is alreadyTaken")
                 })
            }
            
          }
        };
  return (
    // <center>
<div className="main">

    <div className="container">
      <center>

    <header>Registration</header>
      </center>
    <div className="formfield" >
        <div className="form first">
            <div className="details personal">
              <span className="title">Personal Details</span>

                <div className="fields">
                    <div className="input-field">
                        <label>Full Name <span style={{color: 'red'}} >*</span></label>
                        <input type="text" placeholder="Enter your name" onChange={e=>setName(e.target.value)}  required />
                    </div>

                    <div className="input-field">
                        <label>Date of Birth <span style={{color: 'red'}} >*</span></label>
                        <input type="date" placeholder="Enter birth date" required onChange={e=>setDob(e.target.value)} />
                    </div>

                     <div className="input-field">
                        <label>Email <span style={{color: 'red'}} >*</span></label>
                        <input type="email" placeholder="Enter your email" required onChange={e=>setEmail(e.target.value)}  />
                    </div>

                    <div className="input-field">
                        <label>Mobile Number <span style={{color: 'red'}} >*</span></label>
                        <input type="number" placeholder="Enter mobile number" onChange={e=>setPhoneNumber(e.target.value)}  required />
                    </div>

                    <div className="input-field">
                        <label>Gender <span style={{color: 'red'}} >*</span></label>
                        <select onChange={e=>setGender(e.target.value)}  required>
                            <option disabled selected>Select gender</option>
                            <option value="Male" >Male</option>
                            <option value="Female" >Female</option>
                            <option value="Other" >Others</option>
                        </select>
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
                        <label>ID Type <span style={{color: 'red'}} >*</span></label>
                        <input type="text" placeholder="Enter ID type" onChange={e=>setIdtype(e.target.value)}  required />
                    </div>

                    <div className="input-field">
                        <label>ID Number <span style={{color: 'red'}} >*</span></label>
                        <input type="number" placeholder="Enter ID number" onChange={e=>setIdnumber(e.target.value)}  required />
                    </div>

                    <div className="input-field">
                        <label>Address <span style={{color: 'red'}} >*</span></label>
                        <input type="text" placeholder="Enter your Address" onChange={e=>setAddress(e.target.value)}  required />
                    </div>

                    <div className="input-field">
                        <label>State <span style={{color: 'red'}} >*</span></label>
                        <input type="text" placeholder="Enter your state" onChange={e=>setState(e.target.value)}  required />
                    </div>

                    <div className="input-field">
                        <label>Password <span style={{color: 'red'}} >*</span></label>
                        <input type="Password" placeholder="Enter your Password" onChange={e=>setPassword(e.target.value)}  required />
                    </div>

                    <div className="input-field">
                        <label>Confirm Password <span style={{color: 'red'}} >*</span></label>
                        <input type="Password" placeholder="Confirm your Password" onChange={e=>setConformPassword(e.target.value)}  required />
                    </div>
                </div>

                <button className="nextBtn" onClick={Reg} >
                    <span className="btnText">Register</span>
                   
                </button>
             
            </div> 
        </div>
    </div>
    
</div>
<ToastContainer />
    </div>
    // </center>
  )
}

export default Register