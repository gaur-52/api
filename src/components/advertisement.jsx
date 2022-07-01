import React, { useState } from 'react';
function Advertisement(props) {
    
    
        // console.log(props.currentJobData[0].callToAction)
        if (props.currentJob != undefined && props.currentJobData[0].active!=false) {
        
        return ( <div>
        
        
        {props.currentJobData[0].id} {props.currentJobData[0].title}<br/>
        introduction : {props.currentJobData[0].introduction} <br/>
        {/* qualification : { [0].qualification}<br/> */}
        Roles : {props.currentJobData[0].Roles}    <br/>
        {/* call to action :  {props.currentJobData[props.currentJobData.length-2].call}    <br/> */}
        call to action: {props.currentJobData[0].callToAction}<br/>
        Job Type : {props.currentJobData[0].jobType}    <br/>
        Location : {props.currentJobData[0].Location}    <br/>
        salary Range : {props.currentJobData[0].salaryRange}    <br/>
        qualification : {props.currentJobData[0].qualification}    <br/>
        company : {props.currentJobData[0].company}    <br/>
        Experience Range : {props.currentJobData[0].minExperience} to  {props.currentJobData[0].maxExperience}  <br/>
     
    </div> );
    }
    else
    
    return ( <div></div> )
        
    
}

export default Advertisement;

