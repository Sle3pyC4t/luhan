import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lu Han - Academic Profile",
  description: "Personal academic website of Lu Han, PhD student at Shanghai Jiao Tong University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <header className="bg-slate-800 text-white py-4">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
              <div>
                <Link href="/" className="text-xl font-bold">
                  Lu Han
                </Link>
                <p className="text-sm text-slate-300">PhD Student, Pharmacy</p>
              </div>
              <nav>
                <ul className="flex flex-wrap gap-6">
                  <li>
                    <Link href="/" className="hover:text-blue-300 transition">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/research" className="hover:text-blue-300 transition">
                      Research
                    </Link>
                  </li>
                  <li>
                    <Link href="/publications" className="hover:text-blue-300 transition">
                      Publications
                    </Link>
                  </li>
                  <li>
                    <Link href="/cv" className="hover:text-blue-300 transition">
                      CV
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-blue-300 transition">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-slate-800 text-white py-6 mt-auto">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <p>© {new Date().getFullYear()} Lu Han. All rights reserved.</p>
            <p className="text-sm text-slate-300 mt-1">
              Shanghai Jiao Tong University
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
