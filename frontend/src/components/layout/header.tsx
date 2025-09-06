import Link from "next/link";

const Header = () => {
    return (
        <div className="p-4 bg-gray-400/30 border-b-2">
            <Link href="/">
                <h1 className="font-bold sm:inline-block text-center text-xl">
                    Metaheuritics Platform
                </h1>
            </Link>
        </div>
    )
}

export default Header;