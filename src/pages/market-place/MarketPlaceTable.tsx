import classNames from "classnames";
import moment from "moment";
JobStatusBadge;
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../contexts/GlobalContext";
import {
   buyResourceFromSale,
   removeResourceFromSale,
} from "../../apis/resources";
import FarmingTypeBadge from "../../base-compoents/FarmingTypeBadge";
import { routes } from "../../utils/constants";
import JobStatusBadge from "../../components/JobStatusBadge";
import Input from "../../components/Input";
import { icons } from "../../utils/helpers";
console.log("hello");

interface MarketPlaceTableProps {
   resources: IResource[];
}

const MarketPlaceTable: React.FC<MarketPlaceTableProps> = (props) => {
   const router = useNavigate();
   const [state, dispatch] = useGlobalContext();
   if (props.resources.length === 0)
      return (
         <div className="flex flex-col gap-8 items-center justify-center rounded-xl border border-gray-200 shadow-sm pt-12 pb-14">
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
                        <span className="font-semibold">Price: </span>
                        {res.price}
                     </div>
                  </div>
                  <div className="flex gap-2 absolute items-center justify-end right-4  bottom-4">
                     <div
                        onClick={async () => {
                           dispatch({ setState: { loading: true } });

                           await buyResourceFromSale({ resourceId: res.id });
                           dispatch({ setState: { loading: false } });
                        }}
                        className="btn text-white bg-success-500 hover:bg-success-700 hover:text-white   text-sm w-fit btn-sm"
                     >
                        Buy
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default MarketPlaceTable;
