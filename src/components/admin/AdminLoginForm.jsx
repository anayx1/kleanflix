'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, User, KeyRound, ArrowLeft, CheckCircle2, AlertCircle, Eye, EyeOff } from 'lucide-react';

export default function AdminLoginForm() {
    const router = useRouter();

    // Mode: 'login' | 'forgot' | 'reset'
    const [mode, setMode] = useState('login');

    // Login Form State
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Forgot Password & Reset State
    const [email, setEmail] = useState('');
    const [otpCode, setOtpCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);

    // UI Feedback State
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const clearMessages = () => {
        setErrorMsg('');
        setSuccessMsg('');
    };

    // 1. Handle Login
    const handleLogin = async (e) => {
        e.preventDefault();
        clearMessages();

        if (!username.trim() || !password) {
            setErrorMsg('Please enter both username and password.');
            return;
        }

        setIsLoading(true);
        try {
            const res = await fetch('/api/admin/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: username.trim(), password }),
            });

            const data = await res.json();
            if (!res.ok || !data.success) {
                throw new Error(data.error || 'Login failed. Please check credentials.');
            }

            // Redirect to admin panel or refresh layout
            router.push('/admin');
            router.refresh();
        } catch (err) {
            setErrorMsg(err.message || 'Login failed');
        } finally {
            setIsLoading(false);
        }
    };

    // 2. Handle Request OTP
    const handleRequestOtp = async (e) => {
        e.preventDefault();
        clearMessages();

        if (!email.trim()) {
            setErrorMsg('Please enter administrator email address.');
            return;
        }

        setIsLoading(true);
        try {
            const res = await fetch('/api/admin/auth/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email.trim() }),
            });

            const data = await res.json();
            if (!res.ok || !data.success) {
                throw new Error(data.error || 'Failed to send OTP code.');
            }

            setSuccessMsg(data.message || 'OTP verification code sent to your email.');
            setMode('reset');
        } catch (err) {
            setErrorMsg(err.message || 'Failed to send verification code.');
        } finally {
            setIsLoading(false);
        }
    };

    // 3. Handle Reset Password with OTP
    const handleResetPassword = async (e) => {
        e.preventDefault();
        clearMessages();

        if (!otpCode.trim()) {
            setErrorMsg('Please enter the 6-digit verification code.');
            return;
        }

        if (newPassword.length < 6) {
            setErrorMsg('New password must be at least 6 characters long.');
            return;
        }

        if (newPassword !== confirmPassword) {
            setErrorMsg('Passwords do not match.');
            return;
        }

        setIsLoading(true);
        try {
            const res = await fetch('/api/admin/auth/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email.trim(),
                    otpCode: otpCode.trim(),
                    newPassword,
                }),
            });

            const data = await res.json();
            if (!res.ok || !data.success) {
                throw new Error(data.error || 'Failed to reset password.');
            }

            setSuccessMsg('Password updated successfully! Please log in with your new password.');
            setOtpCode('');
            setNewPassword('');
            setConfirmPassword('');
            setPassword('');
            setMode('login');
        } catch (err) {
            setErrorMsg(err.message || 'Password reset failed.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F4F6F8] px-4 py-12">
            <div className="w-full max-w-md bg-white rounded-2xl md:rounded-3xl shadow-xl border border-slate-100 overflow-hidden">

                {/* Header Gradient Top Bar */}
                <div className="h-2.5 bg-gradient-to-r from-[#1E6BB8] via-[#0E4A8A] to-[#F47A1F]" />

                <div className="p-8 sm:p-10">
                    {/* Logo & Title */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 text-primary rounded-2xl mb-3 shadow-inner">
                            <Lock className="w-7 h-7 text-[#1E6BB8]" />
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 uppercase">
                            <span className="text-[#1E6BB8]">KLEAN</span>
                            <span className="text-[#F47A1F]">FIX</span>
                        </h1>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">
                            Administrator Control Panel
                        </p>
                    </div>

                    {/* Notification Alerts */}
                    {errorMsg && (
                        <div className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs md:text-sm font-medium flex items-start gap-2.5">
                            <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                            <span className="leading-snug">{errorMsg}</span>
                        </div>
                    )}

                    {successMsg && (
                        <div className="mb-6 p-3.5 rounded-xl bg-green-50 border border-green-200 text-green-700 text-xs md:text-sm font-medium flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                            <span className="leading-snug">{successMsg}</span>
                        </div>
                    )}

                    {/* ================= MODE 1: LOGIN ================= */}
                    {mode === 'login' && (
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                                    Username or Email
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                        <User className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder=""
                                        required
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#1E6BB8]/30 focus:border-[#1E6BB8] transition"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-1.5">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                                        Password
                                    </label>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            clearMessages();
                                            setMode('forgot');
                                        }}
                                        className="text-xs font-semibold text-[#1E6BB8] hover:text-[#0E4A8A] hover:underline"
                                    >
                                        Forgot Password?
                                    </button>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                        <KeyRound className="w-4 h-4" />
                                    </div>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        // placeholder="••••••••••••"
                                        required
                                        className="w-full pl-10 pr-11 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#1E6BB8]/30 focus:border-[#1E6BB8] transition"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full mt-2 bg-[#1E6BB8] hover:bg-[#185899] active:scale-[0.99] text-white font-bold py-3.5 px-4 rounded-xl text-sm uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                            >
                                {isLoading ? 'Authenticating...' : 'Sign In to Dashboard'}
                            </button>
                        </form>
                    )}

                    {/* ================= MODE 2: FORGOT PASSWORD (REQUEST OTP) ================= */}
                    {mode === 'forgot' && (
                        <form onSubmit={handleRequestOtp} className="space-y-4">
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Enter your administrator email address below. We will send a 6-digit verification code to reset your password.
                            </p>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                                    Admin Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#1E6BB8]/30 focus:border-[#1E6BB8] transition"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#F47A1F] hover:bg-[#e06912] active:scale-[0.99] text-white font-bold py-3.5 px-4 rounded-xl text-sm uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
                            >
                                {isLoading ? 'Sending Code...' : 'Send Verification OTP'}
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    clearMessages();
                                    setMode('login');
                                }}
                                className="w-full flex items-center justify-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 pt-2"
                            >
                                <ArrowLeft className="w-3.5 h-3.5" />
                                <span>Back to Login</span>
                            </button>
                        </form>
                    )}

                    {/* ================= MODE 3: VERIFY OTP & SET NEW PASSWORD ================= */}
                    {mode === 'reset' && (
                        <form onSubmit={handleResetPassword} className="space-y-4">
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Enter the 6-digit OTP code sent to <strong>{email}</strong> and your new password.
                            </p>

                            {/* 6-Digit OTP Input */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                                    6-Digit Verification Code
                                </label>
                                <input
                                    type="text"
                                    maxLength={6}
                                    value={otpCode}
                                    onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
                                    placeholder="123456"
                                    required
                                    className="w-full text-center tracking-[8px] font-mono text-xl py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-[#1E6BB8] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#1E6BB8]/30 focus:border-[#1E6BB8] transition"
                                />
                            </div>

                            {/* New Password */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                                    New Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showNewPassword ? 'text' : 'password'}
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        placeholder="Minimum 6 characters"
                                        required
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#1E6BB8]/30 focus:border-[#1E6BB8] transition"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
                                    >
                                        {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                                    Confirm New Password
                                </label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm new password"
                                    required
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#1E6BB8]/30 focus:border-[#1E6BB8] transition"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#1E6BB8] hover:bg-[#185899] active:scale-[0.99] text-white font-bold py-3.5 px-4 rounded-xl text-sm uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
                            >
                                {isLoading ? 'Updating Password...' : 'Reset & Save Password'}
                            </button>

                            <div className="flex items-center justify-between pt-2">
                                <button
                                    type="button"
                                    onClick={handleRequestOtp}
                                    disabled={isLoading}
                                    className="text-xs font-semibold text-[#F47A1F] hover:underline"
                                >
                                    Resend Code
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        clearMessages();
                                        setMode('login');
                                    }}
                                    className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-slate-800"
                                >
                                    <ArrowLeft className="w-3.5 h-3.5" />
                                    <span>Back to Login</span>
                                </button>
                            </div>
                        </form>
                    )}

                </div>
            </div>
        </div>
    );
}
