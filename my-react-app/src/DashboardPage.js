import React from 'react';
import Userlist from './pages/Userlist';
import 'bootstrap/dist/css/bootstrap.min.css';
const DashboardPage = () => {
  return (
    <div>
      <h1>User Data</h1>
      <Userlist />
    </div>
  );
};

export default DashboardPage;
