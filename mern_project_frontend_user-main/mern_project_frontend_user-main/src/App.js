import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "primeicons/primeicons.css";

import ClientRoutes from './component/ClientRoutes';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <div>
      <AuthContextProvider>
      <ClientRoutes/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
