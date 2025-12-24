'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, CheckCircle, Award, Users, FileText } from 'lucide-react';
import { whyChooseUs } from '@/lib/content';

const iconMap = {
    Zap,
    Shield,
    FileText,
    Award,
    Users,
    CheckCircle,
};

export default function WhyChooseUs() {
    return (
        <section id="why-choose-us" className="py-24 bg-white">
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
                            Our Advantages
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Why Choose <span className="gradient-text">D4 Double Glazing</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center">
                        Quality products, expert installation, and customer service you can trust
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {whyChooseUs.map((benefit, index) => {
                        const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];

                        return (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="modern-card p-8"
                            >
                                {/* Icon */}
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-5 shadow-md">
                                    <IconComponent className="w-8 h-8 text-white" strokeWidth={2.5} />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
