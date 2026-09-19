import Link from 'next/link';
import { Package, FileText, Calendar, ExternalLink, User } from 'lucide-react';
import { getAdminSession } from '@/lib/auth';
import AdminLoginForm from '@/components/admin/AdminLoginForm';
import AdminLogoutButton from '@/components/admin/AdminLogoutButton';
import "../globals.css";

export const metadata = {
  title: 'Admin Dashboard | Kleanfix',
  description: 'Manage Products, Blogs, and Media Content for Kleanfix',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default async function AdminLayout({ children }) {
  const session = await getAdminSession();

  // If not authenticated, restrict access and show Login / Forgot Password UI
  if (!session) {
    return <AdminLoginForm />;
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Top Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="main-container px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/admin" className="flex items-center space-x-2.5">
              <div className="w-9 h-9 bg-[#1E6BB8] rounded-xl flex items-center justify-center text-white font-black text-xl shadow">
                K
              </div>
              <span className="font-bold text-lg text-slate-900 tracking-tight">
                kleanfix <span className="text-[#F47A1F] text-xs uppercase px-2 py-0.5 bg-orange-50 rounded-full font-semibold border border-orange-200 ml-1">Admin Panel</span>
              </span>
            </Link>

            {/* Navigation Tabs */}
            <nav className="hidden md:flex items-center space-x-1 pl-6 border-l border-slate-200">
              <Link
                href="/admin/products"
                className="flex items-center space-x-2 px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#1E6BB8] hover:bg-slate-100 transition"
              >
                <Package className="w-4 h-4 text-[#1E6BB8]" />
                <span>Products Catalog</span>
              </Link>
              <Link
                href="/admin/blogs"
                className="flex items-center space-x-2 px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#1E6BB8] hover:bg-slate-100 transition"
              >
                <FileText className="w-4 h-4 text-[#F47A1F]" />
                <span>Blogs & Articles</span>
              </Link>
              <Link
                href="/admin/events"
                className="flex items-center space-x-2 px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#1E6BB8] hover:bg-slate-100 transition"
              >
                <Calendar className="w-4 h-4 text-[#1E6BB8]" />
                <span>Events</span>
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-3">
            {/* Logged in User Badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600">
              <User className="w-3.5 h-3.5 text-[#1E6BB8]" />
              <span>{session.username || session.email}</span>
            </div>

            <Link
              href="/"
              target="_blank"
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-white transition flex items-center gap-1.5"
            >
              <span>View Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            {/* Logout Button */}
            <AdminLogoutButton />
          </div>
        </div>
      </header>

      {/* Sub Navigation Mobile Bar */}
      <div className="md:hidden bg-white border-b border-slate-200 px-4 py-2 flex items-center justify-around">
        <Link
          href="/admin/products"
          className="flex items-center space-x-1.5 text-xs font-semibold text-slate-700 py-1"
        >
          <Package className="w-4 h-4 text-[#1E6BB8]" />
          <span>Products</span>
        </Link>
        <Link
          href="/admin/blogs"
          className="flex items-center space-x-1.5 text-xs font-semibold text-slate-700 py-1"
        >
          <FileText className="w-4 h-4 text-[#F47A1F]" />
          <span>Blogs</span>
        </Link>
        <Link
          href="/admin/events"
          className="flex items-center space-x-1.5 text-xs font-semibold text-slate-700 py-1"
        >
          <Calendar className="w-4 h-4 text-[#1E6BB8]" />
          <span>Events</span>
        </Link>
      </div>

      {/* Main Content Area */}
      <main className="main-container px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
