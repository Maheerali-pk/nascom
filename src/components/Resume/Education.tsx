import moment from "moment";
import { monthsArray } from "../../utils/data";

interface EducationProps {
   grad: IGradMini;
}

const Education: React.FC<EducationProps> = ({ grad }) => {
   return (
      <div className="flex flex-col gap-1">
         <div className="text-gray-900 font-semibold text-base">
            {grad.degree}, {grad.stream}
         </div>
         <div className="text-gray-500 font-normal text-base">
            {grad.college}
         </div>
         <div className="text-gray-500 font-normal text-base">2019</div>
         <div className="text-gray-500 font-normal text-base">
            {grad.marks.type}: {grad.marks.value}
         </div>
      </div>
   );
};

export default Education;
