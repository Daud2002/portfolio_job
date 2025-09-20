import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Navbar } from "./_components/Navbar";
import { SiteFrame } from "./_components/SiteFrame";
import { MobileMenu } from "./_components/MobileMenu";
import { redirect } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daud Mir | Portfolio",
  description: "Personal portfolio with book-like page flips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-[var(--color-foreground)]`}
      >
        <div className="min-h-screen">
          {/* Desktop Sidebar - Fixed Position */}
          <aside className="hidden md:block fixed left-0 top-0 h-screen w-80 border-r border-gray-800 bg-gray/70 backdrop-blur-sm p-8 overflow-y-auto">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="relative w-28 h-28">
                <div className="ring-pulse anim-delay-0"></div>
                <div className="ring-pulse anim-delay-300"></div>
                <div className="ring-pulse anim-delay-600"></div>
                <div className="ring-pulse anim-delay-900"></div>
                <div className="absolute inset-0 rounded-full overflow-hidden ring-2 ring-[#0ff]/60">
                  <img src="/profile_img.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>

              <div>
                <h1 className="text-xl font-semibold tracking-tight">Daud Mir</h1>
                <p className="text-[#0ff] text-md uppercase tracking-wider mt-1">Software Engineer</p>
              </div>

              <p className="text-xs text-neutral-400">
                MERN Stack | React Native | Next.js | Nest.js | Node.js & TypeScript
              </p>

              <p className="text-sm text-neutral-300/90 leading-relaxed">
                Problem-solving focused engineer with 2+ years of experience, delivering clean, maintainable solutions on time and with clear communication you can trust.
              </p>

              <div className="pt-2">
                <a
                  href="https://www.upwork.com/freelancers/~011c6281fefdb34981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-md bg-[#0ff]/20 border-none text-[#0ff] border border-[#0ff] hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0ff]/60 flex items-center gap-1"
                >
                  <img src="/upwork.png" alt="Upwork" className="h-5 w-auto" />
                  <span>works with me</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="md:ml-80 min-h-screen flex flex-col">
            {/* Mobile Menu Component */}
            <MobileMenu />
            <SiteFrame />
          </div>
        </div>
      </body>
    </html>
  );
}