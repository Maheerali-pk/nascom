import NavbarBase from "./NavbarBase";
import { icons } from "../utils/helpers";
import { routes } from "../utils/constants";
import { useNavigate } from "react-router-dom";

interface NavbarProps {}

const navbarItems: INavbarItem[] = [
   { text: "Home", url: "/", icon: icons.home },
   { text: "Products", url: "/", icon: icons.home },
   {
      text: "Home",
      url: "/",
      icon: icons.home,
      subItems: [
         { text: "Overview", url: "/" },
         { text: "Overview", url: "/" },
         { text: "Overview", url: "/" },
      ],
   },
   { text: "Home", url: "/", icon: icons.home },
   { text: "Home", url: "/", icon: icons.home },
];
const Navbar: React.FC<NavbarProps> = () => {
   const router = useNavigate();
   const rightContent = (
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
