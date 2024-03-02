import NavbarBase from "./NavbarBase";
import { icons } from "../utils/helpers";
import { routes } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext";

interface NavbarProps {}

const navbarItems: INavbarItem[] = [
   { text: "Dashboard", url: "/dashboard", icon: icons.home },
   { text: "Marketplace", url: "/marketplace", icon: icons.home },
   {
      text: "Projects Showcase",
      url: "/projects",
      icon: icons.home,
   },
   {
      text: "Community",
      url: "/community",
      icon: icons.home,
   },
   {
      text: "Calendar",
      url: "/calendar",
      icon: icons.home,
   },
   { text: "Add a project", url: "/add-project", icon: icons.home },
];
const Navbar: React.FC<NavbarProps> = () => {
   const router = useNavigate();
   const [state, dispatch] = useGlobalContext();
   const rightContent = state.user ? (
      <div
         className="font-semibold text-gray-600 cursor-pointer"
         onClick={() => {
            localStorage.removeItem("token");
            router(routes.login);
         }}
      >
         Logout
      </div>
   ) : (
      <div className="gap-8 hidden md:flex whitespace-nowrap items-center">
         <div
            className="font-semibold text-gray-600 cursor-pointer"
            onClick={() => router(routes.login)}
         >
            Log in
         </div>
         <div
            onClick={() => router(routes.signup)}
            className="bg-primary-400 cursor-pointer rounded-lg text-white font-semibold py-2.5 px-3.5"
         >
            Sign up
         </div>
      </div>
   );
   return <NavbarBase items={navbarItems} rightContent={rightContent} />;
};

export default Navbar;
