"use client";

import Header from "@/components/layout/header";
import ProblemCard from "@/components/main-page/problem-card";

export default function Home() {
    const problems = [
        {
            id: "products-balance",
            title: "Products Balance",
            description: "Determine the optimal production levels for various products to maximize profit, while respecting constraints on available materials."
        },{
            id: "products-balance",
            title: "Products Balance",
            description: "Determine the optimal production levels for various products to maximize profit, while respecting constraints on available materials."
        },{
            id: "products-balance",
            title: "Products Balance",
            description: "Determine the optimal production levels for various products to maximize profit, while respecting constraints on available materials."
        },{
            id: "products-balance",
            title: "Products Balance",
            description: "Determine the optimal production levels for various products to maximize profit, while respecting constraints on available materials."
        },
    ];

    return (
        <div className="bg-gray-50">
            <Header />
            <main className="container mx-auto p-8">
                <div className={"text-center mb-12"}>
                    <h1 className={"text-4xl font-bold"}>Select a Problem</h1>
                    <p className={"text-lg text-foreground/80 mt-2"}>
                        Choose one of the classic optimization problems to see metaheuristics in action.
                    </p>
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}>
                    {problems.map((problem) => (
                        <ProblemCard
                            key={problem.id}
                            id={problem.id}
                            title={problem.title}


                            description={problem.description}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}