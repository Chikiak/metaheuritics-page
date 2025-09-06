export interface Material {
    id: number;
    name: string;
    stock: number;
}

export interface Product {
    id: string;
    name: string;
    cost: {materialId: string, quantity: number}[];
    profit: number;
}

export interface OptimizationResult {
    productsBalance: {productId: string, quantity: number}[];
    totalProfit: number;
}