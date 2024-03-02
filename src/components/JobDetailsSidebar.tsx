import { useRouter } from "next/router";
import JobDetailsSidebarItem from "./JobDetailsSidebarItem";
import { routes } from "../utils/utils";
import { IApplication } from "../apis/getApplications";

interface JobDetailsSidebarProps {
   selectedItem: number;
   allApplications: IApplication[];
}

const JobDetailsSidebar: React.FC<JobDetailsSidebarProps> = (props) => {
   const router = useRouter();
   return (
      <div className="md:flex flex-col w-full p-4 hidden gap-1">
         <JobDetailsSidebarItem
            text="Overview"
            onClick={() =>
               router.push(
                  routes.company.jobDetails.base(router.query.id as string)
               )
            }
            selected={props.selectedItem === 0}
         ></JobDetailsSidebarItem>
         <JobDetailsSidebarItem
            text="Applications received"
            badgeNumber={
               props.allApplications.filter((x) => x.status === "PENDING")
                  .length
            }
            onClick={() =>
               router.push(
                  routes.company.jobDetails.applications(
                     router.query.id as string
                  )
               )
            }
            selected={props.selectedItem === 1}
         ></JobDetailsSidebarItem>
         <JobDetailsSidebarItem
            text="Shortlisted"
            badgeNumber={
               props.allApplications.filter((x) => x.status === "SHORT_LISTED")
                  .length
            }
            onClick={() =>
               router.push(
                  routes.company.jobDetails.shortlisted(
                     router.query.id as string
                  )
               )
            }
            selected={props.selectedItem === 2}
         ></JobDetailsSidebarItem>
         <JobDetailsSidebarItem
            text="Hired"
            badgeNumber={
               props.allApplications.filter((x) => x.status === "HIRED").length
            }
            onClick={() =>
               router.push(
                  routes.company.jobDetails.hired(router.query.id as string)
               )
            }
            selected={props.selectedItem === 3}
         ></JobDetailsSidebarItem>
         <JobDetailsSidebarItem
            text="Not interested"
            badgeNumber={
               props.allApplications.filter((x) => x.status === "REJECTED")
                  .length
            }
            onClick={() =>
               router.push(
                  routes.company.jobDetails.notInterested(
                     router.query.id as string
                  )
               )
            }
            selected={props.selectedItem === 4}
         ></JobDetailsSidebarItem>
         <div className="border-t border-gray-200 w-full"></div>
         <JobDetailsSidebarItem
            text="Assignments"
            badgeNumber={
               props.allApplications.filter(
                  (x) => x.status === "UNDER_EVALUATION"
               ).length
            }
            onClick={() =>
               router.push(
                  routes.company.jobDetails.assignments(
                     router.query.id as string
                  )
               )
            }
            selected={props.selectedItem === 5}
         ></JobDetailsSidebarItem>
         <JobDetailsSidebarItem
            text="Chat messages"
            badgeNumber={10}
            onClick={() =>
               router.push(
                  routes.company.jobDetails.applications(
                     router.query.id as string
                  )
               )
            }
            selected={props.selectedItem === 6}
         ></JobDetailsSidebarItem>
      </div>
   );
};

export default JobDetailsSidebar;
