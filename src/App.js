import React, { useState } from "react";
import Tabs from "./components/tabs";
import jobs from "./data/jobs";
import Advertisement from "./components/advertisement";
import Form from "./components/editJob";
function App() {
  const [myJobs, changeJobs] = useState(jobs);
  const [nextId, setNextID] = useState(7);
  const [nextJob, nextJobAdder] = useState("");
  const [currentJob, changeCurrentJob] = useState();
  const [currentJobData,changeCurrentJobData] = useState([{

    id: 1,
    title: "Title",
    introduction: "intro",
    Roles: "Roles and responsibilities",
   
    fiveDayWorking : true,
    active:true,  
    minExperience: 5,
    maxExperience: 10,
    qualification: "Qualification",
    salaryRange: "2lakh - 5 lakh",
    callToAction: "Various details are to be included in Call to action section",
    company: "Handy Solver",
    Location: "GuruGram",
    jobType: "Work From Home",
    isRemote: true,
  }])

  const currentJobSetter = (id) => {
    changeCurrentJob(id);
    changeCurrentJobData(
      myJobs.filter(
        (job)=>{
          return job.id == id
        }
      )
    )
  };
  const jobEditor = (event) => {

    
    const {name,value,type , checked} = event.target
    changeCurrentJobData(
      (old)=>
      {
        if(type=="checkbox")
          return [...old , {[name]:checked}]
        else
          return [...old , {[name]:value}]
      }
    )
    // console.log(event.target.value);
    var newState = myJobs;
    if(name=='title')
      newState[currentJob-1].title = event.target.value
    if(name=='introduction')
      newState[currentJob-1].introduction = event.target.value
    if(name=='Roles')
      newState[currentJob-1].Roles = event.target.value
    if(name=='minExperience')
      newState[currentJob-1].minExperience = event.target.value
    if(name=='maxExperience')
      newState[currentJob-1].maxExperience = event.target.value
    if(name=='qualification')
      newState[currentJob-1].qualification = event.target.value
    if(name=='salaryRange')
      newState[currentJob-1].salaryRange = event.target.value
    if(name=='company')
      newState[currentJob-1].company = event.target.value
      if(name=='callToAction')
      newState[currentJob-1].callToAction = event.target.value
      if(name=='Location')
      newState[currentJob-1].Location = event.target.value
      if(name=='active')
      newState[currentJob-1].active = event.target.checked
      
      
    changeJobs(newState)
    // console.log(myJobs)
  };
  const duplicate=()=>
  {
    // console.log("kush")
    setNextID(nextId + 1);
    let temp = [
      {
        id: nextId,
        title: currentJobData[0].title,
        introduction: currentJobData[0].introduction,
        Roles: currentJobData[0].Roles,
        minExperience: currentJobData[0].minExperience,
        maxExperience: currentJobData[0].maxExperience,
        qualification:currentJobData[0].qualification,
        salaryRange:currentJobData[0].salaryRange,
        callToAction: currentJobData[0].callToAction,
        company: currentJobData[0].company,
        Location: currentJobData[0].Location,
        jobType: currentJobData[0].jobType,
        isRemote: currentJobData[0].isRemote,
      },
    ];
    // console.log(temp);
    changeJobs((old) => {
      // console.log(old);
      return [...old, ...temp];
    });
  }
  const addJob = (event) => {
    nextJobAdder(event.target.value);
    
  };
  const jobCreator = () => {
    setNextID(nextId + 1);
    let temp = [
      {
        id: nextId,
        title: nextJob,
        introduction: "intro comes here",
        Roles: "responsibulities",
        minExperience: 5,
        maxExperience: 10,
        qualification: "",
        salaryRange: "",
        callToAction: "",
        company: "",
        Location: "",
        jobType: "",
        isRemote: false,
        active:true
      },
    ];
    // console.log("called");
    changeJobs((old) => {
      // console.log(old);
      return [...old, ...temp];
    });
  };
  const deleteJob = (id) => {

    changeJobs((old) => {
      return old.filter((job) => {
        return job.id != id;
      });
    });
  };
  // console.log(myJobs)
  return (
    <div style={st}>
      <div style={st1}>
        <Tabs
          jobList={myJobs}
          jobDeleter={deleteJob}
          jobAdder={addJob}
          jobCreator={jobCreator}
          currentJobSetter={currentJobSetter}
        />
      </div>
      <div style={st2}>
        <Form jobEditor={jobEditor} 
         jobList={myJobs}
         currentJob={currentJob}
         jobDeleter={deleteJob}
         id={currentJob}
         jobDuplicator={duplicate}
         currentJobData={currentJobData}
         />
      </div>
      <div style={st3}>
        {" "}
        <Advertisement currentJobData={currentJobData} currentJob={currentJob}/>
      </div>
    </div>
  );
}
const st = {
  height: "100%",
  display: "flex",
  justifyContent: "space-around",
};

const st1 = {
  backgroundColor: "blue",
  height: "100%",
  width: "20%",
  display: "flex",
};
const st2 = {
  backgroundColor: "green",
  height: "30%",
  width: "40%",
  display: "flex",
};
const st3 = {
  backgroundColor: "yellow",
  height: "100%",
  width: "40%",
  display: "flex",
};
export default App;
