import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/home/Home";
import UserDashboard from "./pages/user-dashboard/UserDashboard";

function App() {
   return (
      <Routes>
         <Route path="/dashboard" Component={UserDashboard}></Route>
      </Routes>
   );
}

export default App;
