import React from 'react';
import ReededGlassHero from '@/components/ReededGlassHero';
import Button from '@/components/Button';
import WhyMeetAtEventsSection from '@/components/events/WhyMeetAtEventsSection';
import PlanYourDiscussionSection from '@/components/events/PlanYourDiscussionSection';
import PastParticipationsSection from '@/components/events/PastParticipationsSection';
import UpcomingEventsSection from '@/components/events/UpcomingEventsSection';
import CTASection from '@/components/CTASection';
import { getAllEvents } from '@/lib/db';

export const metadata = {
    title: "Events | Kleanfix",
    description: "Find Us at Upcoming Exhibitions. Exhibitions are where real evaluation happens. Kleanfix participates in B2B events across industries.",
};

export default function EventsPage() {
    // Server-side fetching of events per AGENTS.md guidelines
    const events = getAllEvents();

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section with Reeded Glass Reveal */}
            <ReededGlassHero
                title="Events"
                subtitle="Find Us at Upcoming Exhibitions"
                imageSrc="/events/hero.webp"
                imageAlt="Events Hero Background"
            />

            {/* Static Intro Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="main-container px-6 md:px-12">
                    <div className="space-y-6 md:space-y-8 text-primary max-w-7xl leading-snug">
                        {/* Block 1 */}
                        <div>
                            <p className="text-primary text-xl md:text-2xl lg:text-[26px] font-normal leading-snug">
                                Exhibitions are where real evaluation happens.
                            </p>
                        </div>

                        {/* Block 2: B2B Events connecting with */}
                        <div className="space-y-1">
                            <p className="text-primary text-xl md:text-2xl lg:text-[26px] font-normal leading-snug">
                                Kleanfix participates in B2B events across industries — connecting with:
                            </p>
                            <div className="text-base md:text-lg lg:text-[20px] font-normal leading-snug pt-0.5 space-y-1">
                                <p className="text-primary">• Institutional Buyers</p>
                                <p className="text-primary">• OEM And Private Label Brands</p>
                                <p className="text-primary">• Distributors and Export Partners</p>
                            </div>
                        </div>

                        {/* Block 3 */}
                        <div>
                            <p className="text-primary text-xl md:text-2xl lg:text-[26px] font-normal leading-snug">
                                These interactions help assess system fit before decision.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-2 md:pt-4">
                            <Button
                                variant="pill-secondary"
                                showArrow={false}
                                href="/contact-us"
                                className="font-semibold text-xs md:text-sm px-7 py-3 md:px-8 md:py-3.5 uppercase tracking-wider"
                            >
                                SCHEDULE EXHIBITION MEETING
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Meet at Events - Background Video Section */}
            <WhyMeetAtEventsSection />

            {/* Plan Your Discussion Section */}
            <PlanYourDiscussionSection />

            {/* Past Participations Section */}
            <PastParticipationsSection />

            {/* Upcoming Events Section (Connected to DB & /api/events) */}
            <UpcomingEventsSection events={events} />

            {/* Not Attending CTA Section */}
            <section className='bg-gray-50'>

                <CTASection
                    title="Not attending?"
                    description="You can still initiate the discussion."
                    ctaText="SUBMIT REQUIREMENT"
                    href="/contact-us"
                    cardBg="bg-white"
                />
            </section>
        </main>
    );
}
