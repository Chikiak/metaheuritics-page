"use client";

import Header from "@/components/header";
import ProblemCard from "@/components/problemCard";

export default function Home() {

    return (
        <div>
            <Header />
            <main className="container mx-auto p-8">
                <div className={"text-center mb-12"}>
                    <h1 className={"text-4xl font-bold"}>Select a Problem</h1>
                    <p className={"text-lg text-foreground/80 mt-2"}>
                        Choose one of the classic optimization problems to see metaheuristics in action.
                    </p>
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}>
                    <ProblemCard slug={""} title={"Products Balance"} description={"Determine the optimal production levels for various products to maximize profit, while respecting constraints on available materials."} />
                </div>
            </main>
        </div>
    );
}