import { useRouter } from "next/router";
import JobDetailsSidebarItem from "./JobDetailsSidebarItem";
import { routes } from "../utils/utils";
import { IApplication } from "../apis/getApplications";

interface JobDetailsSidebarProps {
   selectedItem: number;
}

const ApplicationDetailsSidebar: React.FC<JobDetailsSidebarProps> = (props) => {
   const router = useRouter();
   return (
      <div className="md:flex flex-col w-full p-4 hidden gap-1">
         <JobDetailsSidebarItem
            text="Overview"
            onClick={() =>
               router.push(
                  routes.student.applicationDetails.overview(
                     router.query.id as string
                  )
               )
            }
            selected={props.selectedItem === 0}
         ></JobDetailsSidebarItem>
         <JobDetailsSidebarItem
            text="My Application"
            onClick={() =>
               router.push(
                  routes.student.applicationDetails.base(
                     router.query.id as string
                  )
               )
            }
            selected={props.selectedItem === 1}
         ></JobDetailsSidebarItem>

         <div className="border-t border-gray-200 w-full"></div>
         <JobDetailsSidebarItem
            text="Assignments"
            onClick={() =>
               router.push(
                  routes.student.applicationDetails.assignment(
                     router.query.id as string
                  )
               )
            }
            selected={props.selectedItem === 5}
         ></JobDetailsSidebarItem>
         <JobDetailsSidebarItem
            text="Chat messages"
            badgeNumber={10}
            onClick={() => router.push(routes.student.chat)}
            selected={props.selectedItem === 6}
         ></JobDetailsSidebarItem>
      </div>
   );
};

export default ApplicationDetailsSidebar;
