import React from "react";
import "./Footer.scss";
import {LiaLocationArrowSolid} from "react-icons/lia"
import {GiMailShirt} from "react-icons/gi"
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <div>
        <h1>&copy;{date} UTKU BEKTASOGLU </h1>
      </div>
      <div className="scoupe">
        <div className="alt">
          <h3>Contact</h3>
         <div style={{display :"flex",gap:"1rem",flexDirection:"column"}}>
         <span style={{display:"flex",
        alignItems:"center",gap:"1rem"}}><LiaLocationArrowSolid/>Location</span>
           <span style={{display:"flex",
        alignItems:"center",gap:"1rem"}}><GiMailShirt/>Email</span>
         </div>
        </div>
        <div className="alt">
          <h3>Lorem, ipsum.</h3>
         <div style={{display:"flex",gap:"1rem",flexDirection:"column"}}>
         <span style={{display:"flex",
        alignItems:"center",gap:"1rem"}}><LiaLocationArrowSolid/>Lorem ipsum dolor sit.</span>
           <span style={{display:"flex",
        alignItems:"center",gap:"1rem"}}><GiMailShirt/>Lorem ipsum dolor sit amet.</span>
         </div>
        </div>
        <div className="alt">
          <h3>Lorem</h3>
         <div style={{display:"flex",gap:"1rem",flexDirection:"column"}}>
         <span style={{display:"flex",
        alignItems:"center",gap:"1rem"}}><LiaLocationArrowSolid/>Lorem, ipsum.</span>
           <span style={{display:"flex",
        alignItems:"center",gap:"1rem"}}><GiMailShirt/>Lorem, ipsum dolor.</span>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
