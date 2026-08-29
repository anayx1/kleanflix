import { Open_Sans, Anton } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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
  title: "Kleanflix",
  description: "Kleanflix Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} ${anton.variable} font-sans`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
