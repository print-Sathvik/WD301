import React, { useEffect, useReducer } from "react";
import { fetchProjects } from "../../context/projects/actions";
import { useProjectsDispatch } from "../../context/projects/context";
import ProjectListItems from "./ProjectListItems";

export interface Project {
  id: number;
  name: string;
}

const ProjectList: React.FC = () => {
  const dispatchProjects = useProjectsDispatch();

  useEffect(() => {
    fetchProjects(dispatchProjects);
  }, []);
  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      <ProjectListItems />
    </div>
  );
};

export default ProjectList;
