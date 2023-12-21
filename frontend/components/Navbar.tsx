"use client";
import { MainMenuLinksConfig } from "@/config/navbar";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className=" py-2 border-b shadow">
            <div className="flex items-center justify-between container  mx-auto sm:px-4">
                <Link href={"/"}>
                    <Image
                        alt="Harkirat"
                        src="/logo.jpg"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                </Link>
                <nav className="md:flex hidden items-center gap-5 text-sm">
                    {MainMenuLinksConfig.map((link, index) => (
                        <Link
                            className={`${
                                pathname === link.href
                                    ? "text-slate-700 border-b border-slate-700"
                                    : "text-slate-400"
                            } hover:text-slate-900 duration-150 `}
                            href={link.href}
                            key={index}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/login"
                        className="px-3 rounded py-2 text-white text-sm bg-[#3388e9] hover:bg-[#0064da]"
                    >
                        Login
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
