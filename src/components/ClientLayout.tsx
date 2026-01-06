'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import PageTransition from '@/components/PageTransition';
import BrandBackground from '@/components/BrandBackground';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdmin = pathname?.includes('/admin');

    if (isAdmin) {
        return <>{children}</>;
    }

    return (
        <div className="relative min-h-screen">
            <BrandBackground />
            <div className="relative z-10">
                <Navbar />
                <div className="pt-16 min-h-screen flex flex-col">
                    <main className="flex-grow">
                        <PageTransition>
                            {children}
                        </PageTransition>
                    </main>
                    <ContactSection />
                    <Footer />
                </div>
            </div>
        </div>
    );
}
