'use client';

import { motion } from 'framer-motion';
import { Maximize2, DoorOpen, Home, Wrench, ArrowRight } from 'lucide-react';
import { services } from '@/lib/content';

const iconMap = {
    Maximize2,
    DoorOpen,
    Home,
    Wrench,
};

export default function Services() {
    return (
        <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block mb-4">
                        <span className="text-sm font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-full uppercase tracking-wide">
                            What We Offer
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our <span className="gradient-text">Services</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center">
                        Professional installation of high-quality windows, doors, and conservatories designed for energy efficiency and security.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.icon as keyof typeof iconMap];

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative group"
                            >
                                {/* Card */}
                                <div className="modern-card h-full p-8 text-center">
                                    {/* Icon */}
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform mx-auto">
                                        <IconComponent className="w-7 h-7 text-white" strokeWidth={2.5} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>

                                    {/* Description */}
                                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">{service.description}</p>

                                    {/* Features */}
                                    <ul className="space-y-2.5 mb-6 text-left max-w-xs mx-auto">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start gap-2.5 text-sm text-gray-700">
                                                <span className="w-5 h-5 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <span className="text-white font-bold text-xs">✓</span>
                                                </span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
