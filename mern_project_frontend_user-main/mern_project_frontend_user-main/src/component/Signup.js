import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext";
import "./Sign.css"
function Signup(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {createUser}=UserAuth();
    const navigate=useNavigate();
    const handleSigup=async(e)=>{
        e.preventDefault();
        try{
            await createUser(email,password);
            navigate('/');
        }
        catch(e){
            alert(e);
            console.log(e.message);
        }
    }
    return(
        <div class="su">
            <br/>
            <center>
                <div class="sp card shadow">
                <p class="mt-5"><h4><b>Create User</b></h4></p>
        <form onSubmit={handleSigup}>
        <input type="email" placeholder="Enter Email" class="m-3 form-control" style={{width:'60%'}} onChange={(e)=>setEmail(e.target.value)}/><br/>
        <input type="password" placeholder="Enter Password" class="m-3 form-control" style={{width:'60%'}} onChange={(e)=>setPassword(e.target.value)}/><br/>
        <button type="submit" class="btn btn-outline-success mt-3"><b>Sign Up</b></button><br/><br/>
        <p class="text-secondary mb-4">Already have an account? <Link to='/' class="text-decoration-none text-info">Sign In</Link></p>
        </form>
        </div>
        </center>
        </div>
    );
}
export default Signup;