import React from 'react';
import ReededGlassHero from '@/components/ReededGlassHero';

export const metadata = {
  title: 'Privacy Policy | Kleanfix',
  description:
    'Learn how Kleanfix Industries Pvt. Ltd. collects, uses, protects, and handles your personal and commercial data across our digital platforms and services.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Reeded Glass Reveal */}
      <ReededGlassHero
        title="Privacy Policy"
        imageSrc="/hero.png"
        imageAlt="Privacy Policy Hero Background"
      />

      {/* Policy Content */}
      <article className="main-container md:w-6xl! md:mx-auto px-5 py-12 md:py-20 text-primary">
        <div className="space-y-8 md:space-y-10">
          {/* Introductory Paragraphs */}
          <div className="space-y-3">
            <p className="text-[18px] leading-relaxed">
              Kleanfix Industries Pvt. Ltd. (&ldquo;Kleanfix&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) respects your privacy and is committed to protecting the information you share with us.
            </p>
            <p className="text-[18px] leading-relaxed">
              This Privacy Policy explains how we collect, use, and safeguard your information when you interact with our website.
            </p>
          </div>

          {/* Section: INFORMATION WE COLLECT */}
          <section className="space-y-3">
            <h2 className="text-[20px] font-bold uppercase text-primary tracking-wide">
              INFORMATION WE COLLECT
            </h2>
            <p className="text-[18px] leading-relaxed">
              We may collect information when you:
            </p>
            <div className="space-y-1 pl-1">
              <p className="text-[18px]">• Submit A Form</p>
              <p className="text-[18px]">• Contact Us</p>
              <p className="text-[18px]">• Share A Business Requirement</p>
            </div>
            <p className="text-[18px] leading-relaxed pt-1">
              Information may include:
            </p>
            <div className="space-y-1 pl-1">
              <p className="text-[18px]">• Name</p>
              <p className="text-[18px]">• Company Name</p>
              <p className="text-[18px]">• Contact Number</p>
              <p className="text-[18px]">• Email Address</p>
              <p className="text-[18px]">• Business Requirement Details</p>
              <p className="text-[18px]">• Files or documents voluntarily shared</p>
            </div>
            <p className="text-[18px] leading-relaxed pt-1">
              All information is collected only when voluntarily provided by you and is used solely for requirement evaluation and response.
            </p>
          </section>

          {/* Section: HOW WE USE INFORMATION */}
          <section className="space-y-3">
            <h2 className="text-[20px] font-bold uppercase text-primary tracking-wide">
              HOW WE USE INFORMATION
            </h2>
            <p className="text-[18px] font-bold leading-relaxed">
              Information is used strictly for:
            </p>
            <div className="space-y-1 pl-1">
              <p className="text-[18px]">• Understanding Your Requirement</p>
              <p className="text-[18px]">• Responding to Your Inquiry</p>
              <p className="text-[18px]">• Providing Relevant Product or System Solutions</p>
              <p className="text-[18px]">• Internal Business Communication</p>
            </div>
            <p className="text-[18px] font-bold leading-relaxed pt-1">
              Kleanfix does not:
            </p>
            <div className="space-y-1 pl-1">
              <p className="text-[18px]">• Sell Personal Data</p>
              <p className="text-[18px]">• Rent User Information</p>
              <p className="text-[18px]">• Share Data with Third Parties for Marketing Purposes</p>
            </div>
            <p className="text-[18px] leading-relaxed pt-1">
              Information is used only within the scope of business communication and requirement handling.
            </p>
          </section>

          {/* Section: DATA PROTECTION */}
          <section className="space-y-3">
            <h2 className="text-[20px] font-bold uppercase text-primary tracking-wide">
              DATA PROTECTION
            </h2>
            <p className="text-[18px] font-bold leading-relaxed">
              We take reasonable technical and organizational measures to:
            </p>
            <div className="space-y-1 pl-1">
              <p className="text-[18px]">• Protect Information from Unauthorized Access</p>
              <p className="text-[18px]">• Prevent Misuse or Disclosure</p>
              <p className="text-[18px]">• Maintain Data Integrity</p>
            </div>
            <div className="space-y-2 pt-1">
              <p className="text-[18px] leading-relaxed">
                Access to information is restricted to relevant internal teams.
              </p>
              <p className="text-[18px] leading-relaxed">
                While no system can guarantee absolute security, standard practices are followed to safeguard data.
              </p>
            </div>
          </section>

          {/* Section: DATA SHARING & DISCLOSURE */}
          <section className="space-y-3">
            <h2 className="text-[20px] font-bold uppercase text-primary tracking-wide">
              DATA SHARING & DISCLOSURE
            </h2>
            <p className="text-[18px] font-bold leading-relaxed">
              Information may be shared only when:
            </p>
            <div className="space-y-1 pl-1">
              <p className="text-[18px]">• Required By Law or Regulatory Authority</p>
              <p className="text-[18px]">• Necessary to Fulfil a Service Request (e.g., Logistics or Documentation Support)</p>
              <p className="text-[18px]">• Explicit Consent Is Provided by The User</p>
            </div>
            <p className="text-[18px] leading-relaxed pt-1">
              No data is shared for advertising or unrelated third-party use.
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
            <p className="text-[18px] font-bold leading-relaxed">
              Kleanfix is not responsible for:
            </p>
            <div className="space-y-1 pl-1">
              <p className="text-[18px]">• Content On External Sites</p>
              <p className="text-[18px]">• Privacy Practices of Third-Party Platforms</p>
            </div>
            <p className="text-[18px] leading-relaxed pt-1">
              Users are advised to review the privacy policies of external websites separately.
            </p>
          </section>

          {/* Section: DATA RETENTION */}
          <section className="space-y-3">
            <h2 className="text-[20px] font-bold uppercase text-primary tracking-wide">
              DATA RETENTION
            </h2>
            <p className="text-[18px] font-bold leading-relaxed">
              Information is retained only for as long as necessary to:
            </p>
            <div className="space-y-1 pl-1">
              <p className="text-[18px]">• Respond To Inquiries</p>
              <p className="text-[18px]">• Fulfil Business or Regulatory Requirements</p>
              <p className="text-[18px]">• Maintain Internal Records</p>
            </div>
            <p className="text-[18px] leading-relaxed pt-1">
              Once the purpose is fulfilled, data may be archived or securely deleted in accordance with internal policies.
            </p>
          </section>

          {/* Section: USER RIGHTS */}
          <section className="space-y-3">
            <h2 className="text-[20px] font-bold uppercase text-primary tracking-wide">
              USER RIGHTS
            </h2>
            <p className="text-[18px] font-bold leading-relaxed">
              You may request to:
            </p>
            <div className="space-y-1 pl-1">
              <p className="text-[18px]">• Access The Information You Have Shared</p>
              <p className="text-[18px]">• Correct or Update Your Details</p>
              <p className="text-[18px]">• Request Deletion of Your Data (Subject to Legal or Operational Requirements)</p>
            </div>
            <p className="text-[18px] leading-relaxed pt-1">
              Requests can be made using the contact details below.
            </p>
          </section>

          {/* Section: CONSENT */}
          <section className="space-y-3">
            <h2 className="text-[20px] font-bold uppercase text-primary tracking-wide">
              CONSENT
            </h2>
            <p className="text-[18px] leading-relaxed">
              By submitting your information through this website, you consent to the collection and use of your data as described in this Privacy Policy.
            </p>
          </section>

          {/* Section: CONTACT */}
          <section className="space-y-3">
            <h2 className="text-[20px] font-bold uppercase text-primary tracking-wide">
              CONTACT
            </h2>
            <p className="text-[18px] leading-relaxed">
              For questions regarding this Privacy Policy or data handling practices, please contact:
            </p>
            <div className="space-y-1 pt-1 leading-snug">
              <p className="text-[18px] font-bold">Kleanfix Industries Pvt. Ltd.</p>
              <p className="text-[18px] font-bold">G-17, Vishwakarma Colony</p>
              <p className="text-[18px] font-bold">M.B. Road, New Delhi – 110044, India</p>
              <p className="text-[18px] font-bold">
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
