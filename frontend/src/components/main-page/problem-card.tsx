import Link from 'next/link';


interface ProblemCardProps {
    id: string;
    title: string;
    description: string;
}
const ProblemCard = ({id, title, description}: ProblemCardProps) => {
    return(
        <Link href={`/problems/${id}`} className="block group transition-transform duration-300 ease-in-out hover:-translate-y-1">
            <div className="h-full p-6 bg-white dark:bg-zinc-800/50 border border-zinc-200
            dark:border-zinc-700 rounded-lg shadow-md group-hover:shadow-xl
            transition-shadow duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                    {title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {description}
                </p>
            </div>
        </Link>
    )
}

export default ProblemCard;