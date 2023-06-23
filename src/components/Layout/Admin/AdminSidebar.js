import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
    return (
        <div className='Admin_Sidebar'>
            <div className='admin_logo'>
                <Link to="/home" className="nav_Admin_Logo">
                    Motor
                </Link>
            </div>
        </div>
    )
}

export default AdminSidebar
