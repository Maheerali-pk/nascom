import Head from "next/head";
import PageWrapper from "./PageWrapper";
import CompanyNavbar from "./CompanyNavbar";
import { icons } from "../utils/helpers";
import JobDetailsSidebarItem from "./JobDetailsSidebarItem";
import { useRouter } from "next/router";
import { routes } from "../utils/utils";
import { useEffect, useState } from "react";
import { IApplication, getApplications } from "../apis/getApplications";
import ApplicationCard from "./ApplicationCard";
import JobDetailsPageLayout from "./JobDetailsPageLayout";
import CompanyApplicationsPageHeader from "./CompanyApplicationsPageHeader";
import Checkbox from "./Checkbox";
import { updateApplication } from "../apis/updateApplication";
import { useGlobalContext } from "../contexts/GlobalContext";
import Loader from "./Loader";
import CandidateHiredDialog from "../dialogs/CandidateHiredDialog";
import classNames from "classnames";
import Alert from "./Alert";

interface ApplicationsContentProps {
   jobId: string;
   status: IApplicationStatus;
   selectedItem: number;
}

const ApplicationsWrapperContent: React.FC<ApplicationsContentProps> = (
   props
) => {
   return (
      <div className="grid grid-flow-row h-screen grid-rows-[min-content_min-content_auto] overflow-auto">
         <CompanyNavbar selectedItem={1}></CompanyNavbar>
         <Alert></Alert>
         <JobDetailsPageLayout
            jobId={props.jobId}
            selectedItem={props.selectedItem}
         ></JobDetailsPageLayout>
      </div>
   );
};
interface ApplicationWrapperProps {
   status: IApplicationStatus;
   selectedItem: number;
}

const ApplicationsWrapper: React.FC<ApplicationWrapperProps> = (props) => {
   const router = useRouter();
   const [jobId, setJobId] = useState<string>();
   useEffect(() => {
      setJobId(router.query.id as string);
   }, [router.query.id]);
   return (
      <PageWrapper
         Component={
            <ApplicationsWrapperContent
               selectedItem={props.selectedItem}
               status={props.status}
               jobId={jobId || ""}
            ></ApplicationsWrapperContent>
         }
      ></PageWrapper>
   );
};
export default ApplicationsWrapper;
