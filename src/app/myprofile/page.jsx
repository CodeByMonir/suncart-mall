"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Image from "next/image";
import userAvatar from "@/assets/user.png";

const MyProfile = () => {
    const router = useRouter();
    const userData = authClient.useSession();
    const user = userData.data?.user;

    return (
        <div className="min-h-[60vh] flex items-center justify-center px-6 mt-10">

            <div className="max-w-sm w-full bg-[#00000015] rounded-3xl border border-gray-100 shadow-lg p-8">

                <div className="flex justify-center">
                    <Image
                        src={
                            user?.image?.startsWith("http")
                                ? user.image
                                : userAvatar
                        }
                        alt="Profile Picture"
                        width={112}
                        height={112}
                        className="w-28 h-28 rounded-full object-cover border-4 border-blue-100"
                    />
                </div>

                <div className="text-center mt-6">

                    <h2 className="text-2xl font-bold text-gray-900">
                        {user?.name || "Unknown User"}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        {user?.email || "No Email Found"}
                    </p>

                </div>

                <Button
                    onClick={() => router.push('/updateprofile')}
                    variant="primary"
                    className="w-full mt-6"
                >
                    Update Profile
                </Button>
            </div>
        </div>
    );
};

export default MyProfile;