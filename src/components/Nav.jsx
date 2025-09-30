import { Link, NavLink } from "react-router"

export default function Nav()
{
    return (
        <header>
            <h1>NAV WORKS</h1>
            <nav>
                <NavLink
                    to="/"
                >
                    Home
                </NavLink>

                <NavLink
                    to="/about"
                >
                    About
                </NavLink>
                
                <NavLink
                    to="/about"
                >
                    Support Us
                </NavLink>
            </nav>

        </header>
    )
}