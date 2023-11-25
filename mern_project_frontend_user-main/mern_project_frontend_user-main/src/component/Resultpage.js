import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import {useLocation,Link} from "react-router-dom"
function Resultpage(){
    const location=useLocation();
    const result=location.state;
    var qn=1;
    var op=0;
    const opt=['A','B','C','D'];
    console.log(result);
    const[show,setshow]=useState(false);
    const {user}=UserAuth();
    const {logout}=UserAuth();
    const handlesignout=(e)=>{
        try{
            logout();
        }
        catch{
            console.log(e);
            alert(e);
        }
    }
    const handleshow=()=>{
        setshow(!show);
    }
    function showquiz(){
       
        return (result[2].questions.map((val,ind)=>{
            return <div><p key={ind}><b>{qn++}.{val.questionText}</b></p>
            <ul>{val.options.map((val1,ind1)=>{
               return <li key={ind1} style={{color:val1.isCorrect?"green":"red",listStylePosition:'inside'}}>
                   <b>{opt[op++%4]})</b> { val1.optionText}</li>})}<i>Your Option: {result[3][ind]}</i></ul></div>
           }))}
    return(
        <div>
       
            <nav class="nav bg-warning position-sticky top-0" style={{zIndex:1}}>
                    <Link to="/homepage" class="nav-link mt-2"><b>QUIZz App</b></Link>
                    <button onClick={handlesignout} class="btn btn-outline-danger ms-auto me-3 my-2">SignOut <i class="pi pi-sign-out"></i></button>
                   
            </nav>
            <div class="ms-5">
            <br/>
            Your Score:   
            <b> {result[0]}/{result[1]}</b><br/><br/> Thank You, <code>({user.email})</code>
            <br/><br/>
            {!show && <button onClick={handleshow} class="btn btn-outline-success my-2">Show Answers</button>}
            {show && <button onClick={handleshow} class="btn btn-outline-secondary my-2">Hide Answers</button>}
            {show &&showquiz()}
            
            
        </div>
        </div>
    );

}
export default Resultpage;