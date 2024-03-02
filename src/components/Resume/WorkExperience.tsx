import moment from "moment";
import { monthsArray } from "../../utils/data";

interface WorkExperienceProps {
   work: IWorkMini;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ work }) => {
   const getDurationString = () => {
      return `${moment(new Date(work.startDate)).format("MMMM YYYY")} - ${
         work.currentlyWorking
            ? "Present"
            : ` ${moment(new Date(work.endDate)).format("MMMM YYYY")}`
      }  `;
   };
   return (
      <div className="flex flex-col gap-1">
         <div className="text-gray-900 font-semibold text-base">
            {work.role}
         </div>
         <div className="text-gray-500 font-normal text-base">
            {work.compName}
         </div>
         <div className="text-gray-500 font-normal text-base">
            {getDurationString()}
         </div>
         <div className="text-gray-900 font-normal text-base">
            {work.description}
         </div>
      </div>
   );
};

export default WorkExperience;
