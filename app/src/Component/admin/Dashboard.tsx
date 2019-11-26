import React from 'react';
import AdminLayout from "../../HOC/AdminLayout";
import AdmiNav from "./nav";

const Dashboard = () => {
    return (
        <AdminLayout>
            <div className="admin_left_nav">
                <AdmiNav/>
            </div>
            <div className="user_dashboard">
                <div>
                    This is your Dashboard
                </div>
            </div>
        </AdminLayout>
    );
};

export default Dashboard;