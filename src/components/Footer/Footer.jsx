import Link from "next/link";
import {
    FaFacebookF,
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 mt-10">
            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-200 pb-10">

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Sun<span className="text-blue-600">Cart</span>
                        </h2>

                        <p className="mt-4 text-sm leading-6 text-gray-600">
                            A modern summer eCommerce platform where users can explore and purchase seasonal products.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Contact Info
                        </h3>

                        <div className="space-y-3 text-sm text-gray-600">
                            <p>Email: suncart@store.com</p>
                            <p>Phone: +880 1234-567890</p>
                            <p>Location: Dhaka, Bangladesh</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Follow Us
                        </h3>

                        <div className="flex items-center gap-4">

                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md"
                            >
                                <FaFacebookF />
                            </Link>

                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-pink-500 hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md"
                            >
                                <FaInstagram />
                            </Link>

                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-sky-500 hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md"
                            >
                                <FaLinkedinIn />
                            </Link>

                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md"
                            >
                                <FaGithub />
                            </Link>

                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-sm text-gray-500">

                    <p>
                        © {new Date().getFullYear()} SunCart. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <Link
                            href="/privacy-policy"
                            className="hover:text-blue-600 transition-colors duration-300"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms"
                            className="hover:text-blue-600 transition-colors duration-300"
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;