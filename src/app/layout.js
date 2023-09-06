import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter, Rubik } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import JumpToTopButton from "@/components/JumpToTopButton";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Monumen PPKRI 1945",
  description:
    "Website resmi monumen Pahlawan Perang Kemerdekaan Republik Indonesia 1945",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <JumpToTopButton />
        <Header />
        <Navbar />
        <div className="mt-16 lg:mt-[120px] bg-[#222]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
