import React from 'react'
// import  styles  from '../../styles/Footer.module.css'

const Footer = () => {
  return (
    <div style={{ display: "flex",
      width: "50%",
      margin: "auto",
      justifyContent: "space-between",
      height: "40px",
      fontSize: "20px",
      backgroundColor: "rgb(171, 177, 175)",
      padding: "20px",
      marginTop: "600px"
      }}>
      <div>About</div>
      <div>Contact</div>
      <div>Links</div>
    </div>
  )
}

export default Footer