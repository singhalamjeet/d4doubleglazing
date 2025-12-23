'use client';

import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: '#services', label: 'Services' },
        { href: '#why-choose-us', label: 'Why Us' },
        { href: '#gallery', label: 'Gallery' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                            <span className="text-white font-bold text-xl">D4</span>
                        </div>
                        <span className="hidden sm:block text-xl font-bold text-gray-900">
                            D4 Double Glazing
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-blue-600 font-semibold text-sm transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-6 py-3 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                        >
                            <Phone className="w-4 h-4" />
                            Get Quote
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-100"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden py-4 border-t border-gray-100"
                    >
                        <div className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-gray-700 hover:text-blue-600 font-semibold py-2.5 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-6 py-3 rounded-xl mt-2"
                            >
                                <Phone className="w-4 h-4" />
                                Get Quote
                            </a>
                        </div>
                    </motion.div>
                )}
            </nav>
        </header>
    );
}
