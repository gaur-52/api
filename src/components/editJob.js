import React from "react";
function Form(props) {
 
  if (props.currentJob != undefined) {
    console.log(props.currentJobData[0].active)

    return (
      <div>
        <button
          onClick={() => {
            props.jobDeleter(props.id);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            props.jobDuplicator();
          }}
        >

          Duplicate
        </button>

         Active? <input type="checkbox" name="active" checked = {props.currentJobData[0].active} onChange={props.jobEditor}/> 


        <br />
        <input
          placeholder="Title"
          name="title"
          onChange={props.jobEditor}
          value={props.currentJobData[0].title}
        />
        <br />
        <textarea
          name="introduction"
          placeholder="Introduction"
          onChange={props.jobEditor}
          value={props.currentJobData[0].introduction}
        ></textarea>
        <textarea
          name="Roles"
          placeholder="Roles"
          onChange={props.jobEditor}
          value={props.currentJobData[0].Roles}
        ></textarea>
        <textarea
          name="callToAction"
          placeholder="callToAction"
          onChange={props.jobEditor}
          value={props.currentJobData[0].callToAction}
        ></textarea>
        <br />
        <br />
        <label>Experience: </label>
        <select name="minExperience" onChange={props.jobEditor}>
          <option value="1"> 1 </option>
          <option value="2"> 2 </option>
          <option value="3"> 3 </option>
          <option value="4"> 4 </option>
        </select>
        {"   "} to {"   "}
        <select name="maxExperience" onChange={props.jobEditor}>
          value={props.currentJobData[0].maxExperience}
          <option value="10"> 10 </option>
          <option value="20"> 20 </option>
          <option value="30"> 30 </option>
          <option value="40"> 40 </option>
        </select>
        <br />
        <input
          placeholder="Qualification"
          name="qualification"
          onChange={props.jobEditor}
          value={props.currentJobData[0].qualification}
        />
        <br />
        <input
          placeholder="salaryRange"
          name="salaryRange"
          onChange={props.jobEditor}
          value={props.currentJobData[0].salaryRange}
        />
        <br />
        
        {/* <textarea name="callToAction" placeholder = "call to action" onChange={props.jobEditor} value={props.currentJobData[0].callToAction} ></textarea> */}
        <input
          placeholder="company"
          name="company"
          onChange={props.jobEditor}
        />
        <br />
        <input
          placeholder="Location"
          name="Location"
          onChange={props.jobEditor}
        />
        <br />
        <select name="jobType" onChange={props.jobEditor}>
          <option value="part time"> part time </option>
          <option value="full time"> full time </option>
          <option value="contract"> contract </option>
          <option value="internship"> internship </option>
        </select>
        <select name="label" onChange={props.jobEditor}>
          <option value="isRemote"> Remote </option>

          <option value="fiveDayWorking"> 5 day working </option>
        </select>
      </div>
    );
  } else return <div></div>;
}

export default Form;
