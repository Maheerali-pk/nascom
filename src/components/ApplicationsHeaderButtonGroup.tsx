import classNames from "classnames";
import { useGlobalContext } from "../contexts/GlobalContext";
import { updateApplication } from "../apis/updateApplication";
import { getApplicationAlertText } from "../utils/utils";
import SendAssignmentDialog from "../dialogs/SendAssignmentDialog";
import SendMessageDialog from "../dialogs/SendMessageDialog";

interface ApplicationsHeaderButtonGroupProps {
   status: IApplicationStatus;
   selectedApplications: Set<string>;
   setSelectAllValue: (val: boolean) => void;
   setSelectedApplications: (val: Set<string>) => void;
   reloadApplications: () => void;
   jobId: string;
}

const ApplicationsHeaderButtonGroup: React.FC<
   ApplicationsHeaderButtonGroupProps
> = ({
   selectedApplications,
   reloadApplications,
   setSelectAllValue,
   setSelectedApplications,
   status,
   jobId,
}) => {
   const [state, dispatch] = useGlobalContext();

   const onClickOnHire = () => {
      dispatch({ setState: { loading: true } });
      updateApplication(jobId, {
         type: "HIRE",
         applicationIDs: Array.from(selectedApplications),
      }).then(() => {
         setTimeout(() => {
            dispatch({
               setState: {
                  loading: false,
                  alert: {
                     text: getApplicationAlertText(
                        "HIRE",
                        selectedApplications.size
                     ),
                  },
               },
            });
            setSelectAllValue(false);
            setSelectedApplications(new Set());
            reloadApplications();
         }, 1000);
      });
   };
   const onClickOnReject = () => {
      dispatch({ setState: { loading: true } });
      updateApplication(jobId, {
         type: "REJECT",
         applicationIDs: Array.from(selectedApplications),
      }).then(() => {
         setTimeout(() => {
            dispatch({
               setState: {
                  loading: false,
                  alert: {
                     text: getApplicationAlertText(
                        "REJECT",
                        selectedApplications.size
                     ),
                  },
               },
            });
            setSelectAllValue(false);
            setSelectedApplications(new Set());
            reloadApplications();
         }, 1000);
      });
   };
   const onClickOnMoveToPending = () => {
      dispatch({ setState: { loading: true } });
      updateApplication(jobId, {
         type: "PENDING",
         applicationIDs: Array.from(selectedApplications),
      }).then(() => {
         setTimeout(() => {
            dispatch({
               setState: {
                  loading: false,
                  alert: {
                     text: getApplicationAlertText(
                        "PENDING",
                        selectedApplications.size
                     ),
                  },
               },
            });
            setSelectAllValue(false);
            setSelectedApplications(new Set());
            reloadApplications();
         }, 1000);
      });
   };
   const onClickOnShortList = () => {
      dispatch({ setState: { loading: true } });
      updateApplication(jobId, {
         type: "SHORTLIST",
         applicationIDs: Array.from(selectedApplications),
      }).then(() => {
         setTimeout(() => {
            dispatch({
               setState: {
                  loading: false,
                  alert: {
                     text: getApplicationAlertText(
                        "SHORTLIST",
                        selectedApplications.size
                     ),
                  },
               },
            });
            setSelectAllValue(false);
            setSelectedApplications(new Set());
            reloadApplications();
         }, 1000);
      });
   };
   if (status === "PENDING") {
      return (
         <div
            className={classNames(
               "flex flex-col gap-3 md:flex-row md:items-center",
               {
                  "md:hidden": selectedApplications.size === 0,
               }
            )}
         >
            <button
               className="btn btn-outlined btn-gray btn-sm "
               onClick={onClickOnHire}
            >
               Hire
            </button>
            <div className="grid grid-cols-2 gap-3 md:flex whitespace-nowrap">
               <button
                  onClick={() => {
                     dispatch({
                        setDialog: SendMessageDialog,
                        setState: {
                           applicationsForMessages:
                              Array.from(selectedApplications),
                        },
                     });
                  }}
                  className="btn btn-outlined btn-gray btn-sm"
               >
                  Message
               </button>
               <button
                  className="btn btn-outlined btn-gray btn-sm"
                  onClick={() =>
                     dispatch({
                        setDialog: SendAssignmentDialog,
                        setState: {
                           applicationsForMessages:
                              Array.from(selectedApplications),
                        },
                     })
                  }
               >
                  Send Assignment
               </button>
               <button
                  className="btn btn-outlined btn-gray btn-sm"
                  onClick={onClickOnShortList}
               >
                  Shortlist
               </button>
               <button
                  onClick={onClickOnReject}
                  className="btn btn-outlined btn-gray btn-sm"
               >
                  Not interested
               </button>
            </div>
         </div>
      );
   }
   if (status === "SHORT_LISTED") {
      return (
         <div
            className={classNames(
               "flex flex-col gap-3 md:flex-row md:items-center",
               {
                  "md:hidden": selectedApplications.size === 0,
               }
            )}
         >
            <button
               onClick={onClickOnMoveToPending}
               className="btn btn-outlined btn-gray btn-sm "
            >
               Remove from shortlist
            </button>
            <div className="grid grid-cols-2 gap-3 md:flex whitespace-nowrap">
               <button
                  onClick={onClickOnReject}
                  className="btn btn-outlined btn-gray btn-sm "
               >
                  Not interested
               </button>
               <button
                  className="btn  btn-primary btn-sm "
                  onClick={onClickOnHire}
               >
                  Hire
               </button>
            </div>
         </div>
      );
   }
   if (status === "REJECTED") {
      return (
         <div
            className={classNames(
               "flex flex-col gap-3 md:flex-row md:items-center",
               {
                  "md:hidden": selectedApplications.size === 0,
               }
            )}
         >
            <button
               onClick={onClickOnMoveToPending}
               className="btn btn-outlined btn-gray btn-sm "
            >
               Move to applications revceived
            </button>
            <div className="grid grid-cols-2 gap-3 md:flex whitespace-nowrap">
               <button
                  onClick={onClickOnShortList}
                  className="btn btn-outlined btn-gray btn-sm "
               >
                  Shortlist
               </button>
            </div>
         </div>
      );
   }
   return null;
};

export default ApplicationsHeaderButtonGroup;
