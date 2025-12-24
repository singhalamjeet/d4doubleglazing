'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import SocialGallery from '@/components/SocialGallery';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header onOpenContact={() => setIsContactModalOpen(true)} />
      <Hero onOpenContact={() => setIsContactModalOpen(true)} />
      <Services />
      <WhyChooseUs />
      <SocialGallery />
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </main>
  );
}
