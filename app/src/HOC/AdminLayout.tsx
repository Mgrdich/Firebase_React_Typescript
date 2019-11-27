import React from 'react';
import {IAdminLayout} from "../Interfaces";
import AdmiNav from "../Component/admin/nav";

const AdminLayout:React.FC<IAdminLayout> = (props) => {
    return (
        <div className="admin_container">
            <div className="admin_left_nav">
                <AdmiNav/>
            </div>
            <div className="admin_right">
                {props.children}
            </div>
        </div>
    );
};

export default AdminLayout;