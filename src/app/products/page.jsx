import React from 'react';
import ProductsLoader from '../../components/Products/ProductsLoader';

export const metadata = {
    title: "SunCart || Products",
    description: "Buy Whatever You Want.",
};

const ProductsPage = () => {

    return (
        <div className='mx-5'>
            <section className="container mx-auto mt-10 px-6 py-10 bg-white/20 rounded-3xl shadow-lg">

                <div className="text-center">
                    <h2 className="text-4xl font-black text-gray-900 mt-2">
                        Summer Essentials Store
                    </h2>
                </div>

                <ProductsLoader />

            </section>
        </div>
    );
};

export default ProductsPage;