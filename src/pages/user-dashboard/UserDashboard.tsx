import { useState } from "react";
import Navbar from "../../base-compoents/Navbar";
import EventsTable from "../../components/EventsTable";
import TabGroup from "../../components/TabGroup";
import {
   dummyGardeningEvents,
   dummyGardeningResources,
} from "../../utils/constants";
import UserDashboardSidebar from "./UserDasbhboardSidebar";
import ResourceTable from "../../components/ResourcesTable";
import { useGlobalContext } from "../../contexts/GlobalContext";
import DialogWrapper from "../../components/DialogWrapper";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { putResourceOnSale } from "../../apis/resources";

interface UserDashboardProps {}

const UserDashboard: React.FC<UserDashboardProps> = () => {
   const [tab, setTab] = useState(0);
   const [state, dispatch] = useGlobalContext();
   return (
      <>
         <Navbar></Navbar>
         {state.showSalePriceDialog && (
            <DialogWrapper>
               <div className="flex flex-col w-full gap-6 p-4">
                  <div className="text-2xl">Selling the item</div>
                  <Input
                     type="number"
                     label="Enter the price"
                     value={state.salePriceInputValue}
                     onChange={(value) =>
                        dispatch({ setState: { salePriceInputValue: value } })
                     }
                  ></Input>
                  <div
                     className="btn btn-sm btn-primary"
                     onClick={async () => {
                        console.log("Hide the dialog");
                        dispatch({
                           setState: {
                              showSalePriceDialog: false,
                              loading: true,
                           },
                        });
                        await putResourceOnSale({
                           resourceId: state.openedResourceId || "",
                           username: state.user?.username || "",
                        });
                        dispatch({ setState: { loading: false } });
                     }}
                  >
                     Put On Sale
                  </div>
               </div>
            </DialogWrapper>
         )}

         <div className="grid grid-cols-[1fr_3fr] p-8 gap-8">
            <UserDashboardSidebar></UserDashboardSidebar>
            <div className="flex flex-col">
               <TabGroup
                  tabs={[{ text: "My Resources" }, { text: "Events" }]}
                  onTabChange={(tab) => {
                     setTab(tab);
                  }}
                  selected={tab}
               ></TabGroup>
               {tab === 1 && (
                  <EventsTable events={dummyGardeningEvents}></EventsTable>
               )}
               {tab === 0 && (
                  <ResourceTable
                     resources={dummyGardeningResources}
                  ></ResourceTable>
               )}
            </div>
         </div>
      </>
   );
};

export default UserDashboard;
