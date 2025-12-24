'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Shield, Leaf, Award } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    {/* Left Content */}
                    <div>
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6"
                        >
                            <Award className="w-4 h-4 text-blue-600" />
                            <span className="text-blue-700 text-sm font-semibold">Trusted Locally & Professionally Certified</span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1]"
                        >
                            Premium Double
                            <br />
                            <span className="gradient-text">Glazing Solutions</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl"
                        >
                            Energy-efficient windows, secure doors, and beautiful conservatories.
                            Expert installation with transparent pricing and no-pressure quotes.
                        </motion.p>

                        {/* USP Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="grid grid-cols-3 gap-4 mb-10"
                        >
                            <div className="flex flex-col items-center text-center bg-white rounded-2xl p-4 shadow-soft">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-2">
                                    <Leaf className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-sm font-semibold text-gray-900">Energy</span>
                                <span className="text-xs text-gray-500">Efficient</span>
                            </div>
                            <div className="flex flex-col items-center text-center bg-white rounded-2xl p-4 shadow-soft">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-2">
                                    <Shield className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-sm font-semibold text-gray-900">Enhanced</span>
                                <span className="text-xs text-gray-500">Security</span>
                            </div>
                            <div className="flex flex-col items-center text-center bg-white rounded-2xl p-4 shadow-soft">
                                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mb-2">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-sm font-semibold text-gray-900">Locally</span>
                                <span className="text-xs text-gray-500">Trusted</span>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all group"
                            >
                                <Phone className="w-5 h-5" />
                                Get Your Free Quote
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.a>

                            <motion.a
                                href="#gallery"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 font-bold px-8 py-4 rounded-2xl hover:border-gray-300 hover:bg-gray-50 transition-all"
                            >
                                View Our Work
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Right Content - Stats Glass Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hidden lg:block"
                    >
                        <div className="relative">
                            {/* Glass Card */}
                            <div className="glass-card rounded-3xl p-8 space-y-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose D4?</h3>

                                {/* Stats */}
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl font-bold text-white">A+</span>
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900 text-lg">Energy Rated</div>
                                            <div className="text-gray-600 text-sm">Save up to 30% on energy bills</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl font-bold text-white">10</span>
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900 text-lg">Year Guarantee</div>
                                            <div className="text-gray-600 text-sm">Comprehensive warranty coverage</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl font-bold text-white">★</span>
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900 text-lg">5-Star Service</div>
                                            <div className="text-gray-600 text-sm">Rated excellent by our customers</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Trust Badges */}
                                <div className="pt-6 border-t border-gray-200">
                                    <div className="flex items-center gap-4 text-sm text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            <span>Certified</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            <span>TrustMark</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            <span>Insured</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-3xl -z-10 opacity-20"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-400 rounded-3xl -z-10 opacity-20"></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" />
                </svg>
            </div>
        </section>
    );
}
