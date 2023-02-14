import Link from "next/link";

export default function Nav() {
    return(
        <nav className="flex justify-between items-center py-8 scroll-smooth">
            <Link href='/'>
                <button className="text-lg font-medium flex gap-2">John&apos;s Visuals</button>
            </Link>
            <ul className="flex items-center gap-10">
                <Link href='#portfolio'>
                    <div>Portfolio</div>
                </Link>
                <Link href='#about'>
                    <div>About</div>
                </Link>
                <Link href='#contact'>
                    <div>Contact</div>
                </Link>
            </ul>

        </nav>
    )
}