import React from "react";

const Dashboard: React.FC = () => {
  const userDataStr = localStorage.getItem("userData");
  const userData = userDataStr && JSON.parse(userDataStr);

  const logout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("authToken");
  };

  return (
    <div className="min-h-screen items-center justify-center bg-gray-100">
      <a href="" id="logout-link" onClick={logout}>
        Logout
      </a>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
      <p>{userData.name}</p>
      <p>{userData.email}</p>
    </div>
  );
};

export default Dashboard;
