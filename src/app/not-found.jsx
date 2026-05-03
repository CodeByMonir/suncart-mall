import Link from "next/link";

const NotFoundPage = () => {
    return (
        <section className="min-h-screen bg-linear-to-br from-red-50/10 via-white/10 to-orange-50/10 flex items-center justify-center px-6 mt-10">

            <div className="max-w-2xl text-center">

                <h1 className="text-7xl md:text-9xl font-black text-red-500 drop-shadow-sm">
                    404
                </h1>

                <h2 className="mt-6 text-3xl md:text-5xl font-black text-gray-900">
                    Page Not Found
                </h2>

                <p className="mt-5 text-lg text-gray-600 leading-8">
                    Sorry, the page you are looking for does not exist or may have been
                    moved.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

                    <Link
                        href="/"
                        className="px-7 py-3 rounded-2xl bg-red-500 hover:bg-red-600 text-white font-semibold shadow-lg hover:shadow-red-300 transition-all duration-300"
                    >
                        Go Home
                    </Link>

                    <Link
                        href="/products"
                        className="px-7 py-3 rounded-2xl border border-gray-300 hover:border-red-400 hover:text-red-500 font-semibold transition-all duration-300"
                    >
                        Browse Products
                    </Link>

                </div>

                <div className="mt-14 bg-transparent border border-red-100 rounded-3xl p-8 shadow-xl">

                    <div className="text-6xl">
                        😵
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-gray-900">
                        Oops! Lost in Summer Sale?
                    </h3>

                    <p className="mt-3 text-gray-600 leading-7">
                        Looks like this page took a vacation. Let’s get you back to
                        shopping.
                    </p>

                </div>

            </div>
        </section>
    );
};

export default NotFoundPage;