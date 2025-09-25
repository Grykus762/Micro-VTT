import Nav from "./Nav"
import Footer from "./Footer"
import { Outlet } from "react-router"
export default function Layout()
{
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}