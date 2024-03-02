import classNames from "classnames";
import { UpscAttempt } from "../../apis/updateStudentProfile";

interface ExamAttemptsProps {
   exams: UpscAttempt[];
   title: string;
   showBadges?: boolean;
}
interface UPSCExamBadge {
   text: string;
   value: number;
}

const ExamAttempts: React.FC<ExamAttemptsProps> = ({
   exams,
   title,
   showBadges,
}) => {
   const UPSCExamBadges: UPSCExamBadge[] = [
      {
         text: "Prelims",
         value: exams?.length || 0,
      },
      {
         text: "Mains",
         value: exams?.filter((a) => a.qualifiedForMains).length || 0,
      },
      {
         text: "Interviews",
         value:
            exams?.filter((a) => a.qualifiedForMains && a.qualifiedForInterview)
               .length || 0,
      },
   ];
   const UPSCYearOfAttempts = Array.from(
      new Set(exams?.map((x) => x.yearOfAttempt))
   );
   return (
      <div className="flex flex-col gap-2">
         <div className="flex flex-col md:items-center md:flex-row gap-2">
            <div className="text-gray-900 font-semibold text-base">{title}</div>
            {showBadges && (
               <div className="flex items-center gap-2">
                  {UPSCExamBadges.map((b) => (
                     <div className="flex items-center rounded-2xl text-secondary-700 font-medium text-xs bg-secondary-50 py-0.5 px-2">
                        {b.value} {b.text}
                     </div>
                  ))}
               </div>
            )}
         </div>
         <div className="flex flex-col gap-1">
            <div className="flex gap-2 text-gray-500 font-normal text-base">
               <div>Years of attempts:</div>
               {UPSCYearOfAttempts.map((year, i) => (
                  <div
                     className={classNames("border-r border-gray-300 pr-2", {
                        "border-r-0": i === UPSCYearOfAttempts.length - 1,
                     })}
                  >
                     {year}
                  </div>
               ))}
            </div>
            <div className="text-gray-500 font-normal text-base">
               Medium: {exams?.map((x) => x.language).join(", ")}
            </div>
            <div className="text-gray-500 font-normal text-base">
               Optional Subjects: {exams?.map((x) => x.optSubject).join(", ")}
            </div>
         </div>
      </div>
   );
};

export default ExamAttempts;
