import React from "react";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import MyLink from "./MyLink";
import { MdLogin, MdLogout } from "react-icons/md";

const Navbar = () => {
    const navItems = [
        {
            path: "/",
            text: "Home",
        },
        {
            path: "/products",
            text: "Products",
        },
        {
            path: "/myprofile",
            text: "My Profile",
        }
    ];

    return (
        <nav className=" shadow">
            <div className="flex justify-between gap-4 items-center  py-2 container mx-auto">
                <div className="flex items-center gap-2">
                <Image src={logoImg} alt="" width={50} height={50} />
                <h2 className="text-3xl font-bold text-gray-900">
                    Sun<span className="text-blue-600">Cart</span>
                </h2>
                </div>
                <ul className="flex justify-between gap-2 items-center">
                    {navItems.map((item, index) => (
                        <MyLink key={index} href={item.path} text={item.text} />
                    ))}
                </ul>
                <button className="btn bg-purple-500 text-white">
                    <MdLogin />
                    Log In
                </button>
                {/* <button className="btn bg-purple-500 text-white">
                    <MdLogout />
                    Log Out
                </button> */}
            </div>
        </nav>
    );
};

export default Navbar;