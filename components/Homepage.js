import React from 'react'
import "./Homepage.css";
import { useState,useEffect } from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
export default function Homepage() {
  const {id}=useParams();
  const [user,setUser]= useState([]);
  const [req,set]=useState([{}]);
  useEffect(()=>{
    loadUsers();
  },[]);
  const loadUsers=async ()=>{console.log(id.id);
    console.log(id);
    const result=await axios.get("http://localhost:9802/register");
    result.data.forEach(i => {
      if(i._id==id){
        setUser(i);
        set(i.note);
      }

    });
    
    
  }
  const DeleteUser=async id=>{
     await axios.delete(`http://localhost:9802/register/${id}`);
     loadUsers();
  }
  
  return (
    <div id="Teacher">
      <h1 style={{textAlign:"center",textShadow:"3px 5px 5px darkgrey",}}>Notifications</h1>
       <Link style={{marginLeft:"90%"}}className='btn btn-primary' to="/addDetails">Update Profile</Link>
          {
            req.map((user,index)=>(
              <div className='details'>
                  <h1>{user.name} has applied .</h1>
                  <table>
                    <tr>
                      <td>
                          <h3>Phone : {user.phone}</h3>
                      </td>
                      
                    </tr>
                    <tr>
                        <td>
                        <h3>Email : {user.email}</h3>
                        </td>
                    </tr>
                  </table>
              </div>
            ))
          }               
     
    </div>
  )
}