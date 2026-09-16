import { Open_Sans, Anton } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

export const metadata = {
  title: "kleanfix",
  description: "kleanfix Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} ${anton.variable} font-sans`}>
      <body className="min-h-screen bg-background text-foreground antialiased flex flex-col justify-between">
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
