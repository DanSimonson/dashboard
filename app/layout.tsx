import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mariposaweb Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // w=[350px] w-full
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex">
          <div className="hidden md:block h-[100vh] min-w-64">
            <Sidebar />
          </div>
          <div className="p-5  md:max-w[1140px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
