interface ApplyOnEventRequest {
   type: "participatant" | "attendant";
   eventid: string;
}

export const applyOnEventApi = (data: ApplyOnEventRequest) => {};
