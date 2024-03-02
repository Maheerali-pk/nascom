import Head from "next/head";
import { useMemo } from "react";
import PageWrapper from "../components/PageWrapper";
import CompanyNavbar from "../components/CompanyNavbar";
import { icons } from "../utils/helpers";
import JobDetailsSidebarItem from "../components/JobDetailsSidebarItem";
import { useRouter } from "next/router";
import {
   applicationSidebarIndexToStatus,
   getApplicationAlertText,
   routes,
} from "../utils/utils";
import { useEffect, useState } from "react";
import { IApplication, getApplications } from "../apis/getApplications";
import ApplicationCard from "../components/ApplicationCard";
import Input from "./Input";
import Select from "./Select";
import classNames from "classnames";
import Loader from "./Loader";
import { useGlobalContext } from "../contexts/GlobalContext";
import { updateApplication } from "../apis/updateApplication";
import CandidateHiredDialog from "../dialogs/CandidateHiredDialog";
import Checkbox from "./Checkbox";
import { relativeTimeRounding } from "moment";
import NoApplications from "./NoApplications";
import ApplicationsHeaderButtonGroup from "./ApplicationsHeaderButtonGroup";
import JobDetailsSidebar from "./JobDetailsSidebar";
import JobDetailsPageHeader from "./JobDetailsPageHeader";
import JobDetailsOverview from "../subpages/company/JobDetailsOverview";
import SendAssignmentDialog from "../dialogs/SendAssignmentDialog";
import SendMessageDialog from "../dialogs/SendMessageDialog";
import AddNotesDialog from "../dialogs/AddNotesDialog";
import JobDetailsAssigmentsTable from "../subpages/company/JobDetailsAssignmentsTable";

type JobDetailsRoute = keyof typeof routes.company.jobDetails;
interface JobDetailsPageLayoutProps {
   jobId: string;
   selectedItem: number;
   selectedItemValue?: JobDetailsRoute;
   children?: React.ReactNode;
}

const selectOptions: ISelectOption<JobDetailsRoute>[] = [
   { value: "base", heading: "Overview" },
   {
      value: "applications",
      heading: "Applications Recieved",
   },
   { value: "shortlisted", heading: "Shortlisted" },
   { value: "hired", heading: "Hired" },
   { value: "notInterested", heading: "Not interested" },
   { value: "assignments", heading: "Assignments" },
   { value: "chat", heading: "Chat messages" },
];

