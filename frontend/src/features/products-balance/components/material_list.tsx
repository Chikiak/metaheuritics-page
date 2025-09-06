"use client";

import MaterialListItem from "@/features/products-balance/components/material-list-item";
import { useMaterials } from "@/features/products-balance/hooks/useMaterials";

const MaterialList = () => {
    const {materials, addMaterial, updateMaterialName, updateMaterialStock, removeMaterial} = useMaterials();

    return (
        <section className="bg-white h-min p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4 sm:gap-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800"> Materials </h2>
                <span className="text-sm text-gray-500">
                    {materials.length} {materials.length === 1 ? 'item' : 'items'}
                </span>
            </div>

            <div className="flex flex-col gap-3">
                {materials.map(material => (
                    <MaterialListItem
                        key={material.id}
                        material={material}
                        onNameChange={updateMaterialName}
                        onStockChange={updateMaterialStock}
                        onRemove={removeMaterial}
                    />
                ))}

                {materials.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                        <p>No materials yet</p>
                        <p className="text-sm">Click the button below to add your first material</p>
                    </div>
                )}
            </div>

            <button
                onClick={addMaterial}
                className="
                border-2 border-dashed border-gray-300 hover:border-blue-400
                text-gray-600 hover:text-blue-600 font-semibold
                w-12 h-12 rounded-full
                flex items-center justify-center
                bg-gray-50 hover:bg-blue-50
                transition-all duration-200 ease-in-out
                hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300
                mx-auto"
                aria-label="Add new material"
                title="Add new material"
            >
                <span className="text-xl leading-none">+</span>
            </button>
        </section>
    )
}

export default MaterialList;