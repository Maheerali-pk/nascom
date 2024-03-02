import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
// import Home from "./pages/Home";
import Community from "./pages/community/Community";
import Replies from "./pages/community/Replies";
import Projects from "./pages/projects/Projects";
import ProjectDetails from "./pages/project-details/ProjectDetails";
import AddProject from "./pages/add-project/AddProject";

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
      </Routes>
   )
}

export default App;
