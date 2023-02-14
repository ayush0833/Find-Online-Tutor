import React from 'react'

export default function Contacts() {
  const sendMSG=e=>{
    let a=document.getElementById("cname").value;
    let b=document.getElementById("cemail").value;
    let c=document.getElementById("cmsg").value;
    if(a==""||a==" "||b==""||b==" "||c==""||c==" "){
      alert("PLEASE ENTER ALL THE DETAILS.");
    }else{
      alert("Your message is Sent.")
    }
    
  }
  return (
    <div style={{background:"rgb(240, 240, 240)",height:"92vh",paddingTop:"10vh"}}>
      
        <div style={{marginLeft:"40%"}} id="contacts">
          <h1>Contact Us</h1>
          
          <from  >
                <table >
                    <tr>
                        <td colSpan="2"><input id="cname" type="text" name="name" className='form-control' required placeholder='Enter the Name'/></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><input id="cemail" type="email" name="email"className='form-control' required placeholder='Enter the Email' /></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><textarea id="cmsg"name="message"required className='form-control'placeholder='Enter the message' /></td>
                    </tr>
                    <tr>
                        <td colSpan="2" >
                            <button className="btn btn-success form-control" onClick={e=>sendMSG(e)} >Send Message</button>
                        </td>
                    </tr>
                    
                </table>
                
              </from>
        </div>
    </div>
  )
}
