'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CERTIFICATES = [
    {
        id: 'us-fda',
        title: 'GREENGUARD_KLEANFIX INDUSTRIES PVT. LTD.',
        imageSrc: '/certifications-compliance/certificate1.png',
        imageAlt: 'U.S. FDA Certificate of Compliance - Kleanfix Industries',
    },
    {
        id: 'greenguard',
        title: 'GMP_KLEANFIX INDUSTRIES PVT. LTD.',
        imageSrc: '/certifications-compliance/certificate2.png',
        imageAlt: 'Greenguard Compliance Certificate - Kleanfix Industries',
    },
    {
        id: 'iso-14001',
        title: 'ISO 14001_KLEANFIX INDUSTRIES PVT. LTD.',
        imageSrc: '/certifications-compliance/certificate3.png',
        imageAlt: 'ISO 14001:2015 Environmental Management System Certificate - Kleanfix Industries',
    },
    {
        id: 'compliance',
        title: 'HACCP_KLEANFIX INDUSTRIES PVT. LTD.',
        imageSrc: '/certifications-compliance/certificate4.png',
        imageAlt: 'Certificate of Compliance - Kleanfix Industries',
    },
    {
        id: 'gmp',
        title: 'USFDA_KLEANFIX INDUSTRIES PVT. LTD.',
        imageSrc: '/certifications-compliance/certificate5.png',
        imageAlt: 'Good Manufacturing Practices GMP Certificate - Kleanfix Industries',
    },
];

export default function CertificatesShowcaseSection() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="main-container px-4 md:px-8 lg:px-12">
                <div className="space-y-16 md:space-y-24 max-w-7xl mx-auto">
                    {CERTIFICATES.map((cert, idx) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            className="space-y-4 md:space-y-6"
                        >
                            {/* Certificate Title */}
                            <h3 className="text-primary font-bold text-lg md:text-xl lg:text-2xl text-center tracking-wide uppercase">
                                {cert.title}
                            </h3>

                            {/* Certificate Document Container */}
                            <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xs border border-gray-100/80 bg-white">
                                <Image
                                    src={cert.imageSrc}
                                    alt={cert.imageAlt}
                                    width={900}
                                    height={1270}
                                    sizes="(max-width: 1001px) 95vw, 850px"
                                    className="w-full h-auto object-contain mx-auto"
                                    priority={idx === 0}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
