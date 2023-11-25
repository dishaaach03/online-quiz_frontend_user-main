import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
import "./Homepage.css";

function Homepage(){
    const {logout}=UserAuth();
    const navigate=useNavigate();
    const [quizarr,setquizarr]=useState([]);
    const [search,setsearch]=useState("");
    
    useEffect(()=>{
        Axios.get("https://quiz-backend-wyw9.onrender.com/quiz/")
        .then((res)=>{
            if(res.status===200)
                setquizarr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    },[]);

    function quizlist(){
        return quizarr.map((val,ind)=>{
            return (<Link to="/quizpage" state={{quizdata:{val}}} class="text-decoration-none">
             {val.title.toLowerCase().includes(search) &&   <div class="c card m-5 p-5 shadow">{val.title}</div>}</Link>);

        })
    }
    const handleSignout=async()=>{
        try{
            await logout();
            navigate('/');
            alert("logged out successfully");
        }
        catch(e){
            console.log(e.message);
            alert(e);
        }
    }

    return(<div>
        <nav class="nav bg-warning position-sticky top-0" style={{zIndex:1}}>
        <Link to="/homepage" class="nav-link mt-2"><b>QUIZz App</b></Link>
        <input type="text" placeholder="Search Quiz" class="form-control my-2 mx-5" style={{width:"20%"}}
        onChange={(e)=>{setsearch(e.target.value.toLowerCase())}}/>
        <button onClick={handleSignout} class="btn btn-outline-danger ms-auto me-3 my-2">SignOut <i class="pi pi-sign-out"></i></button>
        </nav>
        <div class="d-flex mt-5 mx-5 p-5">  
       {quizlist()}
       </div> 
        </div>);
   
}
export default Homepage;