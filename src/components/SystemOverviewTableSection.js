'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const systemOverviewData = [
    {
        category: "Facility Care",
        whatItSolves: "Daily cleaning, washroom hygiene, Odor control",
        whereItFits: "Hotels, offices, malls, public spaces",
        systemType: "Surface Maintenance System"
    },
    {
        category: "Kitchen Care",
        whatItSolves: "Grease removal, utensil cleaning, food-area hygiene",
        whereItFits: "Commercial kitchens, restaurants",
        systemType: "Food-Safe Cleaning System"
    },
    {
        category: "Laundry Care",
        whatItSolves: "Fabric cleaning, stain removal, process control",
        whereItFits: "Hotels, hospitals, laundries",
        systemType: "Multi-Stage Laundry System"
    },
    {
        category: "Carpet Care",
        whatItSolves: "Deep cleaning and stain removal",
        whereItFits: "Offices, hospitality spaces",
        systemType: "Fabric Surface System"
    },
    {
        category: "Marble Care",
        whatItSolves: "Shine and surface restoration",
        whereItFits: "Premium flooring areas",
        systemType: "Surface Preservation System"
    },
    {
        category: "AutomotiveCare",
        whatItSolves: "Vehicle cleaning and detailing",
        whereItFits: "Car wash, fleet maintenance",
        systemType: "Vehicle Cleaning System"
    },
    {
        category: "Pet Care",
        whatItSolves: "Pet hygiene and Odor control",
        whereItFits: "Pet clinics, grooming centres",
        systemType: "Pet-Safe Cleaning System"
    },
    {
        category: "Personal Care",
        whatItSolves: "Hand hygiene and user-facing products",
        whereItFits: "Washrooms, facilities",
        systemType: "User Hygiene System"
    },
    {
        category: "Germ Control",
        whatItSolves: "Sanitization and infection control",
        whereItFits: "Healthcare, high-risk areas",
        systemType: "Hygiene Protection System"
    }
];

export default function SystemOverviewTableSection() {
    return (
        <section className="py-12 md:py-16 lg:py-24 bg-white">
            <div className="main-container px-6 md:px-12">
                {/* Header Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-10 mb-8 md:mb-12"
                >
                    <h2 className="font-semibold !text-3xl md:!text-4xl lg:!text-[46px] text-primary tracking-tight leading-tight">
                        System overview
                    </h2>
                    <p className="!text-base md:!text-lg lg:!text-[20px] text-primary-dark leading-relaxed max-w-xl font-medium">
                        Each system is structured around real-world usage conditions, application environments, and performance requirements.
                    </p>
                </motion.div>

                {/* Mobile View: Static Image (Visible below 1001px) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    className="block md:hidden w-full overflow-hidden rounded-xl"
                >
                    <Image
                        src="/products/table.png"
                        alt="System Overview Table"
                        width={750}
                        height={578}
                        className="w-full h-auto object-contain rounded-xl"
                    />
                </motion.div>

                {/* Desktop View: Table (Visible at 1001px and above) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    className="hidden md:block overflow-x-auto"
                >
                    <div className="min-w-[880px] space-y-2 md:space-y-3">
                        {/* Table Header (4 Equal Columns) */}
                        <div
                            className="overview-table-grid items-center px-4 md:px-8 py-4 md:py-5 bg-[#EAF0F6] rounded-xl text-primary font-semibold text-xs md:!text-[18px] tracking-wider uppercase text-center"
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', width: '100%' }}
                        >
                            <div className="flex items-center justify-center">CATEGORY</div>
                            <div className="flex items-center justify-center">WHAT IT SOLVES</div>
                            <div className="flex items-center justify-center">WHERE IT FITS</div>
                            <div className="flex items-center justify-center">SYSTEM TYPE</div>
                        </div>

                        {/* Table Rows Mapped from Array (4 Equal Columns) */}
                        {systemOverviewData.map((item, idx) => (
                            <div
                                key={item.category}
                                className={`overview-table-grid items-center px-4 md:px-8 py-5 md:py-6 text-center text-primary font-medium text-sm md:text-base leading-relaxed transition-colors duration-150 ${idx % 2 === 1 ? 'bg-[#F4F7FA] rounded-xl' : 'bg-transparent'
                                    }`}
                                style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', width: '100%' }}
                            >
                                <div className="flex items-center justify-center px-3">
                                    <span>{item.category}</span>
                                </div>
                                <div className="flex items-center justify-center px-3">
                                    <span className="max-w-[280px]">{item.whatItSolves}</span>
                                </div>
                                <div className="flex items-center justify-center px-3">
                                    <span className="max-w-[260px]">{item.whereItFits}</span>
                                </div>
                                <div className="flex items-center justify-center px-3">
                                    <span>{item.systemType}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
