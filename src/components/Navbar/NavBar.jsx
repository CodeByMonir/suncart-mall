"use client";
import React from "react";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import MyLink from "./MyLink";
import { MdLogin, MdLogout } from "react-icons/md";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import userAvatar from "@/assets/user.png";
import { toast } from "react-toastify";
import SideBar from "../SideBar/SideBar";

const Navbar = () => {
    const router = useRouter();
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
        router.refresh();
        toast.success("Logged out successfully");
        router.push("/login");

    };

    return (
        <nav className="shadow">
            <div className="flex justify-between gap-4 items-center  py-2 container mx-auto">
                <div className="flex flex-1 items-center gap-2">
                <Image src={logoImg} alt="" width={50} height={50} />
                    <h2
                        className="text-3xl font-bold text-gray-900 animate__animated animate__backInRight animate__slow">
                    Sun<span className="text-blue-600">Cart</span>
                </h2>
                </div>
                <div className="hidden md:block">
                    <ul className="flex justify-between gap-2 items-center">
                        {navItems.map((item, index) => (
                            <MyLink key={index} href={item.path} text={item.text} />
                        ))}
                    </ul>
                </div>
                <div className="flex-1 items-center justify-end flex">
                    {!user && (
                        <div>
                            <a href="/login" className="hidden md:block">
                                <Button className="btn flex items-center bg-transparent shadow-md" size="md" variant="outline">
                                    <MdLogin />
                                    Log In
                                </Button>
                            </a>
                            <SideBar />
                        </div>
                    )}
                    {user && (
                        <div className="flex items-center gap-2">
                            <Link href="/myprofile">
                                <Image
                                    src={
                                        user?.image?.startsWith("http")
                                            ? user.image
                                            : userAvatar
                                    }
                                    alt="Profile Picture"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full object-cover border border-blue-100"
                                />
                            </Link>
                            <Button onClick={handleLogout} size="md" variant="outline" className="shadow-md bg-transparent hidden md:block" >
                                <MdLogout />
                            </Button>
                            <div>
                                <SideBar />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;