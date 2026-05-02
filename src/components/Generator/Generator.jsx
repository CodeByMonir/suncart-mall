import Link from 'next/link';
import React from 'react';

const Generator = async () => {

    const res = await fetch("https://suncart-mall.vercel.app/data.json");

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const allData = await res.json();
    const data = allData.slice(0, 3);

    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

                {data.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                    >

                        {/* Image */}
                        <div className="overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6">

                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold text-gray-900">
                                    {item.name}
                                </h3>

                                <span className="bg-orange-100 text-orange-600 text-sm px-3 py-1 rounded-full">
                                    ⭐ {item.rating}
                                </span>
                            </div>

                            <p className="text-2xl font-black text-red-500 mt-4">
                                ${item.price}
                            </p>

                            <Link
                                href={`/products/${item.id}`}
                                className="mt-6 inline-block w-full text-center bg-gray-900 hover:bg-red-500 text-white py-3 rounded-xl font-semibold transition-all duration-300"
                            >
                                View Details
                            </Link>

                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Generator;