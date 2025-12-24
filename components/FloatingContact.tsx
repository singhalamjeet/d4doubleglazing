'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingContact() {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+447522200006';
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}`;

    return (
        <div className="fixed bottom-6 right-6 z-40">
            <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white shadow-2xl rounded-full px-6 py-4 hover:shadow-green-500/50 transition-all"
            >
                <MessageCircle className="w-6 h-6 animate-pulse" />
                <span className="font-bold text-lg whitespace-nowrap">Chat with us</span>
                {/* Notification dot */}
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-ping"></span>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
            </motion.a>
        </div>
    );
}
