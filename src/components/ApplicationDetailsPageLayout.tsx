import Head from "next/head";
import { useMemo } from "react";
import PageWrapper from "./PageWrapper";
import CompanyNavbar from "./CompanyNavbar";
import { icons } from "../utils/helpers";
import JobDetailsSidebarItem from "./JobDetailsSidebarItem";
import { useRouter } from "next/router";
import {
   applicationSidebarIndexToStatus,
   convertBackendJobToFrontend,
   getApplicationAlertText,
   routes,
} from "../utils/utils";
import { useEffect, useState } from "react";
import { IApplication, getApplications } from "../apis/getApplications";
import ApplicationCard from "./ApplicationCard";
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
import ApplicationDetailsPageHeader from "./ApplicationDetailsPageHeader";
import ApplicationDetailsSidebar from "./ApplicationDetailsSidebar";
import MyApplicationDetails from "../subpages/Student/MyApplicationDetails";
import {
   IApplicationFullDetails,
   getAppFullDetails,
} from "../apis/student/getAppFullDetails";
import JobDetails from "./JobDetails";
import JobCard from "./JobCard";

type ApplicationDetailsRoute = keyof typeof routes.student.applicationDetails;
interface ApplicationDetailsPageLayoutProps {
   appId: string;
   selectedItem: number;
   children?: React.ReactNode;
}

const selectOptions: ISelectOption<ApplicationDetailsRoute>[] = [
   { value: "overview", heading: "Overview" },
   {
      value: "base",
      heading: "My Application",
   },
   { value: "assignment", heading: "Assignments" },
   { value: "chat", heading: "Chat messages" },
];

const ApplicationDetailsPageLayout: React.FC<
   ApplicationDetailsPageLayoutProps
> = (props) => {
   const router = useRouter();
   const [state, dispatch] = useGlobalContext();
   const [app, setApp] = useState<IApplicationFullDetails>();

   useEffect(() => {
      if (props.appId) {
         getAppFullDetails(props.appId).then((res) => {
            setApp(res);
         });
      }
   }, [props.appId]);

   const renderCenterContent = () => {
      console.log("render center content called", app);
      if (props.selectedItem === 0) {
         return (
            <div className="md:mx-28 mx-4 flex flex-col md:gap-8 my-4 md:my-10 mb-24 md:mb-10 gap-4">
               <JobCard
                  data={convertBackendJobToFrontend(app!.jobID)}
               ></JobCard>
               <JobDetails
                  companyDetails={app!.companyID}
                  details={convertBackendJobToFrontend(app!.jobID)}
               ></JobDetails>
            </div>
         );
      }
      if (props.selectedItem === 1) {
         return (
            <MyApplicationDetails
               isCoverLetterRequired={app?.jobID?.isCoverLetterRequired}
               answers={app?.answers || []}
               questions={app?.jobID?.questions || []}
               coverLetter={app?.coverLetter || ""}
            ></MyApplicationDetails>
         );
      } else return null;
   };
   if (!app) {
      return <Loader></Loader>;
   }
   return (
      <>
         <Loader></Loader>
         {state.dialog === SendAssignmentDialog ? (
            <SendAssignmentDialog jobId={props.appId}></SendAssignmentDialog>
         ) : null}
         {state.dialog === SendMessageDialog ? (
            <SendMessageDialog jobId={props.appId}></SendMessageDialog>
         ) : null}
         {state.dialog === AddNotesDialog ? (
            <AddNotesDialog jobId={props.appId}></AddNotesDialog>
         ) : null}
         <ApplicationDetailsPageHeader
            title={app.jobID.position}
            backLink={routes.student.base}
         ></ApplicationDetailsPageHeader>
         <div className="grid grid-rows-[auto] h-full md:grid md:grid-cols-[17.5rem_auto] w-full overflow-auto">
            <ApplicationDetailsSidebar
               selectedItem={props.selectedItem}
            ></ApplicationDetailsSidebar>
            <div className={classNames("bg-gray-100 overflow-auto", {})}>
               {renderCenterContent()}
            </div>
            <div className="gap-2 md:hidden p-4 bg-white border-t border-gray-200 fixed bottom-0 left-0 w-full">
               <Select
                  placeholder="Select"
                  options={selectOptions}
                  onChange={(value) => {
                     router.push(
                        routes.student.applicationDetails[value](props.appId)
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

export default ApplicationDetailsPageLayout;
