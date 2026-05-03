import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="container mx-auto rounded-3xl mt-10 bg-linear-to-br from-orange-50 via-white/20 to-red-50/20 shadow-2xl">
            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14">

                    <div>
                        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                            🔥 Hot Deals This Week
                        </div>

                        <h1 className="mt-6 text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
                            Summer Sale
                            <span className="block text-red-500">
                                50% OFF
                            </span>
                        </h1>

                        <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
                            Discover trending fashion, modern accessories, and stylish
                            collections at unbeatable summer prices.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">

                            <Link
                                href="/products"
                                className="px-7 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold shadow-lg hover:shadow-red-300 transition-all duration-300"
                            >
                                Shop Now
                            </Link>

                            <Link
                                href="/offers"
                                className="px-7 py-3 rounded-xl border border-gray-300 hover:border-red-400 hover:text-red-500 font-semibold transition-all duration-300"
                            >
                                View Offers
                            </Link>

                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <div className="bg-white border border-orange-100 rounded-2xl px-5 py-4 shadow-sm">
                                <p className="text-sm text-gray-500">
                                    Flash Offer
                                </p>

                                <h3 className="text-xl font-bold text-orange-600">
                                    Hot Deals 🔥
                                </h3>
                            </div>

                            <div className="bg-white border border-red-100 rounded-2xl px-5 py-4 shadow-sm">
                                <p className="text-sm text-gray-500">
                                    Limited Time
                                </p>

                                <h3 className="text-xl font-bold text-red-500">
                                    Up to 50% OFF
                                </h3>
                            </div>

                        </div>
                    </div>

                    <div className="relative">

                        <div className="absolute -top-8 -left-8 w-72 h-72 bg-red-200 rounded-full blur-3xl opacity-40"></div>

                        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-red-100">

                            <Image
                                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop"
                                alt="Summer Sale Banner"
                                className="w-full h-125 object-cover"
                                width={1200}
                                height={500}
                            />

                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-4 shadow-lg">
                                <p className="text-sm text-gray-500">
                                    Exclusive Offer
                                </p>

                                <h2 className="text-2xl font-black text-red-500">
                                    SUMMER SALE
                                </h2>

                                <p className="font-semibold text-gray-800">
                                    Save up to 50%
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;