import React, { useEffect, useState } from 'react'
import {Link,NavLink} from "react-router-dom";
export default function Navbar() {
    const [user,setUser]=useState();
  useEffect(()=>{
    loadUser();
  })
const loginPro=()=>{
        localStorage.clear()
        document.getElementById("logOut").style.display="none";
        document.getElementById("login").style.display="inline-block";
        document.getElementById("imal").style.display="none";
        document.getElementById("namel").style.display="none";
        document.getElementById("namel").innerHTML="";
}

  const loadUser=async()=>{
     setUser(await JSON.parse(localStorage.getItem('login-user')));
    if(user){
        document.getElementById("logOut").style.display="inline-block";
        document.getElementById("login").style.display="none";
        document.getElementById("namel").innerHTML=user.name;
    }
    else{
        document.getElementById("logOut").style.display="none";
        document.getElementById("login").style.display="inline-block";
    }
  }
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

            <div class="container">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className='nav-item'>
                        <img src="https://www.tutorup.com/wp-content/uploads/2021/08/TutorUp-logo_green.png" width="130vw" height="50vh"alt="Logo"></img>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/" id="homeBtn" style={{fontSize:"22px"}}className='nav-link'><i className='fa fa-home' style={{color:"grey",fontSize:"25px",marginLeft:"5%"}}></i></NavLink>
                    </li>
                    <li class="nav-item">
                         <NavLink to="/Students" id="Cust" style={{fontSize:"22px"}}className='nav-link'>Tutors</NavLink>
                    </li>
                    <li class="nav-item">
                         <NavLink to="/search" id="Empl" style={{fontSize:"22px"}}className='nav-link'>Search</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/About"style={{fontSize:"22px"}} className='nav-link'>About</NavLink>
                    </li>                    
                    <li class="nav-item">
                         <NavLink to="/Contact" style={{fontSize:"22px"}}className='nav-link'>Contact</NavLink>
                    </li>
                </ul>
                <ul class="navbar-nav  mb-2 mb-lg-0">
                    <li class="nav-item"><h3 id="namel"style={{color:"white"}}></h3></li>
                    <li class="nav-item"><img src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" style={{width:"3vw",marginLeft:"6px",borderRadius:"50%"}} id="imal"></img></li>
                </ul>
                <Link to="/login" className='btn btn-outline-light m-2' id="login">Login</Link>
                <Link to="/login" onClick={()=>loginPro()} className='btn btn-outline-light m-2' id="logOut">LogOut</Link>
            </div>
            
        </nav>
    </div>
  )
}