"use client";

import MaterialList from "@/features/products-balance/components/material_list";
import Header from "@/components/layout/header";

const ProductsBalancePage = () => {
    return (
        <div className="bg-gray-50">
            <header><Header/></header>
            <main className="container mx-auto p-8">
                <h1 className="text-4xl font-bold text-center">Products Balance Problem</h1>
                <p className="text-lg text-foreground/80 mt-2 text-center">
                    In this page you'll be able lo experiment with the classic products balance problem.
                    Personalize the materials and products and see the results.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div>
                        <MaterialList></MaterialList>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProductsBalancePage;
