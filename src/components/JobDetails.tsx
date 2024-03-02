import { useMemo } from "react";
import { icons } from "../utils/helpers";
import classNames from "classnames";

interface IJobDetailsProps {
   details: Partial<IJobApplication>;
   companyDetails: Partial<ICompanyDetails>;
   hideHeader?: boolean;
   showNoOfOpenings?: boolean;
   removeBordersOnMobile?: boolean;
}

const minQualificationToTextObject: { [k in IJobQualification]: string } = {
   "": "",
   INTERVIEW: "Candidates who have cleared the interview",
   MAIN: "Candidates who have qualified for mains",
   NONE: "Not any qualification required",
};
const stipendTypeToTextObject: { [k in IStipendType]: string } = {
   "": "",
   FIXED: "Fixed stipend",
   FREELACE_BASED: "Freelance based stipend",
   NEGOTIABLE: "Negotiable stipend: ",
};

const JobDetails: React.FC<IJobDetailsProps> = ({
   details,
   companyDetails,
   hideHeader,
   showNoOfOpenings,
   removeBordersOnMobile = false,
}) => {
   const stipend = useMemo(() => {
      if (details.stipendType === "FIXED") {
         return `${details.stipend} /${
            details?.stipendPeriod?.toLowerCase() || "month"
         }`;
      } else {
         return `${details.stipend} - ${details.maxStipend} /${
            details?.stipendPeriod?.toLowerCase() || "month"
         }`;
      }
   }, [details.stipend, details.stipendPeriod, details.stipendType]);
   console.log("job details", details);
   return (
      <div
         className={classNames(
            "p-6 gap-6 flex flex-col rounded-2xl mt-8 border bg-white border-gray-200",
            {
               "border-0 p-0 md:border md:border-gray-200 md:p-6":
                  removeBordersOnMobile,
            }
         )}
      >
         <div
            className={classNames(
               "gap-4 flex flex-col pb-4 items-start border-b border-b-gray-200",
               { hidden: Boolean(hideHeader) }
            )}
         >
            <div className="text-gray-900 text-xl font-semibold">
               About {companyDetails?.organisationName}
            </div>
            <div
               onClick={() => {
                  window.location.href = companyDetails?.url || "";
               }}
               className="btn btn-primary btn-link flex gap-2 w-fit"
            >
               <div>Company Website</div>
               {icons.externalWebsite}
            </div>
            <div className="text-gray-700">{companyDetails?.description}</div>
         </div>
         <div className="gap-4 pb-4 flex flex-col border-b border-b-gray-200">
            <div className="text-gray-900 text-xl font-semibold">
               Job Description
            </div>
            <div className="text-gray-700">{details.description}</div>
         </div>
         <div className="gap-4 pb-4 flex flex-col border-b border-b-gray-200">
            <div className="text-gray-900 text-xl font-semibold">
               Who can apply
            </div>
            <div className="flex gap-2 items-center">
               <div className="text-gray-500">Min. qualification:</div>
               <div className="text-gray-800">
                  Candidates who have{" "}
                  {
                     minQualificationToTextObject[
                        details.minQualification || "NONE"
                     ]
                  }
               </div>
            </div>

            {details.noOfMainsAttempted ? (
               <div className="flex gap-2 items-center">
                  <div className="text-gray-500">
                     Min. no. of mains attempts:
                  </div>
                  <div className="text-gray-800">{details.minMainAttempts}</div>
               </div>
            ) : null}
            <div className="flex gap-2 items-center">
               <div className="text-gray-500">Years of experience: </div>
               <div className="text-gray-800">{details.workExp}</div>
            </div>
         </div>
         <div
            className={classNames("gap-4 flex flex-col pb-4 border-gray-200 ", {
               "border-b": showNoOfOpenings,
            })}
         >
            <div className="text-gray-900 text-xl font-semibold">
               Stipend & Perks
            </div>

            <div className="flex gap-2 items-center">
               <div className="text-gray-500">
                  {stipendTypeToTextObject[details.stipendType || "FIXED"]}
               </div>
               <div className="text-gray-800 font-medium">₹{stipend}</div>
            </div>
            {details.perks?.length && (
               <div className="flex gap-2 flex-wrap">
                  <div className="text-gray-500">Perks:</div>
                  {details.perks?.map((x) => (
                     <div className="bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-3xl">
                        {x}
                     </div>
                  ))}
               </div>
            )}
         </div>
         {showNoOfOpenings && (
            <div className="gap-4 flex flex-col pb-4 ">
               <div className="text-gray-900 text-xl font-semibold">
                  No of openings
               </div>

               <div className="flex gap-2 items-center">
                  <div className="text-gray-800 font-medium">
                     {details.openings}
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default JobDetails;
