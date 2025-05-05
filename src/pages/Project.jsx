import React from "react";
import ProjectMainScreen from "./../components/project/ProjectMainScreeen";
import ProjectSecondScreen from "./../components/project/ProjectSecondSecreen";
import ProjectTimeline from "../components/project/ProjectTimeline";
import ProjectForthScreen from "./../components/project/ProjectForthScreen";

const Project = () => {
  return (
    <div>
      <ProjectMainScreen />
      <ProjectSecondScreen />
      <ProjectTimeline />
      <ProjectForthScreen />
    </div>
  );
};

export default Project;
