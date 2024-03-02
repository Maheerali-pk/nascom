import classNames from "classnames";
import moment from "moment";
import { icons } from "../utils/helpers";
// import { jobStatusToText } from "../utils/data";
import JobStatusBadge from "./JobStatusBadge";
import { routes } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
console.log("hello");

interface ResourceLibraryTable {
   items: IResourceLibraryItem[];
}

const ResourceLibraryTable: React.FC<ResourceLibraryTable> = (props) => {
   const router = useNavigate();
   const [search, setSearch] = useState(false);
   if (props.items.length === 0)
      return (
         <div className="flex flex-col gap-8 items-center justify-center rounded-xl border border-gray-200 shadow-sm pt-12 pb-14">
            <div className="text-gray-600 font-normal text-base">No Items</div>
         </div>
      );
   return (
      <div className="flex flex-col gap-4">
         <div className="flex flex-col  rounded-xl border border-gray-200 shadow-sm">
            <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] items-center h-11">
               <div className="text-gray-600 font-medium text-xs pl-6">
                  Name
               </div>
            </div>
            {props.items.map((item) => (
               <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] cursor-pointer items-center py-4 border-t border-gray-200">
                  <div className="text-gray-900 font-medium text-sm pl-6">
                     {item.title}
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

export default ResourceLibraryTable;
