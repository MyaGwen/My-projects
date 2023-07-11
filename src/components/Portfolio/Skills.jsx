import React from "react";
import skills from "../../assets/images/skills.png";

const Skills = () => {
  return (
    <div className="" id="skills">
      <div className="flex flex-col-reverse gap-9 md:flex-row md:content-center justify-between">
        {/* <a href={cv} target="_blank" download>
      <button>download</button>
    </a> */}
        <div className="w-full flex justify-start">
          <img src={skills} alt="AboutMe" />
        </div>
        <div className="self-center  flex flex-col gap-2 w-full">
          <div className="gradient h-1 w-20"></div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-3">Skills and Tools</h2>
          <ul>
            <li>HTMl</li>
            <li>HTMl</li>
            <li>HTMl</li>
            <li>HTMl</li>
            <li>HTMl</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
