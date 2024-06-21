import React from "react";
import {Link, NavLink} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link className="site-logo" to="/">
                Tunify!
            </Link>
            <nav>
                <NavLink className="nav-series" to="/series">
                    Shows
                </NavLink>
                <NavLink to="/favourites">
                    Favourites
                </NavLink>
                <NavLink className="nav-about" to="/about">
                    About
                </NavLink>
            </nav>
        </header>
    )
}