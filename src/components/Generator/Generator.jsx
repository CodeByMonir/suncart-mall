"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Spinner } from '@heroui/react';

const Generator = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const loadData = async () => {
            try {
                const res = await fetch('/data.json');
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const allData = await res.json();
                if (isMounted) {
                    setData(allData.slice(0, 3));
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message || 'Unable to load products');
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        loadData();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <section>
            {loading ? (
                <div className="flex flex-col items-center justify-center py-20 gap-3">
                    <Spinner color="accent" />
                    <span className="text-sm text-gray-600">Loading popular products...</span>
                </div>
            ) : error ? (
                <div className="flex flex-col items-center justify-center py-20 gap-3 text-red-600">
                    <p className="text-lg font-semibold">{error}</p>
                    <span className="text-sm text-gray-500">Please refresh or try again later.</span>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="bg-black/10 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {item.name}
                                    </h3>

                                    <span className="flex gap-2 bg-orange-100 text-orange-600 text-sm px-3 py-1 rounded-full">
                                        <span>⭐</span> {item.rating}
                                    </span>
                                </div>

                                <p className="text-2xl font-black text-red-500 mt-4">
                                    ${item.price}
                                </p>

                                <Link
                                    href={`/products/${item.id}`}
                                    className="mt-6 inline-block w-full text-center bg-gray-900/50 hover:bg-red-500/80 text-white py-3 rounded-xl font-semibold transition-all duration-300"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Generator;