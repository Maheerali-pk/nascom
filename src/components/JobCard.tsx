import { useMemo } from "react";
import { icons } from "../utils/helpers";
import moment from "moment";
import { useRouter } from "next/router";
import { routes } from "../utils/utils";
import classNames from "classnames";

interface ITag {
   text: string;
   icon: JSX.Element;
}

const timeAvailToStringObject: { [k in IJobDuration]: string } = {
   FR: "Freelance",
   "": "",
   FT: "Full-time",
   PT: "Part-time",
};

const locationToStringObject: { [k in IJobLocation]: string } = {
   FLEXIBLE: "Flexible",
   OFFICE: "",
   REMOTE: "Remote",
   "": "",
};
interface JobCardProps {
   data: Partial<IJobApplication> & { organisationName?: string; _id?: string };
   forCandidate?: boolean;
   saved?: boolean;
   withApplyButton?: boolean;
   showExtraMobileFooter?: boolean;
   showNoOfOpenings?: boolean;
   onSearchJobPage?: boolean;
}
const JobCard: React.FC<JobCardProps> = ({
   data,
   forCandidate = false,
   saved = false,
   withApplyButton = false,
   showExtraMobileFooter = false,
   showNoOfOpenings = false,
   onSearchJobPage = false,
}) => {
   const router = useRouter();
   const location =
      data.locationType === "OFFICE"
         ? data.city + ", " + data.state
         : locationToStringObject[data.locationType || "FLEXIBLE"];
   const timeAvail = timeAvailToStringObject[data.timeAvail || "FR"];
   const stipend = useMemo(() => {
      if (data.stipendType === "FIXED") {
         return `${data.stipend} /${
            data?.stipendPeriod?.toLowerCase?.() || "month"
         }`;
      } else {
         return `${data.stipend} - ${data.maxStipend} /${
            data?.stipendPeriod?.toLowerCase?.() || "month"
         }`;
      }
   }, [data.stipend, data.stipendPeriod, data.stipendType]);
   console.log(data, "Job card data");
   return (
      <div className="md:p-6 md:pb-8 py-5 px-4 border-gray-200 rounded-2xl w-full border bg-white">
         <div className="flex flex-col gap-4">
            <div className=" flex justify-between pb-4 border-b border-b-gray-200">
               <div className="flex flex-col gap-1">
                  <div className="text-gray-900 text-lg font-semibold">
                     {data.position}
                  </div>
                  {data.organisationName && (
                     <div className="text-sm text-gray-500 font-medium">
                        {data.organisationName}
                     </div>
                  )}
               </div>
               {forCandidate && (
                  <div
                     className={classNames("flex gap-3 items-center", {
                        "hidden md:flex": showExtraMobileFooter,
                     })}
                  >
                     {showNoOfOpenings && (
                        <div className="text-gray-500 font-medium text-sm whitespace-nowrap">
                           {data.openings} openings left
                        </div>
                     )}
                     <div
                        className={classNames(
                           "btn btn-gray  py-2 px-3.5 text-sm h-fit whitespace-nowrap",
                           {
                              "btn-primary": withApplyButton,
                              "btn-outlined": !withApplyButton,
                           }
                        )}
                        onClick={() =>
                           router.push(
                              withApplyButton
                                 ? routes.student.job.apply(data._id as string)
                                 : routes.student.job.base(data._id as string)
                           )
                        }
                     >
                        {withApplyButton ? "Apply now" : "View job"}
                     </div>
                     {saved ? (
                        <div className="flex gap-2 btn btn-outlined btn-primary text-sm font-semibold py-2 px-3.5 h-fit">
                           {icons.saveJobEnabled} Saved
                        </div>
                     ) : (
                        <div className="flex gap-2 btn btn-outlined btn-gray text-sm font-semibold py-2 px-2 h-fit">
                           {icons.saveJob}
                        </div>
                     )}
                  </div>
               )}
            </div>
            <div className="flex gap-2">
               <div className="text-gray-500">Exam: </div>
               <div className="text-gray-800 font-medium">{data.exam}</div>
            </div>
            <div className="flex gap-2">
               <div className="text-gray-500">Subject expertise:</div>
               <div className="text-gray-800 font-medium">
                  {data.subjects?.join(", ")}
               </div>
            </div>
            <div className="flex gap-2">
               <div className="text-gray-500">Language:</div>
               <div className="text-gray-800 font-medium">
                  {data.workLanguage?.join(", ")}
               </div>
            </div>
            <div className="flex gap-2 flex-wrap">
               <div className="text-gray-500">Skills:</div>
               {data.skillSets?.map((x) => (
                  <div className="bg-purple-50 text-purple-700 px-2.5 py-0.5 rounded-3xl">
                     {x}
                  </div>
               ))}
            </div>
            <div
               className={classNames(
                  "pt-6 border-t border-gray-200 grid grid-cols-2 md:flex items-center gap-8 ",
                  {
                     "md:border-b-0 border-b pb-4 md:pb-0":
                        showExtraMobileFooter,
                  }
               )}
            >
               <div className="gap-1.5 flex items-center">
                  {icons.jobCard.location}
                  <div className="font-medium text-gray-600">{location}</div>
               </div>
               <div className="gap-1.5 flex items-center">
                  {icons.jobCard.clock}
                  <div className="font-medium text-gray-600">{timeAvail}</div>
               </div>
               <div className="gap-1.5 flex items-center">
                  {icons.jobCard.indianRuppee}
                  <div className="font-medium text-gray-600">{stipend}</div>
               </div>
               <div className="gap-1.5 flex items-center">
                  {icons.jobCard.deadline}
                  <div className="font-medium text-gray-600">
                     Apply by{" "}
                     {moment(new Date(data.deadline || new Date())).format(
                        "DD MMM YYYY"
                     )}
                  </div>
               </div>
            </div>

            {showExtraMobileFooter && !onSearchJobPage && (
               <div className="flex flex-col md:hidden gap-4">
                  <div
                     className="btn btn-primary btn-sm"
                     onClick={() =>
                        router.push(routes.student.job.apply(data._id || ""))
                     }
                  >
                     Apply now
                  </div>
                  <div className="btn btn-gray btn-outlined btn-sm gap-2">
                     {icons.saveJob}
                     Save job
                  </div>
                  <div className="text-gray-400 text-sm font-medium text-center">
                     {data.openings} openings left
                  </div>
               </div>
            )}
            {showExtraMobileFooter && onSearchJobPage && (
               <div className="flex justify-between w-full md:hidden">
                  <div
                     onClick={() =>
                        router.push(routes.student.job.base(data._id || ""))
                     }
                     className="btn btn-gray btn-outlined btn-sm gap-2 w-fit"
                  >
                     View Details
                  </div>
                  {saved ? (
                     <div className="flex gap-2 btn btn-outlined btn-primary text-sm font-semibold py-2 px-3.5 w-fit">
                        {icons.saveJobEnabled} Saved
                     </div>
                  ) : (
                     <div className="flex gap-2 btn btn-outlined btn-gray text-sm font-semibold py-2 px-2 w-fit">
                        {icons.saveJob}
                     </div>
                  )}
               </div>
            )}
         </div>
      </div>
   );
};

export default JobCard;
