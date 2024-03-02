import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { useGlobalContext } from "../../contexts/GlobalContext";
import Navbar from "../../base-compoents/Navbar";
import moment from "moment";
import { applyOnEventApi } from "../../apis/events";

interface EventDetailsProps {}

const EventDetails: React.FC<EventDetailsProps> = () => {
   const [state, dispatch] = useGlobalContext();
   const params = useParams();
   const id = params.id as string;
   const myEvent = state.allEvents.find((event) => event.id.toString() === id);
   console.log("my event", myEvent);
   const eventStatus: EventStatus = useMemo(() => {
      return "attending" as EventStatus;
   }, []);
   return (
      <>
         <Navbar></Navbar>
         <div className="flex flex-col mx-28 gap-8 py-8 ">
            <div className="flex w-full justify-between">
               <div className="flex flex-col gap-4">
                  <div className="text-4xl  font-semibold">{myEvent?.name}</div>
                  <div className=" text-lg text-gray-600">
                     On {moment(new Date(myEvent!.date)).format("DD MMM, YYYY")}
                  </div>
               </div>
               <div className="flex gap-3">
                  {eventStatus === "open" && (
                     <>
                        <button
                           className="btn btn-sm btn-primary h-fit"
                           onClick={async () => {
                              dispatch({ setState: { loading: true } });
                              await applyOnEventApi({
                                 eventid: myEvent!.id,
                                 type: "attendant",
                              });
                              dispatch({ setState: { loading: false } });
                           }}
                        >
                           Attend
                        </button>
                        <button
                           onClick={async () => {
                              dispatch({ setState: { loading: true } });
                              await applyOnEventApi({
                                 eventid: myEvent!.id,
                                 type: "participatant",
                              });
                              dispatch({ setState: { loading: false } });
                           }}
                           className="btn btn-sm bg-blue-500 text-white hover:bg-blue-700 hover:text-white focus::bg-blue-700   h-fit"
                        >
                           Participate
                        </button>
                     </>
                  )}
                  {eventStatus === "participating" && (
                     <button className="btn btn-sm bg-blue-500 text-white hover:bg-blue-700 hover:text-white focus::bg-blue-700   h-fit">
                        Participating
                     </button>
                  )}
                  {eventStatus === "attending" && (
                     <button className="btn btn-sm bg-success-500 text-white hover:bg-success-700 hover:text-white focus::bg-success-700   h-fit">
                        Attending
                     </button>
                  )}
                  {eventStatus === "closed" && (
                     <button className="btn btn-sm btn-error hover:bg-error-700 h-fit bg-error-700 text-white">
                        Closed
                     </button>
                  )}
               </div>
            </div>
            <img
               src={myEvent?.image}
               className="w-full h-auto aspect-video rounded-2xl object-cover"
            ></img>
            <div className="text-base text-gray-600">
               {myEvent?.description}
            </div>
         </div>
      </>
   );
};

export default EventDetails;
