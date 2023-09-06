import React,{useState} from 'react'
import axios from 'axios';
function Signup(){
    const[username,setusername]=useState("");
    const handleSignup=async(e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:5000/signup",{username})
            alert("User signal successfully")
            setusername("");
        }
        catch(err){
            console.log(err);
            alert('Error');
        }
    }
return(
    <div>
        <form onSubmit={handleSignup}>
            <input type="text" value={username} onChange={(e)=>setusername(e.target.value)}/>
            <button type="submit">Sign up</button>
        </form>
    </div>
);}
export default Signup
