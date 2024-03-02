import React from "react";
import { createCustomContext } from "../utils/CreateCustomContext";

export interface IGlobalState {
   // selectionCenterPoint: "right" | "left";
}
export const initialState: IGlobalState = {};

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
