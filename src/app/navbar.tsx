import Link from 'next/link'
export default function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-black to-transparent flex px-10 py-8 sticky top-0 left-0 right-0 z-10">
            <ul className="flex items-center">
                <img className="h-8 mr-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="logo" />
                <Link href="/">
                    <li className="mr-12 text-white">Home</li>
                </Link>
                <Link href="/tv-shows">
                    <li className="mr-12 text-white">Tv Shows</li>
                </Link>
                <Link href="/movies">
                    <li className="mr-12 text-white">Movies</li>
                </Link>
                <Link href="/my-list">
                    <li className="mr-12 text-white">My List</li>
                </Link>
            </ul>
        </nav>
    )
}