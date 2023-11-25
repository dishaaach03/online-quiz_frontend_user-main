import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";


function Quizpage(){
    const location=useLocation();
    const {quizdata}=location.state;
    let arr=quizdata.val;
    var qn=1;
    var op=0;
    const opt=['A','B','C','D'];
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
    
    let smark=[];
    let ans=[];
    for(let i=0;i<arr.questions.length;i++){
        smark[i]=0;
        ans[i]='Not Answered';
        };
    var sum=0;
    
    function checkcorrect(quesno,optno){
        if(arr.questions[quesno].options[optno].isCorrect){
            smark[quesno]=1; 
         }
        else{smark[quesno]=0;}
            
        ans[quesno]=opt[optno];}
    let res=[];
    const navigate=useNavigate();
    const handlesubmit=()=>{
          for(let i=0;i<smark.length;i++){
            sum+=smark[i];
          }
          res[0]=sum;
          res[1]=smark.length;
          res[2]=arr;
          res[3]=ans;

          window.scrollTo({top:0});
         navigate('/resultpage',{state:res});
        }
        
    function showquiz(){
       
             return (arr.questions.map((val,ind)=>{
                 return <div class="card p-4 p-5 my-3 me-5 ms-2" style={{backgroundColor:"paleturquoise"}}><p key={ind}><br/><b>{qn++}.{val.questionText}</b></p>
                 {val.options.map((val1,ind1)=>{
                    return <div key={ind1}>
                        
                        <input type="radio" name={ind} onChange={()=>checkcorrect(ind,ind1)} style={{accentColor:"red"}}/> <b>{opt[op++%4]})</b> { val1.optionText}</div>})}</div>
                }))}

                return(
                    <div>
                    <nav class="nav bg-warning position-sticky top-0" style={{zIndex:2}}>
                    <Link to="/homepage" class="nav-link mt-2"><b>QUIZz App</b></Link>
                    <button onClick={handlesignout} class="btn btn-outline-danger ms-auto me-3 my-2">SignOut <i class="pi pi-sign-out"></i></button>
                    </nav>
                    <div class="ms-5">
                    {showquiz()}
                    </div>
                    
                    <center><button onClick={handlesubmit} class="btn btn-success m-5">Submit Quiz</button></center><br></br>
                    
                    </div>

                );
            
            }
export default Quizpage;
