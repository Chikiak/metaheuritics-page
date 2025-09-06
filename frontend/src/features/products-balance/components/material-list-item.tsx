"use client";

import { Material } from '@/features/products-balance/types'
import {useState} from "react";

interface MaterialItemProps {
    material: Material
    onNameChange: (id: number, newName: string) => void
    onStockChange: (id: number, newStock: number) => void
    onRemove: (id: number) => void
}

const MaterialListItem = ({material, onNameChange, onStockChange, onRemove} : MaterialItemProps) => {
    const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);

    const handleRemove = () => {
        if (showRemoveConfirm) {
            onRemove(material.id);
            setShowRemoveConfirm(false);
        } else {
            setShowRemoveConfirm(true);
            setTimeout(() => setShowRemoveConfirm(false), 3000);
        }
    };

    const cancelRemove = () => {
        setShowRemoveConfirm(false);
    };

    return (
        <div className="group">
            <div className="p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex items-center gap-3 lg:order-1 lg:flex-grow">
                    <input
                        type="text"
                        value={material.name}
                        onChange={(e) => onNameChange(material.id, e.target.value)}
                        className="bg-white border-2 border-gray-300 focus:border-blue-500 focus:outline-none rounded-md px-3 py-2 flex-grow transition-colors min-w-0"
                        placeholder="Nombre del material"
                    />
                    <div className="flex items-center gap-1 lg:hidden">
                        {!showRemoveConfirm ? (
                            <button
                                onClick={handleRemove}
                                className="
                                        w-8 h-8 rounded-full flex-shrink-0
                                        bg-red-50 hover:bg-red-100 active:bg-red-100
                                        text-red-500 hover:text-red-600
                                        border border-red-200 hover:border-red-300
                                        flex items-center justify-center
                                        transition-all duration-200 ease-in-out
                                        hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300
                                        touch-manipulation
                                    "
                                aria-label={`Remove ${material.name}`}
                                title={`Remove ${material.name}`}
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                </svg>
                            </button>
                        ) : (
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={handleRemove}
                                    className="
                                            w-7 h-7 rounded-md flex-shrink-0
                                            bg-red-500 hover:bg-red-600 active:bg-red-600
                                            text-white text-xs
                                            transition-colors touch-manipulation
                                            flex items-center justify-center
                                        "
                                    aria-label="Confirmar eliminaciÃ³n"
                                >
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </button>

                                <button
                                    onClick={cancelRemove}
                                    className="
                                            w-7 h-7 rounded-md flex-shrink-0
                                            bg-gray-300 hover:bg-gray-400 active:bg-gray-400
                                            text-gray-700 text-xs
                                            transition-colors touch-manipulation
                                            flex items-center justify-center
                                        "
                                    aria-label="Cancelar eliminaciÃ³n"
                                >
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex items-center gap-2 lg:basis-1/4 lg:max-w-xs lg:order-2 min-w-0">
                    <label className="text-gray-600 font-medium whitespace-nowrap text-sm lg:text-base">Stock:</label>
                    <input
                        type="number"
                        value={material.stock}
                        onChange={(e) => onStockChange(material.id, Number(e.target.value))}
                        className="bg-white border-2 border-gray-300 focus:border-blue-500 focus:outline-none rounded-md px-3 py-2 w-full transition-colors"
                        placeholder="0"
                        min="0"
                    />
                </div>
                <div className="hidden lg:flex items-center gap-1 lg:order-3">
                    {!showRemoveConfirm ? (
                        <button
                            onClick={handleRemove}
                            className="
                                    w-8 h-8 rounded-full flex-shrink-0
                                    bg-red-50 hover:bg-red-100 active:bg-red-100
                                    text-red-500 hover:text-red-600
                                    border border-red-200 hover:border-red-300
                                    flex items-center justify-center
                                    transition-all duration-200 ease-in-out
                                    hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300
                                    touch-manipulation
                                "
                            aria-label={`Remove ${material.name}`}
                            title={`Remove ${material.name}`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    ) : (
                        <div className="flex items-center gap-1">
                            <button
                                onClick={handleRemove}
                                className="w-7 h-7 rounded-md flex-shrink-0 bg-red-500 hover:bg-red-600 active:bg-red-600 text-white text-xs transition-colors touch-manipulation flex items-center justify-center"
                                aria-label="Confirmar eliminación"
                            >
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </button>
                            <button
                                onClick={cancelRemove}
                                className="w-7 h-7 rounded-md flex-shrink-0 bg-gray-300 hover:bg-gray-400 active:bg-gray-400 text-gray-700 text-xs transition-colors touch-manipulation flex items-center justify-center"
                                aria-label="Cancelar eliminación"
                            >
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default MaterialListItem