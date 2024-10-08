import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import Breadcrumbs from "../components/common/Breadcrumbs";

const Dashboard = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return (
    <>
    <Breadcrumbs />

    <div className="dashboard-container section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Welcome to Your Dashboard</h2>
              <p>Manage your account and access your resources</p>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="card dashboard-card">
              <div className="card-body">
                <h5 className="card-title">Profile Information</h5>
<div className="profile-info">
    <p><strong>Username:</strong> {user.username}</p>
    <p><strong>Email:</strong> {user.email}</p>
    <p><strong>Status:</strong> {user.is_verified ? 'Verified' : 'Unverified'}</p>
</div>
              </div>
            </div>
          </div>
          
          {/* Add more dashboard cards/sections as needed */}
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;