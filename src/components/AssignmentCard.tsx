import moment from "moment";
import { icons } from "../utils/helpers";
import AttachedFile from "./AttachedFile";

interface AssignmentCardProps {
   title: string;
   description: string;
   attachmentUrls: string[];
   deadline: string;
   onClickOnSubmitAnswer: () => void;
}

const AssignmentCard: React.FC<AssignmentCardProps> = (props) => {
   return (
      <div className="flex flex-col rounded-2xl gap-10 p-6 border border-gray-200">
         <div className="flex flex-col gap-4">
            <div className="text-gray-900 font-semibold text-lg">
               {props.title}
            </div>
            <div className="text-gray-800 font-normal text-base">
               {props.description}
            </div>
         </div>
         <div className="flex flex-col justify-center gap-3">
            <div className="text-gray-500 font-normal text-base">
               Attachments:{" "}
            </div>
            {props.attachmentUrls.map((file) => (
               <AttachedFile
                  value={new File([], file)}
                  showDelete={false}
                  showDownload={false}
                  showSize
               ></AttachedFile>
            ))}
         </div>
         <div className="flex items-center gap-6">
            <div className="btn btn-primary btn-lg">Submit Answer</div>
            <div className="flex items-center gap-1.5">
               {icons.jobCard.deadline}
               <div className="text-gray-500 font-normal text-base"></div>
               <div className="text-gray-600 font-medium text-base">
                  {moment(new Date(props.deadline)).format("dd/DD/YYYY")}
               </div>
            </div>
         </div>
      </div>
   );
};

export default AssignmentCard;
