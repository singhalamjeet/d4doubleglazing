'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, User, MessageSquare, MapPin, Clock, Send } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setSubmitStatus('success');
            setIsSubmitting(false);
            setTimeout(() => {
                setSubmitStatus('idle');
                setFormData({ name: '', email: '', phone: '', message: '' });
            }, 3000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-block mb-4">
                            <span className="text-base font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-full uppercase tracking-wide">
                                Contact Us
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Get Your <span className="gradient-text">Free Quote</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We'll get back to you within 24 hours with a no-obligation quote
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left - Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-1 space-y-6"
                        >
                            {/* Contact Cards */}
                            <div className="modern-card p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                                        <a href="tel:+442036672670" className="text-blue-600 font-semibold hover:underline">
                                            +44 - 203 667 2670
                                        </a>
                                        <p className="text-sm text-gray-500 mt-1">Mon-Fri 9am-6pm</p>
                                    </div>
                                </div>
                            </div>

                            <div className="modern-card p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MessageSquare className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                                        <a href="https://wa.me/447522200006" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">
                                            +44 7522 200006
                                        </a>
                                        <p className="text-sm text-gray-500 mt-1">Chat with us now</p>
                                    </div>
                                </div>
                            </div>

                            <div className="modern-card p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                                        <a href="mailto:info@d4doubleglazing.com" className="text-purple-600 font-semibold hover:underline break-all">
                                            info@d4doubleglazing.com
                                        </a>
                                        <p className="text-sm text-gray-500 mt-1">24/7 email support</p>
                                    </div>
                                </div>
                            </div>

                            <div className="modern-card p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                                        <p className="text-gray-700 text-sm">
                                            1 Wimblington Drive<br />
                                            Lower Earley, Reading<br />
                                            Wokingham, RG6 4JG<br />
                                            United Kingdom
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right - Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-2"
                        >
                            <div className="modern-card p-8 lg:p-10">
                                {submitStatus === 'success' ? (
                                    <div className="text-center py-16">
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="text-3xl font-bold text-gray-900 mb-3">Thank You!</h3>
                                        <p className="text-lg text-gray-600">We've received your message and will contact you soon.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name */}
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                                                    placeholder="John Smith"
                                                />
                                            </div>
                                        </div>

                                        {/* Email & Phone */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                                                    Email *
                                                </label>
                                                <div className="relative">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                                                        placeholder="john@example.com"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                                                    Phone *
                                                </label>
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                                                        placeholder="+44 7XXX XXXXXX"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                                                Your Message *
                                            </label>
                                            <div className="relative">
                                                <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-400" />
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    rows={6}
                                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-lg"
                                                    placeholder="Tell us about your project..."
                                                />
                                            </div>
                                        </div>

                                        {/* reCAPTCHA Placeholder */}
                                        <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6">
                                            <div className="flex items-center gap-3">
                                                <input type="checkbox" required className="w-6 h-6 text-blue-600 rounded" />
                                                <label className="text-base text-gray-700 font-medium">
                                                    I'm not a robot (reCAPTCHA)
                                                </label>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-5 px-8 rounded-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-6 h-6" />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
