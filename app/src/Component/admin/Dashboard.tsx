import React from 'react';
import AdminLayout from "../../HOC/AdminLayout";
import {RouteProps} from "react-router";

const Dashboard:React.FC<RouteProps> = (props) => {
    return (
        <AdminLayout>
            <div className="user_dashboard">
                <div>
                    This is your Dashboard
                </div>
            </div>
        </AdminLayout>
    );
};

export default Dashboard;