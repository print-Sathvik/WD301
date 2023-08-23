import React, { Suspense } from "react";

import ProjectDetails from "./ProjectDetails";

import { Outlet } from "react-router-dom";
import { TasksProvider } from "../../context/task/context";
import ErrorBoundary from "../../components/ErrorBoundary";

const ProjectDetailsIndex: React.FC = () => {
  return (
    <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <TasksProvider>
            <ProjectDetails />
            <Outlet />
          </TasksProvider>
        </Suspense>
      </ErrorBoundary>
  );
};

export default ProjectDetailsIndex;
