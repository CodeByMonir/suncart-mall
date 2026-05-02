import React from 'react';
import Generator from '../Generator/Generator';

const MainSection = () => {

    const brands = ["Nike", "Adidas", "Puma", "Zara"];

    return (
        <div className='container mx-auto my-10'>

            <div className="bg-gray-50  rounded-3xl">

                    <Generator />

                <section className="bg-white py-20">
                    <div className="max-w-7xl mx-auto px-6">

                        <div className="text-center">
                            <h2 className="text-4xl font-black text-gray-900 mt-2">
                                Summer Care Tips
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

                            <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    💧 Stay Hydrated
                                </h3>

                                <p className="text-gray-600 mt-4 leading-7">
                                    Drink enough water daily to stay cool and refreshed during
                                    summer.
                                </p>
                            </div>

                            <div className="bg-pink-50 border border-pink-100 rounded-3xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    ☀️ Protect Skin
                                </h3>

                                <p className="text-gray-600 mt-4 leading-7">
                                    Use sunscreen regularly to protect your skin from harmful UV
                                    rays.
                                </p>
                            </div>

                            <div className="bg-green-50 border border-green-100 rounded-3xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    🥗 Eat Healthy
                                </h3>

                                <p className="text-gray-600 mt-4 leading-7">
                                    Eat fresh fruits and healthy foods to stay energetic and fit.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 py-20">

                    <div className="text-center">
                        <h2 className="text-4xl font-black text-gray-900 mt-2">
                            Top Brands
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">

                        {brands.map((brand, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-100 rounded-3xl py-10 flex items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-2xl font-black text-gray-800">
                                    {brand}
                                </h3>
                            </div>
                        ))}

                    </div>
                </section>

            </div>

        </div>
    );
};

export default MainSection;