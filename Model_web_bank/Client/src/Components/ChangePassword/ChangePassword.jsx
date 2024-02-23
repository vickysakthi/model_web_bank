import React,{useEffect,useState} from 'react'
import axios from 'axios'
// import './Deposite.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ChangePassword.css'
const Deposite = () => {
    const [token,setToken]=useState('')
    // const[balance,setBalance]=useState(0)
    // const [amount,setAmount]=useState(null)
const[password,setPassword]=useState('')
const[conformPassword,setConformPassword]=useState('')
var url="http://localhost:4578"
    useEffect(()=>{
        setToken( localStorage.getItem('UserToken'))
    }, [token])
// // console.log(balance);
     
    const Dep=()=>{        
            if (password!==conformPassword) {
                toast.error("password not maching")
            }else{
                axios({
                    method:"put",
                    url:url+"/api/user/ChangePassword",
                    data: {
                        Password:password
                    },
                    headers:{
                        accept: 'application/json',
                        token:token
                    }
                }).then(res=>{
                    console.log(res.data);
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
                })
                .catch(err=> toast.error("email & password not maching"))
            }
    }


  return (
    // <div>
    //     <h1>Deposite</h1>
    //     <label>Amount</label>
    //     <input type="number" id="amount" name="amount" placeholder="enter the Amount" onChange={(e)=>setAmount(e.target.value)} />
        
    //     <button onClick={Dep} >Deposite</button>
    // </div>
    <center>

    <div className="Password" >
    <div className="Password-container">
        <div className="brand-logoP"></div>
        <center>
            <h1>Change-Password</h1>
        </center>

        <div className="inputs">
        <center>
          <input type="password" placeholder="ENTER YOUR PASSWORD"  onChange={(e)=>setPassword(e.target.value)}  />
          <input type="password" placeholder="CONFORM YOUR PASSWORD"  onChange={(e)=>setConformPassword(e.target.value)}  />
          <button type="submit" onClick={Dep} className="button withdrawBtn">Submit</button>
        </center>
        </div>
   </div>
   <ToastContainer />
  </div>
    </center>
  )
}

export default Deposite