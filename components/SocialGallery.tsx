'use client';

import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

export default function SocialGallery() {
    return (
        <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Instagram className="w-10 h-10 text-pink-500" />
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Follow Our <span className="gradient-text">Work</span>
                        </h2>
                    </div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        See our latest installations and happy customers on Instagram
                    </p>
                </motion.div>

                {/* Instagram Widget */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-6xl mx-auto instagram-widget"
                >
                    <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
                    <iframe
                        src="//lightwidget.com/widgets/4809f06968ab512fa4a8f9d44d438a97.html"
                        scrolling="no"
                        allowTransparency={true}
                        className="lightwidget-widget"
                        style={{ width: '100%', border: 0, overflow: 'hidden' }}
                    ></iframe>
                </motion.div>

                {/* Social CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-8"
                >
                    <p className="text-gray-600">
                        Follow us for inspiration, tips, and exclusive offers
                    </p>
                </motion.div>
            </div>
        </section >
    );
}
