import {HashRouter,Route,Routes} from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Homepage from "./Homepage";
import ProtectRoute from "./ProtectRoutes";
import Quizpage from "./Quizpage";
import Resultpage from "./Resultpage";

function ClientRoutes(){
    return(
        <HashRouter>
        <Routes>
            <Route path="/" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/homepage" element={<ProtectRoute><Homepage/></ProtectRoute>}/>
            <Route path="/quizpage" element={<ProtectRoute><Quizpage/></ProtectRoute>}/>
            <Route path="/resultpage" element={<ProtectRoute><Resultpage/></ProtectRoute>}/>
        </Routes>
        </HashRouter>
    );
}
export default ClientRoutes;