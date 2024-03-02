import classNames from "classnames";
import { jobStatusToText } from "../utils/data";

interface AssignmentStatusBadgeProps {
   submitted?: boolean;
}

const AssignmentStatusBadge: React.FC<AssignmentStatusBadgeProps> = ({
   submitted,
}) => {
   return (
      <div
         className={classNames(
            "flex justify-center items-center rounded-2xl py-0.5 px-3  w-fit font-medium text-xs whitespace-nowrap",
            {
               "text-success-700": submitted,
               "bg-success-50": submitted,
               "bg-gray-100": !submitted,
               "text-gray-700": !submitted,
            }
         )}
      >
         {submitted ? "Submission received" : "Assignment sent"}
      </div>
   );
};

export default AssignmentStatusBadge;
