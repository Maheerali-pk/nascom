import classNames from "classnames";
import { eventStatusToText } from "../utils/utils";

interface JobStatusBadgeProps {
   status: EventStatus;
}

const JobStatusBadge: React.FC<JobStatusBadgeProps> = ({ status }) => {
   return (
      <div
         className={classNames(
            "flex justify-center items-center  rounded-2xl py-0.5 w-28 font-medium text-xs",
            {
               "text-secondary-700": status === "participating",
               "bg-secondary-50": status === "participating",
               "text-primary-700": status === "attending",
               "bg-primary-50": status === "attending",
               "text-success-700": status === "open",
               "bg-success-50": status === "open",
               "bg-gray-100": status === "closed",
               "text-gray-700": status === "closed",
            }
         )}
      >
         {status}
      </div>
   );
};

export default JobStatusBadge;
