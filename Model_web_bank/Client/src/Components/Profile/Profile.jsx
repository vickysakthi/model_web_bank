import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './Profile.css'
import { BsFillPersonLinesFill ,BsFileZipFill} from "react-icons/bs";

const Profile = () => {

    const [data,setData] = useState([])
    const [Usertoken,setToken]= useState();
    const navigate=useNavigate();
    var url="http://localhost:4578"
    useEffect(()=>{

      if(! localStorage.getItem('UserToken')){
        navigate('/')
      }else{
        setToken(localStorage.getItem('UserToken'))
        axios({
          method:"get",
          url:url+"/api/user/profile",
          headers:{
              accept: 'application/json',
              token:Usertoken,
          }
      })
      .then(res=> {
          setData(res.data)
          // console.warn(data);
      } )
      .catch(err=>console.log(err))
    

      }
        
    },[Usertoken, data, navigate, url])
   
    // console.log(data);
    // const Userdata=

    const withdraw = () => {
      navigate('/user/withdraw')
    }

    const Deposite = () => {
      navigate('/user/deposite')
    }
const logOut= () => {
  localStorage.clear();
  navigate('/')
}

  return (
   
<div id="container">	
	
	<div className="product-details">
    <sapan className="color"></sapan>
	<h2 className="h" ><b>PROFILE</b></h2><br /><br />
  <h1> <sapan className="color">Name</sapan>:{data.Name}</h1><br /><br />
  <h1>   <sapan className="color">DOB</sapan>:{data.Dob}</h1><br /><br />
  <h1>   <sapan className="color">Email</sapan>:{data.Email}</h1><br /><br />
  <h1>   <sapan className="color">idtype</sapan>:{data.idtype}</h1><br /><br />
  <h1>   <sapan className="color">idNumber</sapan>:{data.idNumber}</h1><br /><br />
  <h1>   <sapan className="color">PhoneNumber</sapan>:{data.PhoneNumber}</h1><br /><br />
  <h1>   <sapan className="color">Address</sapan>:{data.Address}</h1><br /><br />
  <h1>   <sapan className="color">State</sapan>:{data.State}</h1><br /><br />
    {/* <h1>State:{data.State}</h1><br /><br />
    <h1>State:{data.State}</h1><br /><br /> */}
  <center>

{/* <div className="control"> */}
   
	
	<button className="btn-profile">
	 <span className="price">${data.Balance}</span>
   <span className="shopping-cart"><BsFillPersonLinesFill /></span>
   <span className="buy" onClick={withdraw} >With draw</span>
 </button>
 <br /><br />  
  <button className="btn-profile" onClick={Deposite} >
	 <span className="price">${data.Balance}</span>
   <span className="shopping-cart"><BsFileZipFill /></span>
   <span className="buy">Deposite</span>
 </button>
 
{/* </div> */}
  </center>
			
</div>
	
<div className="product-image">
	
	<img src="https://thumbs.dreamstime.com/b/west-bangal-india-october-axis-bank-logo-phone-screen-stock-image-242997128.jpgtps://images.unsplsh.com/photo-1565347878134-064b9185ced8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
	

<div className="info">
	<h2> Description</h2>
	<ul>
		<li><strong>AccNo - </strong>{data._id} </li>
		<li><strong>Dob - </strong>{data.Dob} </li>
		<li><strong>Email - </strong>{data.Email} </li>
		<li><strong>PhoneNumber - </strong>{data.PhoneNumber} </li>
		<li><strong>Gender - </strong>{data.Gender} </li>
		{
      data.Occupation?	<li><strong>Occupation - </strong>{data.Occupation} </li>:null
    }
		<li><strong>Balance - </strong>{data.Balance} </li>
		<li><strong>Address - </strong>{data.Address} </li>

		
	</ul><br /><br />
  <button className="btn-profile"  >
	 {/* <span className="price"></span> */}
   <span className="shopping-cart"><BsFileZipFill /></span>
   {/* /user/changepassword */}
   <span className="buy" onClick={()=>navigate('/user/profileUpdate')} >profile Update</span>
 </button>
 <br /><br />
  <button className="btn-profile"  >
	 {/* <span className="price"></span> */}
   <span className="shopping-cart"><BsFileZipFill /></span>
   {/* /user/changepassword */}
   <span className="buy" onClick={()=>navigate('/user/changepassword ')} >Change Password</span>
 </button>
 
 <br /><br />
  <button className="btn-profile co"  >
	 {/* <span className="price"></span> */}
   {/* <span className="shopping-cart"><BsFileZipFill /></span> */}
   {/* /user/changepassword */}
   <span className="buy" onClick={logOut} >Log Out</span>
 </button>
</div>
</div>

</div>
  )
}

export default Profile