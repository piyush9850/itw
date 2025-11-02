import Header from "./components/Header/header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import { Outlet } from "react-router-dom";
function Layout() {
    return (
        <>
            < Header />
            < Outlet/>
            < Footer />
        </>
    )
}

export default Layout
