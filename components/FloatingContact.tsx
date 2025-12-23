'use client';

import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function FloatingContact() {
    const [isExpanded, setIsExpanded] = useState(false);
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+447123456789';
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}`;

    return (
        <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
        >
            <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-6 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all group"
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
            >
                <MessageCircle className="w-6 h-6 flex-shrink-0" strokeWidth={2.5} />

                <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{
                        width: isExpanded ? 'auto' : 0,
                        opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden whitespace-nowrap"
                >
                    Chat with us
                </motion.span>

                {/* Pulse Ring */}
                <motion.div
                    className="absolute inset-0 bg-[#25D366] rounded-full -z-10"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: 'easeInOut',
                    }}
                />
            </motion.a>
        </motion.div>
    );
}
