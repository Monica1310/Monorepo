import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// import { CountProvider } from "counter1/store";

import {
  useSharedState,
  SharedStateProvider,
} from "sharedState/sharedStateContext";

import { Components } from "sharedState/CounterApp";

import "./index.scss";
import Header from "reactapp1/Header";

// import { useCount } from "counter/store";

const App = () => {
  const { count, setCount, getCount } = useSharedState();
  const [localCount, setLocalCount] = useState(count);
  // debugger;

  useEffect(() => {
    setLocalCount(getCount());
  }, [getCount()]);
  return (
    <>
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <Header count={localCount} setCount={setCount} />
        {/* <Components /> */}
      </div>
    </>
  );
};

ReactDOM.render(
  <SharedStateProvider>
    <App />
  </SharedStateProvider>,
  document.getElementById("app")
);
