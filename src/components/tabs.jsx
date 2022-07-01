import React from 'react';

import TabCard from './tabCard';
function Tabs(props) { 
   
    
    const jobList = props.jobList.map((job) => 
          
          
          <TabCard
            key={job.id}
            id={job.id}
            jobTitle={job.title}
            jobDeleter={props.jobDeleter}  
            currentJobSetter={props.currentJobSetter}
            

          />
        );
        
        console.log(props.jobTitle)
    return ( 
        <div>
        <div>

        <input placeholder="newJob" onChange={props.jobAdder} onSubmit={props.jobCreator}/><button onClick={props.jobCreator}>+</button>
        </div>
        {jobList}

    </div> 
    );
}

export default Tabs;