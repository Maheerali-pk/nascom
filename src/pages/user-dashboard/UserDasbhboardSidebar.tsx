import ProgressBar from "../../components/ProgressBar";
import { useGlobalContext } from "../../contexts/GlobalContext";

interface UserDashboardSidebarProps {}

const UserDashboardSidebar: React.FC<UserDashboardSidebarProps> = () => {
   const [state, dispatch] = useGlobalContext();
   return (
      <div className="flex flex-col gap-1 pr-10  h-fit bg-white border-gray-200 border p-3 shadow-lg rounded-lg">
         <div className="text-2xl font-semibold">{state.user?.username}</div>
         <div className="text-base text-gray-500 font-medium">
            {state.user?.location}
         </div>
         <ProgressBar percentage={state.user!.experience}></ProgressBar>
         <div className="text-primary-400 text-xs ">
            {state.user?.experience} points
         </div>
      </div>
   );
};

export default UserDashboardSidebar;
