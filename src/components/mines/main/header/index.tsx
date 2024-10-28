import React from 'react';
import { Salad } from "lucide-react"
import data from './../../../../data/general.json'
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (

        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isSticky ? "bg-white shadow-md py-2" : "bg-transparent py-4"
                }`}
        >
            <nav className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div>
                        <img
                            alt="Logo"
                            height="43"
                            src="img/headers/logo.png"
                            width="98"
                        />
                    </div>
                    {/* Desktop menu */}
                    <ul className="hidden md:flex space-x-8">
                        {data.headers.menu.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={`#${item.id}`}
                                    className={`text-sm font-medium hover:text-primary transition-colors ${isSticky ? "text-gray-600" : "text-white"
                                        }`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* Mobile menu button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className={`h-6 w-6 ${isSticky ? "text-gray-600" : "text-white"}`} />
                        ) : (
                            <Menu className={`h-6 w-6 ${isSticky ? "text-gray-600" : "text-white"}`} />
                        )}
                    </Button>
                </div>
                {/* Mobile menu */}
                <div
                    className={`md:hidden ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                        } overflow-hidden transition-all duration-300 ease-in-out`}
                >
                    <ul className="pt-2 pb-4 space-y-2">
                        {data.headers.menu.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={`#${item.id}`}
                                    className={`block py-2 px-4 text-sm font-medium hover:bg-gray-100 rounded transition-colors ${isSticky ? "text-gray-600" : "text-white"
                                        }`}
                                    onClick={toggleMenu}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;