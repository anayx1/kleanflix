import React from 'react';
import ReededGlassHero from '@/components/ReededGlassHero';

export const metadata = {
    title: 'Terms & Conditions | Kleanfix',
    description:
        'Review the terms of use, commercial agreements, intellectual property guidelines, and conditions of service for Kleanfix Industries Pvt. Ltd.',
};

export default function TermsAndConditionsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section with Reeded Glass Reveal */}
            <ReededGlassHero
                title="Terms & Conditions"
                imageSrc="/hero.png"
                imageAlt="Terms and Conditions Hero Background"
            />

            {/* Terms Content */}
            <article className="main-container md:w-6xl! md:mx-auto px-5 py-12 md:py-20 text-primary">
                <div className="space-y-8 md:space-y-10">
                    {/* Introductory Paragraphs */}
                    <div className="space-y-3">
                        <p className="text-[18px] leading-relaxed">
                            By accessing and using this website, you agree to comply with and be bound by the following Terms & Conditions.
                        </p>
                        <p className="text-[18px] leading-relaxed">
                            If you do not agree with any part of these terms, you should not use this website.
                        </p>
                    </div>

                    {/* Section: USE OF WEBSITE */}
                    <section className="space-y-3">
                        <h2 className="text-[20px] font-bold uppercase text-primary tracking-wide">
                            USE OF WEBSITE
                        </h2>
                        <p className="text-[18px] leading-relaxed">
                            The content on this website is provided for general information regarding Kleanfix products, systems, and services.
                        </p>
                        <p className="text-[18px] leading-relaxed">
                            You agree to:
                        </p>
                        <div className="space-y-1 pl-1">
                            <p className="text-[18px]">• Use The Website Only for Lawful Purposes</p>
                            <p className="text-[18px]">• Not Misuse, Disrupt, Or Attempt Unauthorized Access</p>
                            <p className="text-[18px]">• Not Engage in Fraudulent or Harmful Activities</p>
                        </div>
                    </section>

                    {/* Section: ACCURACY OF INFORMATION */}
                    <section className="space-y-3">
                        <h2 className="text-[20px] font-bold uppercase text-primary tracking-wide">
                            ACCURACY OF INFORMATION
                        </h2>
                        <p className="text-[18px] leading-relaxed">
                            Kleanfix makes reasonable efforts to ensure that the information on this website is accurate and up to date.
                        </p>
                        <p className="text-[18px] leading-relaxed">
                            However:
                        </p>
                        <div className="space-y-1 pl-1">
                            <p className="text-[18px]">• We Do Not Guarantee Completeness or Accuracy at All Times</p>
                            <p className="text-[18px]">• Content May Be Updated or Modified Without Prior Notice</p>
                        </div>
                        <div className="space-y-1 pt-1">
                            <p className="text-[18px] leading-relaxed">
                                Users are responsible for independently evaluating suitability before making decisions.
                            </p>
                            <p className="text-[18px] leading-relaxed">
                                Decisions should not be based solely on website content without validation.
                            </p>
                        </div>
                    </section>

                    {/* Section: PRODUCT & SERVICE REPRESENTATION */}
                    <section className="space-y-3">
                        <h2 className="text-[20px] font-bold uppercase text-primary tracking-wide">
                            PRODUCT & SERVICE REPRESENTATION
                        </h2>
                        <p className="text-[18px] leading-relaxed">
                            All product descriptions, system explanations, and use-cases are indicative in nature.
                        </p>
                        <p className="text-[18px] leading-relaxed">
                            Actual specifications may vary based on:
                        </p>
                        <div className="space-y-1 pl-1">
                            <p className="text-[18px]">• Application</p>
                            <p className="text-[18px]">• Customization</p>
                            <p className="text-[18px]">• Operational Requirements</p>
                        </div>
                        <p className="text-[18px] leading-relaxed pt-1">
                            Final alignment is subject to discussion and confirmation.
                        </p>
                    </section>

                    {/* Section: INTELLECTUAL PROPERTY */}
                    <section className="space-y-3">
                        <h2 className="text-[20px] font-bold uppercase text-primary tracking-wide">
                            INTELLECTUAL PROPERTY
                        </h2>
                        <p className="text-[18px] leading-relaxed">
                            All content on this website, including:
                        </p>
                        <div className="space-y-1 pl-1">
                            <p className="text-[18px] font-semibold">• Text</p>
                            <p className="text-[18px] font-semibold">• Structure</p>
                            <p className="text-[18px] font-semibold">• Design</p>
                            <p className="text-[18px] font-semibold">• Visuals</p>
                        </div>
                        <div className="space-y-2 pt-1">
                            <p className="text-[18px] leading-relaxed">
                                is the property of Kleanfix Industries Pvt. Ltd.
                            </p>
                            <p className="text-[18px] leading-relaxed">
                                No content may be copied, reproduced, distributed, or modified without prior written permission.
                            </p>
                        </div>
                    </section>

                    {/* Section: LIMITATION OF LIABILITY */}
                    <section className="space-y-3">
                        <h2 className="text-[20px] font-bold uppercase text-primary tracking-wide">
                            LIMITATION OF LIABILITY
                        </h2>
                        <p className="text-[18px] leading-relaxed">
                            Kleanfix shall not be liable for any direct or indirect damages, including:
                        </p>
                        <div className="space-y-1 pl-1">
                            <p className="text-[18px]">• Loss Of Data</p>
                            <p className="text-[18px]">• Business Loss</p>
                            <p className="text-[18px]">• Financial or Operational Impact</p>
                        </div>
                        <p className="text-[18px] leading-relaxed pt-1">
                            Arising From:
                        </p>
                        <div className="space-y-1 pl-1">
                            <p className="text-[18px]">• Use Of This Website</p>
                            <p className="text-[18px]">• Reliance on Its Content</p>
                        </div>
                        <p className="text-[18px] leading-relaxed pt-1">
                            Use of the website is at your own risk.
                        </p>
                    </section>

                    {/* Section: THIRD-PARTY LINKS */}
                    <section className="space-y-3">
                        <h2 className="text-[20px] font-bold uppercase text-primary tracking-wide">
                            THIRD-PARTY LINKS
                        </h2>
                        <p className="text-[18px] leading-relaxed">
                            This website may contain links to external websites.
                        </p>
                        <p className="text-[18px] leading-relaxed">
                            Kleanfix is not responsible for:
                        </p>
                        <div className="space-y-1 pl-1">
                            <p className="text-[18px]">• Content On Third-Party Websites</p>
                            <p className="text-[18px]">• Their Terms or Privacy Practices</p>
                        </div>
                        <p className="text-[18px] leading-relaxed pt-1">
                            Users are advised to review third-party policies independently.
                        </p>
                    </section>

                    {/* Section: USER OBLIGATIONS */}
                    <section className="space-y-3">
                        <h2 className="text-[20px] font-bold uppercase text-primary tracking-wide">
                            USER OBLIGATIONS
                        </h2>
                        <p className="text-[18px] leading-relaxed">
                            By using this website, you agree:
                        </p>
                        <div className="space-y-1 pl-1">
                            <p className="text-[18px]">• To Provide Accurate Information When Submitting Forms</p>
                            <p className="text-[18px]">• Not to Upload Malicious or Harmful Content</p>
                            <p className="text-[18px]">• Not to Interfere with Website Functionality</p>
                        </div>
                        <p className="text-[18px] leading-relaxed pt-1">
                            Any misuse may result in restricted access or legal action.
                        </p>
                    </section>

                    {/* Section: CHANGES TO TERMS */}
                    <section className="space-y-3">
                        <h2 className="text-[20px] font-bold uppercase text-primary tracking-wide">
                            CHANGES TO TERMS
                        </h2>
                        <p className="text-[18px] leading-relaxed">
                            Kleanfix reserves the right to modify or update these Terms & Conditions at any time without prior notice.
                        </p>
                        <p className="text-[18px] leading-relaxed">
                            Continued use of the website constitutes acceptance of the updated terms.
                        </p>
                    </section>

                    {/* Section: GOVERNING LAW */}
                    <section className="space-y-3">
                        <h2 className="text-[20px] font-bold uppercase text-primary tracking-wide">
                            GOVERNING LAW
                        </h2>
                        <p className="text-[18px] leading-relaxed">
                            These Terms & Conditions are governed by and interpreted in accordance with the laws of India.
                        </p>
                        <p className="text-[18px] leading-relaxed">
                            Any disputes shall be subject to the jurisdiction of courts in New Delhi, India.
                        </p>
                    </section>

                    {/* Section: CONTACT */}
                    <section className="space-y-3">
                        <h2 className="text-[20px] font-bold uppercase text-primary tracking-wide">
                            CONTACT
                        </h2>
                        <p className="text-[18px] leading-relaxed">
                            For any questions regarding these Terms & Conditions, please contact:
                        </p>
                        <div className="space-y-1 pt-1 leading-snug">
                            <p className="text-[18px]">Kleanfix Industries Pvt. Ltd.</p>
                            <p className="text-[18px]">G-17, Vishwakarma Colony</p>
                            <p className="text-[18px]">M.B. Road, New Delhi – 110044, India</p>
                            <p className="text-[18px]">
                                <a href="mailto:customercare@kleanfix.com" className="hover:underline">
                                    customercare@kleanfix.com
                                </a>
                            </p>
                        </div>
                        <p className="text-[18px] leading-relaxed pt-2">
                            For general inquiries, you may also use the website contact form.
                        </p>
                    </section>
                </div>
            </article>
        </main>
    );
}
