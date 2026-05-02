import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import React from 'react';
import { FcEmptyTrash } from 'react-icons/fc';

const UpdateProfile = ({ openModal, setOpenModal, user }) => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;

        await authClient.updateUser({
            name,
            image
        });

        setOpenModal(false);

    };

    return (
        <div>
            {openModal && (
                <div className="fixed inset-0 bg-black/20 backdrop-blur-[2px] flex items-center justify-center px-6 z-50">

                    <div className="bg-white/85 w-full max-w-md rounded-3xl p-8 shadow-2xl relative">

                        <button
                            onClick={() => setOpenModal(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
                        >
                            ✕
                        </button>

                        <h2 className="text-3xl font-bold text-gray-900 text-center">
                            Update Profile
                        </h2>

                        <form onSubmit={onSubmit} className="mt-8 space-y-5">

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Name
                                </label>

                                <input
                                    name='name'
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Image URL
                                </label>

                                <input
                                    name='image'
                                    type="text"
                                    placeholder="Enter image URL"
                                    className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex gap-2">
                                <Button
                                    type="submit"
                                >
                                    Submit
                                    <Check />
                                </Button>
                                <Button type="reset" variant="secondary">
                                    Reset
                                    <FcEmptyTrash />
                                </Button>
                            </div>

                        </form>

                    </div>
                </div>
            )}
        </div>
    );
};

export default UpdateProfile;