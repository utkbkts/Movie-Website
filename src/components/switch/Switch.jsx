import React, { useState } from "react";
import "./Switch.scss";
const Switch = ({ onTabChange, data }) => {
    const [selectedtab,setselectedtab]=useState(0)
    const [left,setleft]=useState(0)

    const active=(tab,index)=>{
        setleft(index * 100)
        setTimeout(() => {
            setselectedtab(index)
        }, 300);
        onTabChange(tab,index)
    }
  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span onClick={()=>active(tab,index)} key={index} className={`tabItem ${selectedtab === index ? "active":""}`}>
            {tab}
          </span>
        ))}
        <span className="movingBg" style={{left}}></span>
      </div>
    </div>
  );
};

export default Switch;
