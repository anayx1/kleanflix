import AdminLoginForm from '@/components/admin/AdminLoginForm';
import { getAdminSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export const metadata = {
    title: 'Admin Login | Kleanfix',
    description: 'Administrator Access Portal for Kleanfix',
    robots: {
        index: false,
        follow: false,
    },
};

export default async function AdminLoginPage() {
    const session = await getAdminSession();

    // If already logged in, redirect directly to admin dashboard
    if (session) {
        redirect('/admin');
    }

    return <AdminLoginForm />;
}
