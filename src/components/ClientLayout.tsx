'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import PageTransition from '@/components/PageTransition';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdmin = pathname?.includes('/admin');

    if (isAdmin) {
        return <>{children}</>;
    }

    return (
        <>
            <Navbar />
            <div className="pt-16 min-h-screen flex flex-col matrix-rain">
                <main className="flex-grow">
                    <PageTransition>
                        {children}
                    </PageTransition>
                </main>
                <ContactSection />
                <Footer />
            </div>
        </>
    );
}
