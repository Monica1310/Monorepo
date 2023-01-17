import React from "react";
import ReactDOM from "react-dom";

export const initialState = {
  count: 0,
  setCount: () => {},
};

const sharedStateReducer = (state, action) => {
  const { type, payload } = action;

  debugger
  switch (type) {
    case "setCount":
      return {
        ...state,
        count: payload?.count,
      };
    case undefined:
      return { ...state };
    default:
      throw new Error(`No case for type ${type} found in shareStateReducer.`);
  }
};

export default sharedStateReducer;
