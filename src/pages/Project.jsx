import React from "react";
import ProjectMainScreen from "./../components/project/ProjectMainScreeen";
import ProjectSecondScreen from "./../components/project/ProjectSecondSecreen";
import ProjectTimeline from "../components/project/ProjectTimeline";

const Project = () => {
  return (
    <div>
      <ProjectMainScreen />
      <ProjectSecondScreen />
      <ProjectTimeline />
    </div>
  );
};

export default Project;
