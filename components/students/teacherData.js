import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios";
import {Link, Navigate, useParams} from "react-router-dom";
export default function TeacherData() {
  const {id}=useParams();
  const [user,setUser]= useState([]);
  useEffect(()=>{
    loadUsers();
  },[]);
  const loadUsers=async ()=>{console.log(id.id);
    console.log(id);
    const result=await axios.get("http://localhost:9802/register");
    result.data.forEach(i => {
      if(i._id==id){
        setUser(i);
      }
    });
    
    
  }
  
  const AddNotification=async e=>{
    
    e.preventDefault();
    await axios.post("http://localhost:9802/profile",user);
    console.log(user);
    Navigate(`/students`);
    
  }
  
  return (
    <div id="Teacher">
      <h1 style={{textAlign:"center",textShadow:"3px 5px 5px darkgrey",}}>Teacher Details</h1>
      
          
          <div className='details'>
            <table>
                <tr>
                    <td>Name : </td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td>Phone : </td>
                    <td>{user.phone}</td>
                </tr>
                <tr>
                    <td>Email : </td>
                    <td>{user.email}</td>
                </tr>
                <tr>
                    <td>Teaching mode : </td>
                    <td>{user.mode}</td>
                </tr>
                <tr>
                    <td>Fees Range: </td>
                    <td>{user.min_fees}-{user.max_fees}</td>
                </tr>
                <tr>
                    <td>Education Details : </td>
                    <td>{user.edu}</td>
                </tr>
                <tr>
                    <td>Experience :  </td>
                    <td>{user.exp}</td>
                </tr>
                <tr>
                    <td>Teaching Field : </td>
                    <td>{user.field}</td>
                </tr>
                <tr><td colSpan={3}><button onClick={AddNotification} className='btn btn-success'><Link to="/students" style={{textDecoration:"none",color:"white"}}>BACK</Link></button></td></tr>
            </table>
            
          </div>

     
      
    </div>
  )
}