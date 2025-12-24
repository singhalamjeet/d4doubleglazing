'use client';

import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-2xl">D4</span>
                            </div>
                            <span className="text-2xl font-bold">D4 Double Glazing</span>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Your trusted local experts in energy-efficient windows, secure doors, and beautiful conservatories. Quality installations with no-pressure quotes.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                                    Our Services
                                </a>
                            </li>
                            <li>
                                <a href="#gallery" className="text-gray-300 hover:text-white transition-colors">
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/terms" className="text-gray-300 hover:text-white transition-colors">
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-gray-300 text-sm">Call Us</p>
                                    <a href="tel:+447522200006" className="text-white font-semibold hover:text-blue-400 transition-colors">
                                        +44 7522 200006
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-gray-300 text-sm">Email Us</p>
                                    <a href="mailto:info@d4doubleglazing.com" className="text-white font-semibold hover:text-blue-400 transition-colors">
                                        info@d4doubleglazing.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-gray-300 text-sm">Visit Us</p>
                                    <p className="text-white font-semibold">
                                        Your Town, Your County<br />
                                        United Kingdom
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {currentYear} D4 Double Glazing. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-3 text-sm text-gray-400">
                                <span className="px-3 py-1 bg-green-600/20 border border-green-500/30 rounded text-green-300 font-semibold">
                                    TrustMark Certified
                                </span>
                                <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded text-blue-300 font-semibold">
                                    Fully Insured
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
