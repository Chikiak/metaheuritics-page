import Link from "next/link";

const Header = () => {
    return (
        <header className={"sticky top-0 z-50 w-full border-b border-border/40" +
            "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"}>
            <div className="container flex h-14 max-w-screen-2xl items-center px-4 md:px-6">
                <Link href="/">
                    <span className="font-bold sm:inline-block">
                        Metaheuritics Platform
                    </span>
                </Link>
            </div>
        </header>
    )
}

export default Header;