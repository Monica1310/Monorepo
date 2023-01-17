import React from "react";
import ReactDOM from "react-dom";

// import Header from "react2/Header";

// import { CountProvider, useCount } from "counter123/store";
// import Nav from "main/Nav";
// import { useEffect } from "react";

import {
  useSharedState,
  SharedStateProvider,
} from "sharedState/sharedStateContext";

import "./index.scss";

export const Components = () => {
  const { count, setCount } = useSharedState();

  console.log(count, "in counter");
  return (
    <>
      <div className="text-3xl mx-auto max-w-6xl">
        {/* <Nav count = {count}/> */}
        {/* <Header count={count} setCount={setCount} /> */}

        <div>Name: host</div>
        <div>Count: {count}</div>
        <div>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};
const App = () => {
  return (
    <SharedStateProvider>
      <Components></Components>
    </SharedStateProvider>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
