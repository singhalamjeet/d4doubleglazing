import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
                    <p className="text-blue-100 text-lg">Last updated: December 23, 2024</p>
                </div>
            </header>

            {/* Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
                <div className="prose prose-lg max-w-none">
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            By accessing or using the D4 Double Glazing website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Services</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            D4 Double Glazing provides professional installation services for:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                            <li>Energy-efficient double-glazed windows</li>
                            <li>Secure doors (front, back, patio, and French doors)</li>
                            <li>Conservatories and extensions</li>
                            <li>Repairs and maintenance services</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            All services are subject to availability and our acceptance of your request.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Quotes and Pricing</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            All quotes provided are:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                            <li>Free of charge and without obligation</li>
                            <li>Valid for 30 days from the date of issue</li>
                            <li>Subject to site survey and confirmation</li>
                            <li>Inclusive of VAT unless otherwise stated</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            Prices may vary based on specific requirements, measurements, materials, and any unforeseen circumstances discovered during installation.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Orders and Contracts</h2>

                        <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-6">4.1 Acceptance</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            A contract is formed when we accept your order in writing. We reserve the right to reject any order at our discretion.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-6">4.2 Cancellation</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You have the right to cancel your order within 14 days of signing the contract (cooling-off period) as per the Consumer Contracts Regulations 2013. Cancellation must be made in writing.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            If custom products have been manufactured or installation has commenced, you may be liable for reasonable costs incurred.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>
                        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                            <li>A deposit may be required upon order confirmation (typically 25-50%)</li>
                            <li>Full payment is due upon completion of installation</li>
                            <li>We accept payment by cash, bank transfer, or credit/debit card</li>
                            <li>Late payment may incur interest charges</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Installation</h2>

                        <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-6">6.1 Access</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You must provide clear and safe access to the installation area. Any obstacles or hazards must be removed before our arrival.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-6">6.2 Timing</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We will provide estimated installation dates. While we strive to meet these dates, they are not guaranteed and may be subject to weather conditions, material availability, or other unforeseen circumstances.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-6">6.3 Property Protection</h3>
                        <p className="text-gray-700 leading-relaxed">
                            We take reasonable care to protect your property during installation. However, we are not responsible for damage to existing structures that are in poor condition or for the discovery of underlying issues.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Warranty & Guarantees</h2>

                        <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-6">7.1 Product Warranty</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our products come with a 10-year manufacturer's warranty covering defects in materials and workmanship.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-6">7.2 Installation Guarantee</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We provide a guarantee on our installation work. This covers workmanship issues that arise from our installation.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-6">7.3 Exclusions</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Warranties do not cover:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                            <li>Normal wear and tear</li>
                            <li>Damage caused by misuse, neglect, or accidents</li>
                            <li>Damage from extreme weather events</li>
                            <li>Unauthorized modifications or repairs</li>
                            <li>Glass breakage (unless due to manufacturing defect)</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Building Regulations Compliance</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We comply with all relevant Building Regulations for window and door installations. You will receive appropriate certification upon completion, which you must retain for future property transactions.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            To the extent permitted by law:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                            <li>Our total liability shall not exceed the contract price</li>
                            <li>We are not liable for indirect or consequential losses</li>
                            <li>Nothing in these terms excludes liability for death or personal injury caused by negligence</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Insurance</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We maintain appropriate public liability insurance. Proof of insurance is available upon request.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Intellectual Property</h2>
                        <p className="text-gray-700 leading-relaxed">
                            All content on our website, including text, images, logos, and designs, is owned by D4 Double Glazing and protected by copyright laws. Unauthorized use is prohibited.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">12. Dispute Resolution</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you have a complaint or dispute:
                        </p>
                        <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
                            <li>Contact us directly to resolve the issue</li>
                            <li>If unresolved, you may refer the matter to TrustMark or an alternative dispute resolution service</li>
                            <li>These terms are governed by the laws of England and Wales</li>
                        </ol>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            For questions about these Terms & Conditions, please contact us:
                        </p>
                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                            <p className="text-gray-700 mb-2"><strong>D4 Double Glazing</strong></p>
                            <p className="text-gray-700 mb-2">Email: info@d4doubleglazing.com</p>
                            <p className="text-gray-700 mb-2">Phone: +44 7123 456789</p>
                            <p className="text-gray-700">Address: Your Town, Your County, United Kingdom</p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
