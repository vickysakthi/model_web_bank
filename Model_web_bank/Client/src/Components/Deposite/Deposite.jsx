import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './Deposite.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
const Deposite = () => {
    const [token,setToken]=useState('')
    const[balance,setBalance]=useState(0)
    const [amount,setAmount]=useState(null)
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
console.log(balance);
     
    const Dep=()=>{
        if(amount>0){
            // console.log(typeof balance);
            const am=Number(amount)
            // console.log(typeof balance);
            const result=balance+am
            // console.log(result);
            
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
                toast.success('🦄 successfully Deposited!!!', {
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
            .catch(err=>
                // console.log(err)
                toast.error("email & password not maching")
                
                )

        }else{
            toast.error("🎆enter a valid amount",{
                className:"toast-error"
            })
        }
        setAmount("")
    }


  return (
    // <div>
    //     <h1>Deposite</h1>
    //     <label>Amount</label>
    //     <input type="number" id="amount" name="amount" placeholder="enter the Amount" onChange={(e)=>setAmount(e.target.value)} />
        
    //     <button onClick={Dep} >Deposite</button>
    // </div>
    <div className="Deposite" >
    <div className="Deposite-container">
        <div className="brand-logoD"></div>
        <center>
    
            <div className="brand-title">Deposit</div>
            <p><b>Balance:</b> {balance}</p>
        </center>
        <div className="inputs">
           
          <label><b>AMOUNT</b></label>
          <input type="number" placeholder="ENTER YOUR AMOUNT" value={amount} onChange={(e)=>setAmount(e.target.value)}  />
          <button type="submit" onClick={Dep} className="button withdrawBtn">Deposite</button>
        </div>
   </div>
   <ToastContainer />
  </div>
  )
}

export default Deposite