import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Aurora from "@/blocks/Backgrounds/Aurora/Aurora";
import MyModel from "../components/MyModel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kumar Abi",
  description: "Portfolio site of Kumar Abi, a web developer showcasing projects, skills, and experience in modern web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body       
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white`}
      >
        <div style={{ position: 'fixed', inset: 0, zIndex: -10 }}>
          <Aurora colorStops={["#00b8db", "#ffffff", "#00b8db"]} />
        </div>
        <div style={{ position: 'fixed', inset: 0, zIndex: -9 }}>
          <MyModel />
        </div>
        <main>
          <Navbar />
            {children}
            <Footer/>
          </main>
      </body>
    </html>
  );
}