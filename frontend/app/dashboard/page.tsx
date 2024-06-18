// export default function Page() {
//     return (
//         <main>
//             <h1>Dashboard</h1>
//         </main>
//     )
// }


import { Inter } from "next/font/google";
import "@/styles/globals.css";
// import { Navbar, Footer } from "@/components/common";
import SideNav from "./side-nav";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideNav />
      </body>
    </html>
  );
}
