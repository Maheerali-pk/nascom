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
import ResourceLibrary from "./pages/resourse-library/ResourceLibrary";
<<<<<<< HEAD
// import Blog from "./pages/blog/Blog";
import UserProfile from "./pages/user-profile/UserProfile";
=======
import Blog from "./pages/blog/Blog";
>>>>>>> ad9eec30ae63a2bf93fea8dfdafe93a4f6759984

function App() {
   return (
      <Routes>
         {/* <Home></Home> */}
         <Route path="/community" Component={Community} />
         <Route path="/community/messsage-replies/:id" Component={Replies} />
         <Route path="/projects" Component={Projects} />
         <Route path="/project-details" Component={ProjectDetails} />
         <Route path="/add-project" Component={AddProject} />
         <Route path="*" element={<h1>Not Found</h1>} />
         <Route path="/dashboard" Component={UserDashboard}></Route>
         <Route path="/" Component={UserDashboard}></Route>
         <Route path="/event-details/:id" Component={EventDetails}></Route>
         <Route path="/marketplace" Component={MarketPlace}></Route>
         <Route path="/auth/login" Component={Login}></Route>
         <Route path="/auth/signup" Component={Signup}></Route>
         <Route path="/calendar" Component={Calendar}></Route>
         <Route path="/resource-library" Component={ResourceLibrary}></Route>
<<<<<<< HEAD
         <Route path="/user-details" Component={UserProfile}></Route>
         {/* <Route path="/blog/:id" Component={Blog}></Route> */}
=======
         <Route path="/blog/:id" Component={Blog}></Route>
>>>>>>> ad9eec30ae63a2bf93fea8dfdafe93a4f6759984
      </Routes>
   );
}

export default App;
