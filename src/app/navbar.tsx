'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        // Function to update width state
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        // Set initial width
        setWidth(window.innerWidth);

        // Event listener to update width state on resize
        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            {width >= 768 ? (
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
                    </ul>
                </nav>
            ) : (
                <nav className="md:bg-gradient-to-r from-black to-transparent flex p-6 sticky top-0 left-0 right-0 z-10">
                    <div className="dropdown"> {/* Adjusting left margin */}
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 20 20" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 left-0"> {/* Positioning left */}
                            <Link href="/">
                                <li className="mr-12 text-white">Home</li>
                            </Link>
                            <Link href="/tv-shows">
                                <li className="mr-12 text-white">Tv Shows</li>
                            </Link>
                            <Link href="/movies">
                                <li className="mr-12 text-white">Movies</li>
                            </Link>
                        </ul>
                    </div>
                    <img className="h-8 mr-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="logo" />
                </nav>
            )}
        </div>
    );
}

