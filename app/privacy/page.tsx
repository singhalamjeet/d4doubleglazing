import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-blue-100 text-lg">Last updated: December 23, 2024</p>
                </div>
            </header>

            {/* Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
                <div className="prose prose-lg max-w-none">
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            D4 Double Glazing ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

                        <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-6">2.1 Personal Information</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We may collect personal information that you voluntarily provide to us when you:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                            <li>Request a quote or consultation</li>
                            <li>Contact us via phone, email, or WhatsApp</li>
                            <li>Fill out a contact form on our website</li>
                            <li>Subscribe to our newsletter or marketing communications</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            This information may include:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                            <li>Name and contact information (email, phone number, address)</li>
                            <li>Property information (for quotes and installations)</li>
                            <li>Communication preferences</li>
                            <li>Any other information you choose to provide</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-6">2.2 Automatically Collected Information</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            When you visit our website, we may automatically collect certain information about your device, including:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                            <li>IP address and location data</li>
                            <li>Browser type and version</li>
                            <li>Operating system</li>
                            <li>Pages visited and time spent on pages</li>
                            <li>Referring website addresses</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                            <li>Provide, operate, and maintain our services</li>
                            <li>Process and fulfill your requests for quotes and installations</li>
                            <li>Communicate with you about our services, including customer service and support</li>
                            <li>Send you marketing and promotional communications (with your consent)</li>
                            <li>Improve our website and services</li>
                            <li>Analyze usage patterns and trends</li>
                            <li>Detect, prevent, and address technical issues or fraud</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Sharing Your Information</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                            <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (e.g., payment processors, email services)</li>
                            <li><strong>Professional Advisors:</strong> Lawyers, accountants, and other professional advisors</li>
                            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                            <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Under UK GDPR, you have the following rights:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                            <li><strong>Right to Access:</strong> Request copies of your personal data</li>
                            <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                            <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                            <li><strong>Right to Restrict Processing:</strong> Request limitation of how we use your data</li>
                            <li><strong>Right to Data Portability:</strong> Request transfer of your data to another organization</li>
                            <li><strong>Right to Object:</strong> Object to our processing of your data</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            To exercise these rights, please contact us using the information provided below.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Cookies</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We may use cookies and similar tracking technologies to collect and track information about your browsing activities. You can control cookies through your browser settings.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you have questions or concerns about this Privacy Policy, please contact us:
                        </p>
                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                            <p className="text-gray-700 mb-2"><strong>D4 Double Glazing</strong></p>
                            <p className="text-gray-700 mb-2">Email: info@d4doubleglazing.com</p>
                            <p className="text-gray-700 mb-2">Phone: +44 - 203 667 2670</p>
                            <p className="text-gray-700">Address: 1 Wimblington Drive, Lower Earley, Reading, Berkshire, RG6 4JG, United Kingdom</p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
