import React, { Component } from "react";
function TabCard(props) {
  
  return (
    <div>
      
      <button onClick={()=>{ props.jobDeleter(props.id) }} >-</button>
      <label onClick={()=>{ props.currentJobSetter(props.id) }}> {props.jobTitle} </label>
      
    
    </div>
  );
}

export default TabCard;
