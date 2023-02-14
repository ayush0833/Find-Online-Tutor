import React ,{useState} from 'react'
import axios from "axios";
import "./Login.css";
import {Link,useNavigate} from "react-router-dom";
export default function Forget() {
    const history=useNavigate();
    const [user,setUser]=useState({
        
        email:"",
        password:"",
       
    })
    const handleChange=e=>{
       
        const {name,value}=e.target;
        setUser({...user,[name]:value})
    }
    const change =()=>{
        axios.post("http://localhost:9802/change",user).then(res=>{
            if(res.data.user){
                history("/")
            }
            alert(res.data.message);
        });

        
    }
  return (
    <div className='login'>
        
        <h1>change password</h1>
        <input type="text" name="email" onChange={handleChange} value={user.email} placeholder='"Enter the Email'></input>
        <input type="password" name="password" onChange={handleChange} value={user.password} placeholder='"Enter the new Password'></input>
        <div className='button'onClick={change}>Change</div>
        <div>or</div>
        <div className='button'><Link id="link"to="/login" >Login</Link></div>
    </div>
    
  )
}
