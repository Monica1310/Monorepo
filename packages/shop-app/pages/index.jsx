import dynamic from "next/dynamic";
import React from "react";


// import Nav from "main/Nav";
// import Footer from "main/Footer";

const Nav = dynamic(() => import("main/Nav"));
const Footer = dynamic(() => import("main/Footer"));

export default function Home() {
  return (
    <>
      <Nav />
      <Footer />
    </>
  );
}
