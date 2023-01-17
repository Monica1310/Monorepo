import React, { useMemo } from "react";

// import { useCount } from "counter1/store";

import { useSharedState } from "sharedState/sharedStateContext";

const Header = ({ count, setCount }) => {
  console.log(count, "count in header in react");
  // console.log(setCount,"setcount ")

  return (
    // <header className="bg-blue-700 text-white font-bold text-3xl p-5 flex">
    <>
      <div class="flex-grow">Header</div>
      <div>
        {count}
        <button
          onClick={() => setCount(0)}
          className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
        >
          Clear
        </button>
      </div>
    </>
    // </header>
  );
};

export default Header;
