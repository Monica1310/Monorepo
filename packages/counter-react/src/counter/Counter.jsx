import React from "react";
import {useCount} from "./store";

import Header from "react2/Header";

const Counter = () => {
  const [count, setCount] = useCount();
  return (
    <>
      <Header count={count}/>

      <div>Count: {count}</div>
      <button
        style={{ border: "1px solid", backgroundColor: "grey" }}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
    </>
  );
};

export default Counter;
