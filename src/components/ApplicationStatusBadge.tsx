import classNames from "classnames";
import { applicationStatusToText } from "../utils/data";

interface ApplicationStatusBadgeProps {
   status: IApplicationStatus;
}

const ApplicationStatusBadge: React.FC<ApplicationStatusBadgeProps> = ({
   status,
}) => {
   return (
      <div
         className={classNames(
            "flex justify-center items-center rounded-2xl py-0.5 w-28 font-medium text-xs",
            {
               "text-secondary-700":
                  status === "UNDER_REVIEW" || status === "UNDER_EVALUATION",
               "bg-secondary-50":
                  status === "UNDER_REVIEW" || status === "UNDER_EVALUATION",
               "text-error-700": status === "REJECTED",
               "bg-error-50": status === "REJECTED",
               "text-success-700": status === "HIRED",
               "bg-success-50": status === "HIRED",
               "bg-gray-100": status === "SHORT_LISTED" || status === "PENDING",
               "text-gray-700":
                  status === "SHORT_LISTED" || status === "PENDING",
            }
         )}
      >
         {applicationStatusToText[status]}
      </div>
   );
};

export default ApplicationStatusBadge;
