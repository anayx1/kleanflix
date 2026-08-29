import React from 'react';
import ContactHero from './ContactHero';
import ContactSectionform from './ContactSectionform';
import WhyThisMattersSection from './WhyThisMattersSection';

export const metadata = {
    title: "Contact Us | Kleanflix",
    description: "Tell Us What You Are Trying to Solve or Build - Get in touch with Kleanflix.",
};

export default function ContactUsPage() {
    return (
        <main className="min-h-screen bg-white">
            <ContactHero />
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="space-y-6 md:space-y-8 text-primary font-medium max-w-5xl leading-relaxed">
                        <p>Every requirement is different.</p>
                        <p>Share what you are working on — it will be reviewed and mapped to the right system.</p>
                        <p>You do not need to have everything figured out.</p>
                    </div>
                </div>
            </section>
            <ContactSectionform />
            <WhyThisMattersSection />
        </main>
    );
}
