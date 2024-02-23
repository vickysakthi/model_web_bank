import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Withdraw.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
const Withdraw = () => {
    const [token,setToken]=useState('')
    const[balance,setBalance]=useState(0)
    const [amount,setAmount]=useState(0)
    const [data,setData]=useState()
    const navigate=useNavigate()
var url="http://localhost:4578"
    useEffect(()=>{
        setToken( localStorage.getItem('UserToken'))

        if(! localStorage.getItem('UserToken')){
            navigate('/')
        }

        if(token){
         axios({
             method:"get",
             url:url+"/api/user/profile",
             headers:{
                 accept: 'application/json',
                 token:token
             }
         })
         .then(res=>{
            setData(res.data)
            if(data){
                setBalance(parseInt(data.Balance))
            }

        })
         .catch(err=>console.log(err))
     }
    }, [token, data, navigate, url])
    // console.log(data.Balance);
    const withdraw=()=>{
        if(amount>0){
            if(amount<=balance){
                const am=Number(amount)
                const result=balance-am
                axios({
                    method:"put",
                    url:url+"/api/user/update",
                    data: {
                       Balance: result
                    },
                    headers:{
                        accept: 'application/json',
                        token:token
                    }
                }).then(res=>{
                    console.log(res.data);
                    toast.success('🦄 successfully withdraw!!!', {
                        className:"toast-success",
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                })
                .catch(err=> toast.error("server crashed"))
            }
            else{
                toast.error("Account Balance is low")
            }
        }else{
            toast.error("enter a valid amount")
        }
    }
    // console.log(data.Balance);
  return (

    <div className="withdraw" >
    <div className="withdraw-container">
        <div className="brand-logo"></div>
        <center>
    
            <div className="brand-title">WITHDRAW </div>
            {/* <div >Total : {data.Balance} </div> */}
            {/* <h1>Total : {data.Balance}</h1> */}
            <p><b>Balance</b> :{balance}</p>
        </center>
        <div className="inputs">
           
          <label><b>AMOUNT</b></label>
          <input type="number" placeholder="ENTER YOUR AMOUNT" onChange={(e)=>setAmount(e.target.value)}  />
          <button type="submit" onClick={withdraw} className="button withdrawBtn">withdraw</button>
        </div>
   </div>
   <ToastContainer />
  </div>

  )
}

export default Withdraw