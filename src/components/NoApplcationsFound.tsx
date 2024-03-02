import { useRouter } from "next/router";
import { icons } from "../utils/helpers";
import { routes } from "../utils/utils";

interface NoApplicationsProps {}

const NoApplicationsFound: React.FC<NoApplicationsProps> = (props) => {
   const router = useRouter();
   return (
      <div className="flex flex-col justify-center  items-center gap-8 h-full rounded-xl pt-8 pb-24 border border-gray-200 w-full">
         <div className="w-90 flex items-center flex-col gap-8">
            <div className="flex flex-col items-center gap-5 ">
               {icons.searchBig}
               <div className="text-gray-900 font-semibold text-xl">
                  No jobs found
               </div>
               <div className="text-gray-600 font-normal text-base mt-2 text-center">
                  You haven’t applied for any jobs yet. Click below to search
                  and apply.
               </div>
            </div>
            <button
               onClick={() => router.push(routes.student.searchJob)}
               className="btn btn-md btn-primary w-fit mt"
            >
               Search Job
            </button>
         </div>
      </div>
   );
};

export default NoApplicationsFound;
