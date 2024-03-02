import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/home/Home";
import UserDashboard from "./pages/user-dashboard/UserDashboard";
import EventDetails from "./pages/event-details/EventDetails";
import MarketPlace from "./pages/market-place/MarketPlace";
import Login from "./pages/login/login";
import Signup from "./pages/signup/Signup";

function App() {
   return (
      <Routes>
         <Route path="/dashboard" Component={UserDashboard}></Route>
         <Route path="/event-details/:id" Component={EventDetails}></Route>
         <Route path="/marketplace" Component={MarketPlace}></Route>
         <Route path="/auth/login" Component={Login}></Route>
         <Route path="/auth/signup" Component={Signup}></Route>
      </Routes>
   );
}

export default App;
