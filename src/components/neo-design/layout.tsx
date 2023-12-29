import { Outlet } from "react-router-dom"
import NavBar from "../navbar/navigation-bar";
import Footer from "./footer/footer";

const Layout = () => {
    return <>
        <NavBar />
        <Outlet />
        <Footer />
    </> 
    
}

export default Layout;