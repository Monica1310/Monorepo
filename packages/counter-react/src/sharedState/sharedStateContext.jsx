import React from "react";
import ReactDOM from "react-dom";
import { createContext, useReducer, useContext } from "react";
import sharedStateReducer, { initialState } from "./sharedStateReducer";

const SharedStateContext = createContext(initialState);

export const SharedStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sharedStateReducer, initialState);

  console.log("state:" + state);
  const setCount = (count) => {
    dispatch({
      type: "setCount",
      payload: {
        count: count,
      },
    });
    return state;
  };

  const getCount = () => {
    return state.count;
  };

  const value = {
    count: state?.count,
    setCount,
    getCount,
  };

  return (
    <SharedStateContext.Provider value={value}>
      {children}
    </SharedStateContext.Provider>
  );
};
export const useSharedState = () => {
  const context = useContext(SharedStateContext);

  if (context === undefined) {
    throw new Error("useSharedState must be used within ShopContext");
  }

  console.log("context :" + JSON.stringify(context));
  return context;
};

//export default useSharedState;
