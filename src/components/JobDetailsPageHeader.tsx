import classNames from "classnames";
import { icons } from "../utils/helpers";
import Input from "./Input";

interface JobDetailsPageHeaderProps {
   hideHeader: boolean;
   searchValue: string;
   setSearchValue: (value: string) => void;
   showSearch: boolean;
}

const JobDetailsPageHeader: React.FC<JobDetailsPageHeaderProps> = ({
   hideHeader,
   searchValue,
   setSearchValue,
   showSearch,
}) => {
   return (
      <div
         className={classNames(
            "flex flex-col w-full items-start py-6 px-4 md:p-8 gap-4 border-b border-gray-200",
            {
               hidden: hideHeader,
               "md:flex": true,
            }
         )}
      >
         <button className="btn btn-md btn-gray btn-link flex gap-2 w-fit px-0">
            {icons.arrowLeft}
            Back to dashboard
         </button>
         <div className="flex gap-4 md:gap-0 md:justify-between md:items-center md:flex-row w-full flex-col">
            <div className="font-semibold text-3xl text-gray-900">Title</div>
            <Input
               className={classNames("md:w-fit w-full", {
                  hidden: !showSearch,
               })}
               onChange={setSearchValue}
               value={searchValue}
               startIcon={icons.searchInput}
               placeholder="Search for applicants by name"
            />
         </div>
      </div>
   );
};

export default JobDetailsPageHeader;
