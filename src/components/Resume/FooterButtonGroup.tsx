import classNames from "classnames";
import { IApplicationDetails } from "../../apis/getApplicationDetails";
import { icons } from "../../utils/helpers";
import { useGlobalContext } from "../../contexts/GlobalContext";
import SendAssignmentDialog from "../../dialogs/SendAssignmentDialog";
import SendMessageDialog from "../../dialogs/SendMessageDialog";
import AddNotesDialog from "../../dialogs/AddNotesDialog";
import AddNotesButton from "./AddNotesButton";
import { updateApplication } from "../../apis/updateApplication";
import { useState } from "react";

interface FooterButtonGroupProps {
   appDetails: IApplicationDetails;
   reloadAppDetails: () => void;
}

const FooterButtonGroup: React.FC<FooterButtonGroupProps> = ({
   appDetails,
   reloadAppDetails,
}) => {
   const [state, dispatch] = useGlobalContext();
   const [detailsOpen, setDetailsOpen] = useState(false);
   console.log(state.applications, "state.applications");
   console.log(appDetails, "appDetails");
   const name = appDetails.candidateID.personalInfo.name;
   return (
      <div className="drop-shadow-2xl md:drop-shadow-none flex flex-col justify-center bottom-0 z-10 w-full items-center gap-6 py-7 px-8 fixed bg-white border-t border-gray-200">
         <div
            className={classNames(
               "md:flex w-full items-center justify-center md:flex-row flex-col gap-4 ",
               { flex: detailsOpen, hidden: !detailsOpen }
            )}
         >
            <div
               className={classNames(
                  "flex md:flex-row flex-col w-full md:w-fit  gap-6 pr-4 border-gray-300 md:border-r",
                  { "md:border-none": appDetails.status === "HIRED" }
               )}
            >
               {appDetails.status === "HIRED" ? null : (
                  <>
                     <div
                        onClick={() => {
                           dispatch({
                              setDialog: SendAssignmentDialog,
                              setState: {
                                 applicationsForMessages: [appDetails._id],
                                 messageDialogNames: [
                                    name?.firstName + " " + name?.lastName,
                                 ],
                              },
                           });
                        }}
                        className="flex gap-1.5 cursor-pointer"
                     >
                        {icons.nextSteps.sendAssignment}
                        <div className="text-gray-500 font-semibold text-sm">
                           Send Assignment
                        </div>
                     </div>
                  </>
               )}
               <AddNotesButton
                  appId={appDetails._id}
                  notes={appDetails.notes}
               ></AddNotesButton>
               <div
                  onClick={() => {
                     dispatch({
                        setDialog: SendMessageDialog,
                        setState: {
                           applicationsForMessages: [appDetails._id],
                           messageDialogNames: [
                              name?.firstName + " " + name?.lastName,
                           ],
                        },
                     });
                  }}
                  className="flex gap-1.5 cursor-pointer"
               >
                  {icons.jobCardCompany.message}
                  <div className="text-gray-500 font-semibold text-sm">
                     Message
                  </div>
               </div>
            </div>

            {appDetails.status === "HIRED" ? null : (
               <>
                  <div
                     className="btn btn-primary btn-sm md:w-28"
                     onClick={async () => {
                        dispatch({ setState: { loading: true } });
                        await updateApplication(appDetails.jobID, {
                           type: "HIRE",
                           applicationIDs: [appDetails._id],
                        });
                        reloadAppDetails();
                     }}
                  >
                     Hire
                  </div>
                  <div
                     onClick={async () => {
                        dispatch({ setState: { loading: true } });
                        await updateApplication(appDetails.jobID, {
                           type:
                              appDetails.status === "REJECTED"
                                 ? "PENDING"
                                 : "REJECT",
                           applicationIDs: [appDetails._id],
                        });
                        reloadAppDetails();
                     }}
                     className={classNames(
                        "btn btn-sm btn-gray btn-outlined gap-2 flex md:w-fit",
                        {
                           "btn-error": appDetails.status === "REJECTED",
                        }
                     )}
                  >
                     {icons.jobCardCompany.notInterested} Not interested
                  </div>
                  <div
                     onClick={async () => {
                        dispatch({ setState: { loading: true } });
                        await updateApplication(appDetails.jobID, {
                           type:
                              appDetails.status === "SHORT_LISTED"
                                 ? "PENDING"
                                 : "SHORTLIST",
                           applicationIDs: [appDetails._id],
                        });
                        reloadAppDetails();
                     }}
                     className={classNames(
                        "btn btn-gray btn-outlined gap-2 flex btn-sm  md:w-fit",
                        {
                           "btn-primary btn-semifilled":
                              appDetails.status === "SHORT_LISTED",
                        }
                     )}
                  >
                     {appDetails.status === "SHORT_LISTED"
                        ? icons.jobCardCompany.shortlistActive
                        : icons.jobCardCompany.shortlist}{" "}
                     {appDetails.status === "SHORT_LISTED"
                        ? "Shortlisted"
                        : "Shortlist"}
                  </div>
               </>
            )}
         </div>
         <div
            className="btn btn-primary btn-outlined btn-sm gap-2 md:hidden"
            onClick={() => setDetailsOpen(!detailsOpen)}
         >
            Next steps
         </div>
      </div>
   );
};

export default FooterButtonGroup;
