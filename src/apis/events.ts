import { apis, host } from "../utils/constants";

interface ApplyOnEventRequest {
   type: "participatant" | "attendant";
   eventid: string;
}
interface GetAllEventsRequest {
   details: false;
}

export const applyOnEventApi = (data: ApplyOnEventRequest) => {};
export const getAllEvents = async (data: GetAllEventsRequest) => {
   const formData = new FormData();
   for (let key in data) {
      //@ts-ignore
      formData.append(key, data[key as keyof RegisterRequest]);
   }
   const res = await fetch(`${host}/${apis.userData}/`, {
      headers: { Authorization: `Token ${localStorage.getItem("token")}` },
      method: "POST",
   });
   const json = await res.json();
   return json;
};
