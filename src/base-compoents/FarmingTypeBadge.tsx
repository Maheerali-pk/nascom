import classNames from "classnames";
import { eventStatusToText, farmingTypeToText } from "../utils/utils";

interface FarmingTypeBadgeProps {
   status: FarmingType;
}

const FarmingTypeBadge: React.FC<FarmingTypeBadgeProps> = ({ status }) => {
   return (
      <div
         className={classNames(
            "flex justify-center items-center  rounded-2xl py-0.5 w-36 font-medium text-xs",
            {
               "text-secondary-700": status === "community-gardening",
               "bg-secondary-50": status === "community-gardening",
               "text-success-700": status === "urban-farming",
               "bg-success-50": status === "urban-farming",
            }
         )}
      >
         {farmingTypeToText[status]}
      </div>
   );
};

export default FarmingTypeBadge;
