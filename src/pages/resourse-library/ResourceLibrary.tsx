import Navbar from "../../base-compoents/Navbar";
import ResourceLibraryTable from "../../components/ResourceLibrarayTable";
import ResourceTable from "../../components/ResourcesTable";
import { resourceLibraryItems } from "../../utils/constants";

interface ResourceLibraryProps {}

const ResourceLibrary: React.FC<ResourceLibraryProps> = () => {
   return (
      <>
         <Navbar></Navbar>
         <div className="flex flex-col gap-4 p-8">
            <div className="text-3xl">Resource Library</div>
            <ResourceLibraryTable
               items={resourceLibraryItems}
            ></ResourceLibraryTable>
         </div>
      </>
   );
};

export default ResourceLibrary;
