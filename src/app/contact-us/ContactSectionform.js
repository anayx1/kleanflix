'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import Button from '@/components/Button';
import { Input, Select, Textarea } from '@/components/ui/FormField';
import OnceYouSubmitSection from './OnceYouSubmitSection';

const REQUIREMENT_OPTIONS = [
    { value: 'oem-private-label', label: 'OEM & Private Label Execution' },
    { value: 'product-customization', label: 'Build Your Product Line' },
    { value: 'bulk-manufacturing', label: 'Bulk Manufacturing & Supply' },
    { value: 'export-orders', label: 'Exports & Global Supply' },
    { value: 'institutional-cleaning', label: 'Commercial & Institutional' },
    { value: 'other-inquiry', label: 'Other General Inquiry' },
];

export default function ContactSectionform() {
    const [formData, setFormData] = useState({
        requirementType: '',
        companyName: '',
        fullName: '',
        contactNumber: '',
        emailAddress: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.requirementType) newErrors.requirementType = 'Please select a requirement type.';
        if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required.';
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';

        if (!formData.contactNumber.trim()) {
            newErrors.contactNumber = 'Contact number is required.';
        } else if (!/^[0-9+\s\-()]{7,20}$/.test(formData.contactNumber.trim())) {
            newErrors.contactNumber = 'Please enter a valid phone number.';
        }

        if (!formData.emailAddress.trim()) {
            newErrors.emailAddress = 'Email address is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress.trim())) {
            newErrors.emailAddress = 'Please enter a valid email address.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simulate API form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 800);
    };

    const handleReset = () => {
        setFormData({
            requirementType: '',
            companyName: '',
            fullName: '',
            contactNumber: '',
            emailAddress: '',
            message: '',
        });
        setErrors({});
        setIsSubmitted(false);
    };

    return (
        <section className="py-10 md:py-16 bg-white">
            <div className="main-container px-4 md:px-8 xl:px-12">
                <div className="bg-[#F5F6F8] rounded-[24px] md:rounded-[32px] p-6 md:p-10 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                        {/* Left Side Info Column */}
                        <div className="lg:col-span-6 xl:col-span-6 flex flex-col h-full justify-between">
                            <div>
                                {/* Main Heading */}
                                <h2 className="mb-3">
                                    Short on time?
                                </h2>
                                <p className="text-primary snug mb-8">
                                    Submit basic details and your requirement.<br />
                                    The rest can be clarified during follow-up.
                                </p>

                                {/* Contact Details List */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
                                    {/* Email Support */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <Mail className="w-4 h-4 text-secondary shrink-0" />
                                            <span className="text-primary font-semibold text-sm md:text-base">
                                                Email Support
                                            </span>
                                        </div>
                                        <a
                                            href="mailto:customercare@kleanfix.com"
                                            className="text-[#0E4A8A] text-[18px] hover:underline block"
                                        >
                                            customercare@kleanfix.com
                                        </a>

                                        {/* Office Address */}
                                        <div className="mt-6">
                                            <div className="flex items-center gap-2 mb-1">
                                                <MapPin className="w-4 h-4 text-secondary shrink-0" />
                                                <span className="text-primary font-semibold text-sm md:text-base">
                                                    Office
                                                </span>
                                            </div>
                                            <div className="text-[#0E4A8A] leading-normal">
                                                <p className='!text-[14px]'>Kleanfix Industries Pvt. Ltd.</p>
                                                <p className='!text-[14px]'>G-17, Vishwakarma Colony</p>
                                                <p className='!text-[14px]'>M.B. Road, New Delhi – 110044, India</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contact Support */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <Phone className="w-4 h-4 text-secondary shrink-0" />
                                            <span className="text-primary font-semibold text-sm md:text-base">
                                                Contact Support
                                            </span>
                                        </div>
                                        <div className="text-[#0E4A8A] leading-snug space-y-0.5">
                                            <p className='!text-[14px]'>+91 98189 98806</p>
                                            <p className='!text-[14px]'>+91 88263 65252</p>
                                            <p className='!text-[14px]'>+91 97112 20961</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Left Card: Not sure where you fit? */}
                            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm mt-4 lg:mt-6">
                                <h3 className="text-primary font-bold text-xl md:!text-[24px] mb-2">
                                    Not sure where you fit?
                                </h3>
                                <p className="text-primary font-medium text-sm md:!text-[18px] mb-5 leading-normal">
                                    Start anyway. Your requirement will be reviewed and mapped to the right system.
                                </p>
                                <Button
                                    href="/how-it-works"
                                    variant="pill-secondary"
                                    size="sm"
                                    showArrow={false}
                                    className="text-xs md:text-sm px-6 py-2.5 font-bold tracking-wide"
                                >
                                    VIEW HOW THE SYSTEM WORKS
                                </Button>
                            </div>
                        </div>

                        {/* Right Side Form Card */}
                        <div className="lg:col-span-6 xl:col-span-6 w-full">
                            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
                                {isSubmitted ? (
                                    <div className="py-12 px-4 text-center flex flex-col items-center justify-center">
                                        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-4">
                                            <CheckCircle2 className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                                            Requirement Submitted!
                                        </h3>
                                        <p className="text-primary font-medium text-base md:text-lg mb-6 max-w-md">
                                            Thank you for reaching out. Our technical team will review your requirement and follow up with you shortly.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={handleReset}
                                            className="bg-primary text-white font-bold text-sm uppercase tracking-wider rounded-xl px-6 py-3 hover:bg-[#185899] transition-colors"
                                        >
                                            Submit Another Requirement
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5" noValidate>
                                        {/* Row 1: Requirement Type & Company Name */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                                            <Select
                                                label="Requirement Type"
                                                required
                                                name="requirementType"
                                                placeholder="Please select..."
                                                value={formData.requirementType}
                                                onChange={handleChange}
                                                options={REQUIREMENT_OPTIONS}
                                                error={errors.requirementType}
                                            />
                                            <Input
                                                label="Company Name"
                                                required
                                                name="companyName"
                                                placeholder="Please enter..."
                                                value={formData.companyName}
                                                onChange={handleChange}
                                                error={errors.companyName}
                                            />
                                        </div>

                                        {/* Row 2: Full Name & Contact Number */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                                            <Input
                                                label="Full Name"
                                                required
                                                name="fullName"
                                                placeholder="Please enter..."
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                error={errors.fullName}
                                            />
                                            <Input
                                                label="Contact Number"
                                                required
                                                name="contactNumber"
                                                type="tel"
                                                placeholder="Please enter..."
                                                value={formData.contactNumber}
                                                onChange={handleChange}
                                                error={errors.contactNumber}
                                            />
                                        </div>

                                        {/* Row 3: Email Address */}
                                        <div>
                                            <Input
                                                label="Email Address"
                                                required
                                                name="emailAddress"
                                                type="email"
                                                placeholder="Please enter..."
                                                value={formData.emailAddress}
                                                onChange={handleChange}
                                                error={errors.emailAddress}
                                            />
                                        </div>

                                        {/* Row 4: Brief Requirement / Message */}
                                        <div>
                                            <Textarea
                                                label="Brief Requirement / Message"
                                                name="message"
                                                placeholder="Describe it as much as you can"
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                error={errors.message}
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <div className="pt-2">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full bg-secondary text-white font-bold text-sm md:text-base uppercase tracking-wider rounded-xl py-3.5 px-6 hover:bg-[#e06912] active:scale-[0.99] transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                            >
                                                {isSubmitting ? 'Submitting...' : 'SUBMIT REQUIREMENT'}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>

                    </div>

                    {/* Once You Submit Section */}
                </div>
                <OnceYouSubmitSection />
            </div>
        </section>
    );
}