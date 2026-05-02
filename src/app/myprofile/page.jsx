"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import UpdateProfile from "@/components/UpdateProfile/UpdateProfile";
import { Check } from "@gravity-ui/icons";
import { Button } from "@heroui/react";

const MyProfile = () => {

    const userData = authClient.useSession();
    const user = userData.data?.user;

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center px-6">

            <div className="max-w-sm w-full bg-[#00000015] rounded-3xl border border-gray-100 shadow-lg p-8">

                <div className="flex justify-center">
                    <img
                        src={
                            user?.image ||
                            "https://i.ibb.co/4pDNDk1/avatar.png"
                        }
                        alt={user?.name}
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
                    onClick={() => setOpenModal(true)}
                    type="submit"
                    variant="primary"
                    className="w-full mt-6"
                >
                    Update Profile
                </Button>
            </div>

            <UpdateProfile openModal={openModal} setOpenModal={setOpenModal} />


        </div>
    );
};

export default MyProfile;