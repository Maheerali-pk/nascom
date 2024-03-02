import React from "react";
import { createCustomContext } from "../utils/CreateCustomContext";
import { dummyGardeningEvents } from "../utils/constants";

export interface IGlobalState {
   // selectionCenterPoint: "right" | "left";
   user?: IUser;
   showSalePriceDialog: boolean;
   salePriceInputValue: string;
   openedResourceId?: string;
   loading: boolean;
   allEvents: IEvent[];
   myResources: IResource[];
}

export const initialState: IGlobalState = {
   // user: {
   //    experience: 50,
   //    isCommunityMemeber: true,
   //    location: "Abbottabad",
   //    username: "Maheer Saimoon Ali",
   //    email: "test"
   // },
   loading: false,
   showSalePriceDialog: false,
   salePriceInputValue: "",
   allEvents: dummyGardeningEvents,
   myResources: [],
};

const functions = {
   setState: (
      state: IGlobalState,
      props: Partial<IGlobalState>
   ): IGlobalState => {
      return { ...state, ...props };
   },
};

const { Context, Provider, useContextHook } = createCustomContext<
   IGlobalState,
   typeof functions
>({
   initialState,
   functions,
});

export const GlobalContextProvider = Provider;
export const useGlobalContext = useContextHook;