const JobDetailsPageLayout: React.FC<JobDetailsPageLayoutProps> = (props) => {
   const router = useRouter();
   const [state, dispatch] = useGlobalContext();

   const selectedStatus = applicationSidebarIndexToStatus(props.selectedItem);
   const myApplications = state.applications.filter(
      (x) => selectedStatus && x.status === selectedStatus
   );
   const allApplications = state.applications;

   const [searchValue, setSearchValue] = useState("");
   const [selectedApplicatoins, setSelectedApplications] = useState<
      Set<string>
   >(new Set());
   const [selectAllValue, setSelectAllValue] = useState(false);

   const hideHeader = selectedApplicatoins.size > 0;
   const reloadApplications = () => {
      if (props.jobId) {
         dispatch({ setState: { loading: true } });
         getApplications(props.jobId).then((res) => {
            dispatch({ setState: { applications: res.docs } });
            dispatch({ setState: { loading: false } });
         });
      }
   };
   useEffect(() => {
      reloadApplications();
   }, [props.jobId]);

   const handleApplicationSelect = (id: string, value: boolean) => {
      const newSelected = new Set(selectedApplicatoins);
      if (!value) {
         newSelected.delete(id);
      } else {
         newSelected.add(id);
      }
      setSelectedApplications(newSelected);
   };
   const handleSelectAllChange = (val: boolean) => {
      if (val) {
         const newSet = new Set([...myApplications.map((x) => x._id)]);
         setSelectedApplications(newSet);
      } else {
         setSelectedApplications(new Set());
      }
      setSelectAllValue(val);
   };

   const renderCenterContent = () => {
      if (props.selectedItem === 0) {
         return <JobDetailsOverview jobId={props.jobId}></JobDetailsOverview>;
      }
      if (selectedStatus && selectedStatus === "UNDER_EVALUATION") {
         return (
            <JobDetailsAssigmentsTable
               applications={myApplications}
            ></JobDetailsAssigmentsTable>
         );
      }
      if (selectedStatus) {
         return (
            <div
               className={classNames(
                  "flex flex-col  items-center justify-center gap-2 md:gap-8 p-4 pb-24 md:pb-14 md:pt-10 md:px-28 md:overflow-auto",
                  { "h-full": myApplications.length === 0 }
               )}
            >
               {myApplications.length === 0 ? (
                  <NoApplications
                     jobId={props.jobId}
                     type={selectedStatus}
                  ></NoApplications>
               ) : (
                  myApplications.map((app) => (
                     <>
                        <ApplicationCard
                           jobId={props.jobId}
                           selected={selectedApplicatoins.has(app._id)}
                           onChange={(val) =>
                              handleApplicationSelect(app._id, val)
                           }
                           application={app}
                           isAnySelected={selectedApplicatoins.size !== 0}
                        ></ApplicationCard>
                     </>
                  ))
               )}
            </div>
         );
      }
   };
   return (
      <>
         <Loader></Loader>
         {state.dialog === SendAssignmentDialog ? (
            <SendAssignmentDialog jobId={props.jobId}></SendAssignmentDialog>
         ) : null}
         {state.dialog === SendMessageDialog ? (
            <SendMessageDialog jobId={props.jobId}></SendMessageDialog>
         ) : null}
         {state.dialog === AddNotesDialog ? (
            <AddNotesDialog jobId={props.jobId}></AddNotesDialog>
         ) : null}
         <JobDetailsPageHeader
            hideHeader={hideHeader}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            showSearch={Boolean(selectedStatus)}
         ></JobDetailsPageHeader>
         <div className="grid grid-rows-[auto] h-full md:grid md:grid-cols-[17.5rem_auto] w-full overflow-auto">
            <JobDetailsSidebar
               selectedItem={props.selectedItem}
               allApplications={allApplications}
            ></JobDetailsSidebar>
            <div className={classNames("bg-gray-100 overflow-auto", {})}>
               <div
                  className={classNames(
                     "flex md:sticky flex-col md:px-28 md:h-17 justify-center md:justify-start gap-3 md:gap-8 py-6 px-4 md:py-0 bg-white top-0 w-full left-0 z-20 border-b border-gray-200 md:flex-row",
                     {
                        hidden:
                           selectedApplicatoins.size === 0 ||
                           selectedStatus === "HIRED",
                        "md:hidden":
                           myApplications.length === 0 ||
                           selectedStatus === "HIRED",
                        "md:flex": true,
                     }
                  )}
               >
                  <Checkbox
                     label="Select All"
                     onChange={handleSelectAllChange}
                     value={selectAllValue}
                  ></Checkbox>
                  <ApplicationsHeaderButtonGroup
                     jobId={props.jobId}
                     reloadApplications={reloadApplications}
                     selectedApplications={selectedApplicatoins}
                     setSelectAllValue={setSelectAllValue}
                     setSelectedApplications={setSelectedApplications}
                     status={selectedStatus || "HIRED"}
                  ></ApplicationsHeaderButtonGroup>
               </div>
               {renderCenterContent()}
            </div>
            <div className="gap-2 md:hidden p-4 bg-white border-t border-gray-200 fixed bottom-0 left-0 w-full">
               <Select<JobDetailsRoute>
                  placeholder="Select"
                  options={selectOptions}
                  onChange={(value) => {
                     router.push(
                        routes.company.jobDetails[value](props.jobId, "")
                     );
                  }}
                  value={selectOptions[props.selectedItem].value}
                  openOnTop
                  menuClassName="w-screen top-0 shadow-none rounded-none pb-0.5"
                  relativeParent={false}
               ></Select>
            </div>
         </div>
      </>
   );
};

export default JobDetailsPageLayout;
