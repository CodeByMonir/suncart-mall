
import React from 'react';

const ProductsDetailsPage = async ({ params }) => {

    const { id } = await params;

    const res = await fetch('https://suncart-mall.vercel.app/data.json');

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    const data = await res.json();

    const product = data.find(item => item.id == id);

    return (
        <section className="container mx-auto px-6 pt-20 pb-10">
            <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg sm:flex gap-10 p-8 transition bg-white/10">

                <div className="relative shadow-2xl rounded-xl overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-96 object-cover"
                    />

                    <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                        {product.category}
                    </span>
                </div>

                <div className="p-4 space-y-2 w-full">

                    <h2 className="text-2xl font-bold line-clamp-1">
                        {product.name}
                    </h2>

                    <p className="text-sm text-gray-500">
                        {product.brand}
                    </p>

                    <p className="text-sm text-gray-600 line-clamp-2">
                        {product.description}
                    </p>

                    <div className="flex items-center justify-between text-sm mt-2">
                        <span className="text-yellow-500 font-medium">
                            ⭐ {product.rating}
                        </span>

                        <span className={`text-xs px-2 py-1 rounded ${product.stock > 0
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                            }`}>
                            {product.stock}
                            {product.stock > 0 ? " pcs in Stock" : "Out of Stock"}
                        </span>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                        <span className="text-xl font-bold text-gray-900">
                            ${product.price}
                        </span>

                        <button className="bg-black text-white px-3 py-1.5 rounded hover:bg-gray-800 text-sm">
                            Add to Cart
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductsDetailsPage;