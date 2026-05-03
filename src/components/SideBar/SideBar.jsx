"use client";
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { toast } from 'react-toastify';

const SideBar = () => {

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
        <div className='md:hidden block'>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1 bg-transparent border border-blue-50 shadow-md"><GiHamburgerMenu className="bg-transparent" /></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100/50 rounded-box z-1 w-52 p-2 shadow-sm">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.path} className="block w-full">
                                {item.text}
                            </Link>
                        </li>
                    ))}
                    {!user && (
                        <li>
                            <Link href="/login" className="block w-full">
                                Login
                            </Link>
                        </li>
                    )}
                    {user && (
                        <li>
                            <button onClick={handleLogout} className="text-left w-full">
                                Logout
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default SideBar;