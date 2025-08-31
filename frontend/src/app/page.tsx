"use client";

import { useState, useEffect } from "react";

export default function Home() {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchInitialCount = async () => {
            try {
                const response = await fetch("http://localhost:8000/get-count");
                const data = await response.json();
                setCount(data.current_count);
            } catch (error) {
                console.error("Failed to fetch initial count:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchInitialCount();
    }, []);

    const handleIncrement = async () => {
        try {
            const response = await fetch("http://localhost:8000/increment", {
                method: "POST",
            });
            const data = await response.json();
            setCount(data.new_count);
        }
        catch (error) {
            console.error("Failed to increment count:", error);
        }
    }
    const handleDecrement = async () => {
        try {
            const response = await fetch("http://localhost:8000/decrement", {
                method: "POST",
            });
            const data = await response.json();
            setCount(data.new_count);
        }
        catch (error) {
            console.error("Failed to decrement count:", error);
        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Contador con Backend en Python</h1>
                <p className="mb-8 text-gray-600 dark:text-gray-300">El estado del número se guarda en el servidor.</p>

                <div className="text-6xl font-bold my-10 p-6 border rounded-lg bg-gray-50 dark:bg-gray-800 min-w-[120px]">
                    {isLoading ? "..." : count}
                </div>

                <button
                    onClick={handleIncrement}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-xl"
                >
                    Incrementar
                </button>
                <button
                    onClick={handleDecrement}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-xl"
                >
                    Incrementar
                </button>
            </div>
        </main>
    );
}