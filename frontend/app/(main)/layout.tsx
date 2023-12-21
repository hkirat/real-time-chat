import Navbar from "@/components/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen flex flex-col ">
            <header>
                <Navbar />
            </header>
            <main className="h-full">{children}</main>
        </div>
    );
};

export default Layout;
