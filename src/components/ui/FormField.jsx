'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Reusable Text Input Component
 */
export function Input({
    label,
    required = false,
    error = '',
    className = '',
    id,
    ...props
}) {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
        <div className="w-full">
            {label && (
                <label htmlFor={inputId} className="block text-primary font-semibold text-sm md:text-base mb-1.5">
                    {label} {required && <span className="text-primary font-bold ml-0.5">*</span>}
                </label>
            )}
            <input
                id={inputId}
                className={`w-full bg-[#F8FAFC] border-0 border-b ${
                    error ? 'border-red-400 focus:border-red-500' : 'border-primary focus:border-primary'
                } rounded-xl px-4 py-3 text-slate-800 text-sm md:text-base font-medium placeholder:text-blue-300/70 focus:outline-none focus:bg-white transition-all duration-200 ${className}`}
                {...props}
            />
            {error && <p className="text-red-500 text-xs mt-1 font-medium">{error}</p>}
        </div>
    );
}

/**
 * Reusable Select Dropdown Component
 */
export function Select({
    label,
    required = false,
    error = '',
    options = [],
    placeholder = 'Please select...',
    className = '',
    id,
    ...props
}) {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
        <div className="w-full">
            {label && (
                <label htmlFor={selectId} className="block text-primary font-semibold text-sm md:text-base mb-1.5">
                    {label} {required && <span className="text-primary font-bold ml-0.5">*</span>}
                </label>
            )}
            <div className="relative">
                <select
                    id={selectId}
                    className={`w-full appearance-none bg-[#F8FAFC] border-0 border-b ${
                        error ? 'border-red-400 focus:border-red-500' : 'border-primary focus:border-primary'
                    } rounded-xl px-4 py-3 pr-10 text-slate-800 text-sm md:text-base font-medium focus:outline-none focus:bg-white transition-all duration-200 ${
                        !props.value ? 'text-blue-300/80' : 'text-slate-800'
                    } ${className}`}
                    {...props}
                >
                    <option value="" disabled hidden>
                        {placeholder}
                    </option>
                    {options.map((opt) => {
                        const isObj = typeof opt === 'object';
                        const val = isObj ? opt.value : opt;
                        const lbl = isObj ? opt.label : opt;
                        return (
                            <option key={val} value={val} className="text-slate-800">
                                {lbl}
                            </option>
                        );
                    })}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                    <ChevronDown className="w-4 h-4" />
                </div>
            </div>
            {error && <p className="text-red-500 text-xs mt-1 font-medium">{error}</p>}
        </div>
    );
}

/**
 * Reusable Textarea Component
 */
export function Textarea({
    label,
    required = false,
    error = '',
    className = '',
    rows = 4,
    id,
    ...props
}) {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
        <div className="w-full">
            {label && (
                <label htmlFor={textareaId} className="block text-primary font-semibold text-sm md:text-base mb-1.5">
                    {label} {required && <span className="text-primary font-bold ml-0.5">*</span>}
                </label>
            )}
            <textarea
                id={textareaId}
                rows={rows}
                className={`w-full bg-[#F8FAFC] border-0 border-b ${
                    error ? 'border-red-400 focus:border-red-500' : 'border-primary focus:border-primary'
                } rounded-xl px-4 py-3 text-slate-800 text-sm md:text-base font-medium placeholder:text-blue-300/70 focus:outline-none focus:bg-white transition-all duration-200 resize-y ${className}`}
                {...props}
            />
            {error && <p className="text-red-500 text-xs mt-1 font-medium">{error}</p>}
        </div>
    );
}
