import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import "./globals.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Newsletter from "./component/Newsletter";

const inter = PT_Serif({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mahmun and Co",
  description: "M.A. Mahmud SAN & Co is a leading cross border law firm dedicated to providing tailored legal services, creating timely and efficient legal solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <div className="z-10">
       <Navbar />
       </div>
        <main>{children}</main>
       
        <Footer />
      </body>
    </html>
  );
}
