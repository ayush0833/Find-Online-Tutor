import React, { useState} from 'react'
import "./Register.css";
import axios from "axios";
import{Link,useNavigate } from "react-router-dom";

export default function Register() {
    const history=useNavigate();

    const [user,setUser]=useState({
        name:"",
        email:"",
        phone:"",
        ids:"",
        profession:"",
        password:"",
        repassword:""
    })
    const handleChange=e=>{
       
        const {name,value}=e.target;
        setUser({...user,[name]:value})
    }
    const Register=()=>{
        const {name,email,password,profession,repassword}=user;
        if(name && email&& password && profession &&(password===repassword)){
            alert("posted");
            axios.post("http://localhost:9802/register",user)
            .then(res=>console.log(res));
            history("/login");
        }
        else{
            alert("Invalid input");
        }
        
        
    }
  return (
    <div id="logindiv">
    <div className='login'>
        {console.log("user",user)}
        <h1>Register</h1>
        <input type="text" name="name" onChange={handleChange} value={user.name} placeholder='Full Name' required></input>
        <input type="text" name="email" onChange={handleChange} value={user.email} placeholder='Email' required></input>
        <input type="number" name="phone" onChange={handleChange} value={user.phone} placeholder="Mobile Number" required></input>
        <select name="profession" style={{marginLeft:"6%"}}onChange={handleChange} value={user.profession} className="form-control" required>
            <option name="profession" value={""}>Select</option>
            <option name="profession" value={"Student"}>Student</option>
            <option name="profession" value={"Teacher"}>Teacher</option>
        </select>
        <input type="password" name="password" onChange={handleChange} value={user.password} placeholder='Enter the Password'></input>
        <input type="password" name="repassword" onChange={handleChange} value={user.repassword} placeholder='Re-Enter the Password'></input>
        <div className='button' onClick={Register}>Register</div>
        <div>or</div>
        <div className='button'><Link id="link"to="/login" >Login</Link></div>
    </div></div>
  )
}
