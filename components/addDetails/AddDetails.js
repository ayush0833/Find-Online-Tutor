import React, { useState ,useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
export default function AddDetails(id) {
    let history=useNavigate();
    const [user,setUser]=useState({
        name:"",
        email:"",
        phone:"",
        mode:"",
        field:"",
        min_fees:"",
        max_fees:"",
        edu:"",
        exp:""
    })
    const {name,phone,exp,FullStack,Java,CPP,Python,C,Online,Offline,min_fees,max_fees,edu}=user;
    useEffect(()=>{
        loadUsers();
      },[]);
      const loadUsers=async ()=>{console.log(id.id);
        const result=await axios.get("http://localhost:9802/register");
        result.data.forEach(i => {
          if(i._id==id.id){
            setUser(i);
            
          }
        });
        
        
      }
    const onValChange= e=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post("http://localhost:9802/profile",user);
        history(`/Homepage/${id.id}`);
    }

  return (
    
    <div style={{backgroundImage:"url('https://t3.ftcdn.net/jpg/02/96/69/22/360_F_296692203_k4lOpOt8mAcYpKzicNmJTpnsE9ZdwyHX.jpg')",backgroundAttachment:"fixed",backgroundSize:"cover",height:"92vh"}}>
        
        
        <div id="addCust" style={{marginLeft:"33%",paddingTop:"10vh"}}>
            <h1 style={{color:"white",marginLeft:"20px"}}>Update Profile</h1>
            <form onSubmit={e=>onSubmit(e)}>
                <table style={{color:"white"}}>
                    <tr>
                        <td >
                            Name :<input type="text" name='name'  value={user.name} placeholder="Name" required onChange={e=>onValChange(e)}class="form-control "/>
                        </td>
                        <td>
                            Mobile :<input type="number" name='phone'  value={user.phone} placeholder="Mobile no." required onChange={e=>onValChange(e)}class="form-control "/>
                        </td>
                    </tr>
                    <tr>
                        <td >
                        Mode :<select onChange={e=>onValChange(e)} name="mode" className='form-control dropdown'>
                                        <option>Select</option>
                                        <option value={Online}>Online</option>
                                        <option value={Offline}>Offline</option>
                              </select>
                        </td>
                        <td>
                        Field :<select onChange={e=>onValChange(e)} name="field" className='form-control dropdown'>
                                        <option>Select</option>
                                        <option value={FullStack}>Full Stack</option>
                                        <option value={Java}>Java</option>
                                        <option value={CPP}>CPP</option>
                                        <option value={Python}>Python</option>
                                        <option value={C}>C</option>
                              </select>
                        </td>
                        
                    </tr>
                    <tr>
                        <td>
                            Min_fees :<input type="number" name='min_fees'  value={min_fees} placeholder="0" required onChange={e=>onValChange(e)}class="form-control "/>
                        </td>
                        <td>
                            Max_fees :<input type="number" name='max_fees'  value={max_fees} placeholder="0" required onChange={e=>onValChange(e)}class="form-control "/>
                        </td>
                        
                    </tr>
                    <tr>
                        <td>
                            Education Detail :<input type="text"  name='edu'  value={edu} placeholder="Enter Eduction detail" required onChange={e=>onValChange(e)}class="form-control "/>
                        </td>
                        <td>
                            Experience :<input type="text" name='exp'  value={exp} placeholder="Enter Experience" required onChange={e=>onValChange(e)}class="form-control "/>
                        </td>
                        
                    </tr>
                    <tr >
                        <td colSpan={2}>
                        <button className='btn btn-success form-control'  style={{marginTop:"3%"}}> Update</button>
                        </td>

                    </tr>
                </table>
                
            </form>

        </div>
    </div>
  )
}