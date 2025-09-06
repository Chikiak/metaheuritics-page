import { Material } from '@/features/products-balance/types'
import {useState} from "react";

const INITIAL_MATERIALS: Material[] = [
    {
        id: 1,
        name: "Material Inicial",
        stock: 10
    }
];

export const useMaterials = () => {
    const [materials, setMaterials] = useState<Material[]>(INITIAL_MATERIALS);

    const addMaterial = () => {
        const newMaterial: Material = {
            id: Date.now(),
            name: "New Material",
            stock: 0,
        };

        setMaterials(prevMaterials => [...prevMaterials, newMaterial]);
    }
    const updateMaterialName = (id: number, newName: string) => {
        setMaterials(prevMaterials =>
            prevMaterials.map(material =>
                material.id === id
                    ? { ...material, name: newName }
                    : material
            )
        );
    };
    const updateMaterialStock = (id: number, newStock: number) => {
        setMaterials(prevMaterials =>
            prevMaterials.map(material =>
                material.id === id
                    ? { ...material, stock: newStock }
                    : material
            )
        );
    };

    const removeMaterial = (id: number) => {
        setMaterials(prevMaterials => prevMaterials.filter(material => material.id !== id));
    }

    return{
        materials,
        addMaterial,
        updateMaterialName,
        updateMaterialStock,
        removeMaterial,
    }
}
