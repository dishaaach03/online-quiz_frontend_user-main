import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";
import "./Sign.css";
function Signin(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const{signIn}=UserAuth();
    const navigate=useNavigate();
    const handleSignin=async(e)=>{
        e.preventDefault();
        try{
            await signIn(email,password)
            navigate('/homepage');
        }
        catch{
            console.log(e.message);
            alert(e.message);
        }
        
    }
    return(
        <div class="sg">
            <br/>
            <center>
                <div class="sp card shadow">
                <p class="mt-5"><h4><b>User Login</b></h4></p>
        <form onSubmit={handleSignin}>
        <input type="email" placeholder="Enter Email" style={{width:'60%'}} class="m-3 form-control" onChange={(e)=>{setEmail(e.target.value)}}/><br/>
        <input type="password" placeholder="Enter Password "style={{width:'60%'}} class="m-3 form-control" onChange={(e)=>{setPassword(e.target.value)}}/><br/>
        <button type="submit" class="btn btn-outline-success mt-2"><b>Sign In</b></button><br></br><br/>
        <p class="mb-2 text-secondary">Don't have an account? <Link to='/signup' class="text-decoration-none text-info">Signup</Link></p>
        <a href="https://mern-project-quiz-frontend-admin.vercel.app/" target="_blank" class="text-decoration-none text-warning">Admin SignIn</a><br/><br/>
        </form>
        </div>
        </center>
        </div>
    );
}
export default Signin;