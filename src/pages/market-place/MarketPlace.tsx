import Navbar from "../../base-compoents/Navbar";
import { dummyGardeningResources } from "../../utils/constants";
import MarketPlaceTable from "./MarketPlaceTable";

interface MarketPlaceProps {}

const MarketPlace: React.FC<MarketPlaceProps> = () => {
   return (
      <>
         <Navbar></Navbar>
         <div className="flex flex-col p-8 gap-4 px-16">
            <div className="text-2xl font-medium">All Items On Sale</div>
            <MarketPlaceTable
               resources={dummyGardeningResources}
            ></MarketPlaceTable>
         </div>
      </>
   );
};

export default MarketPlace;
