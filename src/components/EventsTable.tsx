import classNames from "classnames";
import moment from "moment";
import { icons } from "../utils/helpers";
// import { jobStatusToText } from "../utils/data";
import JobStatusBadge from "./JobStatusBadge";
import { routes } from "../utils/constants";
import { useNavigate } from "react-router-dom";
console.log("hello");

interface EventsTable {
   events: IEvent[];
}

const EventsTable: React.FC<EventsTable> = (props) => {
   const router = useNavigate();
   if (props.events.length === 0)
      return (
         <div className="flex flex-col gap-8 items-center justify-center rounded-xl border border-gray-200 shadow-sm pt-12 pb-14">
            {icons.searchBig}
            <div className="flex flex-col gap-2 items-center">
               <div className="text-gray-900 font-semibold text-xl">
                  Post a job
               </div>
               <div className="text-gray-600 font-normal text-base">
                  Click below to post a job and start hiring
               </div>
            </div>
            <button
               className="btn btn-md btn-primary w-fit"
               // onClick={() => router.push(routes.company.postJob)}
            >
               Post a job
            </button>
         </div>
      );
   return (
      <div className="flex flex-col gap-4">
         <div className="flex flex-col  rounded-xl border border-gray-200 shadow-sm">
            <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] items-center h-11">
               <div className="text-gray-600 font-medium text-xs pl-6">
                  Event Name
               </div>
               <div className="text-gray-600 font-medium text-xs text-center">
                  Location
               </div>
               <div className="text-gray-600 font-medium text-xs text-center">
                  Date
               </div>
               <div className="text-gray-600 font-medium text-xs text-center">
                  Status
               </div>
               <div className="text-gray-600 font-medium text-xs text-center"></div>
            </div>
            {props.events.map((event) => (
               <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] items-center py-4 border-t border-gray-200">
                  <div className="text-gray-900 font-medium text-sm pl-6">
                     {event.name}
                  </div>
                  <div className="text-center text-gray-600 text-sm">
                     {event.location}
                  </div>

                  <div className="text-center text-gray-600 text-sm">
                     {moment(new Date(event.date)).format("DD MMM, YYYY")}
                  </div>
                  <div className="flex justify-center">
                     <JobStatusBadge status="participating"></JobStatusBadge>
                  </div>
                  <div
                     className="btn btn-link btn-primary text-sm"
                     // onClick={() =>
                     //    // router.push(routes.company.jobDetails.base(event._id))
                     // }
                  >
                     View
                  </div>
                  {/* <div className="text-center text-gray-600 text-sm">
                  {moment(new Date(event.createdAt)).format("DD MMM, YYYY")}
               </div> */}
               </div>
            ))}
         </div>
      </div>
   );
};

export default EventsTable;
