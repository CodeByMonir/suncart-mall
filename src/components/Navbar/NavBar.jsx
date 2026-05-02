"use client";
import React from "react";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import MyLink from "./MyLink";
import { MdLogin, MdLogout } from "react-icons/md";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

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

    const userData = authClient.useSession();

    const user = userData.data?.user;

    const handleLogout = async () => {
        await authClient.signOut();
    };

    return (
        <nav className="shadow">
            <div className="flex justify-between gap-4 items-center  py-2 container mx-auto">
                <div className="flex flex-1 items-center gap-2">
                <Image src={logoImg} alt="" width={50} height={50} />
                <h2 className="text-3xl font-bold text-gray-900">
                    Sun<span className="text-blue-600">Cart</span>
                </h2>
                </div>
                <div>
                    <ul className="flex justify-between gap-2 items-center">
                        {navItems.map((item, index) => (
                            <MyLink key={index} href={item.path} text={item.text} />
                        ))}
                    </ul>
                </div>
                <div className="flex-1 items-center justify-end flex">
                    {!user && (
                        <a href="/login">
                            <Button className="btn flex items-center">
                                <MdLogin />
                                Log In
                            </Button>
                        </a>
                    )}
                    {user && (
                        <div className="flex items-center gap-2">
                            <Link href="/myprofile">
                                <Avatar size="md" className="shadow-md">
                                    <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                </Avatar>
                            </Link>
                            <Button onClick={handleLogout} size="md" variant="outline" className="shadow-md bg-transparent" >
                                <MdLogout />
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;