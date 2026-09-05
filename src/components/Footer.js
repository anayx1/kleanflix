'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import SystemControlCtaSection from './hompeage/SystemControlCtaSection';

// Custom SVG Icons for Social Media Handles to avoid library deprecations
function LinkedInIcon({ className = 'w-4 h-4 text-secondary shrink-0' }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
    );
}

function FacebookIcon({ className = 'w-4 h-4 text-secondary shrink-0' }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
    );
}

function InstagramIcon({ className = 'w-4 h-4 text-secondary shrink-0' }) {
    return (
        <svg
            className={className}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
        >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
    );
}

// Data Arrays for Footer Navigation & Info
const QUICK_LINKS = [
    { name: 'Home', href: '/' },
    { name: 'Build Your Product Line', href: '/build-product-line' },
    { name: 'OEM & Private Label Execution', href: '/oem-private-label' },
    { name: 'Manufacturing', href: '/manufacturing' },
    { name: 'Exports', href: '/exports' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'About Us', href: '/about' },
    { name: 'Certifications & Compliance', href: '/certifications-compliance' },
    { name: 'Clients', href: '/clients' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Events', href: '/events' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact', href: '/contact' },
];

const PRODUCTS_LINKS = [
    { name: 'Facility Care', href: '/products/facility-care' },
    { name: 'Kitchen Care', href: '/products/kitchen-care' },
    { name: 'Laundry Care', href: '/products/laundry-care' },
    { name: 'Carpet Care', href: '/products/carpet-care' },
    { name: 'Marble Care', href: '/products/marble-care' },
    { name: 'Automotive Care', href: '/products/automotive-care' },
    { name: 'Pet Care', href: '/products/pet-care' },
    { name: 'Personal Hygiene', href: '/products/personal-hygiene' },
];

const INDUSTRIES_LINKS = [
    { name: 'Hospitality', href: '/industries/hospitality' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Facility Services', href: '/industries/facility-services' },
    { name: 'Industrial Operations', href: '/industries/industrial-operations' },
];

const LEGAL_LINKS = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-conditions' },
];

const CONTACT_INFO = {
    address: [
        'Kleanfix Industries Pvt. Ltd.',
        'G-17, Vishwakarma Colony',
        'M.B. Road, New Delhi –',
        '110044, India',
    ],
    phones: ['+91 98189 98806', '+91 88263 65252', '+91 97112 20961'],
    email: 'customercare@kleanfix.com',
};

const SOCIAL_LINKS = [
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedInIcon },
    { name: 'Facebook', href: 'https://facebook.com', icon: FacebookIcon },
    { name: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon },
];

/**
 * Reusable Footer Link component with left-to-right secondary underline animation 
 * and column-scoped dimming effect when sister items in the same column are hovered.
 */
