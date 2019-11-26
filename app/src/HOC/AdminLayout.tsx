import React from 'react';
import {IAdminLayout} from "../Interfaces";

const AdminLayout:React.FC<IAdminLayout> = (props) => {
    return (
        <div className="admin_container">
            <div className="admin_left_nav">
                nav
            </div>
            <div className="admin_right">
                {props.children}
            </div>
        </div>
    );
};

export default AdminLayout;