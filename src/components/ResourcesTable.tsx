import classNames from "classnames";
import moment from "moment";
import { icons } from "../utils/helpers";
// import { jobStatusToText } from "../utils/data";
import JobStatusBadge from "./JobStatusBadge";
import { routes } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import FarmingType from "../base-compoents/FarmingTypeBadge";
import FarmingTypeBadge from "../base-compoents/FarmingTypeBadge";
import Input from "./Input";
import { useGlobalContext } from "../contexts/GlobalContext";
import { removeResourceFromSale } from "../apis/resources";
console.log("hello");

interface ResourceTableProps {
   resources: IResource[];
}

const ResourceTable: React.FC<ResourceTableProps> = (props) => {
   const router = useNavigate();
   const [state, dispatch] = useGlobalContext();
   if (props.resources.length === 0)
      return (
         <div className="flex flex-col gap-8 items-center justify-center rounded-xl border border-gray-200 shadow-sm pt-12 pb-14">
            {icons.searchBig}
            <div className="flex flex-col gap-2 items-center">
               <div className="text-gray-900 font-semibold text-xl">
                  No Resource Found
               </div>
            </div>
         </div>
      );
   return (
      <div className="flex flex-col ">
         <div className="flex flex-col  gap-8">
            {props.resources.map((res) => (
               <div className="flex gap-4 p-4 h-40 rounded-xl border border-gray-200 shadow-md relative">
                  <img
                     src={res.image}
                     className="object-cover h-full rounded-md aspect-square"
                  ></img>
                  <div className="flex flex-col gap-2">
                     <div className="flex items-center gap-3">
                        <div className="text-2xl">{res.name}</div>
                        <FarmingTypeBadge
                           status={res.category}
                        ></FarmingTypeBadge>
                     </div>
                     <div className="text-gray-600 text-xs font-medium ">
                        {res.description}
                     </div>
                     <div className="text-gray-600 text-sm font-medium ">
                        <span className="font-semibold">
                           {res.onSale ? "Price: " : "Estimated Price: "}
                        </span>
                        {res.price}
                     </div>
                  </div>
                  {!res.onSale && (
                     <div className="flex gap-2 absolute items-center justify-end right-4  bottom-4">
                        <div
                           onClick={() =>
                              dispatch({
                                 setState: { showSalePriceDialog: true },
                              })
                           }
                           className="btn btn-primary  text-sm w-fit btn-sm"
                        >
                           Put On Sale
                        </div>
                     </div>
                  )}
                  {res.onSale && (
                     <div className="flex gap-2 absolute items-center justify-end right-4  bottom-4">
                        <div
                           className="btn bg-error-700 text-white  text-sm w-fit btn-sm"
                           onClick={() =>
                              removeResourceFromSale({
                                 resourceId: res.id.toString(),
                                 username: state.user?.username || "",
                              })
                           }
                        >
                           Remove from sale
                        </div>
                        <div className="btn bg-success-500 hover:bg-success-500 text-white  text-sm w-fit btn-sm">
                           On Sale
                        </div>
                     </div>
                  )}
               </div>
            ))}
         </div>
      </div>
   );
};

export default ResourceTable;
