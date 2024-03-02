import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
// import Home from "./pages/Home";
import Community from "./pages/community/Community";
import Replies from "./pages/community/Replies";
import Projects from "./pages/projects/Projects";
import ProjectDetails from "./pages/project-details/ProjectDetails";
import AddProject from "./pages/add-project/AddProject";
import Home from "./pages/home/Home";
import UserDashboard from "./pages/user-dashboard/UserDashboard";
import EventDetails from "./pages/event-details/EventDetails";
import MarketPlace from "./pages/market-place/MarketPlace";
import Login from "./pages/login/login";
import Signup from "./pages/signup/Signup";
import Calendar from "./pages/calendar/Calendar";

function App() {
   return (
      <Routes>
         {/* <Home></Home> */}
         <Route path="/community" Component={Community} />
         <Route path="/community/messsage-replies" Component={Replies} />
         <Route path="/projects" Component={Projects} />
         <Route path="/project-details" Component={ProjectDetails} />
         <Route path="/add-project" Component={AddProject} />
         <Route path="*" element={<h1>Not Found</h1>} />
         <Route path="/dashboard" Component={UserDashboard}></Route>
         <Route path="/event-details/:id" Component={EventDetails}></Route>
         <Route path="/marketplace" Component={MarketPlace}></Route>
         <Route path="/auth/login" Component={Login}></Route>
         <Route path="/auth/signup" Component={Signup}></Route>
         <Route path="/calendar" Component={Calendar}></Route>
      </Routes>
   );
}

export default App;
