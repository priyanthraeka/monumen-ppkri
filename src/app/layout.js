import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Monumen PPKRI 1945",
  description:
    "Website resmi monumen Pahlawan Perang Kemerdekaan Republik Indonesia 1945",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Navbar />
        <div className="pt-16 lg:pt-[120px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
