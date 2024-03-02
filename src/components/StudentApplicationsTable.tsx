import moment from "moment";
import { routes } from "../utils/utils";
import { useRouter } from "next/router";
import classNames from "classnames";
import { jobStatusToText } from "../utils/data";
import { useEffect, useState } from "react";
import JobStatusBadge from "./JobStatusBadge";
import { icons } from "../utils/helpers";
import Dropdown from "./Dropdown";
import { getJobPostsList } from "../apis/getJobPostsList";
import ApplicationStatusBadge from "./ApplicationStatusBadge";

interface AllJobPostsTableProps {
   apps: IApplicationMini[];
}
const jobsPerPage = 5;

const StudentApplicationsTable: React.FC<AllJobPostsTableProps> = ({
   apps,
}) => {
   const [page, setPage] = useState(0);
   const router = useRouter();
   const totalPages = Math.ceil(apps.length / jobsPerPage);

   const renderPaginationButtons = () => {
      const allPages = Array(totalPages).fill(false);
      allPages[page] = true;
      if (page === 0) {
         allPages;
      }
      if (allPages[page + 1] !== undefined) allPages[page + 1] = true;
      if (allPages[page - 1] !== undefined) allPages[page - 1] = true;
   };
   const renderActionCell = (post: IApplicationMini) => {
      if (post.assignmentID) {
         return (
            <button
               onClick={() =>
                  router.push(
                     routes.student.applicationDetails.assignment(post._id)
                  )
               }
               className="btn btn-link btn-primary"
            >
               View assignment
            </button>
         );
      } else {
         return (
            <button
               className="btn btn-link btn-gray"
               onClick={() =>
                  router.push(routes.student.applicationDetails.base(post._id))
               }
            >
               View details
            </button>
         );
      }
   };

   return (
      <div className="flex flex-col  rounded-xl border border-gray-200 shadow-sm">
         <div className="grid grid-cols-[2fr_1fr_1fr_1fr_0.25fr] items-center h-11">
            <div className="text-gray-600 font-medium text-xs pl-6">
               Position
            </div>
            <div className="text-gray-600 font-medium text-xs text-center">
               Applcation Status
            </div>
            <div className="text-gray-600 font-medium text-xs text-center">
               Action
            </div>
            <div className="text-gray-600 font-medium text-xs text-center">
               Applied on
            </div>
            <div></div>
         </div>
         {apps
            .slice(jobsPerPage * page, jobsPerPage * (page + 1))
            .map((app) => (
               <div className="grid grid-cols-[2fr_1fr_1fr_1fr_0.25fr] items-center py-4 border-t border-gray-200">
                  <div className="flex flex-col gap-1 pl-6">
                     <div className="text-gray-900 font-medium text-sm ">
                        {app.jobID.position}
                     </div>
                     <div className="text-gray-500 font-normal text-sm">
                        {app.companyID.organisationName}
                     </div>
                  </div>
                  <div className="flex items-center justify-center">
                     <ApplicationStatusBadge
                        status={app.status}
                     ></ApplicationStatusBadge>
                  </div>

                  {renderActionCell(app)}
                  <div className="text-center text-gray-600 text-sm">
                     {moment(new Date(app.createdAt)).format("DD MMM, YYYY")}
                  </div>
                  <Dropdown
                     items={[
                        {
                           text: "Close job post",
                           onClick: () => {},
                           icon: icons.jobActionsIcon.closeJob,
                        },

                        {
                           text: "Extend deadline",
                           onClick: () => {},
                           icon: icons.jobActionsIcon.extendDeadline,
                        },
                        {
                           text: "Post similar job",
                           onClick: () => {},
                           icon: icons.jobActionsIcon.postSimilarJob,
                        },
                     ]}
                     elm={
                        <div className="flex items-center justify-end pr-6 cursor-pointer">
                           {icons.threeDots}
                        </div>
                     }
                  ></Dropdown>
               </div>
            ))}

         <div className="items-center flex justify-between border-t border-gray-200 px-6 py-3.5">
            <button
               className="btn btn-sm btn-gray btn-outlined gap-2 w-fit"
               onClick={() => setPage(page - 1)}
            >
               {icons.arrowLeft}
               <div>Previous</div>
            </button>
            <div className="flex">
               {Array(totalPages)
                  .fill(0)
                  .map((_, i) => (
                     <div
                        onClick={() => setPage(i)}
                        className={classNames(
                           "rounded-lg flex h-10 w-10 items-center justify-center text-gray-800 font-medium text-sm cursor-pointer",
                           {
                              "bg-gray-50": page === i,
                           }
                        )}
                     >
                        {i + 1}
                     </div>
                  ))}
            </div>
            <button
               className="btn btn-sm btn-gray btn-outlined gap-2 w-fit"
               onClick={() => setPage(page + 1)}
            >
               <div>Next</div>
               {icons.arrowRight}
            </button>
         </div>
      </div>
   );
};

export default StudentApplicationsTable;
