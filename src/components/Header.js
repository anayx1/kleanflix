'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import Button from './Button';

const NAV_ITEMS = [
    { name: 'Home', href: '/' },
    {
        name: 'Products',
        href: '/products',
        isMega: true,
        dropdown: [
            { name: 'Facility Care', href: '/facility-care' },
            { name: 'Pet Care', href: '/pet-care' },
            { name: 'Kitchen Care', href: '/kitchen-care' },
            { name: 'Personal Hygiene', href: '/personal-hygiene' },
            { name: 'Laundry Care', href: '/laundry-care' },
            { name: 'Germ Control', href: '/germ-control' },
            { name: 'Carpet Care', href: '/carpet-care' },
            { name: 'Marble Care', href: '/marble-care' },
            { name: 'Automotive Care', href: '/automotive-care' },
        ],
    },
    {
        name: 'Industries',
        href: '/industries',
        isMega: false,
        dropdown: [
            { name: 'Hospitality', href: '/industries/hospitality' },
            { name: 'Healthcare', href: '/industries/healthcare' },
            { name: 'Facility Services', href: '/industries/facility-services' },
            { name: 'Industrial Operations', href: '/industries/industrial-operations' },
        ],
    },
    { name: 'Build Your Product Line', href: '/build-your-product-line' },
    { name: 'OEM & Private Label Execution', href: '/oem-private-label' },
    { name: 'Exports', href: '/exports' },
    { name: 'Manufacturing', href: '/manufacturing' },
    { name: 'How It Works', href: '/how-the-system-works' },
    { name: 'About Us', href: '/about-us' },
];

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (pathname?.startsWith('/admin')) {
        return null;
    }

    const toggleMobileDropdown = (name) => {
        setActiveMobileDropdown((prev) => (prev === name ? null : name));
    };

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 border-b border-gray-200/70 bg-[#F5F5F7] ${scrolled ? 'shadow-md backdrop-blur-md bg-[#F5F5F7]/95 py-1' : 'py-1'
                }`}
        >
            <div className="main-container px-4 md:px-6 xl:px-8">
                <div className="flex items-center justify-between gap-2 lg:gap-4 xl:gap-6">
                    {/* Logo */}
                    <Link href="/" className="flex items-center shrink-0 transition-opacity hover:opacity-90">
                        <Image
                            src="/logo.avif"
                            alt="Kleanflix Logo"
                            width={54}
                            height={54}
                            className="h-11 md:h-16 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center justify-center flex-1 gap-3.5 lg:gap-5 xl:gap-6 text-secondary font-medium">
                        {NAV_ITEMS.map((item) => {
                            if (item.dropdown) {
                                return (
                                    <div key={item.name} className="relative group py-4">
                                        <Link
                                            href={item.href}
                                            className="inline-flex items-center gap-1 text-[13px] lg:text-[14px] xl:text-[15px] font-medium text-secondary hover:text-[#d96610] transition-all duration-200 whitespace-nowrap"
                                        >
                                            <span className="group-hover:underline group-hover:underline-offset-8 group-hover:decoration-2 group-hover:decoration-secondary">
                                                {item.name}
                                            </span>
                                            <svg
                                                className="w-2.5 h-1.5 fill-current ml-0.5 shrink-0"
                                                viewBox="0 0 10 6"
                                                fill="currentColor"
                                            >
                                                <path d="M0 0L5 6L10 0H0Z" />
                                            </svg>
                                        </Link>

                                        {/* Dropdown Panel */}
                                        {item.isMega ? (
                                            /* Mega Dropdown for Products (3 Columns) */
                                            <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50 transition-all duration-200 min-w-[580px] lg:min-w-[680px]">
                                                <div className="bg-white rounded-[24px] shadow-2xl border border-gray-100 p-6 lg:p-8 grid grid-cols-3 gap-y-4 md:gap-y-5 gap-x-8 lg:gap-x-12">
                                                    {item.dropdown.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="text-secondary hover:text-[#d96610] hover:underline underline-offset-4 decoration-secondary text-[13px] lg:text-[14px] xl:text-[15px] font-medium transition-all duration-150 whitespace-nowrap"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            /* Single-column Dropdown for Industries */
                                            <div className="absolute top-full -left-4 pt-2 hidden group-hover:block z-50 transition-all duration-200 min-w-[200px] lg:min-w-[220px]">
                                                <div className="bg-white rounded-[20px] shadow-2xl border border-gray-100 p-5 lg:p-6 flex flex-col gap-3 lg:gap-3.5">
                                                    {item.dropdown.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="text-secondary hover:text-[#d96610] hover:underline underline-offset-4 decoration-secondary text-[13px] lg:text-[14px] xl:text-[15px] font-medium transition-all duration-150 whitespace-nowrap"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-[13px] lg:text-[14px] xl:text-[15px] font-medium text-secondary hover:text-[#d96610] hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-secondary transition-all duration-200 whitespace-nowrap py-4"
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:flex items-center shrink-0">
                        <Button
                            href="/contact-us"
                            variant="pill-secondary"
                            size="sm"
                            showArrow={false}
                            className="text-xs lg:text-sm px-5 py-2.5 font-medium tracking-wide"
                        >
                            CONTACT US
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                        className="md:hidden p-2 text-secondary hover:text-[#d96610] focus:outline-none rounded-lg"
                        aria-label="Toggle Navigation Menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-xl px-4 py-6 max-h-[85vh] overflow-y-auto">
                    <div className="flex flex-col gap-3">
                        {NAV_ITEMS.map((item) => {
                            if (item.dropdown) {
                                const isOpen = activeMobileDropdown === item.name;
                                return (
                                    <div key={item.name} className="border-b border-gray-100 pb-2">
                                        <button
                                            type="button"
                                            onClick={() => toggleMobileDropdown(item.name)}
                                            className="w-full flex items-center justify-between py-2 text-base font-semibold text-secondary text-left"
                                        >
                                            <span>{item.name}</span>
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>
                                        {isOpen && (
                                            <div className="pl-4 mt-1 grid grid-cols-1 gap-2 border-l-2 border-secondary/30 my-1">
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        onClick={() => setMobileMenuOpen(false)}
                                                        className="py-1.5 text-sm font-semibold text-secondary hover:text-[#d96610]"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="py-2.5 text-base font-semibold text-secondary border-b border-gray-100 hover:text-[#d96610]"
                                >
                                    {item.name}
                                </Link>
                            );
                        })}

                        <div className="pt-4 mt-2">
                            <Button
                                href="/contact-us"
                                variant="pill-secondary"
                                size="md"
                                showArrow={false}
                                fullWidth
                                onClick={() => setMobileMenuOpen(false)}
                                className="justify-center font-bold tracking-wide"
                            >
                                CONTACT US
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

