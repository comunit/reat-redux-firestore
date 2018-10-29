import React from "react";
import moment from "moment";

const ProjectSummary = ({ project }) => {
  var date = new Date(project.createdat.seconds * 1000);
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by the {project.author + " " + project.lastname}</p>
        <p className="grey-text">{moment(date).calendar()}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
