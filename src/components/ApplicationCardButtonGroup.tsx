import classNames from "classnames";
import { icons } from "../utils/helpers";
import Dropdown from "./Dropdown";
import { IApplication, getApplications } from "../apis/getApplications";
import { updateApplication } from "../apis/updateApplication";
import { useGlobalContext } from "../contexts/GlobalContext";
import { getApplicationAlertText } from "../utils/utils";
import SendAssignmentDialog from "../dialogs/SendAssignmentDialog";
import SendMessageDialog from "../dialogs/SendMessageDialog";
import AddNotesDialog from "../dialogs/AddNotesDialog";
import AddNotesButton from "./Resume/AddNotesButton";

interface ApplicationCardButtonGroupProps {
   isAnySelected?: boolean;
   application: IApplication;

   jobId: string;
}

const ApplicationCardButtonGroup: React.FC<ApplicationCardButtonGroupProps> = (
   props
) => {
   const [state, dispatch] = useGlobalContext();
   const handleClickOnAction = async (type: IApplicationUpdateType) => {
      dispatch({ setState: { loading: true } });

      await updateApplication(props.jobId, {
         type,
         applicationIDs: [props.application._id],
      });
      const applications = await getApplications(props.jobId);
      dispatch({ setState: { applications: applications.docs } });

      dispatch({ setState: { loading: false } });
      dispatch({
         setState: { alert: { text: getApplicationAlertText(type, 1) } },
      });
      getApplications(props.jobId);
      setTimeout(() => {
         dispatch({ setState: { alert: null } });
      }, 3000);
      return () => {
         dispatch({ setState: { alert: null } });
      };
   };
   const dropdownItems: IDropdownItem[] = [
      {
         text: "Send Assignment",
         icon: icons.nextSteps.sendAssignment,
         onClick: () => {
            dispatch({
               setDialog: SendAssignmentDialog,
               setState: { applicationsForMessages: [props.application._id] },
            });
         },
      },
      {
         text: "Start Chat",
         icon: icons.nextSteps.startChat,
         onClick: () => {
            dispatch({
               setDialog: SendMessageDialog,
               setState: { applicationsForMessages: [props.application._id] },
            });
         },
      },
      {
         text: "Hire",
         icon: icons.nextSteps.hire,
         onClick: () => handleClickOnAction("HIRE"),
      },
   ];
   const changeStatusToItems: IDropdownItem[] = [
      {
         text: "Applications Received",
         icon: icons.nextSteps.applicationsReceieved,
         onClick: () => {
            handleClickOnAction("PENDING");
         },
      },
      {
         text: "Shortlist",
         icon: icons.nextSteps.shortlist,
         onClick: () => handleClickOnAction("SHORTLIST"),
      },
   ];
   const leftButtonGroup = (
      <div className="flex gap-6">
         <div className="cursor-pointer flex items-center gap-1">
            {icons.jobCardCompany.message}
            <div className="text-gray-500 font-semibold text-sm">Message</div>
         </div>

         <AddNotesButton
            appId={props.application._id}
            notes={props.application.notes}
         ></AddNotesButton>
      </div>
   );
   const mobileTopButtonGroup = (
      <>
         <div className="cursor-pointer flex gap-2 text-gray-500 font-semibold text-sm flex-grow w-full justify-center ">
            {icons.jobCardCompany.message}
            Message
         </div>
         <div className="border-r border-gray-300 h-6"></div>
         <div className="cursor-pointer flex gap-2 text-gray-500 font-semibold text-sm flex-grow  w-full justify-center">
            {icons.jobCardCompany.notes}
            Notes
         </div>
      </>
   );

   if (props.application.status === "HIRED") {
      return (
         <>
            <div className="flex flex-col w-full gap-4 md:hidden">
               <div className="flex gap-1.5 items-center w-full justify-center py-3.5 ">
                  {mobileTopButtonGroup}
               </div>
            </div>
            <div className="md:flex hidden md:mt-2 justify-between w-full">
               {leftButtonGroup}
            </div>
         </>
      );
   }
   if (props.application.status === "PENDING") {
      return (
         <>
            <div className="flex flex-col w-full gap-4 md:hidden">
               <div className="flex gap-1.5 items-center w-full justify-center py-3.5 ">
                  {mobileTopButtonGroup}

                  <div className="border-r border-gray-300 h-6"></div>
                  <div className="cursor-pointer flex gap-2 text-gray-500 font-semibold text-sm flex-grow w-full justify-center">
                     {icons.jobCardCompany.shortlist}
                     Shortlist
                  </div>
               </div>
               <Dropdown
                  elm={
                     <button className="btn-primary btn btn-sm w-full gap-2">
                        Next steps {icons.jobCardCompany.caretDown}
                     </button>
                  }
                  menuClassName="w-full"
                  items={dropdownItems}
               ></Dropdown>
               <button className="btn btn-gray btn-outlined gap-2 btn-sm">
                  {icons.jobCardCompany.notInterested}
                  Not interested
               </button>
            </div>
            <div className="md:flex hidden md:mt-2 justify-between w-full">
               {leftButtonGroup}
               <div
                  className={classNames("flex gap-3", {
                     "opacity-0": props.isAnySelected,
                  })}
               >
                  <button
                     onClick={() => handleClickOnAction("REJECT")}
                     className="btn btn-gray btn-outlined gap-2 btn-sm whitespace-nowrap"
                  >
                     {icons.jobCardCompany.notInterested}
                     Not interested
                  </button>

                  <button
                     onClick={() => handleClickOnAction("SHORTLIST")}
                     className="btn btn-gray btn-outlined gap-2 btn-sm"
                  >
                     {icons.jobCardCompany.shortlist}
                     Shortlist
                  </button>

                  <Dropdown
                     elm={
                        <button className="btn-primary btn-outlined btn btn-sm w-full gap-2 whitespace-nowrap">
                           Next steps {icons.jobCardCompany.caretDownPrimary}
                        </button>
                     }
                     items={dropdownItems}
                  ></Dropdown>
               </div>
            </div>
         </>
      );
   }
   if (props.application.status === "SHORT_LISTED") {
      return (
         <>
            <div className="flex flex-col w-full gap-4 md:hidden">
               <div className="flex gap-1.5 items-center w-full justify-center py-3.5 ">
                  {mobileTopButtonGroup}
               </div>

               <button className="btn btn-primary gap-2 btn-sm">Hire</button>
               <button
                  className="btn btn-gray btn-outlined gap-2 btn-sm"
                  onClick={() => {
                     handleClickOnAction("PENDING");
                  }}
               >
                  Remove from shortlist
               </button>
               <button
                  onClick={() => {
                     handleClickOnAction("REJECT");
                  }}
                  className="btn btn-gray btn-outlined gap-2 btn-sm"
               >
                  {icons.jobCardCompany.notInterested}
                  Not interested
               </button>
            </div>
            <div className="md:flex hidden md:mt-2 justify-between w-full">
               {leftButtonGroup}
               <div
                  className={classNames("flex gap-3", {
                     "opacity-0": props.isAnySelected,
                  })}
               >
                  <button
                     onClick={() => handleClickOnAction("PENDING")}
                     className="btn btn-gray h-fit btn-outlined gap-2 btn-sm whitespace-nowrap"
                  >
                     Remove from shortlist
                  </button>
                  <button
                     onClick={() => handleClickOnAction("REJECT")}
                     className="btn btn-gray h-fit btn-outlined gap-2 btn-sm whitespace-nowrap"
                  >
                     Not interested
                  </button>
                  <button
                     onClick={() => handleClickOnAction("HIRE")}
                     className="btn btn-primary h-fit gap-2 btn-sm whitespace-nowrap"
                  >
                     Hire
                  </button>
               </div>
            </div>
         </>
      );
   }
   if (props.application.status === "REJECTED") {
      return (
         <>
            <div className="flex flex-col w-full gap-4 md:hidden">
               <div className="flex gap-1.5 items-center w-full justify-center py-3.5 ">
                  {mobileTopButtonGroup}
               </div>
               <Dropdown
                  elm={
                     <button className="btn-primary btn-outlined btn btn-sm w-full gap-2 whitespace-nowrap">
                        Change status to {icons.jobCardCompany.caretDownPrimary}
                     </button>
                  }
                  items={changeStatusToItems}
               ></Dropdown>
            </div>
            <div className="md:flex hidden md:mt-2 justify-between w-full">
               {leftButtonGroup}
               <div
                  className={classNames("flex gap-3", {
                     "opacity-0": props.isAnySelected,
                  })}
               >
                  <Dropdown
                     elm={
                        <button className="btn-primary btn-outlined btn btn-sm w-full gap-2 whitespace-nowrap">
                           Change status to{" "}
                           {icons.jobCardCompany.caretDownPrimary}
                        </button>
                     }
                     items={changeStatusToItems}
                  ></Dropdown>
               </div>
            </div>
         </>
      );
   }
   return null;
};

export default ApplicationCardButtonGroup;
