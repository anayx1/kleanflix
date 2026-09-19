'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

export default function AdminLogoutButton() {
    const router = useRouter();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const handleLogout = async () => {
        setIsLoggingOut(true);
        try {
            await fetch('/api/admin/auth/logout', { method: 'POST' });
            router.push('/admin/login');
            router.refresh();
        } catch (error) {
            console.error('Logout error:', error);
            window.location.href = '/admin/login';
        } finally {
            setIsLoggingOut(false);
        }
    };

    return (
        <button
            type="button"
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="text-xs font-semibold text-red-600 hover:text-white bg-red-50 hover:bg-red-600 px-3 py-1.5 rounded-lg border border-red-200 transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            title="Sign out of Admin Panel"
        >
            <LogOut className="w-3.5 h-3.5" />
            <span>{isLoggingOut ? 'Signing out...' : 'Sign Out'}</span>
        </button>
    );
}
