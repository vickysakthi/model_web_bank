import axios from 'axios';
import React from 'react'
import './Admin.css'
import {useNavigate} from 'react-router-dom'
const Admin = () => {
    const [data,setData]=React.useState([]);
    const navigate=useNavigate()
    var url="http://localhost:4578"
React.useEffect(()=>{
    if(! localStorage.getItem('Admin')){
        navigate('/')
    }
    axios.get(url+'/api/user/profiles')
    .then((response)=>{
        setData(response.data);
    },[])
    
})

  return (
    <div>
    
    {
        data?data.map((item,i)=>{
            return (
<ul className="tilesWrap">
        <li>
            <h2>{i+1}</h2>
            <h3>{item.Name}</h3>
            <p><b>AccNo</b>: <span className="AccNO"> {item._id}</span></p>
            <p><b>Email </b>:<br></br>{item.Email}</p>
            <p><b>Phone_No: </b><br></br>{item.PhoneNumber}</p>
            <p><b>Address </b>:<br></br>{item.Address}</p>
            <p><b>Dob: </b><br></br>{item.Dob}</p>
            <p><b>IdNumber </b>:<br></br>{item.idNumber}</p>
            <p><b>Balance </b>:<br></br>{item.Balance}</p>
            {/* <button>Read more</button> */}
        </li>
    </ul>
            )
        }):null
    }
</div>
  )
}

export default Admin