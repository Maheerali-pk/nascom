import classNames from "classnames";
import { icons } from "../utils/helpers";
import Input from "./Input";
import { useRouter } from "next/router";
import { routes } from "../utils/utils";

interface JobDetailsPageHeaderProps {
   title: string;
   backLink?: string;
}

const ApplicationDetailsPageHeader: React.FC<JobDetailsPageHeaderProps> = ({
   title,
   backLink = "",
}) => {
   const router = useRouter();
   return (
      <div
         className={classNames(
            "flex flex-col w-full items-start py-6 px-4 md:p-8 gap-4 border-b border-gray-200",
            {
               "md:flex": true,
            }
         )}
      >
         <button
            className="btn btn-md btn-gray btn-link flex gap-2 w-fit px-0"
            onClick={() => router.push(backLink || routes.company.dashboard)}
         >
            {icons.arrowLeft}
            Back to dashboard
         </button>
         <div className="flex gap-4 md:gap-0 md:justify-between md:items-center md:flex-row w-full flex-col">
            <div className="font-semibold text-3xl text-gray-900">{title}</div>
         </div>
      </div>
   );
};

export default ApplicationDetailsPageHeader;
