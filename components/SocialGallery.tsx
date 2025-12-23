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

                {/* Instagram Widget Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* 
            WIDGET INTEGRATION INSTRUCTIONS:
            ================================
            
            Option 1: Elfsight Instagram Feed
            ----------------------------------
            1. Go to https://elfsight.com/instagram-feed-insta/
            2. Create a free account and connect your Instagram
            3. Customize the feed (3 columns, 6-9 posts recommended)
            4. Copy the embed code
            5. Replace this entire div with the embed code
            
            Option 2: LightWidget
            ----------------------
            1. Go to https://lightwidget.com/
            2. Enter your Instagram username
            3. Customize appearance (3 columns layout)
            4. Copy the embed code
            5. Replace this entire div with the embed code
            
            Option 3: Manual Instagram API Integration
            -------------------------------------------
            If you prefer API integration instead of widgets:
            1. Uncomment the code in lib/instagram.ts
            2. Set INSTAGRAM_ACCESS_TOKEN in .env file
            3. Replace this component with the API version
            
            PLACEHOLDER CONTENT BELOW - REMOVE AFTER WIDGET INSTALLATION
          */}

                    <div className="bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-dashed border-pink-300 rounded-2xl p-12 text-center">
                        <Instagram className="w-16 h-16 text-pink-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Instagram Widget Placeholder</h3>
                        <p className="text-gray-600 mb-6 max-w-md mx-auto">
                            This section will display your Instagram feed. Follow the instructions in the component code to integrate Elfsight or LightWidget.
                        </p>
                        <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
                            <Instagram className="w-5 h-5 text-pink-500" />
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-600 font-semibold hover:text-pink-700"
                            >
                                @d4doubleglazing
                            </a>
                        </div>
                    </div>

                    {/* Loading Skeleton (for when widget is loading) - Remove after setup */}
                    <div className="hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="aspect-square bg-gray-200 rounded-lg animate-pulse"></div>
                            ))}
                        </div>
                    </div>
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
        </section>
    );
}