function FooterLink({ href, children, isExternal = false, className = '' }) {
    return (
        <Link
            href={href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className={`relative inline-block text-primary group-hover/col:opacity-40 hover:!opacity-100 transition-opacity duration-200 group/link py-0.5 leading-snug cursor-pointer ${className}`}
        >
            <span>{children}</span>
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-secondary origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 ease-out" />
        </Link>
    );
}

export default function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 4000);
        }
    };

    return (
        <>
            <SystemControlCtaSection />

            <footer className="bg-[#F4F6F8] pt-12 md:pt-16 pb-8 text-primary border-t border-slate-200/60">
                <div className="main-container px-4 md:px-8 xl:px-12">
                    {/* Main Columns Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-6 mb-12 lg:mb-16">
                        {/* Column 1: Company Details & Newsletter */}
                        <div className="md:col-span-3 lg:col-span-4 pr-0 lg:pr-6 flex flex-col justify-between">
                            <div>
                                <h3 className="text-secondary font-bold text-xl md:text-2xl mb-3 tracking-tight">
                                    Kleanfix Industries Pvt. Ltd.
                                </h3>

                                <div className="text-primary text-xs md:text-sm leading-relaxed mb-6 font-normal max-w-lg">
                                    Kleanfix builds structured cleaning and hygiene systems that deliver
                                    consistent performance, scalable production, and controlled outcomes
                                    across business environments.
                                </div>
                            </div>

                            <div>
                                <div className="text-primary/90 text-[11px] md:text-xs leading-snug mb-3 max-w-md font-normal">
                                    By subscribing, you agree to receive our promotional emails and event
                                    updates. You can unsubscribe at any time.
                                </div>

                                <form onSubmit={handleSubmit} className="flex items-center gap-2 max-w-md">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your e-mail"
                                        required
                                        className="bg-white text-primary placeholder:text-primary/60 px-4 py-2.5 rounded-lg border border-slate-200 text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-primary flex-1 shadow-sm transition-all"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-[#f0a267] hover:bg-[#e48f51] text-white font-medium px-6 py-2.5 rounded-lg text-xs md:text-sm transition-colors duration-200 shadow-sm cursor-pointer whitespace-nowrap"
                                    >
                                        {subscribed ? 'Subscribed!' : 'Submit'}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div className="md:col-span-1 lg:col-span-2">
                            <h4 className="text-secondary font-bold text-[11px] md:text-xs uppercase tracking-wider mb-4">
                                QUICK LINKS
                            </h4>
                            <ul className="space-y-1.5 text-xs md:text-sm group/col">
                                {QUICK_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <FooterLink href={link.href}>{link.name}</FooterLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Products */}
                        <div className="md:col-span-1 lg:col-span-2">
                            <h4 className="text-secondary font-bold text-[11px] md:text-xs uppercase tracking-wider mb-4">
                                PRODUCTS
                            </h4>
                            <ul className="space-y-1.5 text-xs md:text-sm group/col">
                                {PRODUCTS_LINKS.map((product) => (
                                    <li key={product.name}>
                                        <FooterLink href={product.href}>{product.name}</FooterLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Industries & Legal */}
                        <div className="md:col-span-1 lg:col-span-2">
                            {/* Industries Section */}
                            <h4 className="text-secondary font-bold text-[11px] md:text-xs uppercase tracking-wider mb-4">
                                INDUSTRIES
                            </h4>
                            <ul className="space-y-1.5 text-xs md:text-sm mb-6 group/col">
                                {INDUSTRIES_LINKS.map((industry) => (
                                    <li key={industry.name}>
                                        <FooterLink href={industry.href}>{industry.name}</FooterLink>
                                    </li>
                                ))}
                            </ul>

                            {/* Legal Section */}
                            <h4 className="text-secondary font-bold text-[11px] md:text-xs uppercase tracking-wider mb-4">
                                LEGAL
                            </h4>
                            <ul className="space-y-1.5 text-xs md:text-sm group/col">
                                {LEGAL_LINKS.map((legal) => (
                                    <li key={legal.name}>
                                        <FooterLink href={legal.href}>{legal.name}</FooterLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 5: Contact Info & Social Media Handles */}
                        <div className="md:col-span-1 lg:col-span-2">
                            {/* Contact Header */}
                            <h4 className="text-secondary font-bold text-[11px] md:text-xs uppercase tracking-wider mb-4">
                                CONTACT
                            </h4>

                            {/* Address */}
                            <div className="flex items-start gap-2.5 text-xs md:text-sm text-primary mb-4">
                                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                <div className="space-y-0.5">
                                    {CONTACT_INFO.address.map((line, idx) => (
                                        <div key={idx} className="text-primary text-xs md:text-sm leading-tight">
                                            {line}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Phone Numbers */}
                            <div className="flex items-start gap-2.5 text-xs md:text-sm text-primary mb-4">
                                <Phone className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                <div className="space-y-0.5 group/col">
                                    {CONTACT_INFO.phones.map((phone, idx) => (
                                        <div key={idx}>
                                            <a
                                                href={`tel:${phone.replace(/\s+/g, '')}`}
                                                className="relative inline-block text-primary group-hover/col:opacity-40 hover:!opacity-100 transition-opacity duration-200 group/link leading-tight"
                                            >
                                                <span>{phone}</span>
                                                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-secondary origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 ease-out" />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-2.5 text-xs md:text-sm text-primary mb-6">
                                <Mail className="w-4 h-4 text-secondary shrink-0" />
                                <a
                                    href={`mailto:${CONTACT_INFO.email}`}
                                    className="relative inline-block text-primary hover:text-primary transition-opacity duration-200 group/link leading-tight"
                                >
                                    <span>{CONTACT_INFO.email}</span>
                                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-secondary origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 ease-out" />
                                </a>
                            </div>

                            {/* Social Media Handles */}
                            <h4 className="text-secondary font-bold text-[11px] md:text-xs uppercase tracking-wider mb-4">
                                SOCIAL MEDIA HANDLES
                            </h4>
                            <ul className="space-y-2 text-xs md:text-sm group/col">
                                {SOCIAL_LINKS.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <li key={social.name}>
                                            <a
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="relative inline-flex items-center gap-2.5 text-primary group-hover/col:opacity-40 hover:!opacity-100 transition-opacity duration-200 group/link py-0.5"
                                            >
                                                <Icon className="w-4 h-4 text-secondary shrink-0" />
                                                <span className="relative">
                                                    {social.name}
                                                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-secondary origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 ease-out" />
                                                </span>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>

                    {/* Large Branding Logo - KLEANFIX (Dynamic Full Width & Non-wrapping) */}
                    <div className="w-full py-2 select-none">
                        <svg
                            viewBox="0 0 780 135"
                            className="w-full h-auto block"
                            aria-label="KLEANFIX"
                            role="img"
                        >
                            <text
                                x="50%"
                                y="55%"
                                dominantBaseline="central"
                                textAnchor="middle"
                                className="font-sans font-black tracking-tighter uppercase"
                                style={{ fontSize: '162px', fontWeight: 900 }}
                            >
                                <tspan fill="#1E6BB8">KLEAN</tspan>
                                <tspan fill="#F47A1F">FIX</tspan>
                            </text>
                        </svg>
                    </div>

                    {/* Bottom Bar: Copyright & Attribution */}
                    <div className="pt-4 mt-2 flex flex-col md:flex-row items-center justify-between gap-2 text-xs md:text-sm font-semibold text-primary">
                        <div>© Kleanfix Industries Pvt. Ltd. All Rights Reserved.</div>
                        <div>Created by <Link href="https://www.vikavalabs.com/" className='underline'>Vikava Labs.</Link></div>
                    </div>
                </div>
            </footer>
        </>
    );
}
