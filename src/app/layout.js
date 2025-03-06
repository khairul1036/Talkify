import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Talkify",
  description: "Generated by create EchoBot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <div className="flex-1 flex flex-col">
            {/* Navbar */}
            <Navbar />
            {/* Dynamic content from children */}
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
