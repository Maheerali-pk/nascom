import React from "react";
import { createCustomContext } from "../utils/CreateCustomContext";

export interface IGlobalState {
   // selectionCenterPoint: "right" | "left";
   user?: IUser;
   showSalePriceDialog: boolean;
   salePriceInputValue: string;
   openedResourceId?: string;
   loading: boolean;
}

export const initialState: IGlobalState = {
   user: {
      experience: 50,
      isCommunityMemeber: true,
      location: "Abbottabad",
      username: "Maheer Saimoon Ali",
   },
   loading: false,
   showSalePriceDialog: false,
   salePriceInputValue: "",
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
