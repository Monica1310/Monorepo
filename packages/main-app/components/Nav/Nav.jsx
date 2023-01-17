import React from "react";
// import  styles  from '../../styles/Nav.module.css'

// import useCount from "counter/store"
import dynamic from "next/dynamic";


const useCount = dynamic(() => import('counter/store'))

// const useCount = require('counter/store')


const Nav = () => {
  const[count,setCount] = useCount()
  return (
    <div
      style={{
        display: "flex",
        width: "50%",
        margin: "auto",
        justifyContent: "space-between",
        height: "50px",
        fontSize: "25px",
        backgroundColor: "aquamarine",
        padding: "20px",
      }}
    >
    
      <div>Home</div>
      <div>Products</div>
      <div>Login</div>
    </div>
  );
};

export default Nav;
