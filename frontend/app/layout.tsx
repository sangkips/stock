import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Navbar, Footer } from "@/components/common";
import Provider from "@/app/redux/provider";
import { Setup } from "@/components/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vic-Invest",
  description: "Inventory Management System for Vic-Invest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Setup />
          <Navbar /> 
          <nav>{children}</nav>
          <Footer />
        </Provider>
        
      </body>
    </html>
  );
}
