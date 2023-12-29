import { Outlet } from "react-router-dom"
import AdminNavbar from "./admin.navbar";

const AdminLayout = () => {
    return <>
        <AdminNavbar />
        <Outlet />
    </> 
    
}

export default AdminLayout;