import dynamic from "next/dynamic";

const { SharedStateProvider } = dynamic(async () => {
  const mod = await import("sharedState/sharedStateContext");
  console.log("provider: " + JSON.stringify(mod));
  return mod;
});

const Header = dynamic(() => import("react2/Header"));

// import {HomeApp} from "./HomeApp";

export default function Home() {
  return (
    <>
    {/* <Header/> */}
    
        {/* <SharedStateProvider> */}
          {/* <HomeApp /> */}
          <h1>hello</h1>
        {/* </SharedStateProvider> */}
    
    </>
  );
}
