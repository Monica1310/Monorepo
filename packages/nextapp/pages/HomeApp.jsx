import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

import dynamic from "next/dynamic";
 const useSharedState = dynamic(async () => {
    const mod = await import("sharedState/sharedStateContext");
    debugger;
    return mod.useSharedState;
  });

// const Header = dynamic(() => import("react2/Header"));
export const HomeApp = () => {
 
  // const { count, setCount } = useSharedState();
  const count = 0;
  return (
    <>
      <Header />
      <h1>{count}</h1>
    </>
  );
};
