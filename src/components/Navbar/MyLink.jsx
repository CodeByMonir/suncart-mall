'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { use } from 'react';

const MyLink = ({ href, text }) => {

    const pathname = usePathname();

    return (
        <Link href={href} className={`${pathname === href ? "text-blue-600 px-2 py-1 rounded-md bg-blue-50 shadow-md" : "text-gray-500 hover:text-blue-500"}`}>
            {text}
        </Link>
    );
};

export default MyLink;