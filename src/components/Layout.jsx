import React from "react";
import { Outlet } from "react-router-dom"; //a placeholder component that renders the matched child route component in a nested route scenario.
import Header from "./Header";
import Footer from "./Footer";


export default function Layout() {
    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}